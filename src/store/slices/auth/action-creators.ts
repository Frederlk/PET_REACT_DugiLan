import { authActions } from "./auth.slice";
import { AppDispatch } from "./../../store";
import { IUser } from "./../../../models/index";
import UserService from "../../../api/UserService";

export const AuthActionCreators = {
    login: (userData: IUser) => async (dispatch: AppDispatch) => {
        const { username, email, password } = userData;

        try {
            dispatch(authActions.setIsLoading(true));
            setTimeout(async () => {
                const response = await UserService.getUsers();
                const mockUser = response.data.find(
                    (user) =>
                        (user.username === username || user.email === email) && user.password === password
                );
                if (mockUser) {
                    localStorage.setItem("auth", "true");
                    localStorage.setItem("username", mockUser.username);
                    dispatch(authActions.setUser(mockUser));
                    dispatch(authActions.setIsAuth(true));
                } else {
                    dispatch(authActions.setError("Wrong Username/Email or Password"));
                }
                dispatch(authActions.setIsLoading(false));
            }, 1000);
        } catch (e) {
            dispatch(authActions.setError("Something went wrong"));
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem("auth");
        localStorage.removeItem("username");
        dispatch(authActions.setUser({} as IUser));
        dispatch(authActions.setIsAuth(false));
    },
};

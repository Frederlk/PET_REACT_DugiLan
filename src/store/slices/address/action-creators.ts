import axios from "axios";
import { IUserAddress } from "./../../../models/index";
import { AppDispatch } from "../../store";
import { addressActions } from "./address.slice";

export const AddressActionCreators = {
    // fetchAddress: (username: string) => async (dispatch: AppDispatch) => {
    //     try {
    //         const response = await UserService.getUsers();
    //         const mockUser = response.data.find((user) => user.username === username);
    //         const address = mockUser?.address;
    //         dispatch(addressActions.setAddress(address || ({} as IUserAddress)));
    //     } catch (e) {
    //         console.log(e);
    //     }
    // },
    changeAddress: (address: IUserAddress) => async (dispatch: AppDispatch) => {
        try {
            await axios.patch("./users.json", { address });
            dispatch(addressActions.setAddress(address));
        } catch (e) {
            console.log(e);
        }
    },
};

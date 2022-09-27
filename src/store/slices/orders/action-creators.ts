import { ordersActions } from "./orders.slice";
import { IOrder } from "../../../models";
import { AppDispatch } from "../../store";
import UserService from "../../../api/UserService";

export const OrdersActionCreators = {
    // createOrder: (order: IOrder, username: string) => async (dispatch: AppDispatch) => {
    //     try {
    //         const response = await UserService.getUsers();
    //         const mockUser = response.data.find((user) => user.username === username);

    //         const orders = mockUser?.orders;
    //         const json = JSON.parse(events) as IOrder[];
    //         json.push(order);
    //         dispatch(ordersActions.setOrders(json.filter((order) => order.author === username)));
    //         localStorage.setItem("orders", JSON.stringify(json));
    //     } catch (e) {
    //         console.log(e);
    //     }
    // },
    fetchOrders: (username: string) => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.getUsers();
            const mockUser = response.data.find((user) => user.username === username);
            const orders = mockUser?.orders;
            dispatch(ordersActions.setOrders(orders || []));
        } catch (e) {
            console.log(e);
        }
    },
};

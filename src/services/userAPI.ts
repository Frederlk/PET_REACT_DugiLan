import { IUser } from "./../models/index";
import { db } from "../firebaseConfig";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { addDoc, collection, doc, getDoc, getDocs, serverTimestamp, setDoc } from "firebase/firestore";

export const userAPI = createApi({
    reducerPath: "userAPI",
    baseQuery: fakeBaseQuery(),
    endpoints: (build) => ({
        getUser: build.query({
            async queryFn(login) {
                try {
                    const userRef = collection(db, "users");
                    const users: IUser[] = [];
                    const querySnapshot = await getDocs(userRef);
                    querySnapshot?.forEach((doc) => {
                        users.push({
                            ...(doc.data() as IUser),
                            id: doc.id,
                        });
                    });
                    const user =
                        users.find((item) => login === item.username || login === item.email) ||
                        ({} as IUser);
                    return { data: user };
                } catch (e) {
                    return { error: e };
                }
            },
        }),

        changeAddress: build.mutation({
            async queryFn({ id, data }) {
                try {
                    console.log(id, data);
                    await setDoc(doc(db, "users", id), {
                        ...data,
                    });
                    return { data: "ok" };
                } catch (e) {
                    return { error: e };
                }
            },
        }),

        //========================================================================================================================================================
        // addOrder: build.query({
        //     async queryFn(data) {
        //         try {
        //             await addDoc(collection(db, "users"), {
        //                 ...data,
        //                 timestamp: serverTimestamp(),
        //             });
        //             return { data: "ok" };
        //         } catch (e) {
        //             return { error: e };
        //         }
        //     },
        // }),

        // ! ACCOUNT ========================================================================================================================================================
        // * todo: fetchUser
        // todo: createOrder
        // todo: changeAddresInfo
        // todo: changeAccountInfo

        // ! FAVOURITES ========================================================================================================================================================
        // todo: addToFavourites
        // todo: removeFromFavourites

        // ! CART ========================================================================================================================================================
        // todo: addProductToCart
        // todo: removeProductFromCart
        // todo: changeProductInCart
    }),
});

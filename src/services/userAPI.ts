import { IUser } from "./../models/index";
import { db } from "../firebaseConfig";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

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
                        users.find(
                            (item) =>
                                login === item.username.toLowerCase() || login === item.email.toLowerCase()
                        ) || ({} as IUser);
                    return { data: user };
                } catch (e) {
                    return { error: e };
                }
            },
        }),
        getUserById: build.query({
            async queryFn(id: string) {
                try {
                    const docRef = doc(db, "users", id);
                    const docSnap = await getDoc(docRef);
                    return { data: docSnap.data() };
                } catch (e) {
                    return { error: e };
                }
            },
        }),
        changeInfo: build.mutation({
            async queryFn({ id, data }) {
                try {
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
    }),
});

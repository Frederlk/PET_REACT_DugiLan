import { db } from "../firebaseConfig";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { doc, getDoc } from "firebase/firestore";

export const couponAPI = createApi({
    reducerPath: "couponAPI",
    baseQuery: fakeBaseQuery(),
    endpoints: (build) => ({
        getCoupon: build.query({
            async queryFn(coupon: string) {
                try {
                    const docRef = doc(db, "coupons", coupon);
                    const docSnap = await getDoc(docRef);
                    return { data: docSnap.data() };
                } catch (e) {
                    return { error: e };
                }
            },
        }),
    }),
});

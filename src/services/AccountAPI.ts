import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from "../models";

export const accountAPI = createApi({
    reducerPath: "accountAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["Account"],
    endpoints: (build) => ({
        getUser: build.query<IUser[], string>({
            query: (login) => ({
                url: `/users?${login.includes("@") ? "email" : "username"}=${login}`,
            }),
        }),

        // ! ACCOUNT ========================================================================================================================================================
        // * todo: fetchAllUsers
        // todo: changeAddresInfo
        // todo: changeAccountInfo
        // todo: fetchAllOrders
        // todo: createOrder

        // ! FAVOURITES ========================================================================================================================================================
        // todo: fetchAllFavourites
        // todo: addToFavourites
        // todo: removeFromFavourites

        // ! CART ========================================================================================================================================================
        // todo: fetchAllProductsInCart
        // todo: addProductToCart
        // todo: removeProductFromCart
        // todo: changeProductInCart

        // fetchAllPosts: build.query<IPost[], number>({
        //     query: () => ({
        //         url: `/posts`,
        //     }),
        //     providesTags: (result) => ["Account"],
        // }),
        // createPost: build.mutation<IPost, IPost>({
        //     query: (post) => ({
        //         url: `/posts`,
        //         method: "POST",
        //         body: post,
        //     }),
        //     invalidatesTags: ["Account"],
        // }),
        // updatePost: build.mutation<IPost, IPost>({
        //     query: (post) => ({
        //         url: `/posts/${post.id}`,
        //         method: "PUT",
        //         body: post,
        //     }),
        //     invalidatesTags: ["Account"],
        // }),
        // deletePost: build.mutation<IPost, IPost>({
        //     query: (post) => ({
        //         url: `/posts/${post.id}`,
        //         method: "DELETE",
        //     }),
        //     invalidatesTags: ["Account"],
        // }),
    }),
});

export const { useGetUserQuery } = accountAPI;

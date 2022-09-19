import { lazy } from "react";

export interface CustomRouteObject {
    caseSensitive?: boolean;
    children?: CustomRouteObject[];
    element?: React.ReactNode;
    index?: boolean;
    path?: string;
    title?: string;
}

const Page404 = lazy(() => import("../_pages/Page404")),
    HomePage = lazy(() => import("../_pages/HomePage"));

export enum RouteNames {
    HOME = "/",
    PAGE404 = "*",
}

export const routesConfig: CustomRouteObject[] = [
    {
        path: RouteNames.PAGE404,
        element: <Page404 />,
    },
    {
        title: "Home",
        path: RouteNames.HOME,
        element: <HomePage />,
    },
];

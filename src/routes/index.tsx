import { lazy } from "react";

export interface CustomRouteObject {
    caseSensitive?: boolean;
    children?: CustomRouteObject[];
    element?: React.ReactNode;
    index?: boolean;
    path?: string;
    title?: string;
    type?: string;
    nested?: CustomRouteObject[];
}

const Page404 = lazy(() => import("../_pages/Page404")),
    HomePage = lazy(() => import("../_pages/HomePage"));

export enum RouteNames {
    HOME = "/",
    PAGE404 = "*",
    BROWSE = "/browse",
    EXCLUSIVE = "/exclusive",
    DOCS = "/docs",
    ACCOUNT = "/account",
    CARD = "/card",
    // Envato market ========================================================================================================================================================
    TERMS = "/terms",
    LICENSES = "/lisenses",
    MARKET = "/market",
    AFFILIATE = "/affiliate",
    // Help ========================================================================================================================================================
    THEMES = "/themes",
    AUTHORS = "/authors",
    HELP = "/help",
    // community ========================================================================================================================================================
    COMMUNITY = "/community",
    BLOG = "/blog",
    FORUMS = "/forums",
    MEETUPS = "/meetups",
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
    {
        title: "Browse",
        path: RouteNames.BROWSE,
        element: <HomePage />,
        type: "main",
        nested: [
            {
                title: "Product #1",
                path: "/product#1",
                element: <HomePage />,
                type: "product",
            },
            {
                title: "Product #2",
                path: "product#2",
                element: <HomePage />,
                type: "product",
            },
        ],
    },
    {
        title: "All-Exclusive",
        path: RouteNames.EXCLUSIVE,
        element: <HomePage />,
        type: "main",
    },
    {
        title: "Docs",
        path: RouteNames.DOCS,
        element: <HomePage />,
        type: "main",
    },
    {
        title: "Account",
        path: RouteNames.ACCOUNT,
        element: <HomePage />,
    },
    // Envato Market ========================================================================================================================================================
    {
        title: "Terms",
        path: RouteNames.TERMS,
        element: <Page404 />,
        type: "envato",
    },
    {
        title: "Licenses",
        path: RouteNames.LICENSES,
        element: <Page404 />,
        type: "envato",
    },
    {
        title: "Market API",
        path: RouteNames.MARKET,
        element: <Page404 />,
        type: "envato",
    },
    {
        title: "Become an affiliate",
        path: RouteNames.AFFILIATE,
        element: <Page404 />,
        type: "envato",
    },
    // Help ========================================================================================================================================================
    {
        title: "Themes and Templates",
        path: RouteNames.THEMES,
        element: <Page404 />,
        type: "help",
    },
    {
        title: "Authors",
        path: RouteNames.AUTHORS,
        element: <Page404 />,
        type: "help",
    },
    {
        title: "Help Center",
        path: RouteNames.HELP,
        element: <Page404 />,
        type: "help",
    },
    // Community ========================================================================================================================================================
    {
        title: "Community",
        path: RouteNames.COMMUNITY,
        element: <Page404 />,
        type: "community",
    },
    {
        title: "Blog",
        path: RouteNames.BLOG,
        element: <Page404 />,
        type: "community",
    },
    {
        title: "Forums",
        path: RouteNames.FORUMS,
        element: <Page404 />,
        type: "community",
    },
    {
        title: "Meetups",
        path: RouteNames.MEETUPS,
        element: <Page404 />,
        type: "community",
    },
];

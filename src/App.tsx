import { FC, Suspense, useEffect } from "react";

import { AppRouter, Spinner } from "./_components";
import { useActions, useEventListener } from "./hooks";
import { Footer, Header } from "./_containers";
import { LSKeys } from "./store/slices/product/product.slice";
import { userAPI } from "./services/userAPI";
import { IUser } from "./models";

const App: FC = () => {
    useEventListener("scroll", function () {
        const doc = document.documentElement;
        const scrollTop = window.scrollY;
        if (scrollTop >= 1) {
            !doc.classList.contains("_scroll") ? doc.classList.add("_scroll") : null;
        } else {
            doc.classList.contains("_scroll") ? doc.classList.remove("_scroll") : null;
        }
    });

    const [getUserById, { data }] = userAPI.useLazyGetUserByIdQuery();

    const { setUser, setIsAuth, setCoupon } = useActions();

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            const localUser = JSON.parse(localStorage.getItem("user") || "");
            getUserById(localUser?.id);
            setUser(localUser);
            setIsAuth(true);
        }
        if (localStorage.getItem(LSKeys.LS_COUPON_KEY)) {
            setCoupon(JSON.parse(localStorage.getItem(LSKeys.LS_COUPON_KEY) || ""));
        }
    }, []);

    useEffect(() => {
        if (data) {
            setUser(data as IUser);
            localStorage.setItem("user", JSON.stringify(data));
        }
    }, [data]);

    return (
        <>
            <Header />
            <main className="page">
                <Suspense fallback={<Spinner />}>
                    <AppRouter />
                </Suspense>
            </main>
            <Footer />
        </>
    );
};

export default App;

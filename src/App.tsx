import { FC, Suspense, useEffect } from "react";

import { AppRouter, Spinner } from "./_components";
import { useActions, useEventListener } from "./hooks";
import { Footer, Header } from "./_containers";
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

    const { setUser, setIsAuth } = useActions();

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setUser({ username: localStorage.getItem("username" || "") } as IUser);
            setIsAuth(true);
        }
    }, []);

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

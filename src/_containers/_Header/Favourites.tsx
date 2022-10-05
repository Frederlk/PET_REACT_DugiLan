import { FC, useEffect, useRef, useState, memo } from "react";
import { useLocation } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

import { images } from "../../constants";
import { useClickOutside } from "../../hooks";
import { useAppSelector } from "../../hooks/useRedux";
import FavouritesItem from "./FavouritesItem";

const { icon_heart_1 } = images.icons;

const Favourites: FC = () => {
    const ref = useRef(null);
    const [favouritesOpen, setFavouritesOpen] = useState(false);
    const { favourites } = useAppSelector((state) => state.product);
    const { pathname } = useLocation();

    useClickOutside(ref, () => setFavouritesOpen(false));

    useEffect(() => {
        favourites.length === 0 && setFavouritesOpen(false);
    }, [favourites]);

    useEffect(() => {
        setFavouritesOpen(false);
    }, [pathname]);

    const handlers = useSwipeable({
        onSwipedRight: () => setFavouritesOpen(!favouritesOpen),
    });

    return (
        <div className="actions-header__favoutites favourites-header" ref={ref}>
            <button
                type="button"
                onClick={() => setFavouritesOpen(!favouritesOpen)}
                className="favourites-header__icon"
            >
                <img src={icon_heart_1} alt="Favourites" />
                {favourites.length > 0 && <span>{favourites.length}</span>}
            </button>
            <div
                {...handlers}
                className={`favourites-header__body ${favouritesOpen && favourites.length ? "_active" : ""}`}
            >
                <ul className="favourites-header__list">
                    {favourites.map((id) => (
                        <FavouritesItem key={id} id={id} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default memo(Favourites);

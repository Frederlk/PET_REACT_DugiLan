import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { images } from "../../constants";
import { useAppSelector } from "../../hooks/useRedux";
import FavouritesItem from "./FavouritesItem";

const { icon_heart_1 } = images.icons;

const Favourites: FC = () => {
    const [favouritesOpen, setFavouritesOpen] = useState(false);
    const { favourites } = useAppSelector((state) => state.product);
    const { pathname } = useLocation();

    useEffect(() => {
        favourites.length === 0 && setFavouritesOpen(false);
    }, [favourites]);

    useEffect(() => {
        setFavouritesOpen(false);
    }, [pathname]);

    return (
        <div className="actions-header__favoutites favourites-header">
            <button
                type="button"
                onClick={() => setFavouritesOpen(!favouritesOpen)}
                className="favourites-header__icon"
            >
                <img src={icon_heart_1} alt="Favourites" />
                {favourites.length > 0 && <span>{favourites.length}</span>}
            </button>
            <div
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

export default Favourites;

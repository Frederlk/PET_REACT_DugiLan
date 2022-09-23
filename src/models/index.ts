export interface ISocialItem {
    link: string;
    img: string;
    alt: string;
}

export interface IImageItem {
    img: string;
    webp?: string;
    alt: string;
}

export interface ICategory {
    title: string;
    link: string;
    icon: string;
}

export interface IExtraProduct {
    text: string;
    price: number;
}

export interface IProduct {
    id: string;
    title: string;
    thumbImg: string;
    thumbWebp: string;
    stack: string[];
    inFavourites: number;
    price: number;
    // PRODUCT PAGE ========= //
    included?: string[];
    subtitle?: string;
    content?: string;
    logo?: string;
    discount?: number;
    images?: IImageItem[];
    video?: string;
    extra?: IExtraProduct[];
    lastUpdate: Date;
    created: Date;
    browsers: string[];
    category: string;
    version: string;
}

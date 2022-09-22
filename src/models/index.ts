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

export interface IProduct {
    id: string;
    title: string;
    thumbImg: string;
    thumbWebp: string;
    stack: string[];
    inFavourites: number;
    priceTotal: number;
    // PRODUCT PAGE ========= //
    subtitle?: string;
    content?: string;
    logo?: string;
    discount?: number;
    images?: IImageItem[];
    video?: string;
    priceTax: number;
    lastUpdate: Date;
    created: Date;
    browsers: string[];
    category: string;
    version: string;
}

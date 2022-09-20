import { IImageItem, ISocialItem } from "./../models";
import images from "./images";
const { homeImages, companyImages, footerImages } = images;

const socialItems: ISocialItem[] = [
    {
        link: "https://www.facebook.com/petrinichshadow",
        img: footerImages.footerFB,
        alt: "Facebook",
    },
    {
        link: "https://github.com/Frederlk",
        img: footerImages.footerWWW,
        alt: "WWW",
    },
    {
        link: "https://www.linkedin.com/in/sergey-petrinich-191454233/",
        img: footerImages.footerLINKED,
        alt: "LinkedIn",
    },
    {
        link: "https://www.instagram.com/_frederlk_/",
        img: footerImages.footerINST,
        alt: "Instagram",
    },
    {
        link: "https://vk.com/frederlk",
        img: footerImages.footerTWITTER,
        alt: "Twitter",
    },
];

const homeSliderItems: IImageItem[] = [
    {
        img: homeImages.home01,
        webp: homeImages.home01_WEBP,
        alt: "Slide #1",
    },
    {
        img: homeImages.home02,
        webp: homeImages.home02_WEBP,
        alt: "Slide #2",
    },
    {
        img: homeImages.home03,
        webp: homeImages.home03_WEBP,
        alt: "Slide #3",
    },
];

const companiesItems: IImageItem[] = [
    {
        img: companyImages.companyAcer,
        alt: "Acer",
    },
    {
        img: companyImages.companyFacebook,
        alt: "Facebook",
    },
    {
        img: companyImages.companyLinkedIn,
        alt: "LinkedIn",
    },
    {
        img: companyImages.companyForbes,
        alt: "Forbes",
    },
    {
        img: companyImages.companyDell,
        alt: "Dell",
    },
];

export default { socialItems, homeSliderItems, companiesItems };

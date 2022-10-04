import { RouteNames } from "./../routes/index";
import { ICategory, IProduct } from "./../models/index";
import { IImageItem, ISocialItem } from "./../models";
import images from "./images";
const { homeImages, catalogImages, companyImages, footerImages, icons, paymentImages } = images;

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

const categoriesItems: ICategory[] = [
    {
        icon: icons.icon_home,
        link: RouteNames.HOME,
        title: "Home",
    },
    {
        icon: icons.icon_wordpress,
        link: RouteNames.WORDPRESS,
        title: "WordPress Themes",
    },
    {
        icon: icons.icon_shopCart_1,
        link: RouteNames.ECOMMERCE,
        title: "eCommerce Templates",
    },
    {
        icon: icons.icon_tv,
        link: RouteNames.MARKETING,
        title: "Marketing Templates",
    },
    {
        icon: icons.icon_dashboard,
        link: RouteNames.CMS,
        title: "CMS Templates",
    },
    {
        icon: icons.icon_monitor,
        link: RouteNames.SITE,
        title: "Site Templates",
    },
    {
        icon: icons.icon_edit,
        link: RouteNames.BLOGGING,
        title: "Blogging",
    },
];

const productItems: IProduct[] = [
    {
        id: "e4130915-6a35-49e0-abc8-0d07570dcc34",
        title: "RubICons",
        thumbImg: catalogImages.catalog01,
        thumbWebp: catalogImages.catalog01_WEBP,
        stack: ["PHP", "WORDPRESS"],
        inFavourites: 10,
        price: 29.99,
        // PRODUCT PAGE ========= //
        subtitle: "Upload a CSV File of people's names to guess their genders",
        content: `<p>Gender detection is a wordpress plugin designed and builded for detection of genders in large data files. 
            The plugin allows you to go beyond the usual text messages and contact forms and get closer to your users. 
            The plugin adds a voice recording button to any convenient place on the site. This can be useful for reviews, 
            order comments or any questions.</p>
            <p>Our WooCommerce cart PDF plugin helps you and your customers to export their current cart items as PDF. Customize the PDF with ease:</p>
            `,
        images: [
            {
                img: catalogImages.catalog01,
                webp: catalogImages.catalog01_WEBP,
                alt: "Image #1",
            },
            {
                img: catalogImages.catalog02,
                webp: catalogImages.catalog02_WEBP,
                alt: "Image #2",
            },
        ],
        lastUpdate: new Date(2020, 2, 13),
        created: new Date(2020, 0, 1),
        browsers: ["IE11", "Firefox", "Chrome", "Opera", "Edge", "Safari"],
        category: "WORDPRESS",
        version: "2.0.0",
        download: "/RubICons",
    },
    {
        id: "e4130915-6a35-49e0-abc8-0d07570dcc3",
        title: "DugiLan",
        thumbImg: catalogImages.catalog02,
        thumbWebp: catalogImages.catalog02_WEBP,
        stack: ["PHP", "VUE"],
        inFavourites: 0,
        price: 29.99,
        // PRODUCT PAGE ========= //
        logo: icons.icon_dugi,
        subtitle: "Upload a CSV File of people's names to guess their genders",
        content: `<p>Gender detection is a wordpress plugin designed and builded for detection of genders in large data files. 
            The plugin allows you to go beyond the usual text messages and contact forms and get closer to your users. 
            The plugin adds a voice recording button to any convenient place on the site. This can be useful for reviews, 
            order comments or any questions.</p>
            <p>Our WooCommerce cart PDF plugin helps you and your customers to export their current cart items as PDF. Customize the PDF with ease:</p>
            `,
        video: "KTmatjyd4KM",
        images: [
            {
                img: catalogImages.catalog03,
                webp: catalogImages.catalog03_WEBP,
                alt: "Image #1",
            },
            {
                img: catalogImages.catalog04,
                webp: catalogImages.catalog04_WEBP,
                alt: "Image #2",
            },
            {
                img: catalogImages.catalog05,
                webp: catalogImages.catalog05_WEBP,
                alt: "Image #3",
            },
            {
                img: catalogImages.catalog06,
                webp: catalogImages.catalog06_WEBP,
                alt: "Image #4",
            },
        ],
        included: [
            "Quality checked by Ceyond",
            "Included: Future updates",
            "Included: 1 months support from our team",
        ],
        extra: [
            {
                text: "Extend support to 12 months",
                price: 55.5,
            },
            {
                text: "Extend support to 1 months",
                price: 10.99,
            },
        ],
        discount: 3,
        lastUpdate: new Date(2020, 2, 13),
        created: new Date(2020, 0, 1),
        browsers: ["IE11", "Firefox", "Chrome", "Opera", "Edge", "Safari"],
        category: "Site",
        version: "2.0.0",
        download: "/DugiLan",
    },
    {
        id: "e4130915-6a35-49e0-abc8-0d07570dcc",
        title: "Abstract Theme",
        thumbImg: catalogImages.catalog03,
        thumbWebp: catalogImages.catalog03_WEBP,
        stack: ["WORDPRESS"],
        inFavourites: 130,
        price: 89.99,
        // PRODUCT PAGE ========= //
        subtitle: "Upload a CSV File of people's names to guess their genders",
        content: `<p>Gender detection is a wordpress plugin designed and builded for detection of genders in large data files. 
            The plugin allows you to go beyond the usual text messages and contact forms and get closer to your users. 
            The plugin adds a voice recording button to any convenient place on the site. This can be useful for reviews, 
            order comments or any questions.</p>
            `,
        discount: 3,
        lastUpdate: new Date(2020, 2, 13),
        created: new Date(2020, 0, 1),
        browsers: ["Firefox", "Chrome", "Opera", "Edge"],
        category: "Site",
        version: "2.0.0",
        download: "/donwload_link",
    },
    {
        id: "e4130915-6a35-49e0-abc8-0d07570dc",
        title: "DugiCon",
        thumbImg: catalogImages.catalog04,
        thumbWebp: catalogImages.catalog04_WEBP,
        stack: ["VUE", "WORDPRESS"],
        inFavourites: 18,
        price: 49.99,
        // PRODUCT PAGE ========= //
        subtitle: "Upload a CSV File of people's names to guess their genders",
        content: `<p>Our WooCommerce cart PDF plugin helps you and your customers to export their current cart items as PDF. Customize the PDF with ease:</p>`,
        video: "https://www.youtube.com/watch?v=cgUSeWcUiFY&ab_channel=C.DragonMusic",
        lastUpdate: new Date(2021, 3, 11),
        created: new Date(2019, 12, 4),
        browsers: ["IE11", "Firefox", "Chrome", "Opera", "Edge", "Safari"],
        category: "Blogging",
        version: "2.1.1",
        download: "/donwload_link",
    },
    {
        id: "e4130915-6a35-49e0-abc8-0d07570d",
        title: "DugiApp",
        thumbImg: catalogImages.catalog05,
        thumbWebp: catalogImages.catalog05_WEBP,
        stack: ["REACT", "PHP"],
        inFavourites: 130,
        price: 89.99,
        // PRODUCT PAGE ========= //
        subtitle: "Upload a CSV File of people's names to guess their genders",
        content: `<p>Gender detection is a wordpress plugin designed and builded for detection of genders in large data files. 
            The plugin allows you to go beyond the usual text messages and contact forms and get closer to your users. 
            The plugin adds a voice recording button to any convenient place on the site. This can be useful for reviews, 
            order comments or any questions.</p>
            <p>Our WooCommerce cart PDF plugin helps you and your customers to export their current cart items as PDF. Customize the PDF with ease:</p>
            `,
        images: [
            {
                img: catalogImages.catalog05,
                webp: catalogImages.catalog05_WEBP,
                alt: "Image #1",
            },
            {
                img: catalogImages.catalog06,
                webp: catalogImages.catalog06_WEBP,
                alt: "Image #2",
            },
        ],
        discount: 10,
        lastUpdate: new Date(2022, 4, 15),
        created: new Date(2022, 0, 1),
        browsers: ["IE11", "Firefox", "Chrome", "Opera", "Edge", "Safari"],
        category: "Data",
        version: "1.2.4",
        download: "/donwload_link",
    },
    {
        id: "e4130915-6a35-49e0-abc8-0d07570",
        title: "DugiOS",
        thumbImg: catalogImages.catalog06,
        thumbWebp: catalogImages.catalog06_WEBP,
        stack: ["PHP", "WORDPRESS"],
        inFavourites: 1,
        price: 149.99,
        // PRODUCT PAGE ========= //
        subtitle: "Upload a CSV File of people's names to guess their genders",
        content: `<p>Gender detection is a wordpress plugin designed and builded for detection of genders in large data files. 
            The plugin allows you to go beyond the usual text messages and contact forms and get closer to your users. 
            The plugin adds a voice recording button to any convenient place on the site. This can be useful for reviews, 
            order comments or any questions.</p>
            <p>Our WooCommerce cart PDF plugin helps you and your customers to export their current cart items as PDF. Customize the PDF with ease:</p>
            `,
        lastUpdate: new Date(2022, 1, 6),
        created: new Date(2020, 0, 1),
        browsers: ["IE11", "Firefox", "Chrome", "Opera", "Edge", "Safari"],
        category: "Data",
        version: "1.0.0",
        download: "/donwload_link",
    },
    {
        id: "e4130915-6a35-49e0-abc8-0d0757",
        title: "DugiUI",
        thumbImg: catalogImages.catalog07,
        thumbWebp: catalogImages.catalog07_WEBP,
        stack: ["Figma", "WORDPRESS"],
        inFavourites: 59,
        price: 19.99,
        // PRODUCT PAGE ========= //
        subtitle: "Upload a CSV File of people's names",
        content: `<p>Gender detection is a wordpress plugin designed and builded for detection of genders in large data files. 
            The plugin allows you to go beyond the usual text messages and contact forms and get closer to your users. 
            The plugin adds a voice recording button to any convenient place on the site. This can be useful for reviews, 
            order comments or any questions.</p>`,
        images: [
            {
                img: catalogImages.catalog07,
                webp: catalogImages.catalog07_WEBP,
                alt: "Image #1",
            },
            {
                img: catalogImages.catalog08,
                webp: catalogImages.catalog08_WEBP,
                alt: "Image #2",
            },
        ],
        discount: 3,
        lastUpdate: new Date(2018, 2, 13),
        created: new Date(2020, 0, 1),
        browsers: ["IE11", "Firefox", "Chrome", "Opera", "Edge", "Safari"],
        category: "eCommerce",
        version: "12.0.0",
        download: "/donwload_link",
    },
    {
        id: "e4130915-6a35-49e0-abc8-0d075",
        title: "WireDugi",
        thumbImg: catalogImages.catalog08,
        thumbWebp: catalogImages.catalog08_WEBP,
        stack: ["PHP", "WORDPRESS"],
        inFavourites: 10,
        price: 29.99,
        // PRODUCT PAGE ========= //
        subtitle: "Upload a CSV File of people's names to guess their genders",
        content: `<p>Our WooCommerce cart PDF plugin helps you and your customers to export their current cart items as PDF. Customize the PDF with ease:</p>`,
        video: "https://www.youtube.com/watch?v=cgUSeWcUiFY&ab_channel=C.DragonMusic",
        lastUpdate: new Date(2022, 1, 26),
        created: new Date(2021, 11, 1),
        browsers: ["IE11", "Firefox", "Chrome", "Opera", "Edge", "Safari"],
        category: "Marketing",
        version: "1.2.3",
        download: "/donwload_link",
    },
    {
        id: "e4130915-6a35-49e0-abc8-0d07",
        title: "Dugico",
        thumbImg: catalogImages.catalog09,
        thumbWebp: catalogImages.catalog09_WEBP,
        stack: ["PHP", "WORDPRESS"],
        inFavourites: 10,
        price: 29.99,
        // PRODUCT PAGE ========= //
        subtitle: "Upload their genders",
        content: `<p>Our WooCommerce cart PDF plugin helps you and your customers to export their current cart items as PDF. Customize the PDF with ease:</p>`,
        lastUpdate: new Date(2020, 2, 13),
        created: new Date(2020, 0, 1),
        browsers: ["Chrome", "Opera"],
        category: "CMS",
        version: "2.1.3",
        download: "/donwload_link",
    },
    {
        id: "e4130915-6a35-49e0-abc8-0d0",
        title: "UI Illustrations",
        thumbImg: catalogImages.catalog10,
        thumbWebp: catalogImages.catalog10_WEBP,
        stack: ["PHP", "WORDPRESS"],
        inFavourites: 10,
        price: 29.99,
        // PRODUCT PAGE ========= //
        subtitle: "Upload a CSV File of people's names to guess their genders",
        content: `<p>Gender detection is a wordpress plugin designed and builded for detection of genders in large data files. 
            The plugin allows you to go beyond the usual text messages and contact forms and get closer to your users. 
            The plugin adds a voice recording button to any convenient place on the site. This can be useful for reviews, 
            order comments or any questions.</p>
            <p>Our WooCommerce cart PDF plugin helps you and your customers to export their current cart items as PDF. Customize the PDF with ease:</p>
            `,
        video: "https://www.youtube.com/watch?v=cgUSeWcUiFY&ab_channel=C.DragonMusic",
        images: [
            {
                img: catalogImages.catalog10,
                webp: catalogImages.catalog10_WEBP,
                alt: "Image #1",
            },
            {
                img: catalogImages.catalog11,
                webp: catalogImages.catalog11_WEBP,
                alt: "Image #1",
            },
        ],
        discount: 3,
        lastUpdate: new Date(2020, 2, 13),
        created: new Date(2020, 0, 1),
        browsers: ["IE11", "Firefox", "Chrome", "Opera", "Edge", "Safari"],
        category: "CMS",
        version: "2.0.0",
        download: "/donwload_link",
    },
    {
        id: "e4130915-6a35-49e0-abc8-0d",
        title: "Login Apps",
        thumbImg: catalogImages.catalog11,
        thumbWebp: catalogImages.catalog11_WEBP,
        stack: ["ANGULAR", "WORDPRESS"],
        inFavourites: 10,
        price: 29.99,
        // PRODUCT PAGE ========= //
        subtitle: "Upload a CSV File of people's names to guess their genders",
        content: `<p>Gender detection is a wordpress pluginecording but designed and builded for detection of genders in large data files. 
            The plugin allows you to go beyond the usual text messages and contact forms and get closer to your users. 
            The plugin adds a voice recording button to any convenient placend contact forms and get closer to your users. 
            The plugin adds a voice recording button to any con on the site. This can be useful for reviews, 
            order comments or any questions.</p>
            <p>Our WooCommerce cart PDF plugin helps you and your customers to export their current cart items as PDF. Customize the PDF with ease:</p>
            `,
        images: [
            {
                img: catalogImages.catalog11,
                webp: catalogImages.catalog11_WEBP,
                alt: "Image #1",
            },
            {
                img: catalogImages.catalog12,
                webp: catalogImages.catalog12_WEBP,
                alt: "Image #2",
            },
            {
                img: catalogImages.catalog10,
                webp: catalogImages.catalog10_WEBP,
                alt: "Image #3",
            },
        ],
        lastUpdate: new Date(2020, 2, 13),
        created: new Date(2020, 0, 1),
        browsers: ["IE11", "Firefox", "Chrome", "Opera", "Edge", "Safari"],
        category: "Site",
        version: "2.0.0",
        download: "/donwload_link",
    },
    {
        id: "e4130915-6a35-49e0-abc8-0",
        title: "Analysis app",
        thumbImg: catalogImages.catalog12,
        thumbWebp: catalogImages.catalog12_WEBP,
        stack: ["VUE", "WORDPRESS"],
        inFavourites: 1500,
        price: 189.99,
        // PRODUCT PAGE ========= //
        subtitle: "Upload a CSV File of people' names to  their genders",
        content: `<p>Gender detection is a  plugin designed and builded  detection of genders in large data files. 
            The plugin allows you to go beyond the usual text messages and contact forms and get closer to your users. 
            The plugin adds a  recording button to any   on the site. This can be useful for reviews, 
            order comments or any questions.</p>
            <p>Our WooCommerce cart PDF plugin helps you and your customers to  their current cart items as .  the PDF  ease:</p>
            <p>Our  cart PDF plugin helps you and your customers to  their current cart items as . Customize the PDF with ease:</p>
            <p>Our WooCommerce cart PDF plugin helps you  your customers to export their current  items as PDF.  the PDF with ease:</p>
            `,
        discount: 20,
        lastUpdate: new Date(2021, 4, 5),
        created: new Date(2021, 4, 5),
        browsers: ["IE11", "Firefox", "Chrome", "Opera", "Edge", "Safari"],
        category: "WordPress",
        version: "1.0.0",
        download: "/donwload_link",
    },
];

const soforteItems: IImageItem[] = [
    {
        img: paymentImages.paymentMastercard,
        alt: "Mastercard",
    },
    {
        img: paymentImages.paymentAmex,
        alt: "Amex",
    },
    {
        img: paymentImages.paymentVisa,
        alt: "Visa",
    },
    {
        img: paymentImages.paymentDiners,
        alt: "Diners",
    },
    {
        img: paymentImages.paymentJCB,
        alt: "JCB",
    },
    {
        img: paymentImages.paymentDiscover,
        alt: "Discover",
    },
];

export default { socialItems, homeSliderItems, companiesItems, categoriesItems, productItems, soforteItems };

import LocalFont from "next/font/local";

const iranSansFont = LocalFont({
    src: [
        {
            path: "../../public/assets/fonts/iranSans/IRANSansWeb_Light.woff2",
            weight: "200",
            style: "normal",
        },
        {
            path: "../../public/assets/fonts/iranSans/IRANSansWeb_UltraLight.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../public/assets/fonts/iranSans/IRANSansWeb_Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/assets/fonts/iranSans/IRANSansWeb_Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/assets/fonts/iranSans/IRANSansWeb_Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/assets/fonts/iranSans/IRANSansWeb_Black.woff2",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-iran-sans",
    style: "normal",
    display: "block",
});
export default iranSansFont;
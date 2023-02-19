const parhSrc = "./src";
const pathDest = "./public";

export default {
    root: pathDest,

    html: {
        src: parhSrc + "/*.html",
        watch: parhSrc + "/**/*.html",
        dest: pathDest,
    },

    scss: {
        src: parhSrc + "/assets/scss/*.scss",
        watch: parhSrc + "/assets/scss/**/*.scss",
        dest: pathDest + "/styles",
    },

    img: {
        src: parhSrc + "/assets/images/**/*.{png,jpg,jpeg,svg}",
        watch: parhSrc + "/assets/images/**/*.{png,jpg,jpeg,svg}",
        dest: pathDest + "/assets/images",
    },

    font: {
        src: parhSrc + "/assets/fonts/**/*.{eot,ttf,otc,ttc,woff,woff2,svg}",
        watch: parhSrc + "/assets/fonts/**/*.{eot,ttf,otc,ttc,woff,woff2,svg}",
        dest: pathDest + "/assets/fonts",
    },
};

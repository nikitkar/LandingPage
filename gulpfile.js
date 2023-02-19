import gulp from "gulp";

import { html } from "./task/html.js";
import { clear } from "./task/clear.js";
import { scss } from "./task/scss.js";
import { image } from "./task/image.js";
import { font } from "./task/font.js";

import app from "./config/app.js";
import path from "./config/path.js";

const watcher = () => {
    gulp.watch(path.html.watch, html);
    gulp.watch(path.scss.watch, scss);
    gulp.watch(path.img.watch, image);
    gulp.watch(path.font.watch, font);
};

const build = gulp.series(clear, gulp.parallel(html, scss, image, font));
const dev = gulp.series(build, watcher);

gulp.task("default", app.isProd ? build : dev);

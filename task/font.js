import gulp from "gulp";

import path from "../config/path.js";
import app from "../config/app.js";

import newer from "gulp-newer";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

export const font = () => {
    return gulp
        .src(path.font.src)
        .pipe(newer(path.img.dest))
        .pipe(fonter(app.fonter))
        .pipe(gulp.dest(path.font.dest))
        .pipe(ttf2woff2())
        .pipe(gulp.dest(path.font.dest));
};

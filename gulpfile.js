'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

gulp.task('less', function () {
   return gulp.src('./src/styles/styles.less')
       .pipe(less())
       .pipe(cssmin())
       .pipe(rename({suffix: '.min'}))
       .pipe(gulp.dest('./css'))
});

gulp.task('watch', function () {
   gulp.watch('./src/styles/styles.less', gulp.series('less'));
});


// const less = require('gulp-less')(require('less'));
/*const path = require('path');*/
/*const concatCss = require('gulp-concat-css');*/

//можно и так:
// import dartLess from 'less';
// import gulpLess from 'gulp-less';
// const less = gulpLess(dartLess);
//можно и так:
// const { src, dest, watch, series } =require('gulp');
/*
function defaultTask() {
    return gulp.src('./src/styles/*.less')
        // return src('./src/styles/*.less'); - но тогда это будет выглядеть так
        // .pipe(less().on('error', less.logError))
        .pipe(concatCss("style.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./css'));
    //.pipe(dest('./css'));
}

exports.default = defaultTask


gulp.task('less', function () {
    return gulp.src('./src/styles/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        // .pipe(gulp.dest('./css/css'))
        .pipe(concatCss("style.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./css'));;
});
//можно и так:

// exports.less = function() {
//     return gulp.src('./src/styles/*.less')
//         .pipe(less().on('error', less.logError))
//         .pipe(concatCss("style.css"))
//         .pipe(cssmin())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest('./css'));
// }

//или так:

exports.example1 = () => {
    return gulp.src('./src/styles/*.less')
        // .pipe(less().on('error', less.logError))
        // .pipe(concatCss("style.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./css'));
}

//а здесь watch вызывает функцию less из exports.less:
exports.watch = function () {
    gulp.watch('./src/styles/*.less', gulp.series('less'));
    // watch('./src/styles/*.less', series('less'));
};

*/

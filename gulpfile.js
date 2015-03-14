var gulp        = require('gulp'),
    less        = require ('gulp-less'),
    minifyCSS   = require('gulp-minify-css'),
    rename      = require('gulp-rename'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify')
    order       = require('gulp-order')
    watch       = require('gulp-watch');

gulp.task ('styles', function () {
    return gulp
    .src('src/less/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(concat('css.css'))
    .pipe(gulp.dest('assets/css/'));
});

gulp.task ('scripts', function () {
    return gulp
    .src('src/js/*.js')
    .pipe(uglify())
    .pipe(concat('script.min.js'))
    .pipe(gulp.dest('assets/js/'));
});

gulp.task ('build', ['styles', 'scripts']);

gulp.task ('default', ['build'], function () {
    gulp.watch('src/**/*', ['build']);
});
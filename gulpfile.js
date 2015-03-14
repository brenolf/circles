var gulp        = require('gulp'),
    babelify    = require('babelify'),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream'),
    less        = require('gulp-less'),
    minifyCSS   = require('gulp-minify-css'),
    rename      = require('gulp-rename'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify')
    order       = require('gulp-order')
    watch       = require('gulp-watch');

gulp.task ('default', ['styles', 'scripts']);

gulp.task ('styles', function () {
    return gulp
    .src('./src/less/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(concat('css.css'))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task ('scripts', function () {
    browserify({
    entries: './src/js/main.js',
    debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('script.min.js'))
    .pipe(gulp.dest('./assets/js/'));
});

gulp.task ('watch', ['default'], function () {
    gulp.watch('./src/js/**/*', ['scripts']);
    gulp.watch('./src/less/*', ['styles']);
});
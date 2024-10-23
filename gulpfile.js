'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const clean = require('gulp-clean');
const jshint = require('gulp-jshint');
const connect = require('gulp-connect');
const imagemin = require('gulp-imagemin');
const svgmin = require('gulp-svgmin');
const cssnano = require('gulp-cssnano');
const htmlmin = require('gulp-htmlmin');
const rev = require('gulp-rev');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const livereload = require('gulp-livereload');

// Paths
const paths = {
  app: 'app',
  dist: 'dist',
  docs: 'docs',
  less: 'app/less/**/*.less',
  html: 'app/*.html',
  scripts: 'app/scripts/**/*.js',
  images: 'app/images/**/*.{png,jpg,jpeg,gif,webp,svg}',
  fonts: 'app/fonts/**/*.*',
  bootstrap: 'app/bower_components/bootstrap/less/**/*',
  faFonts: 'app/bower_components/font-awesome/fonts/**/*'
};

// Clean Task
gulp.task('clean', () => {
  return gulp.src([paths.dist, '.tmp'], { read: false, allowEmpty: true })
    .pipe(clean());
});

// LESS Task
gulp.task('less', () => {
  return gulp.src(`${paths.app}/less/**/*.less`)
    .pipe(plumber())
    .pipe(less({ sourceMap: true }))
    .pipe(gulp.dest(`${paths.dist}/css`))
    .pipe(connect.reload());
});

// JSHint Task
gulp.task('jshint', () => {
  return gulp.src([paths.scripts])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

// Image Minification
gulp.task('imagemin', () => {
  return gulp.src(paths.images)
    .pipe(imagemin())
    .pipe(gulp.dest(`${paths.dist}/images`));
});

// SVG Minification
gulp.task('svgmin', () => {
  return gulp.src(`${paths.app}/images/**/*.svg`)
    .pipe(svgmin())
    .pipe(gulp.dest(`${paths.dist}/images`));
});

// CSS Minification
gulp.task('cssmin', () => {
  return gulp.src(`${paths.dist}/css/*.css`)
    .pipe(cssnano())
    .pipe(gulp.dest(`${paths.dist}/css`));
});

// HTML Minification
gulp.task('htmlmin', () => {
  return gulp.src(paths.html)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.dist))
    .pipe(connect.reload());
});

// Copy Task
gulp.task('copy', () => {
  return gulp.src([
    '*.{ico,png,txt}',
    `${paths.fonts}`,
    `${paths.bootstrap}`,
    `${paths.faFonts}`
  ], { base: paths.app })
    .pipe(gulp.dest(paths.dist))
    .pipe(connect.reload());
});

// Live Reload Server
gulp.task('connect', () => {
  connect.server({
    root: [paths.dist],
    livereload: true,
    port: 9000
  });
});

// Watch Task
gulp.task('watch', () => {
  livereload.listen();
  gulp.watch(paths.less, gulp.series('less'));
  gulp.watch(paths.html, gulp.series('htmlmin'));
  gulp.watch(paths.scripts, gulp.series('jshint'));
  gulp.watch(paths.images, gulp.series('imagemin'));
});

// Build Task
gulp.task('build', gulp.series('clean', gulp.parallel('less', 'imagemin', 'svgmin', 'htmlmin', 'copy')));

// Default Task
gulp.task('default', gulp.series('build', gulp.parallel('connect', 'watch')));

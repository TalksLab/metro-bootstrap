const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const clean = require('gulp-clean');
const cssmin = require('gulp-cssnano');
const plumber = require('gulp-plumber');

// Define paths
const paths = {
  less: 'app/less/**/*.less', // Source LESS files
  dist: 'dist/css/',          // Destination folder for compiled CSS
  variables: 'app/less/variables.less', // Variables file
};

// Task to compile LESS files
gulp.task('less', function () {
  return gulp.src(paths.less)
    .pipe(plumber({
      errorHandler: function (err) {
        console.error('Error!', err.message);
        this.emit('end');
      }
    }))
    .pipe(less({
      paths: [path.join(__dirname, 'app/less')],
      // Import the variables.less file in the main LESS file
    }))
    .pipe(cssmin())
    .pipe(gulp.dest(paths.dist));
});

// Task to clean the dist folder
gulp.task('clean', function () {
  return gulp.src('dist', { read: false, allowEmpty: true })
    .pipe(clean());
});

// Default task to clean and compile LESS
gulp.task('default', gulp.series('clean', 'less'));
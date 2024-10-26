const gulp = require("gulp");
const less = require("gulp-less");
const path = require("path");
const clean = require("gulp-clean");
const cssmin = require("gulp-cssnano");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps"); // Import sourcemaps

// Define paths
// Define paths
const paths = {
  less: "app/less/metro-bootstrap.less", // Main LESS file
  dist: "dist/css/", // Destination folder for compiled CSS
  fonts: "app/fonts/**/*", // Path to the original font files
  fontsDist: "dist/fonts/", // Destination for moved font files
};

// Task to compile LESS files
gulp.task("less", function () {
  return (
    gulp
      .src(paths.less)
      .pipe(
        plumber({
          errorHandler: function (err) {
            console.error("Error!", err.message);
            this.emit("end");
          },
        }),
      )
      .pipe(sourcemaps.init()) // Initialize sourcemaps
      .pipe(
        less({
          paths: [path.join(__dirname, "app/less")],
        }),
      )
      .pipe(rename("metro-bootstrap.css")) // Rename to metro-bootstrap.css
      .pipe(gulp.dest(paths.dist)) // Output the non-minified CSS

      .pipe(cssmin()) // Minify CSS
      .pipe(rename("metro-bootstrap.min.css")) // Rename to metro-bootstrap.min.css
      .pipe(gulp.dest(paths.dist)) // Output the minified CSS

      // Write sourcemaps after minification
      .pipe(
        sourcemaps.write(".", {
          mapFile: function () {
            return "metro-bootstrap.css.map"; // Rename the sourcemap file
          },
        }),
      )
      .pipe(gulp.dest(paths.dist))
  ); // Output the source map
});

// Task to copy font files
gulp.task("fonts", function () {
  return gulp
    .src(paths.fonts) // Source font files
    .pipe(gulp.dest(paths.fontsDist)); // Destination for font files
});

// Task to clean the dist folder
gulp.task("clean", function () {
  return gulp.src("dist", { read: false, allowEmpty: true }).pipe(clean());
});

// Default task to clean, compile LESS, and copy fonts
gulp.task("default", gulp.series("clean", "less", "fonts"));

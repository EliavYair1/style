var gulp = require("gulp"),
  browserSync = require("browser-sync").create(),
  sass = require("gulp-sass")(require("sass")),
  sourcemaps = require("gulp-sourcemaps"),
  nunjucksRender = require("gulp-nunjucks-render"),
  autoprefixer = require("gulp-autoprefixer"),
  svgmin = require("gulp-svgmin"),
  //   del = require("del"),
  less = require("gulp-less"),
  cleanCSS = require("gulp-clean-css"),
  gulpif = require("gulp-if"),
  concat = require("gulp-concat"),
  minify = require("gulp-babel-minify"),
  fileInclude = require("gulp-file-include"),
  condition = false;

// Configs
var paths = {
  src: "src/",
  dist: "dist/",
  maps: "./maps",
  html: {
    src: "src/*.html",
    dist: "dist/",
  },
  css: {
    src: "src/stylesheets/**/*.*",
    dist: "dist/css",
  },
  less: {
    src: "src/stylesheets/**/*.less",
    dist: "dist/css",
  },
  img: {
    src: "src/img/**/*.*",
    svg: "src/img/**/*.svg",
    dist: "dist/img",
  },
  js: {
    src: {
      js: ["src/js/*.*", "src/js/functions/**/*.js", "!src/js/jquery-3.4.1.min.js"],
      all: "src/js/**/*.*",
      libs: "src/js/libs/**/*.*",
    },
    dist: "dist/js",
  },
  fonts: {
    src: "src/fonts/**/*.*",
    dist: "dist/fonts/",
  },
  watch: {
    html: [
      "src/template/*.html",
      "src/template/*/*.html",
      "src/template/*/*/*.html",
      "src/template/*/*/*/*.html",
      "src/template/**.html",
      "src/template/pages/*.html",
      "src/*.html",
    ],
    scss: ["src/stylesheets/**/*.scss", "src/stylesheets/*/*.scss"],
    css: "src/stylesheets/**/*.css",
    less: "src/stylesheets/**/*.less",
    js: ["src/js/*.js", "src/js/functions/**/*.js"],
    img: "src/img/**",
    fonts: "src/fonts/**",
    copyHtml: "src/template/pages/*.html",
  },
};

// Static server
gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: paths.dist,
    },
  });
});

// html
gulp.task("html", function () {
  return gulp
    .src([paths.html.src, "src/*.html"])
    .pipe(
      fileInclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(sourcemaps.init())
    .pipe(
      nunjucksRender({
        path: ["src/template/"], // String or Array
      })
    )
    .pipe(gulp.dest(paths.html.dist))
    .pipe(browserSync.stream());
});

// css
gulp.task("css", function () {
  return (
    gulp
      .src([paths.css.src])
      .pipe(sourcemaps.init())
      .pipe(sass().on("error", sass.logError))
      // .pipe(less())
      .pipe(autoprefixer("last 5 version", "ie 9"))

      .pipe(concat("bundle.css"))
      .pipe(gulpif(condition, cleanCSS({ compatibility: "ie8" })))

      //  .pipe(sourcemaps.write(paths.maps))
      .pipe(gulp.dest(paths.css.dist))
      .pipe(browserSync.stream())
  );
});

// img
gulp.task("img", function () {
  return gulp.src(paths.img.src).pipe(gulp.dest(paths.img.dist)).pipe(browserSync.stream());
});

gulp.task("svg", function () {
  return (
    gulp
      .src(paths.img.svg)
      // .pipe(svgmin())
      .pipe(gulp.dest(paths.img.dist))
  );
});

//js
gulp.task("js", function () {
  return gulp
    .src(paths.js.src.js)
    .pipe(sourcemaps.init())
    .pipe(concat("common.js"))
    .pipe(
      gulpif(
        condition,
        minify({
          mangle: {
            keepClassName: true,
          },
        })
      )
    )
    .pipe(sourcemaps.write(paths.maps))
    .pipe(gulp.dest(paths.js.dist))
    .pipe(browserSync.stream());
});

gulp.task("jsLibs", function () {
  return gulp
    .src(paths.js.src.libs)
    .pipe(sourcemaps.init())
    .pipe(concat("libs.js"))
    .pipe(
      gulpif(
        condition,
        minify({
          mangle: {
            keepClassName: true,
          },
        })
      )
    )
    .pipe(sourcemaps.write(paths.maps))
    .pipe(gulp.dest(paths.js.dist))
    .pipe(browserSync.stream());
});

// fonts
gulp.task("fonts", function () {
  return gulp.src(paths.fonts.src).pipe(gulp.dest(paths.fonts.dist)).pipe(browserSync.stream());
});

// clean
gulp.task("clean", function () {
  return del(paths.dist);
});

gulp.task("copy-html", function () {
  return gulp
    .src("src/template/pages/{category,coupon,my-account,cart,payment,thanks}.html")
    .pipe(
      fileInclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest(paths.html.dist))
    .pipe(browserSync.stream());
});
// watch
gulp.task("watch", function () {
  // gulp.watch(paths.watch.html, gulp.series("html"));
  gulp.watch(paths.watch.html, function (done) {
    // console.log("HTML file changed, reloading...");
    gulp.series("html")(done);
  });
  gulp.watch(paths.watch.scss, gulp.series("css"));
  gulp.watch(paths.watch.css, gulp.series("css"));
  gulp.watch(paths.watch.js, gulp.series("js"));
  gulp.watch(paths.watch.img, gulp.series("img"));
  gulp.watch(paths.watch.fonts, gulp.series("fonts"));
  gulp.watch(paths.watch.copyHtml, gulp.series("copy-html"));
});

//default
gulp.task(
  "default",
  gulp.parallel(
    "browser-sync",
    "js",
    "jsLibs",
    "html",
    "css",
    "img",
    "svg",
    "fonts",
    "copy-html",
    "watch"
  )
);

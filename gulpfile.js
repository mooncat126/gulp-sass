// gulpfile.js

const gulp = require("gulp");
const rename = require("gulp-rename");
const fibers = require("fibers");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify-es").default;

const paths = {
  sass: {
    src: "./src/stylesheets/sass/**/*.scss",
    target: [
      "./src/stylesheets/sass/style.scss",
      "./src/stylesheets/sass/bootstrap.scss",
    ],
    dest: "./src/stylesheets/css/",
  },
  js: {
    src: "./src/js/dist/*.js",
    ignore: ["./src/js/dist/*.min.js"],
    dest: "./src/js/dist/",
  },
};

//---------------------------------------------------
// SASS
//---------------------------------------------------
const compileSassMin = (done) => {
  gulp
    .src(paths.sass.target)
    .pipe(
      sass({
        fiber: fibers,
        outputStyle: "compressed",
      }).on("error", sass.logError)
    )
    .pipe(
      postcss([
        require("autoprefixer")({
          grid: "autoplace",
          cascade: false,
        }),
      ])
    )
    .pipe(
      rename({
        extname: ".min.css", //minifyしたファイルの名前変更
      })
    )
    .pipe(gulp.dest(paths.sass.dest));
  done();
};

//---------------------------------------------------
// JavaScript
//---------------------------------------------------
const minifyJs = (done) => {
  gulp
    .src([paths.js.src], {
      ignore: paths.js.ignore,
    })
    .pipe(
      uglify({
        compress: true, // 圧縮する
        output: {
          comments: /^!/, //Licenseコメントの頭にある「*!」を残す
        },
      })
    )
    .pipe(
      rename({
        extname: ".min.js", // minifyしたファイルの名前変更
      })
    )
    .pipe(gulp.dest(paths.js.dest));
  done();
};

//---------------------------------------------------
// Watch
//---------------------------------------------------
const watch = (done) => {
  gulp.watch(paths.sass.src, gulp.task("compileAndMinify"));
  done();
};

//---------------------------------------------------
// それぞれをtask化する
//---------------------------------------------------
exports.compileAndMinify = gulp.series(gulp.parallel(compileSassMin));
exports.minifyJs = minifyJs;
exports.default = watch;

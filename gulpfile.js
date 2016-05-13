var gulp = require('gulp');
var sass = require("gulp-sass");
var jshint = require("gulp-jshint");

gulp.task("zadanie", function(){
  return gulp.src("npmjs/*.js")
  .pipe(jshint())
  .pipe(jshint.reporter("default"))
});

gulp.task("sass", function(){
  return gulp.src("scss/**/*.scss")
  .pipe(sass({
    errLogToConsole: true,
    outputStyle: "expanded"
  }))
  .pipe(gulp.dest("css"))
})

gulp.task("watch", function(){
  gulp.watch("scss/**/*.scss", ["sass"])
})

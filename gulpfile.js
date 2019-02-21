const gulp = require("gulp");
const ts = require("gulp-typescript");
const tslint = require("gulp-tslint");

const tsProject = ts.createProject("tsconfig.json");

gulp.task("ts", () =>
  tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist"))
);

gulp.task("tslint", () =>
  tsProject
    .src()
    .pipe(
      tslint({
        formatter: "verbose"
      })
    )
    .pipe(tslint.report())
);
gulp.task("watch", () => gulp.watch("src/**/*.ts", ["ts"]));

gulp.task("default", ["ts"]);

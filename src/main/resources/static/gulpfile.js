const gulp = require('gulp');

const requireDir = require('require-dir');
const usemin = require('gulp-usemin');
const uglify = require('gulp-uglify');
const cssmin = require('gulp-cssmin');

gulp.task('usemin', function() {

    gulp.src('js/**')
    .pipe(usemin({
        js: [ uglify()],
        css: [ cssmin() ]
        }))
        .pipe(gulp.dest('gulp/tasks'));
});
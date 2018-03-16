/**
 * Created by נ4םנ on 25.01.2018.
 */

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('autoprefix', function () {
    return gulp.src('main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 1%', 'ie 9'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'));
});
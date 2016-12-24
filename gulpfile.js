var gulp = require('gulp'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    clean = require('gulp-clean'),
    webpack = require('webpack-stream'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

const SRC_DIRECTORY = './src/main/resources';

gulp.task('default', function() {
    return gulp.src([SRC_DIRECTORY + '/static/react/**', SRC_DIRECTORY + '/static/js/*'])
           .pipe(concat('index.js'))
           .pipe(babel({
               presets: ['es2015', 'react']
           }))
           .pipe(gulp.dest('./target/classes/static/js'));
});
'use strict';

const gulp = require('gulp');
const saveLicense = require('uglify-save-license');
const pkg = require('../package.json');
const $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*'],
});

gulp.task('scripts', function () {
  return gulp
    .src('src/**', { dot: true })
    .pipe($.replace('__VERSION__', pkg.version))
    .pipe($.replace('/src/', '/dist/'))
    .pipe(gulp.dest('dist'))
    .pipe($.size({ title: '[ minimize size ]:' }));
});

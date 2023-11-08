'use strict';

const gulp = require('gulp');
const fs = require('fs');

//import
fs.readdirSync('./build').map(function (file) {
  require('./build/' + file);
});

const seriesTasks = gulp.series(['clean', 'scripts']);

gulp.task('default', seriesTasks);
gulp.task('watch', () => gulp.watch(['./src/**'], seriesTasks));

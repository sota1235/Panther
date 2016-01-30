'use strict';

// Gulp plugins
import gulp       from 'gulp';
// others
import browserify   from 'browserify';
import babelify     from 'babelify';
import source       from 'vinyl-source-stream';
import buffer       from 'vinyl-buffer';

gulp.task('build', () => {
  browserify({
    entries : ['./src/comments.js'],
    debug   : true
  })
  .transform(babelify, {
    presets: ['es2015']
  })
  .bundle()
  .on('error', err => console.log(`Error: ${err.message}`))
  .pipe(source('comments.js'))
  .pipe(buffer())
  .pipe(gulp.dest('./lib'));
});

gulp.task('default', ['build']);

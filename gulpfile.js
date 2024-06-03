'use strict'
const gulp = require('gulp')
const gulpIf = require('gulp-if')
const eslint = require('gulp-eslint')
const istanbul = require('gulp-istanbul')
const mocha = require('gulp-mocha')
const plumber = require('gulp-plumber')

const cwd = process.cwd()

  , configFiles = './gulpfile.js'
  , srcFiles = 'src/*.js'
  , testFiles = 'test/*.js'

  , srcDir = './src/'

let watching = false

gulp.task('lint', () =>
  gulp.src([configFiles, srcFiles, testFiles])
    .pipe(eslint())
    .pipe(gulpIf(!watching, eslint.failOnError()))
)

gulp.task('pre:test', () =>
  gulp.src([`${srcDir}**/*.js`])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
)

gulp.task('test', ['pre:test'], () =>
  gulp.src([testFiles])
    .pipe(gulpIf(watching, plumber()))
    .pipe(mocha())
    .pipe(istanbul.writeReports())
    .on('end', () => {
      // Something in this task changes the process CWD and causes chaos.
      // This line changes back to the original CWD.
      process.chdir(cwd)
    })
)

gulp.task('watch', () => {
  watching = true
  gulp.watch([srcFiles, testFiles], ['test'])
})

/* load command line arguments */
var args = require('yargs').argv;

/* load gulp */
var gulp = require('gulp');
var sass = require('gulp-sass');

/* load the plugins */
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins({ scope: ['devDependencies'] });
plugins.del = require('del');
plugins.mainBowerFiles = require('main-bower-files');

/* copy the dist folder into the designated public folder */
function copyPublic(suffix) {
  if (args['copy-dist'] !== undefined) {
    return gulp.dest(args['copy-dist'] + '/' + suffix);
  } else {
    return plugins.util.noop();
  }
}

/* clean tasks */
gulp.task('clean:bower', function(cb) {
  return plugins.del(['dist/styleguide/bower_components/*'], cb);
});

gulp.task('clean:css', function(cb) {
  return plugins.del(['dist/styleguide/css/*'], cb);
});

gulp.task('clean:html', function(cb) {
  return plugins.del(['dist/*.html'], cb);
});

// gulp.task('clean:images', function(cb) {
//   return plugins.del(['dist/styleguide/images/*'], cb);
// });

gulp.task('clean:js', function(cb) {
  return plugins.del(['dist/styleguide/js/*'], cb);
});

/* core tasks */
gulp.task('build:bower', ['clean:bower'], function() {
  return gulp
    .src(plugins.mainBowerFiles())
    .pipe(plugins.rename({ suffix: '.min' }))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('dist/styleguide/bower_components'))
    .pipe(copyPublic('styleguide/bower_components'));
});

gulp.task('build:css', function() {
  return gulp.src('src/sass/pattern-lab.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      plugins.autoprefixer(
        {
          browsers: [
            'last 2 version',
            'safari 5',
            'ie 8',
            'ie 9',
            'opera 12.1',
            'android 4',
          ],
        },
        { map: false }
      )
    )
    .pipe(gulp.dest('dist/styleguide/css'))
    .pipe(copyPublic('styleguide/css'));
});

// Might be overkill but this'll address the favicon 404 errors...
gulp.task('copy:favicon', function () {
  // Copy favicon over
  return gulp.src(['src/*.ico'])
    .pipe(gulp.dest('dist'))
    .pipe(copyPublic(''));
});

gulp.task('build:html', ['clean:html'], function() {
  return gulp
    .src(['src/html/index.html', 'src/html/splash-screen.html'])
    .pipe(plugins.fileInclude({ prefix: '@@', basepath: '@file' }))
    .pipe(gulp.dest('dist'))
    .pipe(copyPublic(''));
});

// gulp.task('build:images', ['clean:images'], function() {
//   return gulp
//     .src('src/images/*')
//     .pipe(
//       plugins.imagemin({
//         progressive: true,
//         svgoPlugins: [{ removeViewBox: false }],
//         use: [plugins.pngcrush()],
//       })
//     )
//     .pipe(gulp.dest('dist/styleguide/images'))
//     .pipe(copyPublic('styleguide/images'));
// });

gulp.task('build:js-viewer', ['clean:js'], function() {
  return gulp
    .src(['src/js/*.js', '!src/js/modal-styleguide.js'])
    .pipe(plugins.jshint('.jshintrc'))
    .pipe(plugins.jshint.reporter('default'))
    .pipe(
      plugins.resolveDependencies({ pattern: /\* @requires [\s-]*(.*?\.js)/g })
    )
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(plugins.concat('patternlab-viewer.js'))
    .pipe(gulp.dest('dist/styleguide/js'))
    .pipe(plugins.rename({ suffix: '.min' }))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('dist/styleguide/js'))
    .pipe(copyPublic('styleguide/js'));
});

gulp.task('build:js-pattern', ['build:js-viewer'], function() {
  // 'src/js/annotations-pattern.js','src/js/code-pattern.js','src/js/info-panel.js'
  return gulp
    .src([
      'src/js/postmessage.js',
      'src/js/panels-shared.js',
      'src/js/clipboard.min.js',
      'src/js/modal-styleguide.js',
    ])
    .pipe(plugins.jshint('.jshintrc'))
    .pipe(plugins.jshint.reporter('default'))
    .pipe(
      plugins.resolveDependencies({ pattern: /\* @requires [\s-]*(.*?\.js)/g })
    )
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(plugins.concat('patternlab-pattern.js'))
    .pipe(gulp.dest('dist/styleguide/js'))
    .pipe(plugins.rename({ suffix: '.min' }))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('dist/styleguide/js'))
    .pipe(copyPublic('styleguide/js'));
});

gulp.task(
  'default',
  ['build:bower', 'build:css', 'build:html', 'build:js-pattern', 'copy:favicon'],
  function() {
    if (args.watch !== undefined) {
      gulp.watch(['src/bower_components/**/*'], ['build:bower']);
      gulp.watch(
        ['src/sass/pattern-lab.scss', 'src/sass/scss/**/*'],
        ['build:css']
      );
      gulp.watch(['src/html/*'], ['build:html']);
      gulp.watch(['src/js/*'], ['build:js-pattern']);
    }
  }
);
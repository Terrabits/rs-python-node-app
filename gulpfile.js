var del   = require('del');
var gulp  = require('gulp');
var shell = require('gulp-shell')


gulp.task('default', ['restart'], function() {
  // place code for your default task here
});
gulp.task('clean-html', function() {
	return del([
		'app/**/*',
    '!app',
    '!app/TODO',
    '!app/TODO/*',
    '!app/TODO/**/*'
    ]);
});
gulp.task('clean-py', function() {
	return del([
	    'app/TODO',
	    'build/run'
    ]);
});
gulp.task('clean', ['clean-html', 'clean-py'], function() {
	return del([
	    'app/**/*'
    ]);
});
gulp.task('build-py',
console.log("TODO: gulp task build-py")
	// shell.task(['pyinstaller run.spec --distpath=\"app\"'])
);
gulp.task('build-html',
	shell.task(['bundle exec middleman build --no-clean'])
);
gulp.task('build', ['build-py', 'build-html'], function() {

});
gulp.task('rebuild-py', ['clean-py'],
  console.log("TODO: gulp task rebuild-py")
	// shell.task(['pyinstaller run.spec --distpath=\"app\"'])
);
gulp.task('rebuild-html', ['clean-html'],
	shell.task(['bundle exec middleman build --no-clean'])
);
gulp.task('rebuild', ['rebuild-py', 'rebuild-html'], function() {

});
gulp.task('restart', ['rebuild'],
	shell.task(['npm start'])
);
gulp.task('repack', ['rebuild'],
	shell.task(['npm pack'])
);
gulp.task('redist', ['rebuild'],
	shell.task(['npm run dist'])
);

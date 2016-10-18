var gulp = require('gulp');
var browsersync= require('browser-sync').create();
var reload = browsersync.reload;
var less = require('gulp-less');

gulp.task('start',function() {
	browsersync.init({
		server:{baseDir:'./'},
		startPath:'index.html'
	});
	gulp.watch('less/*.less',['less']);
	gulp.watch('html/*.html').on('change',reload);
	gulp.watch('js/*.js').on('change',reload);
	gulp.watch('img/*.jpg').on('change',reload);
});

gulp.task('less',function(){
	gulp.src('./main.less')
		.pipe(less())
		.pipe(gulp.dest('./css'))
});
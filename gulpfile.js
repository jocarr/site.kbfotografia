var gulp = require('gulp');
var Imagemin = require('imagemin');

gulp.task('default', function() {

	var imagemin = new Imagemin()
			.src('pre/*.{gif,jpg,png,svg}')
			.dest('img/prueba')
			.use(Imagemin.jpegtran({ progresive: true}));

	imagemin.run(function(err, files) {
		// if (err) {
		// 	trow err;
		// }

		console.log(files[0]);
	});
});
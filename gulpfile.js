const gulp = require('gulp');
const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const jp2 = require('gulp-jpeg-2000');


// image processing
function images() {

    const out = 'assets/images/';

    return gulp.src('_rawAssets/*')
        .pipe(newer(out))
        .pipe(imagemin([
            mozjpeg({quality: 80}),
            imagemin.optipng({optimizationLevel: 5}),    
        ],
        { verbose: true }
        ))
        .pipe(gulp.dest(out));
}

exports.images = images;
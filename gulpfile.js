const gulp = require('gulp');
const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const webp = require('gulp-webp');
const pngquant = require('gulp-pngquant');



// jpg image processing
function jpgImages() {

    let out = 'assets/images/';
    let JPEGImages = '_rawAssets/*.jp*';

    return gulp.src(JPEGImages)
        .pipe(newer(out))
        .pipe(imagemin([
            mozjpeg({quality: 75}),   
        ],
        { verbose: true }
        ))
        .pipe(gulp.dest(out));
}
exports.jpgImages = jpgImages;

// png image processing
function pngImages() {

    let out = 'assets/images/';
    let PNGImages = '_rawAssets/*.png';

    return gulp.src(PNGImages)
        .pipe(newer(out))
        .pipe(pngquant({ quality: 75 }),
        { verbose: true }
        )
        .pipe(gulp.dest(out));
}
exports.pngImages = pngImages;

// webp jpg conversion
function convertJpgToWebp() {

    let out = 'assets/images/webp/';
    let JPEGImages = 'assets/images/*.jp*';

    return gulp.src(JPEGImages)
        .pipe(newer(out))
        .pipe(webp(),
        { verbose: true }
        )
        .pipe(gulp.dest(out));
}
exports.convertJpgToWebp = convertJpgToWebp;

// webp png conversion
function convertPngToWebp() {

    let out = 'assets/images/webp/';
    let PNGImages = 'assets/images/*.png';

    return gulp.src(PNGImages)
        .pipe(newer(out))
        .pipe(webp(),
        { verbose: true }
        )
        .pipe(gulp.dest(out));
}
exports.convertPngToWebp = convertPngToWebp;
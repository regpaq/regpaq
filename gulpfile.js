const gulp = require('gulp'),
    newer = require('gulp-newer'),
    imagemin = require('gulp-imagemin'),
    mozjpeg = require('imagemin-mozjpeg'),
    webp = require('gulp-webp'),
    pngquant = require('gulp-pngquant'),
    responsive = require('gulp-responsive');


// jpg image processing
function optimizeJpg() {

    let jpgImages = '_src/*.jp*';
    let out = 'assets/images/';
    let webpOut = 'assets/images/webp/';

    return gulp
        .src(jpgImages)
        .pipe(newer(out))
        .pipe(imagemin(
            [mozjpeg({quality: 75})],
            {verbose: true }))
        .pipe(gulp.dest(out))
        .pipe(responsive(
            {
                '*': [
                    {
                        width: 250,
                        rename: { suffix: '-250' }
                    },{
                        width: 572,
                        rename: { suffix: '-572' }
                    },{
                        width: 790,
                        rename: { suffix: '-790' }
                    },{
                        width: 880,
                        rename: { suffix: '-880' }
                    },{
                        width: 1600,
                        rename: { suffix: '-1600' }
                    },{
                        width: 2450,
                        rename: { suffix: '-2450' }
                    },{
                        width: 3200,
                        rename: { suffix: '-3200' }
                    },{
                        width: 4000,
                        rename: { suffix: '-4000' }
                    }
                ]                
            },{
                errorOnEnlargement: false,
                withMetadata: false,
                skipOnEnlargement: true,
                errorOnUnusedConfig: false,
                errorOnUnusedImage: false
            }
        ))
        .pipe(gulp.dest(out))
        .pipe(webp(
            { verbose: true }))
        .pipe(gulp.dest(webpOut));    
}

// png image processing
function optimizePng() {

    let pngImages = '_src/*.png';
    let out = 'assets/images/';
    let webpOut = 'assets/images/webp/';

    return gulp
        .src(pngImages)
        .pipe(newer(out))
        .pipe(pngquant({
            quality: '75'}))
        .pipe(gulp.dest(out))
        .pipe(responsive(
            {
                '*': [
                    {
                        width: 250,
                        rename: { suffix: '-250' }
                    },{
                        width: 572,
                        rename: { suffix: '-572' }
                    },{
                        width: 790,
                        rename: { suffix: '-790' }
                    },{
                        width: 880,
                        rename: { suffix: '-880' }
                    },{
                        width: 1600,
                        rename: { suffix: '-1600' }
                    },{
                        width: 2450,
                        rename: { suffix: '-2450' }
                    },{
                        width: 3200,
                        rename: { suffix: '-3200' }
                    },{
                        width: 4000,
                        rename: { suffix: '-4000' }
                    }
                ]                
            },{
                errorOnEnlargement: false,
                withMetadata: false,
                skipOnEnlargement: true,
                errorOnUnusedConfig: false,
                errorOnUnusedImage: false
            }
        ))
        .pipe(gulp.dest(out))
        .pipe(webp())
        .pipe(gulp.dest(webpOut));    
}

function originalWebp() {

    let images = ['_src/*.jp*','_src/*.png'];
    let webpOut = 'assets/images/webp/';

    return gulp
        .src(images)
        .pipe(newer(webpOut))
        .pipe(webp([{
            quality: 75
        }]))
        .pipe(gulp.dest(webpOut)); 
}

function watch(cb) {
    gulp.watch('_src/*.jp*', optimizeJpg);
    gulp.watch('_src/*.png', optimizePng);
    gulp.watch('_src/*.png', originalWebp);
    gulp.watch('_src/*.jp*', originalWebp);
    cb();
}

exports.default = watch;
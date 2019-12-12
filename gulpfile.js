const gulp = require('gulp');
const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const webp = require('gulp-webp');
const pngquant = require('gulp-pngquant');
const responsive = require('gulp-responsive');


// jpg image processing
function compressJpg() {

    let jpgImages = '_src/*.jp*';
    let out = 'assets/images/';

    return gulp
        .src(jpgImages)
        .pipe(newer(out))
        .pipe(imagemin([
            mozjpeg({quality: 75}),   
        ],
        { verbose: true }
        ))
        .pipe(gulp.dest(out));
}
exports.compressJpg = compressJpg;

// png image processing
function compressPng() {

    let pngImages = '_src/*.png';
    let out = 'assets/images/';

    return gulp
        .src(pngImages)
        .pipe(newer(out))
        .pipe(pngquant({ quality: 75 }),
        { verbose: true }
        )
        .pipe(gulp.dest(out));
}
exports.compressPng = compressPng;

// webp image conversion
function convertToWebp() {

    let out = 'assets/images/webp/';

    return gulp
        .src(['assets/images/*.{jpeg,jpg,png}','!assets/images/*{-250,-572,-790,-880,-1600,-2450,-3200,-4000}.*'])
        // .pipe(newer(out))
        .pipe(webp(),
        { verbose: true }
        )
        .pipe(gulp.dest(out));
}
exports.convertToWebp = convertToWebp;

// make jp* and png images responsive
function makeResponsive() {

    let out = 'assets/images/';

    return gulp
        .src('assets/images/*.{jpeg,jpg,png}')
        // .pipe(newer(out))
        .pipe(responsive(
            {
                '*.{jpeg,jpg,png}': [
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
}
exports.makeResponsive = makeResponsive;

function makeResponsiveWebp() {

    let out = 'assets/images/webp/';
    let images = 'assets/images/webp/*'; 

    return gulp
        .src(images)
        // .pipe(newer(out))
        .pipe(responsive(
            {
                '*.webp': [
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
}
exports.makeResponsiveWebp = makeResponsiveWebp;
exports.build = gulp.series(exports.compressJpg, exports.compressPng, exports.convertToWebp, exports.makeResponsive, exports.makeResponsiveWebp)

/* 
1. just process this and dump in existing images folder (figure out webp folder though)
2. test to see if it works correctly with feature images at least
3. then see how to implement for regular pages
4. must figure out liquid code to make not display broken image links (check MM post)

issues
1. max size of any image in build folder is the image size it meets in breakdown - solved by using original
2. since we're not scaling up, the higher resolution pixels won't be found - solved by unless statements
3. need the optimized images (excluding webp) included in /assets to be the fall back.

if I don't separate images by type, I'll have a lot of duplicates, but I could always worry about that later
*/
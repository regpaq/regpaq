## How to use Terminal to local serve website

1. `ls` lists items in current directory. Should be in Mac OS user folder
2. `cd regpaq` will change directories to the regpaq folder where website files live
3. `bundle exec jekyll serve` will create the local server and you can visit the site at http://localhost:4000/
    Or use `bundle exec jekyll serve -l` will auto refresh the browser when a file is saved.
4. `ctrl+c` to stop serving

## How to use Gulp for image processing in Terminal

1. `cd regpaq`
2. `gulp default`
3. Move image file to `_src` folder
4. It will make all sizes in `Assets` folder

## How to push website updates live

By making a commit, Netlify is notified and will pull most recent commit files.

1. Click the Source Control icon in VSC (Third 'branch-looking' icon in far left seide bar)
2. Type commit message - what changed?
3. Click checkmark icon
4. Click elipses drop down menu, then choose push

## Images

### Single Image

To include images in pages and posts, use the following format:

`{% include figure.html image="/assets/images/file-name.png/jpg" caption="" link="" width="" %}`

You can use the following for width:

- full - full width of content
- wide - slightly exceeds width of content
- vwide - very wide, further exceeds width of content, but not full width of window

Links and captions are optional.

### Multiple Images

To include multiple images, use the following format:

`{% include figure.html image="/assets/images/file-name.png/jpg" image2="/assets/images/file-name.png/jpg" image3="/assets/images/file-name.png/jpg" image4="/assets/images/file-name.png/jpg" caption="" link="" width="" %}`

You can use up to 4 images at once. If using two or three images, they will be displayed on the same row whether on desktop or mobile. If using four, it will always display in two rows of two images.

You can use the following for width:

- full - full width of content
- wide - exceeds width of content, but not full width
- vwide - very wide, further exceeds width of content, but not full width of window
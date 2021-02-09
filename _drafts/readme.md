## How to use Terminal to local serve website

1. `ls` lists items in current directory. Should be in Mac OS user folder
2. `cd regpaq` will change directories to the regpaq folder where website files live
3. `bundle exec jekyll serve` will create the local server and you can visit the site at http://localhost:4000/

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
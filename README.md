# csgostash-item-parse

simple module to parse and generate a json file containing all csgo weapon/knife skin pairs with image #s.

### how to use

`npm install csgostash-item-parse`

go to: `/path/to/this/module/`

run this command: `node parser.js`

you will see a `result.json` file with all of the data.

**note** : image #s correspond to being able to be used like so:

take image # and use it within this URL:

`http://csgostash.com/img/skins/s{image # here}.png`

if the image # is less than 495 this will work.
if you want an image for a weapon/skin with an image # greater than or equal to 495:

use the same image url before.. but add the wear abbreviation (fn, mw, ww etc..) to the end of the number.

**ex:** `http://csgostash.com/img/skins/s496fn.png` < gets the factory new (fn) image.

**remember:** many skins do not have all wear options.

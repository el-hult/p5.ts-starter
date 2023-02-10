# Starter pack to get up and running with p5.js and typescript

First `npm install`, then 

* `npx eslint .` to lint
* `npx jest` to test
* `npx tsc --noEmit` to type check the sketch
* `npx parcel` to serve the sketch


General documentation at https://p5js.org/
N.B. all documentation assumes javascript, and the API of global-mode.
The code in this starter uses the instance-mode syntax, since that is easier to get type safe.
See https://github.com/processing/p5.js/wiki/Global-and-instance-mode for details.

This repo is essentially https://blog.kakeragames.com/2022/02/20/p5-typescript.html but with jest and eslint added and configured.

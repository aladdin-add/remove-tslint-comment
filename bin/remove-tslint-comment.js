#!/usr/bin/env node
'use strict';

const fs = require('fs');
const replace = require('../lib/index.js');
const globby = require('globby');

const argv = process.argv.slice(2);


let write = false; // whether to write the raw file or not.
let pattern = argv;

(argv[0] === '--write') && (write = true, pattern = argv.slice(1));
(argv[argv.length - 1] === '--write') && (write = true, pattern = argv.slice(0, -1));

const opts = {
  dot: true,
  ignore: [ 'node_modules/' ],
  absolute: true,
};
const files = globby.sync(pattern, opts);

files.forEach(file => {
  fs.readFile(file, 'utf-8', function(err, content) {

    if (err) {
      return console.error(err);
    }
    outFile(file, content);
  });
});


function outFile(file, content) {
  const fileName = write ? file : file.replace(/(\.\w+)$/u, '-out$1');
  fs.writeFile(fileName, replace(content), 'utf-8', function(err) {
    if (err) {
      console.error(err);
    }
    console.log(`tslint comments in ${file} has been removed!`);
  });
}

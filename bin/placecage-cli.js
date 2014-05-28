#!/usr/bin/env node

var program = require('commander');
    pkg = require('../package.json'),
    placekitten = require('placekitten');

var i, curArg, size,
    sizes = [];

program
    .version(pkg.version)
    .option('-d, --directory <path>', 'Directory to output images into. Defaults to current directory', '.')
    .parse(process.argv);

for (i = 2; i < process.argv.length; i++) {
    curArg = process.argv[i];
    if (curArg != '') {
        // Skip two args when a flag is encountered
        if (curArg[0] == '-') {
            i++;
        } else {
            sizes.push(curArg);
        }
    }
}

var options = {
    directory: program.directory,
    urlBase: 'http://placecage.com/'
};

for (i = 0; i < sizes.length; i++ ) {
    size = sizes[i];
    console.log('Downloading ' + size);
    placekitten(size, options).then(
        function(path) {
            console.log('  Done. ' + path);
        }, function(error) {
            console.log(error);
        }
    );
}

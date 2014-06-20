var _ = require('../');
var fs = require('fs');
var path = require('path');
var runTests = require('./tests.js');

//TODO: make better tests + better testing structure
fs.readFile(path.resolve(__dirname, 'fixtures/', 'pugs.md'), { encoding: 'utf-8' }, function(err,data){
    runTests(_(data));
});

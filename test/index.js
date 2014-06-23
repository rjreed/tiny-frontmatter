var _ = require('../');
var fs = require('fs');
var path = require('path');
var runTests = require('./tests.js');

var base = {
  attributes: {
    title: 'Facebook for Pugs',
    date: 'June 18, 2014',
    tags: ['facebook', 'pugs', 'cashmoney']
  },
  body: '# TODO: strategery'
};

var noFm = {
	attributes: {},
	body: 'What are snails even trying to do?'
};

//TODO: make better tests + better testing structure
fs.readFile(path.resolve(__dirname, 'fixtures/', 'pugs.md'), 'utf-8', function(err,data){
    runTests(_(data), base);
    console.log('All base tests passed!');
});

fs.readFile(path.resolve(__dirname, 'fixtures/', 'nofm.md'), 'utf-8', function(err,data){
    runTests(_(data), noFm);
    console.log('All tests passed for non-frontmattered file!');
});

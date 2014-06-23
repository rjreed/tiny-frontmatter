var fm = require('../');
var chai = require('chai');
var should = chai.should();
var fs = require('fs');
var path = require('path');

function compareRes(opts) {
  return describe(opts.label, function() {
    var file, obj;
    describe('Inital fs.readFile call', function() {
      it('loads file contents', function(done) {
        fs.readFile(path.resolve(__dirname, 'fixtures/', opts.filename), 'utf-8', function(err, data) {
          file = data;
          done();
        });
      });
    });
    describe('Tiny Front Matter', function() {
      it('responds to function call and returns an object', function() {
        obj = fm(file);
        obj.should.exist.and.be.an('object');
      });
    });
    describe('Returned Object', function() {
      it('has the correct keys', function() {
        obj.should.have.keys(['attributes', 'body']);
      });
      it('has the correct values', function() {
        obj.attributes.should.eql(opts.ref.attributes);
        obj.body.should.eql(opts.ref.body);
      });
    });
  });
}

compareRes({
  label: 'Base Test',
  filename: 'base.md',
  ref: {
    attributes: {
      title: 'Facebook for Pugs',
      date: 'June 18, 2014',
      tags: ['facebook', 'pugs', 'cashmoney']
    },
    body: '# TODO: strategery'
  }
});

compareRes({
  label: 'No-metadata Test',
  filename: 'nofm.md',
  ref: {
    attributes: {},
    body: 'What are snails even trying to do?'
  }
});

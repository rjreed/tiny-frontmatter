# tiny-frontmatter

This is a tiny node module for parsing a document containing simple metadata into a javascript object.

I made it for a quick, easily editable alternative to using other large libraries or wrapper libraries for large libraries. It doesn't have any dependencies, and only requires macha + chai for dev dependencies.

### Syntax

Frontmatter goes at the top of your file, and is delimited by the characters `---` before and after the metadata key/value pairs. Keys are unescaped strings followed by colon (with a whitespace character before and after if you want). Values can be either string or arrays. All keys, values, and array values should be unescaped (not wrapped in ' or " characters - just plain text).

### Use Example:

Start with a properly formated file:

```
---
title: Hello
date: June 18, 2014
tags: [ hello, world ]
---
Hello world!
How are you all doing?

```

Require the module:

```js
var tfm = require('tiny-frontmatter');
```

Pass the file's contents as a string to the module to get a parsed object back.

```js
fs.readFile( fs.readFile(path-to-hello.md, 'utf-8', function(err, data) {
  var parsed = tfm(data);
  // do something with your new object
})
```

This is the object that was returned from the above call:

```js
{
  attributes: {
    title: 'Hello',
    date: 'June 18, 2014'
    tags: ['hello', 'world']
    }
  body:  'Hello world!\nHow are you all doing?'
}
```

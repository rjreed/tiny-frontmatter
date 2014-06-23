(This is a work in progress and isn't a published module - it's just a tool I've been using)

# TinyFrontMatter

This is a tiny node module for parsing a document containing simple metadata into a javascript object.

I made it for a quick, easily editable alternative to using other large libraries.

### Use

Frontmatter goes at the top of your file, and is delimated by the characters `---` before and after the metadata key/value pairs. Keys are unescaped strings followed by colon (with a whitespace character before and after if you want). Values can be either string or arrays. All keys, values, and array values should be unescaped (not wrapped in ' or " characters').

Pass the file's contents as a string to the module to get a parsed object back.

### Example:

This file's contents:

```
---
title: Hello
date: June 18, 2014
tags: [ hello, world ]
---
Hello world!
How are you all doing?
```

become this object:

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

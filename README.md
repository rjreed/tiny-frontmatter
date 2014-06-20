(This is a work in progress and isn't a published module - it's just a tool I've been using)

# TinyFrontMatter

This is a tiny node module for parsing a document containing simple frontmatter-esque metadata to a javascript object.

I made it for a quick, editable alternative to using other large libraries.

### Use

Frontmatter goes at the top of your file, and is delimated by '---' at the top and bottom. Keys are unescaped strings followed by colon (and whitespace if you want). Values can be either strings or arrays, with unescaped strings as the array values.

Pass the file's contents as a string to the module to get a parsed object back.


### Example:

This file's contents:

> \-\-\-
> title: Hello
> date: June 18, 2014
> tags: \[ hello, world \]
> \-\-\-
> Hello world!
> How are you all doing?


become this object:

```js
{
  attributes: {
    title: 'Hello',
    date: 'June 18, 2014'
    tags: ['hello', 'world']
    }
    body:  'Hello world!\n'How are you all doing?'
}
```

#The HTML \<tt> tag.

The finest level of markup possible in HTML is at the character level; as in word processor, you can affect formatting on individual characters. The \<tt> is one of the inline elements which defines teletype text.

This tag is named for the teletype terminals used with the first computers, which were capable of printing only in a monspaced (TypeWriter) font. This tag tells the user agent that certain text should be rendered in a monospaced font. Suggested uses for this tag include reserved words in documentation, code listings, and so on. 

##Syntax
```
<tt></tt>
```
##Attributes

This element has no other attributes than the global attributes, [common](https://developer.mozilla.org/en-US/docs/Web/HTML/global_attributes) to all elements.

##Example 1
```
<tt>Teletype text.</tt>
```

However, the use of styles is preferred over individual inline tags. If you need text rendered in a monospace font, consider directly specifying the font parameters using styles instead of relying upon the \<tt> tag.


##Example 2
Shows removing \<tt> element and achiving as equivalent styling with CSS.

```
<p>Enter the following command: <span style="font-family: monospace;">ping simplytestable.com</span></p>
```
instead of:

```
<p>Enter the following command: <tt>ping simplytestable.com</tt></p>

```

##Example3
You might use \<tt> to describe the output from an archaic sports scores system:

```
<p>The scores rolled in underneath the moustached face of Dickie
    Davies, hot off the teletype machines that someone was operating
    deep in the dungeons of ITV: &quot;<tt>Heart of Midlothian: 4,
    Queen of the South: 2, Plymouth Argyle 3 ...</tt>&quot;</p>
```

Most browsers will render \<tt> content in Courier typeface.

\<tt> provides no semantic information about the text it encloses—it is purely used for text formatting purposes. 
That's why in most cases, use of a phrase element such as CODE (code passage), SAMP (program output sample), or KBD (user-supplied key board input) is more appropriate since these elements express the meaning of the text more clearly.

##Example4

Using \<kbd>
```
<li>At the username prompt, type <kbd>einstein</kbd>.</li>
```

\<samp>Indicate that the contents reflect sample output, such as from software.
##Example5  

```
<p>While working in the MacOS X Terminal, if you see <samp>command
 not found</samp>, that means that you mistyped the command name.</p>
``` 
##Advanced Usage

It is possible to style and add functionality to the \<tt> tag, this is done by adding an attribute to after the tt in the opening \<tt> tag.
Attributes allowed for the \<tt>tag include :-class, dir, id, lang, style and title.

In most cases **class** and **id** are used and its basic usage is shown below.

```
<tt id=”header”>Some tt text</tt>

```
Both **id** and **class** attributes refer to CSS styling of the element and is either stored in the \<head> of the webpage on in an external file.

##Browser support
 The \<tt> element has good browser support: all the major browsers render it in a fixed-width font, which is usually Courier.

 
##Special notes.
 
The \<tt> tag is not supported in HTML5.

If \<tt> was used for marking up keyboard input, consider the \<kbd> element; for variables, consider the \<var> element; for computer code, consider the \<code> element; and for computer output, consider the \<samp> element, or use CSS instead.






# <font>

<div style="background-color:#AEE5EF; padding: 15px;">
<strong>IMPORTANT NOTICE</strong>
<p>The <strong>font</strong> element has been deprecated as of HTML 4.01. Do not use it. Since the introduction of HTML5, all font styling should be done via the CSS font properties.</p>
</div>

The `<font>` tag was used along with its attributes to provide custom styling to the *font* it encompassed.

Before **HTML5** was introduced, the `<font>` element along with its attributes like `size` and `color` were used to provide custom font styling. As stated in the notice above, the `<font>` element should no longer be used.


# Syntax

```
	<font size="4" color="#000000" face="arial, tahoma, sans-serif"></font>
```

### Attributes

#### size

The `size` attribute accepts any number between `1 - 7`. `1` is the smallest, `3` is known as the default and `7` is the largest value that can be set.

#### color

The `color` attribute accepts and color specified in hexidecimal format (`#000000`) as well as named colors (`white`).

#### face

A more modern way to think of the `face` attribute is its like setting the CSS property `font-family`. It takes a comma separated list of font names. If the fonts listed are not found, then the browser defaults will be used.

## Example 1

This first example should set the text it wrap to the largest font-size this element allows which is `7`.

```
	<font size="7">
		This is the test that will have custom styles.
	</font>
```

## Example 2

This example will set the `size` and `color` of the font it wraps.

```
	<font size="7" color="#000000">
		This is the test that will have custom styles.
	</font>
```

## Example 3

This example will show the full power, or lack thereof, of the the `<font>` tag. It will set the `size`, `color` and `face` of the font. 

```
	<font size="7" color="#000000" face="Arial, sans-serif">
		This is the test that will have custom styles.
	</font>
```

## Special Notes

As noted above, the `<font>` element should no longer be used.

## Browser Support

Modern browsers have fall-backs put into place in case the `<font>` element is encountered.
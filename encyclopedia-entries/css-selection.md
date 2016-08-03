# ::selection

The `::selection` is a pseudo selector.

The `::selection` and psuedo selector is most commonly used to change the color or background or text-shadow of text that is highlighted by a user.

In order to ensure that this psuedo selector works well across all browsers, the `::moz-selection` for Mozilla based browsers was introduced.

Unlike some other psuedo selectors, the `::selection` selector requires the use of the double `::`.

## Syntax

```
    ::selection: < color | background | background-color | text-shadow >;
```

## Properties

The following CSS properties can be set as attributes for the `::selection` psuedo element.

#### color

The `color` attribute will specific the color the of highlighted text.

#### background

The `background` property specifies the background of the highlighted text.

#### background-color

The `background-color` property specifies the color background of the highlighted text.

#### text-shadow

The `text-shadow` property specifies the the text shadow of the highlighted text.

## Example 1

In this first example we show that both `background` and `background-color` essentially can be used for the same thing.

```
    ::selection {
    	background: #000000;
    }
```
is the same as

```
    ::selection {
    	background-color: #000000;
	}
```

However, the second example is more specific than the first. Meaning it would take precedence.	
    

## Example 2

In this example, we will set highlighted text to be red.

```
	::selection {
		color: #ff0000;
	}
```

## Example 3 - Complex

This example will set the `background-color` to yellow, the text `color` to blue and the `text-shadow` to black.

```
	::selection {
		background-color: yellow;
		color: blue;
		text-shadow: #000000;
	}        
```

## Special Notes

The `::selection` psuedo element requires both colons - `::`;

The `::moz-selection` was introduced to ensure this selectored worked consistently across all browsers. This version specifically targets Mozilla based browsers.
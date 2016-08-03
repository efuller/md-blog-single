#The :visited CSS tag.

`:visited` is a pseudo-class selector that can change some of the styling on an anchor link `(a)` element if the user's browser has already visited the link. It's meant to help users distinguish the difference between links they have and haven't visited.

Note that it will only select anchors \<a> that have an 
href attribute.
It will select any of these

```
<a href="#">Random Link</a>
<a href="#id">Internal Link</a>
<a href="http:mtcode.com">External Link</a>
```

It will not select this

```
<a>No href attribute</a>
```
##Syntax
:visited {style properties}

The following are properties often used with links:

* *color:* Changes the colors of the links
* *background-color:* Highlights the link, as if it had been highlighted with a highlighter pen
* *text-decoration:* Commonly used to control whether the link is underlined; although, it can specify that text should be have a strikethrough, blink, or overlined.
 
###Values
 
Once someone has clicked that link, its state changes to visited, and its color changes to the purple used by most browsers. To change that color to deep red, use this style:

```
a:visited { color: #900; }
``` 
Due to privacy concerns, browsers place severe limits on which CSS properties you can apply to the :visited pseudo class. As it turns out, years ago some nefarious types had figured out how to use JavaScript to read changes in the style of :visited links to determine which sites people had visited. For example, by loading a new background image for visited links, you can determine whether a visitor has been to Paypal.com, eBay.com, BankofAmerica.com, or not-safe-for-work.com. Because of that potential problem, you’re limited to styling the color, background-color, and border-color of visited links—and only if you’ve already given the normal states of those links a color, background color, or border color. In other words, you can’t do much with the :visited pseudo-class.
 
 
####Color 
The :visited pseudo-class targets all links on the page that have been clicked, or visited, by the user. With this pseudo-class, you can style visited links differently from other links.

In most cases, you’ll probably have a generic a style, :visited, and :hover styles in your style sheets. For maximum design control you may want to style all the different states. But for that to work, you must specify the links in a particular order: link, visited, hover, and active. Use this easy mnemonic to remember it: LoVe/HAte. So here’s the proper way to add all four link styles:

```
a:link { color: #F60; }
a:visited { color: #900; }
a:hover { color: #F33; }
a:active {color: #B2F511; }
```

##Example1
```
a:visited {color: #4b2f89;}
```
##Example2
```
a:visited {background-color: white}
``` 
##Example3
```
a:visited {
  color : #333399;
  text-decoration : none;
}
```
##Special Notes

Though direct styling for :visited links is limited, there are lots of clever ways to extend your options for styling visited links. 
Here I will refer to two blogs which shows us as how to *Extend :visited*


Revisiting :visited, [from Joel Califa](joelcalifa.com/blog/revisitine-visited), shows an example of using localstorage to style visited, in-domain links.

Hacking :visited, [from Una Kravets](https://una.im/hacking-visited), turns :visited on its head by adding an "unvisited" tag as :after content to links, which is then hidden with a background color swap after the link is visited.

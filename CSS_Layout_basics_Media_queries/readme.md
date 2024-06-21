# CSS Basics and Media Queries

## What is CSS?

CSS stands for Cascading style sheets. It describes to the user how to display HTML elements on the screen in a proper format.

## How to write css ?

refer img

## Ways of attaching CSS

- inline CSS
- css in <style> tag in head
- external css

## CSS selectors

```
  There are several different types of selectors in CSS.

CSS Element Selector
CSS Id Selector
CSS Class Selector
CSS Universal Selector
CSS Group Selector
```

## CSS Specificity

```
!important

Inline styles: It is directly attached to the element which is to be styled. For example: <p style="color: red;">. It has the highest priority.

IDs: It is a unique identifier for the elements of a page that has the second-highest priority. For example: #para.

Classes, attributes, and pseudo-classes: It includes classes, attributes, and pseudo-classes (like :focus, :hover, etc.).

Elements and pseudo-elements: It includes the name of elements (div, h1) and pseudo-elements (like :after and :before). They have the lowest priority.

Universal selector
```

## Basic CSS properties

```
- background related
background-color
background-image
background-repeat
background-attachment
background-position

- border
border-style
border-color
border-width
border-radius

- display (important)
display: inline;
display: inline-block;
display: block;
display: flex;
display: grid;
... etc

- font
CSS Font color: This property is used to change the color of the text. (standalone attribute)
CSS Font family: This property is used to change the face of the font.
CSS Font size: This property is used to increase or decrease the size of the font.
CSS Font style: This property is used to make the font bold, italic or oblique.
CSS Font variant: This property creates a small-caps effect.
CSS Font weight: This property is used to increase or decrease the boldness and lightness of the font.

- color
RGB format.
RGBA format.
Hexadecimal notation. #ef901
HSL.
HSLA.
Built-in color.

- margin
margin	This property is used to set all the properties in one declaration.
margin-left	it is used to set left margin of an element.
margin-right	It is used to set right margin of an element.
margin-top	It is used to set top margin of an element.
margin-bottom	It is used to set bottom margin of an element.

- padding
padding-top
padding-bottom
padding-left
padding-right

margin/padding values
auto	This is used to let the browser calculate a margin.
length	It is used to specify a margin pt, px, cm, etc. its default value is 0px.
%	It is used to define a margin in percent of the width of containing element.
inherit	It is used to inherit margin from parent element.

- overflow ()
visible	It specifies that overflow is not clipped and renders the element outside its box. It is the default value of the CSS overflow property.
hidden	It specifies that the overflow is clipped, and rest of the content will be invisible.
scroll	It specifies that the overflow is clipped, and a scroll bar is used to see the rest of the content.
Clip	It specifies that if overflow is clipped, then the rest of the content will be clipped.
auto	It specifies that if overflow is clipped, a scroll bar is needed to see the rest of the content.
inherit	It inherits the property from its parent element.
initial	It is used to set the property to its initial value.

- height - px, pt, cm, em, rem, %, ..... etc.
100vh
- max-height
- width
- max-width

- position (important)
There are five different position values:

static
relative
fixed
absolute
sticky

- important
!important marker

- others
opacity
visibility

```

## functions in CSS

```
calc() - perform calculations
attr() - returns attribute value of selected element
max() - largest value
min() - smallest value
rgb(0-255, 0-255, 0-255) - red green blue
rgba(0-255, 0-255, 0-255, 0.5) - rgb with Alpha model
var() - inserts the value of custom property
linear-gradient() - cubiz bezier curve
radial-gradient() - radial gradient
```

## CSS animations

```
Property	Description
@keyframes	It is used to specify the animation.
animation	This is a shorthand property, used for setting all the properties, except the animation-play-state and the animation-fill- mode property.
animation-delay	It specifies when the animation will start.
animation-direction	It specifies if or not the animation should play in reserve on alternate cycle.
animation-duration	It specifies the time duration taken by the animation to complete one cycle.
animation-fill-mode	it specifies the static style of the element. (when the animation is not playing)
animation-iteration-count	It specifies the number of times the animation should be played.
animation-play-state	It specifies if the animation is running or paused.
animation-name	It specifies the name of @keyframes animation.
animation-timing-function	It specifies the speed curve of the animation.
```

## media queries

```
@media not|only media type and (media feature and|or|not media feature)
{
    // CSS Property
}


Media Types
There are different types of media available in the media query. These are as follows.

All: It is the default value for the media type. We can use this for all types of devices.
Print: We can use this for printer devices.
Screen: We can use this for the mobile or computer screen type, etc.
Speech: We can use this for the screen reader, which is used to read the screen.

There are lots of media features
Media Features
https://www.javatpoint.com/css-media-query

we will look at max-width & min-width


```

## Flex box

```
What is Flexbox?
In CSS, we use Flexbox, a layout model that offers us a variety of ways to arrange the element and helps us align the element in CSS. With Flexbox's help, we can design responsive and dynamic webpage or user interface layouts.

Flex-direction: with the help of flex-direction, we can arrange the element in any direction, like a row, a column, and a row reverse or a column reverse.
Justify-content: Determines how flex items are aligned horizontally within the container using the justify-content property.
Align-items: Defines the vertical alignment of flex items inside the container.
Flex-wrap: It specifies whether or not flex items should wrap across multiple lines or remain on a single line.
Align-content: When the cross-axis has extra space, align-content regulates how the flex lines are aligned.
```

# Creating Interactive Web Pages & Introduction to JQuery

## previous Recap

What is the difference between call, apply, bind in JS
```
refer the scripts.js
```

## What is Jquery ?

```
jQuery is a small and lightweight JavaScript library.
jQuery is cross-platform.
jQuery means "write less do more".
jQuery simplifies AJAX call and DOM manipulation.

```

## Jquery Syntax

```
$(document).ready(function() {
    $('#myElement').text('Hello, World!');
});


shorthand

$(function() {
    $('#myElement').text('Hello, World!');
});



end of body in html

<html>
....
<body>.....
<script>
        $('#myElement').text('Hello, World!');
</script>
</body>
</html>
```


## Jquery Selectors 

refer [link1](https://www.javatpoint.com/jquery-selectors)
refer [link1](https://www.w3schools.com/jquery/jquery_ref_selectors.asp)


# Jquery Effects

- Display Effects

hide()
show()
toggle()


- Fading Effects

fadeIn()
fadeOut()
fadeToggle()
fadeTo()

- Sliding Effects

slideDown()
slideUp()
slideToggle()

- Others

animate()
delay()
etc....


## Pros/Cons of JQuery

```
### Pros of jQuery

1. **Ease of Use:**
   - Simplifies complex JavaScript tasks with a concise and readable syntax.
   - Easy to learn and use, especially for beginners.

2. **Cross-Browser Compatibility:**
   - Handles cross-browser issues, ensuring consistent behavior across different web browsers.

3. **DOM Manipulation:**
   - Provides powerful and easy-to-use methods for DOM manipulation, event handling, and animations.

4. **Ajax Support:**
   - Simplifies making asynchronous HTTP requests and handling responses.

5. **Rich Plugin Ecosystem:**
   - Large number of plugins available for adding functionality like sliders, date pickers, and more.

6. **Community and Documentation:**
   - Extensive community support, numerous tutorials, and comprehensive documentation.

### Cons of jQuery

1. **Performance:**
   - Can be slower than modern JavaScript frameworks and libraries due to direct DOM manipulation.
   - Adds extra weight to the page, impacting load times, especially for simple tasks that can be done with vanilla JavaScript.

2. **Redundancy:**
   - Many of the features provided by jQuery are now available natively in modern JavaScript (ES6 and beyond).

3. **Not Modular:**
   - jQuery is a monolithic library, meaning you include the entire library even if you only need a small part of its functionality.

4. **Encourages Imperative Programming:**
   - Code can become less structured and harder to maintain in larger projects compared to declarative frameworks like React.

5. **Declining Popularity:**
   - Less popular in modern web development due to the rise of frameworks like React, Angular, and Vue.js, which offer more advanced features and better performance for complex applications.

6. **Limited for SPAs:**
   - Not well-suited for building single-page applications (SPAs) with complex state management and component-based architecture.

### Summary

jQuery is a powerful and easy-to-use library for handling a variety of common JavaScript tasks, offering significant advantages in terms of cross-browser compatibility, DOM manipulation, and community support. However, its performance issues, redundancy with modern JavaScript features, and the rise of more advanced frameworks have led to a decline in its popularity for new projects, especially those requiring complex state management and efficient DOM updates.
```

## JQuery Events
```
refer the scripts

on() method attaches one or more event handlers for the selected elements.
`
$("p").on({
  mouseenter: function(){
    $(this).css("background-color", "lightgray");
  },
  mouseleave: function(){
    $(this).css("background-color", "lightblue");
  },
  click: function(){
    $(this).css("background-color", "yellow");
  }
});
`

```


## JQuery on HTML
```

Three simple, but useful, jQuery methods for DOM manipulation are:

text() - Sets or returns the text content of selected elements
html() - Sets or returns the content of selected elements (including HTML markup)
val() - Sets or returns the value of form fields


html()
jQuery html() method is used to change the entire content of the selected elements. It replaces the selected element content with new contents.


text()
The jQuery text() method is used to set or return the text content of the selected elements.


val()
- It is used to get current value of the first element in the set of matched elements.
- It is used to set the value of every matched element.

GET
examples: 

`
$("#btn1").click(function(){
  alert("Text: " + $("#test").text());
});
$("#btn2").click(function(){
  alert("HTML: " + $("#test").html());
});
$("#btn1").click(function(){
  alert("Value: " + $("#test").val());
});
`

SET
examples:

`
$("#btn1").click(function(){
  $("#test1").text("Hello world!");
});
$("#btn2").click(function(){
  $("#test2").html("<b>Hello world!</b>");
});
$("#btn3").click(function(){
  $("#test3").val("Dolly Duck");
});
`

Callback Function for text(), html(), and val()
`
$("#btn1").click(function(){
  $("#test1").text(function(i, origText){
    return "Old text: " + origText + " New text: Hello world!
    (index: " + i + ")";
  });
});

$("#btn2").click(function(){
  $("#test2").html(function(i, origText){
    return "Old html: " + origText + " New html: Hello <b>world!</b>
    (index: " + i + ")";
  });
});
`



----
jQuery attr() method is used to get attribute values.

GET
`
$("button").click(function(){
  alert($("#w3s").attr("href"));
});
`

SET
`
$("button").click(function(){
  $("#w3s").attr("href", "https://www.w3schools.com/jquery/");
});
`

Callback
`
$("button").click(function(){
  $("#w3s").attr("href", function(i, origValue){
    prevVal = origValue;
    return origValue + "/jquery/";
  });
});
`

---

Add New HTML Content
We will look at four jQuery methods that are used to add new content:

append() - Inserts content at the end of the selected elements
prepend() - Inserts content at the beginning of the selected elements
after() - Inserts content after the selected elements
before() - Inserts content before the selected elements


jQuery append() method inserts content AT THE END of the selected HTML elements.
`
$("p").append("Some appended text.");
`

Query prepend() method inserts content AT THE BEGINNING of the selected HTML elements.

`
$("p").prepend("Some prepended text.");
`

---

jQuery after() and before() Methods

jQuery after() method inserts content AFTER the selected HTML elements.

jQuery before() method inserts content BEFORE the selected HTML elements.

`
$("img").after("Some text after");

$("img").before("Some text before");
`

----

Remove Elements/Content
To remove elements and content, there are mainly two jQuery methods:

remove() - Removes the selected element (and its child elements)
empty() - Removes the child elements from the selected element

jQuery remove() method removes the selected element(s) and its child elements.
`
$("#div1").remove();
`

jQuery empty() method removes the child elements of the selected element(s).

`
$("#div1").empty();
`

Filter the Elements to be Removed

removes all <p> elements with class="test":  
`
$("p").remove(".test");
`

-----

jQuery Manipulating CSS
jQuery has several methods for CSS manipulation. We will look at the following methods:

addClass() - Adds one or more classes to the selected elements
removeClass() - Removes one or more classes from the selected elements
toggleClass() - Toggles between adding/removing classes from the selected elements
css() - Sets or returns the style attribute

addClass() Method ->
`
$("button").click(function(){
  $("h1, h2, p").addClass("blue");
  $("div").addClass("important");
});
`

removeClass() Method ->
`
$("button").click(function(){
  $("h1, h2, p").removeClass("blue");
});
`

toggleClass() Method ->
This method toggles between adding/removing classes from the selected elements:

$("button").click(function(){
  $("h1, h2, p").toggleClass("blue");
});







css()
jQuery CSS() method is used to get (return)or set style properties or values for selected elements.

Syntax:

css("propertyname","value");

multiple CSS properties

css({"propertyname":"value","propertyname":"value",...});

`
$("p").css("background-color", "yellow");
`

`
$("p").css({"background-color": "yellow", "font-size": "200%"});
`

----

jQuery Dimension Methods
jQuery has several important methods for working with dimensions:

width()
height()
innerWidth()
innerHeight()
outerWidth()
outerHeight()
`
$("button").click(function(){
  var txt = "";
  txt += "Inner width: " + $("#div1").innerWidth() + "</br>";
  txt += "Inner height: " + $("#div1").innerHeight();
  $("#div1").html(txt);
});
`


```


## JQuery Traversing
```
jQuery traversing, which means "move through", are used to "find" (or select) HTML elements based on their relation to other elements


Query traversing, you can easily move up (ancestors), down (descendants) and sideways (siblings) in the tree, starting from the selected (current) element.


[refer](jquery_traversing.png)

Illustration explained:

The <div> element is the parent of <ul>, and an ancestor of everything inside of it
The <ul> element is the parent of both <li> elements, and a child of <div>
The left <li> element is the parent of <span>, child of <ul> and a descendant of <div>
The <span> element is a child of the left <li> and a descendant of <ul> and <div>
The two <li> elements are siblings (they share the same parent)
The right <li> element is the parent of <b>, child of <ul> and a descendant of <div>
The <b> element is a child of the right <li> and a descendant of <ul> and <div>


Ancestors

Traversing Up the DOM Tree
Three useful jQuery methods for traversing up the DOM tree are:

parent()
parents()
parentsUntil()


Descendants

Traversing Down the DOM Tree
Two useful jQuery methods for traversing down the DOM tree are:

children()
find()

Siblings

Traversing Sideways in The DOM Tree
There are many useful jQuery methods for traversing sideways in the DOM tree:

siblings()
next()
nextAll()
nextUntil()
prev()
prevAll()
prevUntil()

Filtering

The first(), last(), eq(), filter() and not() Methods
The most basic filtering methods are first(), last() and eq(), which allow you to select a specific element based on its position in a group of elements.

Other filtering methods, like filter() and not() allow you to select elements that match, or do not match, a certain criteria.

first() Method ->
`
$(document).ready(function(){
  $("div").first();
});
`

last() Method ->
`
$(document).ready(function(){
  $("div").last();
});
`

eq() method -> 
eq() method returns an element with a specific index number of the selected elements.
`
$(document).ready(function(){
  $("p").eq(1);
});
`

filter() Method -> 
filter() method lets you specify a criteria.
`
$(document).ready(function(){
  $("p").filter(".intro");
});
`

not() Method ->
not() method returns all elements that do not match the criteria.

*not() method is the opposite of filter().*

`
$(document).ready(function(){
  $("p").not(".intro");
});
`

```


## jQuery - AJAX 

### What is AJAX ?
```
What is AJAX?
AJAX = Asynchronous JavaScript and XML.

In short; AJAX is about loading data in the background and display it on the webpage, without reloading the whole page.

Examples of applications using AJAX: Gmail, Google Maps, Youtube, and Facebook tabs.
```

### What About jQuery and AJAX?

```
jQuery provides several methods for AJAX functionality.

With the jQuery AJAX methods, you can request text, HTML, XML, or JSON from a remote server using both HTTP Get and HTTP Post - And you can load the external data directly into the selected HTML elements of your web page!

Note: Without jQuery, AJAX coding can be a bit tricky! 
Different browsers have different Implementation of AJAX
```

### More...

```


AJAX is the art of exchanging data with a server, and updating parts of a web page - without reloading the whole page.

[example](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_ajax_load)


 load() Method -> 
 load() method is a simple, but powerful AJAX method.

The load() method loads data from a server and puts the returned data into the selected element.

Syntax:
`
$(selector).load(URL,data,callback);
`


HTTP Request: GET vs. POST
Two commonly used methods for a request-response between a client and server are: GET and POST.

GET - Requests data from a specified resource
POST - Submits data to be processed to a specified resource


$.get() Method -> 

$.get() method requests data from the server with an HTTP GET request.

Syntax:

$.get(URL,callback);

`
$("button").click(function(){
  $.get("demo_test.asp", function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
});
`

$.post() Method -> 

The $.post() method requests data from the server using an HTTP POST request.

Syntax:

$.post(URL,data,callback);

`
$("button").click(function(){
  $.post("demo_test_post.asp",
  {
    name: "Donald Duck",
    city: "Duckburg"
  },
  function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
});
`
```

## JQuery Events
```
refer [link](https://www.w3schools.com/jquery/jquery_ref_events.asp)

click() Method example ->

`
$("p").click(function(){
  alert("The paragraph was clicked.");
});
`

mousedown() Method -> 
`
$("div").mousedown(function(){
  $(this).after("Mouse button pressed down.");
});
`



```


## JQuery Misc

```
jQuery noConflict() Method
The noConflict() method releases the hold on the $ shortcut identifier, so that other scripts can use it.
`
$.noConflict();
jQuery(document).ready(function(){
  jQuery("button").click(function(){
    jQuery("p").text("jQuery is still working!");
  });
});
`

Note: If you have a block of jQuery code which uses the $ shortcut and you do not want to change it all, you can pass the $ sign in as a parameter to the ready method. This allows you to access jQuery using $, inside this function - outside of it, you will have to use "jQuery":

`
$.noConflict();
jQuery(document).ready(function($){
  $("button").click(function(){
    $("p").text("jQuery is still working!");
  });
});
`

jQuery Filters
Use jQuery to filter/search for specific elements.

example:

Filterable List
`
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

html:
<input id="myInput" type="text" placeholder="Search..">
<br>

<ul id="myList">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
  <li>Fourth</li>
</ul>
`


```
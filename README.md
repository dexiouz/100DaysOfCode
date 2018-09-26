##100daysofcode

###Day0 August 13, Monday

**Today's work**: Working on setting up repo and initializing my workspaces.

**Thoughts**: Setup new repo , git init etc

**Link to work**: No project at the momentgit 


###Day1 August 14, Tuesday

**Today's work**:Crash course on es6 .

**Thoughts**: Focus is on the **var, let and const**.
The *var* variables can be accessed after they are declaredYou can as well acess that they have been declared. The same is not true for the **let and const.**
var variables are function scoped, but if there is no function, the var is scoped to the entire window.
**Let and const** are block scoped. This gives better flexibility than the var.Blocks are denoted with curly brackets. Let variables can be updated, const variables can,t be updated.

Discovered the object.freeze() that allows you to make an object const immutable.

Dived into arrow functions. Arrow functions are anonymous functions.But you can put them in a variable.
 
###Day2 August 15, Wednesday
**Today's work**: Continued with es6 functionalities:

**Thoughts**: There is such a thing as 'console.table()?' OMG!!
With arrow functions, the keyword 'this' is not bound to that actual function.
When you shouldn't use arrow functions:
1) when you need to add a prototype method;
2)when you need a method to bind to an object :
3)when you need arguments object;
4)When using event listeners

**Link to work**: [github]('github.com/dexiouz/100DaysOfCode')

###Day3 August 16, Thursday
**Today's work**: Still on es6. Solved arrow function exercises to wrap it up.
 Dived into **template literals**. OMG!!! template literals are cute.
**Link to work**: [github]('github.com/dexiouz/100DaysOfCode')

###Day4 August 17, Friday
**Today's work**: Still on es6. Spent the early hours manipulating template literals, nesting and a=mbedding template literals.s
**Link to work**: [github]('github.com/dexiouz/100DaysOfCode')



###Day5 August 19, Sunday
**Today's work**: Still on es6. Did alot of cool stuff with template-literals such as tagging template literals; There were  two basic manipulations. 
**Link to work**: [github]('github.com/dexiouz/100DaysOfCode')

###Day6 August 21 Tuesday
**Today's work**:Worked with the  New string methods of ES6. They are **.startsWith(), .endsWith(), .includes(), .repeat()**
Dived into **Destructuring objects and arrays and functions**;
In destructuring, curly brackets are used whenn you destructure from an object but normal braces are used when you destructure from an array.
**Link to work**: [github]('github.com/dexiouz/100DaysOfCode')

###Day7 August 22 Wedneday
**Today's work**:The **for-of-loop** is used to loop through any type of data that is iterable. Used the for-in-loop to loop through an object.

The **for-of-loop** is used to loop through any type of data that is iterable. Iterable is anything that can be looped over such as an array, map , set , generators etc. Disadvantage of the **forEach loop** is that you cant abort or continue the loop; you cant skip. The **for-in loop** mostly returns the index, to get the items, you use the index e.g **console.log(cuts[index])**
**The for-of-loop** is the best, can be used for any type of data except objects. You can abort or continue the loop with if statements and you can also skip. To derive the index, call the .entries() method to derive an iterator.
Another useful example is iterating over arguments. For instance when you don't know how many arguments are being passed. The argument proto is object so you may have to convert it to an arrya forst but woth the for-of-loop you dont have to convert it to an array.

You cannot iterate over an object but you can use for-in loop to do some things. The object.keys(object) will take in an object and return the keys.

**the array.from()** takes something that is array(ish) and turns it into a full array. Array(ish) means it has some of the methods of an array such as length etc but not all array props.
**Link to work**: [github]('github.com/dexiouz/100DaysOfCode')

###Day8 and Day 9 August 23 and 24 Thursday and Friday
**Today's work**Read array methods on the **javascript Ninja TextBook.** 
ES6 array methods. The array.from() and aray.of(). Found out, array.from() takes a second argument which is a map function which allows us to modify the data as we are creating the array. 
**Link to work**: [github]('github.com/dexiouz/100DaysOfCode')


###Day12 
**Today's work**: New ES6 Array method .find() is a callback function that returns true or false until you actually find it, works better with loops. To find multiple try the array.filter which returns an array of objects.
The .findIndex() gets the index of the element, for instance if you want ot delete it.

Array.some() and Array.every() are not actually part of ES6 but they are not widely used.
They check through an array to see i sme of the data or all of the data meet what you're looking for.They both return true or false
**Link to work**: [github]('github.com/dexiouz/100DaysOfCode')

###Day13 
**Focus:** spread-operator
**Today's work**:The spread operator takes every single item from an iterable eg arrays, dom, objects, string and apply it to the containing element.
You can also copy an array without overriding the contents of the main array when you edit the copied array.
**Link to work**: [github]('github.com/dexiouz/100DaysOfCode')

###Day14
**Focus:** spread-operator
**Today's work**:Used spread operators to spread into a function. And as an alternative to array.from(). To remove an object from an array of objects.
**Link to work**: [github]('github.com/dexiouz/100DaysOfCode')

###Day15
**Focus:** The rest-param and object literals
**Today's work**:The rest-param is the opposite of the spreaad operator; where the spread operator takes an array andunpacks it into multiple array, the rest param takes multiple items and packs them into a single array. Two cases where rest params are used are in arrays and in destructuring situations.

Another focus was on object literals and used in several cases
**Link to work**: [github]('github.com/dexiouz/100DaysOfCode')

###Day16
**Focus:** revision of previous days works. Took a peep on promises.

Another focus was on object literals and used in several cases
**Link to work**: [github]('github.com/dexiouz/100DaysOfCode')

###Day17
**Focus:** Flexbox.
Set up flexbox environment , created html with few divs, linked css stylesheet, used flex display property on  the divs. 
**Link to work**: [github]('github.com/dexiouz/100DaysOfCode')

###Day18
**Focus:** Flexbox.
Flex-Direction: The 'flex-direction: row' the default of any flex container spans the content vertically to hit the height of the container. It stacks them side by side.
The 'flex-direction:column' instead stacks the contents vertically on top of each other. 
 

When defining the flex-direction as row or column, we have two accesses which are the main accesses like justify-content and align-items. 
The main access when it is row, is from left to right. If it is column, it goes from top to bottom.

There is also flex-direction: row-reverse or column reverse which are the cross accesses, the access starts in reverse. They are the cross accesses
 

Flex-wrap:
Suppose the flex elements have total widths bigger than your screen size, the 'flex-wrap: wrap'property comes in to evenly stretch  the elements in the screen. 
Suppose I give each box a width of 300px which is a total of 300px*10, that is 300px. The problem is, my screen is not 300px wide.
Here flex tries to share the flex elements evenly on the screen.
Thats where we apply the flex-wrap on the flex container.


However, there is also the wrap-reverse for cross access.
Sometimes there appears additional spaces on the screen unused by the flex items ; in this case you can fill the space by setting  the width: 33.33333%. It works, lol.

But if you switch the flex-direction to column, things kind of change, this is essentially because of the 100vh height we provided, it hits the height and starts a new vertical wrap. But using 'min-height: 100vh' causes the flex elements to overflow with wrap so you can scroll from to)p to bottom.

Lets revert back to flex direction row and gives the elements a margin of 10px, it breaks. 
To solve it, use width: calc(33.33333%-20px).
Using padding or border properties gives you something interesting too.
**Link to work**: [github]('github.com/dexiouz/100DaysOfCode')

###Day19
**Focus:** Flexbox.
Flex box ordering is a way to move the order of DOM elements without moving them in the DOM.
The flex:1 property distributes the elements equally on the screen. 
Order takes a number and pushes the target element further down the screen to the right . The default order value is 0. Order is good especially for responsiveness.
Order also takes negative values but instead pushes the target element to the left.

**Link to work**: [github]('github.com/dexiouz/100DaysOfCode')

###Day20
**Focus:** Flexbox.
Taking an overview of flexbox from Netninja.
Building a good website requires painstaking care in positioning elements. Such properties like position: relative or absolute which takes values are used for positioning to get elemnts where we want them to be. 
 To create grids, one needed the float property, even for layouts or navigation systems, the float property was the ideal thing.
 The fixed height property was needed for giving columns same height.
 These methods are tiring, this is where the css flexbox comes in.

What the flexbox? 
 Flexbox is a CSS display type designed for crafting CSS layouts much easier.

With CSS flexbox you can easily control the position, size and spacing of elements relative to each other and to their parent element.

And the better part? It works great responsively.               

Basically flexbox works like so: Take an element such as a div, give it a classname or id, then give a display property of flex and that is all, every of its direct children becomes flex elements and essentially becomes more flexible and we can basically control how they shrink and how they grow as well give the spacing between them.

Some benefits of using flexbox:
Helps to create navigation bars and menus very easily without having to use floats or worried about collapsing elements.

We can also create Grid elements really easily and Bar charts too. Again creating equal height columns becomes easier with flexbox.

For browsers which do not fully support flexbox such as IE8, we use modernizr. A modernizr is a javascript library that basically dictates which browser a user is using to view your site. And when it dictates that the browser does not support flexbox, it creates classes which we can use to style the elements specific to that web browser.

**Link to work**: [github]('github.com/dexiouz/100DaysOfCode')


###Day21
**Focus:** Flexbox.
Basically when you give a display:flex property to an element, every direct child of that element becomes a flex item and we can then control their behaviour or the behaviour of the parent element.Using flexbox properties we can determine how these flex items grow or shrink relative to each other or whether they should stacked side by side or in colum or row form.

Looked at flex over float.
Next was flex-grow.

###Day22
**Focus:** Flexbox.
Flexbox is very responsive. Responsive  means basically that the flex items fit themselves well in every screen size.
flex-shrink
Recall that on day 21 we showed how the flex-grow property determines the rate at which the items grows. Well there is also an opposite. The flex-shrink which determines the rate at which the flex items shrink as the browser gets smaller.This flex-shrink also controls the width of the elements as they shrink in relation to each another.   So far, our flex items shrink by default shrink in proportion to one another at the same rate. To overcome that, we give values to the shrink property. Notice that the higher the number the smaller the flex item becomes. 
flex-wrap
Recall the default behaviour of ekements when they shrink. Now with a minimum width of 200px, as we continue to shrink the browser, it gets to a point where the last element (green one) begins to disappear and goo off the page and we have to scroll horizontally through the page to see it. Thats weird, but that's where the flex-wrap comes in. What it does is it tells the elements, "ok instead of you to go off the page when you reach your minimum width, I want you to wrap to the next line."
To do this, set the flex-wrap on the main flex container.
The flex-wrap: reverse does the opposite, instead of the elemnt wrapping to the next line, it wraps to the line above.

###Day23
**Focus:** Flexbox.
Flex-basis: The flex basis which is very similar to min-width property; as the name suggests, the minimum width, written as min-width is the smallest width an element can take. The flex-basis defines a starting width for each of the elements.
We can define the flex-basis property on on the conatiner holding the flex items and that bacomes a default value for all the items like so:

Or we can give them individual flex-basis to make them have different starting positions. Also applying a flex-grow of 1 to the parent container makes them grow at the same rate.

Between the flex-basis and min-width, it is advisable to use the flex-basis. 
The flex-grow,flex-shrink and flex basis, can be combined as a one property. The property is called flex, it takes three values, the first is the flex-grow, then the flex-shrink and finally the flex-basis. flex: 1 0 200px;

###Day24
**Focus:** Flexbox.
Menu with flex-box:


###Day25
**Focus:** Flexbox.
Nested Menu with flex-box:

###Day26
**Focus:** Flex-flow and flex-axis:
Recall that the default behaviour of flex items is to stack horiz



###Day27
**Focus:** Align-items on cross-Axis:
Recall that one of the properties that affects the main axis (if the flex-flow is row) is the justify-content property. The same way, the align-items property affects the cross axis(if the flex-flow is column).

Both the align items and justify-content can be used together.

Now lets set flex-flow to column and set the .box width to 100px and lets try justify-content and align-items. 
pic 4 use align-items and justify-content only.

###Day28
**Focus:** Flex-order:
The flex-order property is used to set the order of flex items. The default order of flex-items is a value of zero.
So the way it works is that the lower number comes first and the highest number comes last.

###Day29
**Focus:** rEVIEW PREVIOUS WORKS ON FLEX-BOX.

###Day30
**Focus:** CSS 
CSS is a collection of rules. Each rule targets a specific tag or element on a HTML document.
The rules come in two components :
SELECTOR: DECLARATION 

###Day31
**Focus:** CSS 
There are three ways to add CSS styling viz: inline styling, embedded style sheets and External stylesheets.
The best is the external stylesheet.
 The inline styling is time consuming, messy and tricky to manage. It is only good for specialised rules.
  For Embedded styling, it is time consuming too , difficult to update and maintain. It is only good for making speecific page styles.
  The external stylesheet is quicker and easier.
  It affects all the tags in all the html pages.

  ###Day32
**Focus:**Targetting CSS elements
There are various ways of targetting css elements. One of the simplest is targetting them by their tag name. For instance, a div is targetted with the name div, same for a p tag and so on.

Targetting elements by classes and ids.
CLasses can be used multiple times while ids can be used once for a single element.
ID selectors are selected with a hash then followed by the name of the ID.
Class selectors are selected with a .(dot) then followed by the name of the class.

Calling different rules on a particular css html element results in a sort of conflict. Suppose at the top of your css you have styled the h2 color as red and later 300 lines later, you forgot and styled it blue, now that's a conflict.
Cascade enables us to understand what this conflict is doing to our css.

The CSS cascade reads from top to bottom. It reads the first instance and applies it, when it comes to the second one, it applies it as the latest style, overriding the first one. The embedded styling if used together  usually overrides the external stylesheet. The inline styling if used together  usually overrides the external stylesheet and embedded stylesheet.

Inheritance in CSS means that any style applied to a parent element subsequently affects it's children element. 

###Day33
**Focus:** Selector specificity.
Suppose we have a bunch of p tags and we want to style the p tag(s). Take a look at this css,
#main-content p { color: black }; This rule wins over
p { color: red}
Irrespecive of CSS cascade which runs from top to bottom, the first rule is adopted because it is more specific. The second rule affects every other p tag. 

CSS uses a point system to determine which rule is more specific, take a look at the point system. 
IDS get 100pts,
CLASSES get 10pts,
TAGS get 1pt

From our example css above, the first rule gets 100 + 1 pts which is a total of 101pts while the second gets only 1pt for a tag.

But then looking at this html file, we first target the p tags in the main content and give them a color of red.
#main-content p {
  color: red;
}
p {
  color: black
}
.test {
  color: green
}

strong {
  color: green
}

Notice that only the main content p tags takes the color red, the other ones remain on the default color. 
In the nth line we Now target the p tag with a class of test in the main-content expecting it to take the color green but it does not. Why? Because although it targets the test class directly, its point is not upto the #main-content p rule.
The only to do this kind of thing is to use strong on the item and target it.


THE IMPORTANT DECLARATION
Using the important declaration on a rule tells CSS that the rule must be used irrespective of its point. Recall the CSS above where the rule on the test class could not override the #main-content p target, well, using the important declaration on the test class automatically overrides the #main-content p target.
The important declaration is represented with  a space and declaration mark followed by the word important after a CSS value.

.test {
  color: green !important;
}

TARGETTING MULTIPLE ELEMENTS
In our html file, suppose we want to apply same kind of CSS style to multiple elements such as p tags, span tags, li tags and a tags. 
The simplest way to do it is select them using this multiple targeting style.

p, a, span, li {
  color: red;
  font-size: 24px;
  font-family: Arial
} 

###Day34
**Focus:** CSS selectors
CSS DESCENDANTS SELECTORS:
Consider this little html 
<body>
  <div id="main-content">

    <P>Hello fellow <strong>programmers</strong></P>
    <P class="test">Do your best, be a programmer</P>


    <div id="sub-content">
      <p>More Content</p>
    </div>
    
  </div
</body> 
We say that an element is an descendant of another element if it is nested directly or indirectly under that element. All the elements inside the main content div are its descendants irrespective of how deep they are nested. 
Suppose we want to style the p tags which are descendants of the main-content div, how do we go about it.
#main-content p {
  color: red
}

What if we want to style only the p tag inside the sub-content div, here's what we could do

#sub-content p {
  color: green
}
or to be more specific,

#main-content #sub-content p {
  color: green
}
It is not always a great idea to be more specific by making so many chaining, remember the point system thing we talked about on day33 ? it can make overriding the css difficult. 

A delectable apparition stolen from a far away land.

CHILD SELECTORS
The child or children of an element are elements nested directly under that element. From our html file, the two p tags and the sub-content div are children of the main div. How do we style only the direct children?  Simple, just declare the element followed by an angle bracket(>) and the direct children you want to style.

#main-content p{
  color: yellow
}

ADJACENT SELECTORS:
The adjacent selector is a selector that selects an element which comes directly after another element.
Check out div class "all-articles" in our html file, suppose we want to style the first p tags directly under the h2 tags under that div, we apply the adjacent selector property by doing this :

.all-articles h2 + p {
  color: orange
}

The + targets all p tags directly under h2 in the all-articles class.

###Day35
**Focus:** CSS selectors
ATTRIBUTE SELECTORS
Attributes gives additional information about a html tag. From our html, 
let us target all div tags with an attribute of id, we could do something like this

div[id] {
  color: red
}
for all spans with a class, we do this 
span[class] {
  color: orange
}
We could be more specific
a[title = "search engine"]

Hold on, look at this html file
 <span class="deck halls">Am a a span tag</span>
  <span class="deck">Think of me to think of programes</span>
  <span class="deck">Span is cool</span>

  If we wanted to target all spans with a class of deck, we could something like this:
  span[class="deck"] {
    color: blue
  }
  Unfortunately it won't target the first span tag because it's class is like this class="deck halls"; case of multiple classes. How do we go about hthis one? 
  Well we use a tilde(~) like so,

  span[class ~="deck"] {
    color: purple
  }
  The tilde is saying that we want the value of deck to appear anywhere in a space deliminated list. 

Take a look at this html file,
  <a href="google.com"> I am an a tag</a>
  <a href="http://gmail.com"> I am an a tag</a>
  <a href="forever.net"> I am an a tag</a>

This is how to taget only the a tag with a href of "forever.net"
 a[href$ = "net"] {
   color: blue
 }
 Notice the $ sign in front of the href. So, asically it says, go to thee a tag and target all the href that ends with "net".

 Again, if we wanted to target the a href that starts with http, we do this,

 a[href^="http"] {
   color: yellow
 }
 The caret symol signifies start.

 PSEUDO-CLASSES:
 These are special keywords that go after selectors. They are like an extension.
  They help us target things we wouldn't have been able to target using normal CSS. 
 --special behavioral changes,
 --advanced structural elements.

There are two groups:
The dynamic e.g hover effects,
and structural pseudo classes e.g parent-child relationships. 

The dynamic pseudo classs allow us to style an element in relation to user actions such hovering over a link,pressing a button, ticking a check box etc.

The structural pseudo class: Suppose we have a ul tag with 10 li tags and we want to target the fifth li tag, notice that these li tags have no individual attributes, here we employ structural pseudo-class.

Here's the general syntax,

tag: pseudo-class {
  <!-- effect -->
}


###Day36
**Focus:** Pseudo classes.
A quick recap from day 34 reminds us that pseudo classes are an extension of normal CSS to help us target more specific things.They are splitted into two groups viz: The behavioural and structural pseudo classes.

The general syntax is 
selector: keyword { declaration }.

So lets take a look at three of the most popular CSS pseudo classes. We'll look at what happens when a link is hovered by a mouse, when it's clicked in it's active state and when it's visited.
 HOVER 
Consider the links 
 <a href="#"> I am an a tag</a>
  <a href="#"> I am another link tag</a> 
The CSS for the hover is declared like so;
a: hover {
  color: purple
}
ACTIVE
This is that moment you click down a button on your mouse. That monent before it takes you to new page, that link is active. We are going to change the color for that moment.

a:active: {
  color: orange
}

VISITED
The way this one works is say you have a link on your webpage with the default color blue. When the user clicks on that link, they have now visited that link. When they come back to the page, that link tag should now display differently.
a:visited {
  color: green
}
**Link to work**: [medium.com]('https://medium.com/@dexiouz/day36-0f-100daysofcode-561531f9bd7c')


###Day37
**Focus:** Structural pseudo classes.
Structural pseudo classes help us target complex structural elements that we wouldn't be able to target using ordinary CSS selectors.
FIRST AND LAST CHILD PSEUDO CLASSES
The children are direct elements of an html tag, in the html file, lets target the first and last child of the html

article p:first-child {
  color: blue
}


article p:last-child {
  color: red
}

FIRST AND LAST OF-TYPE PSEUDO CLASSES
Take a look at this html file
  <article>
    <h2>Title 1<h2/>
    <P>first p tag</P>
    <P>p tag</P>
    <P>p tag</P>
    <P>p tag <a href="#">here</a> </P>
    <hr>
  </article>

  <article>
    <h2>Title 1<h2/>
    <P>first p tag</P>
    <P>p tag</P>
    <P>p tag</P>
    <P>p tag <a href="#">here</a> </P>
    <hr>
  </article>
  If we try to use first and last child pseudo classes to target p, we won't get it because <h2> and <hr>tags are now the first and last children respectively.
  Here we use the first or last of type because clearly the first p is the first of the p tag in the html

  article p:first-of-type {
  color: blue
}


article p:last-of-type {
  color: red
}

NTH CHILD SELECTORS
This type of psedo selection takes in a value, it is quite different from the other selectors, here's how it works
 <ul>
   <li>ITEM LIST</li>
   <li></li>
   <li></li>
   <li></li>
   <li>HALF TITLE</li>
   <li></li>
   <li></li>
   <li></li>
 </ul>

 Suppose we want to style the first li item and the 4th list item, we should probably do something like this:
 li: nth-child(1), li: nth-child(4) {
   font-family: Arial
 }

 We culd do more, instead passing numbers,look at this

  li: nth-child(even) {
   font-family: Arial
 }

 li: nth-child(odd) {
   font-family: Arial
 }


 We can also pass mathwmatical formulas like this, where n= 0
  li: nth-child(2n + 1) {
   color: green
 }


COMBINING SELECTORS
<article class="feature-content">
  <p>dummy text</p>
</article>

<article>
  <p>dummy text</p>
</article>

<div class="feature-content">
  <img src="#" alt="">
</div>

<div>
  <img src="# " alt="">
</div>
The first article and first div have a class of featured-content, but we want to style them differently, clearly we can't use a particular rule rather we do this:
 article.featured-content {
   color: orange
 }

 div.featured-content {
   color: purple
 }

UNIVERSAL SELECTOR
Consider this html file
<body>
  <h1>I am a heading</h1>
  <article>
    <p>blah blah blah</p>
    <p>blah blah blah</p>
  </article>

  <ul>
    <li>list item</li>
    <li>list item</li>
  </ul>

  <h2>New Selection <a href="#">link<a/> </h2>

  <p>blah blah blah</p>
  <p>blah blah blah</p>
  <p>blah blah blah</p>
  <p>blah blah blah</p>   
</body> 
Indeed, we can target all the tag by doing something like this:

h1,p,ul,li,h2,a {
  color:red
}
That if there were 20 tags, well there appears a better simplified method of targeting all the elements-THE UNIVERSAL SELECTORS.
See   
 * {
   color: red
 }
 It is not a case of inheritance aas the * universal selector target all the elements individually.
Usually it is used as CSS reset where some developers use it to reset the default CSS styling and apply their own default styling, something like this:

* {
  margin: 0;
  padding: 0;
  color: black
}
Tip: be careful while using it. 



###Day38
**Focus:** 
So far we've been discussing about CSS selectors. Let's shift our focus to declarations associated with selectors.
FONT-SIZE
We can give font size in two ways viz absolute font size, measured in pixels(px) or relatve fontsize measured in Em's(em) or percentage(%). 
In this CSS 
article {
  font-size: 16px
}

article h2 {
  font-size: 4em
}

article p {
  font-size: 300%
}

The article tag takes an absolute font size of 16px. By default, its children like h2 and p tag inherits that 16px. However, by setting h2 to font-size of 4em we are saying multiply the font-size of the parent element by 4 and apply it to the h2 tag. The same goes for the p tag, we say, multiply the fontsize of the parent element by 300% and apply to the p tag.
The relative fint sizes measurement em and % are good for responsiveness.


FONT-FAMILY
The font family is the font style you give to an element and that includes Arial, sans etc. The way we specify it like this 

article h2, article p {
  font-family: arial, verdana, sans-serif
} 

With font-family we can specify different font styles in the other we prefer them if the first style is not installed on the user's pc.
So, from our style, if the user does not have the arial font-family, then the CSS should use verdana font-family etc.

TEXT-DECORATION
The default a tag has an underline property on its text. That underline comes from text-decoration, setting text-decoration to none, removes the underline. There are other values, viz: overline, inherit, line through etc.
a { 
  text-decoration: none
}

FONT WEIGHT
This property determines how chunkier or bolder a text can be:
Setting the font weight to normal causes the text to lose its chunkiness or boldness. There are other values: bold, bolder, lighter, normal, numbers e.g 400,300 etc

article h2 {
  font-family: normal
}

TEXT-TRANSFORM
Transform in CSS basically means changing the case format of a text such as lower or upper case or capitalize.
Capitalize takes every first letter of a word and capitalizes it.
uppercase and lowercase does on the text exactly as their name says.
 body p {
   text-transform: capitalize
 }


 ###Day39
**Focus:** 
CSS COLOR
There are two types of color application in CSS viz:
Text Color/foreground and
backgroundColor.
The text color/foreground basically colors the text while the backgroundcolor affects the entire background of the container, it doesn't affect the  text.

#header h1 {
  color: chocolate
}

#header {
  background-color: blueviolet
}

#header {
  background: blueviolet
}

STYLING LINKS
The default style of a browser link is blue with an underline, hnence to tweak it to our taste, we do this,

a {
  color: crimson;
  text-decoration: none;
  font-weight: bold
}
 We can add a hover effect like so
 a:hover {
   color: cyan
 }

LETTER SPACING AND LINE HEIGHT
Consider the word "CODE", letter spacing is just the distance between the letters of a word, for instance, adding a letter spacing to "CODE" can give us something like this "C O D E", depending on the space value.
Word spacing does the exact same thing on words. 

p {
  letter-spacing: 2px;
  word-spacing: 2em
 // other value includes inherit, normal,em,% etc

}

h1 {
  line-height: 2px
 // other value includes inherit, normal,em,% etc

}


The line height is the vertical height or vertical space between two lines of text in a paragraph.

PARAGRAPH SPACING

This controls the height between paragrapghs.


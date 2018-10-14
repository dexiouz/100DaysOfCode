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
In destructuring, curly brackets are used when you destructure from an object but normal braces are used when you destructure from an array.
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
`#main-content p { color: black };` This rule wins over
`p { color: red }`
Irrespecive of CSS cascade which runs from top to bottom, the first rule is adopted because it is more specific. The second rule affects every other p tag. 

CSS uses a point system to determine which rule is more specific, take a look at the point system. 
IDS get 100pts,
CLASSES get 10pts,
TAGS get 1pt

From our example css above, the first rule gets 100 + 1 pts which is a total of 101pts while the second gets only 1pt for a tag.

But then looking at this html file, we first target the p tags in the main content and give them a color of red.

```css
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
```

Notice that only the main content p tags takes the color red, the other ones remain on the default color. 
In the nth line we Now target the p tag with a class of test in the main-content expecting it to take the color green but it does not. Why? Because although it targets the test class directly, its point is not upto the #main-content p rule.
The only to do this kind of thing is to use strong on the item and target it.


THE IMPORTANT DECLARATION
Using the important declaration on a rule tells CSS that the rule must be used irrespective of its point. Recall the CSS above where the rule on the test class could not override the #main-content p target, well, using the important declaration on the test class automatically overrides the #main-content p target.
The important declaration is represented with  a space and declaration mark followed by the word important after a CSS value.

```css
.test {
  color: green !important;
}
```

TARGETTING MULTIPLE ELEMENTS
In our html file, suppose we want to apply same kind of CSS style to multiple elements such as p tags, span tags, li tags and a tags. 
The simplest way to do it is select them using this multiple targeting style.

```css
p, a, span, li {
  color: red;
  font-size: 24px;
  font-family: Arial
} 
```

###Day34
**Focus:** CSS selectors
CSS DESCENDANTS SELECTORS:
Consider this little html 

```html
<body>
  <div id="main-content">

    <P>Hello fellow <strong>programmers</strong></P>
    <P class="test">Do your best, be a programmer</P>


    <div id="sub-content">
      <p>More Content</p>
    </div>
    
  </div
</body> 
```

We say that an element is an descendant of another element if it is nested directly or indirectly under that element. All the elements inside the main content div are its descendants irrespective of how deep they are nested. 
Suppose we want to style the p tags which are descendants of the main-content div, how do we go about it.
```css
#main-content p {
  color: red
}
```

What if we want to style only the p tag inside the sub-content div, here's what we could do

```css
#sub-content p {
  color: green
}
```

or to be more specific,

```css
#main-content #sub-content p {
  color: green
}
```

It is not always a great idea to be more specific by making so many chaining, remember the point system thing we talked about on day33 ? it can make overriding the css difficult. 

A delectable apparition stolen from a far away land.

CHILD SELECTORS
The child or children of an element are elements nested directly under that element. From our html file, the two p tags and the sub-content div are children of the main div. How do we style only the direct children?  Simple, just declare the element followed by an angle bracket(>) and the direct children you want to style.

```css
#main-content p{
  color: yellow
}
```

ADJACENT SELECTORS:
The adjacent selector is a selector that selects an element which comes directly after another element.
Check out div class "all-articles" in our html file, suppose we want to style the first p tags directly under the h2 tags under that div, we apply the adjacent selector property by doing this :

```css
.all-articles h2 + p {
  color: orange
}
```

The + targets all p tags directly under h2 in the all-articles class.

###Day35
**Focus:** CSS selectors
ATTRIBUTE SELECTORS
Attributes gives additional information about a html tag. From our html, 
let us target all div tags with an attribute of id, we could do something like this

```css
div[id] {
  color: red
}
/* for all spans with a class, we do this  */
span[class] {
  color: orange
}
/* We could be more specific */
a[title = "search engine"]
```

Hold on, look at this html file

```html
 <span class="deck halls">Am a a span tag</span>
  <span class="deck">Think of me to think of programes</span>
  <span class="deck">Span is cool</span>
```
  If we wanted to target all spans with a class of deck, we could something like this:
 ` span[class="deck"] {
    color: blue
  }`
  Unfortunately it won't target the first span tag because it's class is like this class="deck halls"; case of multiple classes. How do we go about hthis one? 
  Well we use a tilde(~) like so,

  `span[class ~="deck"] {
    color: purple
  }`
  The tilde is saying that we want the value of deck to appear anywhere in a space deliminated list. 

Take a look at this html file,
```html
  <a href="google.com"> I am an a tag</a>
  <a href="http://gmail.com"> I am an a tag</a>
  <a href="forever.net"> I am an a tag</a>
```

This is how to taget only the a tag with a href of "forever.net"

` a[href$ = "net"] {
   color: blue
 }
 `
 Notice the $ sign in front of the href. So, asically it says, go to thee a tag and target all the href that ends with "net".

 Again, if we wanted to target the a href that starts with http, we do this,
`
 a[href^="http"] {
   color: yellow
 }`

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
```css
tag: pseudo-class {
  <!-- effect -->
}
```

###Day36
**Focus:** Pseudo classes.
A quick recap from day 34 reminds us that pseudo classes are an extension of normal CSS to help us target more specific things.They are splitted into two groups viz: The behavioural and structural pseudo classes.

The general syntax is 
selector: keyword { declaration }.

So lets take a look at three of the most popular CSS pseudo classes. We'll look at what happens when a link is hovered by a mouse, when it's clicked in it's active state and when it's visited.
 HOVER 
Consider the links 
```html
 <a href="#"> I am an a tag</a>
  <a href="#"> I am another link tag</a> 
  ```
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
```html
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
  ```
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

```html
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
```

 Suppose we want to style the first li item and the 4th list item, we should probably do something like this:
 ```css
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
```

COMBINING SELECTORS

```html
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
```

The first article and first div have a class of featured-content, but we want to style them differently, clearly we can't use a particular rule rather we do this:
```css
 article.featured-content {
   color: orange
 }

 div.featured-content {
   color: purple
 }
```

UNIVERSAL SELECTOR
Consider this html file
```html
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
```
Indeed, we can target all the tag by doing something like this:
`
h1,p,ul,li,h2,a {
  color:red
}`
That if there were 20 tags, well there appears a better simplified method of targeting all the elements-THE UNIVERSAL SELECTORS.
See 

 `* {
   color: red
 }`
 It is not a case of inheritance aas the * universal selector target all the elements individually.
Usually it is used as CSS reset where some developers use it to reset the default CSS styling and apply their own default styling, something like this:
```css
* {
  margin: 0;
  padding: 0;
  color: black
}
```
Tip: be careful while using it. 



###Day38
**Focus:** 
So far we've been discussing about CSS selectors. Let's shift our focus to declarations associated with selectors.
FONT-SIZE
We can give font size in two ways viz absolute font size, measured in pixels(px) or relatve fontsize measured in Em's(em) or percentage(%). 
In this CSS
```css 
article {
  font-size: 16px
}

article h2 {
  font-size: 4em
}

article p {
  font-size: 300%
}
```

The article tag takes an absolute font size of 16px. By default, its children like h2 and p tag inherits that 16px. However, by setting h2 to font-size of 4em we are saying multiply the font-size of the parent element by 4 and apply it to the h2 tag. The same goes for the p tag, we say, multiply the fontsize of the parent element by 300% and apply to the p tag.
The relative fint sizes measurement em and % are good for responsiveness.


FONT-FAMILY
The font family is the font style you give to an element and that includes Arial, sans etc. The way we specify it like this 

```css
article h2, article p {
  font-family: arial, verdana, sans-serif
} 
```

With font-family we can specify different font styles in the other we prefer them if the first style is not installed on the user's pc.
So, from our style, if the user does not have the arial font-family, then the CSS should use verdana font-family etc.

TEXT-DECORATION
The default a tag has an underline property on its text. That underline comes from text-decoration, setting text-decoration to none, removes the underline. There are other values, viz: overline, inherit, line through etc.
```css
a { 
  text-decoration: none
}
```

FONT WEIGHT
This property determines how chunkier or bolder a text can be:
Setting the font weight to normal causes the text to lose its chunkiness or boldness. There are other values: bold, bolder, lighter, normal, numbers e.g 400,300 etc

```css
article h2 {
  font-family: normal
}
```

TEXT-TRANSFORM
Transform in CSS basically means changing the case format of a text such as lower or upper case or capitalize.
Capitalize takes every first letter of a word and capitalizes it.
uppercase and lowercase does on the text exactly as their name says.
```css
 body p {
   text-transform: capitalize
 }
```

 ###Day39
**Focus:** 
CSS COLOR
There are two types of color application in CSS viz:
Text Color/foreground and
backgroundColor.
The text color/foreground basically colors the text while the backgroundcolor affects the entire background of the container, it doesn't affect the  text.
```css
#header h1 {
  color: chocolate
}

#header {
  background-color: blueviolet
}

#header {
  background: blueviolet
}
```
STYLING LINKS
The default style of a browser link is blue with an underline, hnence to tweak it to our taste, we do this,

```css
a {
  color: crimson;
  text-decoration: none;
  font-weight: bold
}

 /* We can add a hover effect like so */
 a:hover {
   color: cyan
 }
 ```

LETTER SPACING AND LINE HEIGHT
Consider the word "CODE", letter spacing is just the distance between the letters of a word, for instance, adding a letter spacing to "CODE" can give us something like this "C O D E", depending on the space value.
Word spacing does the exact same thing on words. 

```css
p {
  letter-spacing: 2px;
  word-spacing: 2em
 /*  other value includes inherit, normal,em,% etc */

}

h1 {
  line-height: 2px
 /*  other value includes inherit, normal,em,% etc */

}
```

The line height is the vertical height or vertical space between two lines of text in a paragraph.

PARAGRAPH SPACING

This controls the height between paragrapghs. Controlling this we use the margin like so 
```css
p {
  letter-spacing: 2px;
  word-spacing: 2em;
  margin-bottom: 23px
 }
  ```
 
 With the margin-bottom We are saying, at the end of the p tag we want a 23px gap before the next tag

THE BOX MODEL 
Box model is the way elements represent themselves in a page in terms of space. Say we have a block element such as a p tag in apage,the width and height property controls how much space it takes up on the page, then there is the padding which is an internal spacing and the margin property too. 

```css
.box {
  padding: 30px;
  margin: 20px;
  border: 1px solid #00000;
}
```
We should be careful when applying width property to the box model. For instance, if we added a width of 200px to the .box class, in reality, the width is not actually 200px, it is more.
This is what happens, THe CSS adds the 200px + 30px + 30px (from the padding left and right) + 20px + 20px (from margin left and right) + 1px + 1px (border on the left and right). This gives us a total of 302px. Shocker right! So becareful when using it.

MARGINS
For block elements, the marginis the external space that separaates it from the next element.
Specifying a single value to the margin property mmeans give that value to the top, bottom, left and right. 

```css
/* this value of 30px is same for top, bottom,left and right */
.box {
  margin: 30px
}
/* To specify different values, we do this, */
.box {
  margin: 30px 20px 40px 10px
  /* frm the margin, the formula is TRBL, top(30px), right(20px),bottom(40px),left(10px) respectively */
}
```
There are other shorter ways. If we want the top and bottom only to have same margi values or left and right margin to have same values, we do this 
```css
.box {
  margin: 30px 20px
  /* top and bottom = 30px, while left and right = 20px */
}
```

Another short hand is this
```css
.box{
  margin: 20px 15px 30px
}
/* This is essentially top = 20px, right = 15px, bottom = 30px and finally it'll automatically assign 15px to the left because of the right margin */
```

VERTICAL MARGIN COLLAPSE
Essentially when you have two element stacked on top of each other and they both have a margin associated with them, one at the top, one at the bottom then those two margins collapse when they meet each other. If the margins are identical, they collapse and take any of the margins else, they'll collapse and take the higher of the margins.

MARGIN AUTO
Supposing we have a div with a width of 300px and we want to center it arund the width of the parent element regardless of how the screen shrinks, we use the margin auto like so

```css
.box {
  margin: 30px auto
  /* a margin top and bottom of 30px and an automatic left and right margin to center the div. */
}
```

PADDING
Unlike the margin, the padding property is an internal spacing. It is applied the same way like the margin, with all the margin shorthands too viz:

```css
.box {
  padding: 30px 30px 30px 10px;
  padding: 20px 30px;
  padding: 30px;
  padding 30px auto ;
}
```

Although we don't have padding collapse



 ###Day40
**Focus:** 
MARGIN AND PADDING LONG-HAND METHOD
Here are long hand methods for defining padding and margins. They have the advantage of being used to override  previous set margin and padding values. 

 ```css
 .box {
   margin-top: 30px;
   margin-left: 30px;
   margin-right: 30px;
   margin-bottom: 30px;


   /* for padding */
   padding-left: 30px;
   padding-right: 30px;
   padding-top: 30px;
   padding-bottom: 30px
 }
 ```
 BORDERS
 This is part of the box model, its like the perimeter of the element just outside of the padding but before the model.
 It takes three values, width(how thick the border is), the style determines how dotty or dashed and the color specifies the color. 
 Here's the long hand method of declaring the border:

 ```css
 .box {
   /* for styling only the top of the border. You can change the top to bottom, right, left */
   border-top-width: 2px;
   border-top-style: solid;
   border-top-color: blue
 }
 ```

 For the short hand, you do this
 ```css
 .box {
   border-top: 1px solid green;
   /* 1px = width, solid = style, blue = color */

   /* HERE'S TO TARGET THE WHOLE BORDER top, right, left, bottom */
   border: 1px solid green
 }
 ```

 BLOCK-LEVEL ELEMENTS
 Block level elements take up the whole width of their parent element and stack on each other. They includes div, p,section tags etc

 Inline elements do not occupy a full row, they stack next to each other in line. They cannot be controlled using the box model property vertically. To make them appear as block level elements, we give them a display of block. They include a, span tags etc.
 To make them obey certain box model rules we give them another display property callled inline-block. Here, it borrows the positive attribute of the inline display and the positive attributes of the block display.

```css
 .box inline {
   display: inline-block   
   <!-- or -->
   display: block
 }
 ```
 WIDTH AND HEIGHT PROPERTY 
 The width is the width as you know it, the size of an element from right to left. There are various ways of specifying a width, lets take a look:

 If we want a static width and height say no matter the screen size, the size of the element width and height should always be 300px.
```css
 .static-width {
   width: 150px;
   width: 150px
 }
```
 percentage-width says give the element 70% of the width of its parent element.
 ```css
  .percentage-width {
   width: 70%;
   width: 150%
 }
 ```
ROUNDED CORNERS
The property for giving rounded or near rounded corners to elements such as a square div is the border-radius property. It has for sides it can control the four sides of the element and goes around in the clockwise fashion viz: top-right, bottom-right, bottom-left and top-left. Giving a single value for a border-radius gives the whole corner the value 

```css
 .box {
   width: 150px;
   width: 150px;
   border-radius: 20px;
   /* to control each corner separately we do this for  top-right, bottom-right, bottom-left and top-left */

   border-radius: 10px 30px 40px 20px;

   /* And like margin we can do this for top-left and bottom right, bottom left and top-right. */

   border-radius: 10px 20px

   /* TO get a complete circle increase the border-radius upto 100%  */
 }
 ```

 BACKGROUND SHORTHAND PROPERTY
 Recall these background properties which can be set like so:

 ```css
  .box {
    background-color: red ;
    background-image: url('./image');
    background-repeat:no-repeat;
    background-position: center;
    background-size: 200px;   
  }
  ```
  Well there's a shorthand version to combine some of these properties, see

  ```css
  .box {
    background: url('./image') no-repeat center;  
    /* if you have images, put nbackground-color under the image
     */
     backgound-color: blue;
     background-size: 200px
  }
  ```
MULTIPLE BACKGROUND
 MULTIPLE IMAGE 

 ```css
  .box {
    background-image: url('./image1'), url('./image1');
     background-repeat:no-repeat;
     background-size: 300px, 100%
  }
 ```
Some hints when using multiple images:
1) The comma is very necessary for the end of every image except the last image.
2) The image order is very crucial, the first one will come at the top of the stack, the last one will come at the bottom of the stack.
3) The background-repeat and position property must be set in the order of the elements, if they are same you can use one value such as in the background-repeat in the CSS above.


###Day41
**Focus:** 
COLOR
The background color property is represented in several ways.
Hex code:
The hex code is a series of six numbers or letters or a combination of both that make up a color. It is made from three channels: the first two numbers control the red colors, the second two control the green colors, the final two control the blue colors. It is started with a hash symbol followed by the six characters 0 to 9 and a to f, f being the lightest and zero being the darkest.

```css
.box {
  background-color: #ffffff
}
```

Rgb format
It takes three values for red, green and blue which range from 0 to 255.
```css
.box {
  background-color: rgb(0,0,0)
}
```

OPACITY
Consider this html and its CSS
```html
    <div id="circle"></div>
    <div id="circle-2"></div>
    <div id="circle-3"></div>
```
```css
#circle {
  width: 400px;
  height: 400px;
  position: absolute;
  background: rgb(200,200,100);
  border-radius: 200px;
  top: 50px;
  left: 50px
}

#circle-2 {
  width: 400px;
  height: 400px;
  position: absolute;
  background: rgb(200,100,200);
  border-radius: 200px;
  top: 250px;
  left: 150px
}

#circle-3  {
  width: 400px;
  height: 400px;
  position: absolute;
  background: rgb(100,200,200);
  border-radius: 200px;
  top: 50px;
  left: 250px
}
```
which gives us this: 
IMG OPACITY

We add opacity by using its name and takes values 0 if you want the element to be completely transparent or 1 if for completely opaque. Now lets add opacity to the elements and see the effect.
```css
#circle {
  width: 400px;
  height: 400px;
  position: absolute;
  background: rgb(200,200,100);
  border-radius: 200px;
  top: 50px;
  left: 50px;
  opacity: 1
}

#circle-2 {
  width: 400px;
  height: 400px;
  position: absolute;
  background: rgb(200,100,200);
  border-radius: 200px;
  top: 250px;
  left: 150px;
  opacity: 0.7
}

#circle-3  {
  width: 400px;
  height: 400px;
  position: absolute;
  background: rgb(100,200,200);
  border-radius: 200px;
  top: 50px;
  left: 250px;
  opacity: 0.3
}
```
And now we have this

IMG OPACITY1
Although, the opacity has a little glitch, it not only affects the background but also its content. If we added a hello in the divs we get something like this.

IMG OPACITYFAINT
Notice that the hello is faint too, the opacity is affecting them too. To tackle this we add an alpha channel in the rgb color where the alpha represented a controls the opacity, like so
```css
.element{
  background: rgba(100,200,200,0.7)
}
```
IMG OPACITYTEXT

GRADIENTS
A gradient is a transition from one color shade to another.
First we declare the background property followedmby linear-gradient. Linear which means it can go from top to bottom, left to right. Followed by a parenthesis,first value in the parenthesis is the direction say top, followed by the color to start with followed by the percentage you want it to start at followed by the second color to fade into at a percentage at the bottom.
```css
.button {
  display: block;
  width: 100px;
  padding: 12px;
  border: 1px solid #77feaa;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffff;
  text-align: center;
  border-radius: 4px;
  background: brown;
  background: linear-gradient(top, #aadddd 0%, #77aaaa 100%);
}
```
but it won't work since gradient is relatively new and most browsers don't support it. To make sure browsers support it, we add some prefix where -moz, -webkit are for firefox, safari or google chrome respectively, so this works
```css
.button {
    background: brown;
  background: -moz-linear-gradient(top, #aadddd 0%, #77aaaa 100%);
  background: -webkit-linear-gradient(top, #aadddd 0%, #77aaaa 100%);
  background: linear-gradient(top, #aadddd 0%, #77aaaa 100%);
}
```

BOX SHADOW
The box shadow kind of gives the element a shadow, kind of gives it depth. It takes few values, the first two are the horizontal and vertical position values how from the element you want the box shadow to appear. The third value is the blur radius, hpw blurry. High value is very blurry. The next is the spread which is of what distance do you want that to be blurred out. The last value is the color of the box shadow.

```css
  .button {
    ...
    box-shadow: 3px 3px 6px 3px rgba(40, 40, 40,0.6)
  }
```

###Day42
**Focus:** ALGORITHMS
SO, to jumpstart javascript I decided to write this algorithm for reversing a string. Here's what it should do.
The letter 'element' sholud be returned as 'tnemele', the letter 'knowledge' should be returned as 'egdelwonk'.
Using array methods 'array.push()' and 'array.unshift()' I was able too achieve this.

Using array.push()
Basically array.push() takes in a value and adds it to the end of an array. Say we have this array
arrays = [1,2,3,4,5,6,] then calling
arrays.push(7) 
console.log(arrays) // [1,2,3,4,5,6,7]

Here's how it should work.
-In a function,
-Pass in the string you want to reverse
-Use the split method on the string to convert the string to a array
-save the splitted string in a variable
-create an empty array
-use a for loop to loop through the splitted string beginning from the first item in the array. 
- for each item in the string, it should push it to the end of the empty array you created.
-use the .join() method on the empty array then
-console.log(the-empty-array)
-That's all

<!-- USING PUSH METHOD -->
```JS
let reversedWord = function reverse(word){
  let splitWord = word.split('')
  let reversed = [];
  for (let i = splitWord.length-1; i>=0; i--){
      reversed.push(splitWord[i]);
  }
  console.log(reversed.join(''))
}
reversedWord('element')  //"tnemele"
```

Using array.unshift()
Unlike the push() method, the unshift() method takes in a value and adds it to the beginning of an array. Say we have this array
arrays = [2,3,4,5,6,] then calling
arrays.unshift(1) 
console.log(arrays) // [1,2,3,4,5,6]


<!-- THE UNSHIFT METHOD -->
Here's how it should work.
-In a function,
-Pass in the string you want to reverse
-Use the split method on the string to convert the string to a array
-save the splitted string in a variable
-create an empty array
-use a for loop to loop through the splitted string beginning from the last item in the array. 
- for each item in the string, it should take it to the beginning of the empty array you created.
-use the .join() method on the empty array then
-console.log(the-empty-array)
-That's all

<!-- THdWordE UNSHIFT METHOD -->
```JS
let reversedWord = function reverse(word){
  let splitWord = word.split('')
  let reversed = [];
  for (let i = 0; i<=splitWord.length; i++){
      reversed.unshift(splitWord[i]);
  }
  console.log(reversed.join(''))
}
reversedWord('knowledge')  //"egdelwonk"
```
###Day43
**Focus:** Introductiion to Javascript
Javascript is a lightweight, cross- platform, object-oriented computer programming language.
By lightweight it means that the language doesn't use much memory of the computer and that it has a relatively simple syntax and features. 
Cross platform means that the language can be used in multiple platforms and systems. 
And finally object oriented means that it is a language based on objects.

Together with html and CSS, javascript is one of the three core technologies for web development.
This means that javascript is mostly used for web pages, javascript also runs in other machines that are not web based.

On the web, javascript was traditionally used on the browser environment making it only a client-side language.
However, thanks to new technologies such as nodejs that enables us to use javascript on the server side of the web making it interact with databases and files on the server.
In conclusion, javascript is what made modern web development possible:
It allows us to add dynamics and interactivity to our web pages.
As of today there are a ton of javascript libraries such as jquerry and frameworks such as react that enable developers build powerful web apps. But in other to use them one must first understand pure javascript otherwise called vanilla javascript.

The role of javascript in web development
So where does javascript fit in in web development together with html and css.
Of course you understand that html is responsible for holding the content of a web page and CSS is responsible for styling this content and handling layout. Javascript is the programming language that allows us to add dynamics to the picture like dynamic effects, manipulation of the content and CSS. 
Lets look at the role of these three html,CSS and javascript like this.
So the html is the "noun" by saying that the html "p element" is a paragraph. 
The CSS is the adjective because it describes the noun by saying that the p paragraph has a red color. And finally the javascript is the verb by saying to hide the p paragraph p.hide() element. 
There are two ways to add javascript in our html tag. One is directly inside the html body and secondly is through a javascript file.

Adding javascript directly through html body, called in-line script is someting like this;
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Javascript</title>
</head>
<body>
   <h1> Javascript language basics </h1>
</body>
<script>
  console.log('Hello world')
</script>
</html>   
```
Load the html in a browser and check the developer console of your browser.
Pressing F12 or ctrl+shift+C or right clicking in your browser and selecting inspect opens the developer console. 
As soon as a menu comes up, select at the top "console" and you'll see Hello world.     

The best practice is to use a separate file for your javascript and import it to your html file, something like this:
```html 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Javascript</title>
</head>
<body>
   <h1> Javascript language basics </h1>
</body>
<script src="./index.js"></script>
</html>   
```

###Day44
**Focus:** Data types and variables
Vaariables are a fundamental aspect of every programming language. They are better seen as containers which we use to store values in order to use them over and over again in our code.

Here's how to declare a variable in javascript
```js
let name = 'John'; 
console.log(name) // John 

// Here's another one

let otherName = 'Paul'
console.log(otherName) // Paul

// and another one ,

let age = 16,
console.log(age) //16
```


Notice that the values assigned to the name and otherName has a quotation mark but not in the value for age. True that's a case for data types. There are different types of data types.

There are five primitive data types. Primitives maeans that they are not objects, not having a key-value pair. here they are
- Number: floating point numbers, for decimals and integers
-String: sequence of characters used for text, usually wrapped in a quotation mark.
-Boolean: Logical data type that can only be true or false
-undefined: Data ttype of a variable which do not have a value yet
null: Also means, non-existent.


Dynamic typing in javascript means that you do not have to manually define the data type of a variable, javascript figures out the data type of a variable on its own.

Another example
```js
let fullAge = true
console.log(fullAge)
```

###Day46
###Variable mutation and type coercion
N.B:  All javascript codes are executed using node.   
There are two ways to add comments on javascript,
the first is single line code like this 
//hello
the second is multiline like this
/* put your code here*/

Dynamic typing in javascript means that you do not have to manually define the data type of a variable, javascript figures out the data type of a variable on its own.

With this in mind, consider this code
```js
let name = 'chidera'
let age ='13'

console.log(name + age) // chidera13

//we can also declare variables and not aasign them a value yet
let  isMarried,gender
```
Notice that the two data types have been merged to one data, string data type. Its called type coersion and thaat means that javascsript converts some data types to another when it needs it.

Here's how wwe can define different variables and not assign them any value,

Since we did not assign it any value, by default its value is the data type undefined.

See where type coercion is also at work, recall the variables we declared, lets use them here
```js
gender = 'male', isMarried = false
console.log ( name + ' is a ' + age + ' years old. ' + gender + ' .is he married?' + isMarried) //chidera is a 13 years old. male .is he married? false
```

Here's how we can use javascript es6 literal strings  to write the same thing.
```js
console.log(${name}  is a  ${age} years old.  ${gender}.  is he married? ${isMarried})
```
We'll be using the literal string as much as possible.

Changing the value of a variable is called variable mutation.
lets change the value for name, here we won't use the let or const because they are used for declaring a variable.
```js
let name = 'chidera'
let age ='13'
console.log( name, age ) //  chidera, 13

name = 'Paul';
age = 12
console.log( name, age ) // Paul,12
```
javascript codes are run in sequence from line to line.
Alert() is used for displaying something aside the console. It displays on the screen.

###Operators
Operator precedence in javascript defines which operators are executed first and which one are execued later. The BODMAS in mathemetics lets us catch a glimpse but obviously we have so a=many operators in javascript we may not know which one so here's at codingheroes.io/resources, scroll to the bottom and selet operator precedence table. There I found out that the higher the precedence value, the higher the priority.
Here are some operators: =,+, -,/,(), ++, -+, etc
The parenthesis has a high priority. 
When two operators are used, their usage depends on whether they are executed from right to left or left to right.


###Day50
Finally got the algorithm for sentence palindrome. The previous error was that  I was using array.push instead of array.unshift.
```js
  // SENTENCE PALINDROME
function reverse(sentence){
  let splitSentence = sentence.split(' ')
  let reversed = [];
  for (let i = splitSentence.length-1; i>=0; i--){
      reversed.unshift(splitSentence[i])
  }
 
  if ( reversed.join(' ') === sentence ) {
      console.log(true, `"${ sentence }" is a palindrome`)
  }else{
      console.log(false, `"${ sentence }" is not a palindrome`)
  }
  console.log(reversed.join(' '));// Eve damned Eden, mad Eve
}
reverse('Eve damned Eden, mad Eve')
// reverse('Lon nol') //false 'Eve damned Eden, mad Eve is not a palindrome'
// reverse('Sore was I ere I saw Eros')
```

###Day51 
Conditional Operators
A good example of a conditional operator is the "if else" statement. It receives a condition, evaluates it and returns a true or false value; The first part of the if statements has to meet the condition, if it doesn't then the next part "else if" has to meet the condition, if it doesn't, there can be many "else if" statements, before the final "else" statement
for example

```js
  let myAge = 13;
  let profession = "software developer"

    if( myAge == 13){ //first check
      alert("correct ") 
    }else if ( myAge == 11){ //second check
      alert('no you are wrong')
    }else if ( myAge == 10){ //third check
      alert( 'I said you are wrong' )
    }else{                    //last check
      alert( 'Am done with you' )
    }
   
   "my age is " + myAge + "my profession is "+ profession;

   `my age is ${myAge} my profession is ${profession}`

   function sayHi(){
     alert('hi')
   }

   sayHi =() => alert('hi')
```

####Ternary Operator
I think the ternary operator is a simplified if else statement. As the name implies, it takes at least three operators. It too accepts a condition, evaluates it and returns a true or false value;

```js
let myAge = prompt( 'how old are you' )
let result =

myAge == 13 ? alert( "correct " ) 
            :  myAge == 11 ?  alert( 'I said you are wrong' ) 
            : myAge == 10 ? alert( 'I said you are wrong' ) 
            : alert( 'Am done with you' )
```
We have basicaly done the same thing.

Logical operators
The logical operators are boolean fundamentally although they can be applied to non- boolean values. There are three logical operators in javascript.
The ||OR. && AND and ! NOT operator
 A basic example is 

 ```js

 let result = myAge || myAddress 

 let anotherResult = myAge && myAddress

 let finalResult = !myAge

//  In summary here's how the operators return values

//  OR || seeks for truthy values, that is it returns true if and only if any of the value is true

 alert( true || true ) // true
 alert ( true || false ) //true
 alert ( false || true ) //true
 alert ( false || false ) //false

//  AND && seeks for falsy values, that is it returns false if and only if any of the values is false

  alert ( false|| false ) //false
  alert ( false|| true ) //false
  alert ( true || false ) //false
  alert ( true || true ) //truehttps://gist.github.com/dexiouz/b2161558f19ff40e7a71b668fbbf7480

  // !NOT operator negates the values. It on its own does two things:
  // 1) Converts the operand to boolean type: true/false.
  // 2) Returns an inverse value --javascript.info
  alert( !true ) //false
  alert( !0 ) //true


  // Here's a live example

  let myAge = 13
  if( myAge == 13 ){
    console.log( 'Correct' )
  }else if( myAge >= 13 && myAge < 30 ){ //checks for the boolean value of individual conditions and performs AND operation on it.
    console.log( 'You are a young man' )
  }else if( myAge < 13 || myAge > 45 ){ //checks for the boolean value of individual conditions and performs OR operation on it.
    console.log( 'You are not among us' )
  }else {
    console.log( 'Just check some other time' )
  }
 ```

 THE SWITCH STATEMENT
 Sometimes writing plenty if else statements can make our work very cumbersome so there is where the switch statement comes in, it is something like this. Recall our first if statement? lets write it with a switch statement;
 ```js
 let myAge = prompt( 'how old are you' )

switch( myAge ){
  case 13:
    console.log("correct ");
    break;
  case 11:
    console.log('no you are wrong');
    break;
  case 10:
    console.log( 'I said you are wrong' );
    break;
  default:
     console.log( 'Am done with you' );
}
  ```
  Thats it for today guys

  **Link to work**: [medium]('https://medium.com/@dexiouz/day51-0f-100daysofcode-fd52e7b10ca6')

  ###Day52
  Functions
  Functions are the building blocks of programming languages. They are a group of lines of code that performs a particular thing. They can be called anywhere to do that particular thing. Functions may receive input externally, process the input and generate a result based on that input. In order not to repeat yourself that is, your codes, it is good to use functions.

  Suppose we want to calculate someone's year of birth, we have to do something like this:
  ```js
  let name = 'Chidera'
  let currentYear = 2018;
  let age = 13
  let yearOfBirth = current year - age // 2015

  // Lets calculate another person's year of birth

  let name = 'Paul'
  let currentYear = 2018;  
  let age = 18
  let yearOfBirth = current year - age // 2000
  
   // Lets calculate a third  person's year of birth

  let name = 'John'
  let currentYear = 2018;
  let age = 8
  let yearOfBirth = current year - age // 2010

  ```
  Notice that we have been repeating the same four lines of codes for every individual. Now suppose we want to calculate the year of birth for a hundred persons, it means we have to repeat the same four lines of code hundred times. Ouchhhh!!! horrible, this is where functions comes in , see , lets create our function 

  ###Function declaration
This is used in creating a new function, here's the function syntax
```js
  function functionName( arguments ) {
    //body of the function, that is, what the function should do
  }

  // When we want to use this function we just call it like this

  functionName( arguments ) // note that the arguments are not aleays compulsry,
  
  // we can something like this to show that arguments are not compulsory

  function newFunction() {
    // body of the function e.g 
    alert('hi')
  }

  // lets call the function
  newFunction() //notice here we didn't use arguments
```

Now lets create a function that calculates a person's year of birth provided we know the person's name, current year and the person's age, lets do it:
```js
function calculateYearOfBirth( name, currentYear, age ) { //here will receive the person's name, current year and age in that order
  let yearOfBirth = currentYear - age; // here will calculate the year of birth
  console.log(`${name} your year of birth is ${yearOfBirth}` ); 
}


// Now the sweet part lets calculate the year of birth of  Chidera, Paul and John, to do this, we only need to call the function and pass in the name, current year and age in that order.

calculateYearOfBirth('Chidera', 2018, 13 ); // Chidera your year of birth is 2005
calculateYearOfBirth('Paul', 2018, 18 ); //Paul your year of birth is 2000
calculateYearOfBirth('John', 2018, 8 ) // Chidera your year of birth is 2010
```

SO you see how simple it is to create and use a function, always use functions for codes you repeat.

#Local Variables
Local variables are variables created inside a function, and they are only visible to that function. Outside of that function, no other thhing can use them , they become invisible, for insatance:
```js
 function aNewFunction() {
  let age = 18;
  console.log( age ) 
}
aNewFunction()  // 18 ; the variable age is visible inside the function

// Now lets call the age outside of the function
console.log( age )  // ReferenceError: age is not defined
```

Global variables
Although the variables declared within a function is not accessible outside the function, however, a function can have access to any variable declared outside of it. This is true provided Such variables are not declared inside another function.
```js
let age = 18

function anotherFunction() {
  console.log( age )
}
anotherFunction() // 18

// our function was able to access a variable declared outside of it.
// But consider this scenario

function aSecondFunction() {
  let myName = 'Chidera'
}
aSecondFunction()

//  lets declare another function

function aThirdFunction() {
  console.log( myName ) 
}

aThirdFunction() //ReferenceError: myName is not defined

```
The myName variable declared inside the second function is not accessible in the third function.

#Arguments
Also called parameters are arbitrary values passed to functions. They represent incoming data, whatever we do with them in the function is what will be done to the incoming data they represent.
Recall our calculateYearOfBirth( name, currentYear, age ) function? the parameters are "  name, currentYear, age ".

#Default values
These are values we expect our arguments to take if no value was passed in. Something like this, in our calculateYearOfBirth( name, currentYear, age ) we can set calculateYearOfBirth( name = " Person ", currentYear, age ). It means, if no name was provided, thn set the name as " Person ".

#Function Expression
Recall how we were writing our functions, its called function declaration. Now there's another method called function expression.
```js
// Function declaration syntax
function newFunction() {
  console.log( 'hello' )
}
newFunction() // hello


// Function EXPRESSION syntax
let newFunction = function() {
  console.log( 'hello' )
}

newFunction() // hello

Here the function is created and assigned to the variable explicitly
```

#The Return keyword
Sometimes it is necesssary that our function returns some data back to the code that called it. 
For instance
```js
let greeting = function( a,b ) {
  return a*b
}

greeting( 2,3 ) //6
```
What happens is that after computation, the value 6 is returnes and stored in the function greeting.

Naming functions
Whether in using function declaration or function expression. It is very important to give to our functions names which are easy to understand and especially names which reflect what the function does. So if we have a function that calculates age, its name should be something like this;
```js
let ageCalculator = function(){
  // body of the function
}
```
***Day53***

Before we delve into Arrays,

#Difference between statements and function expression
The major difference is that an expression produces a value/ outcome while a statement/declaration just performs an action.
An example of an expression is something like this:
```js
let x = 3
```
See, x produces a value, that is, a value is stored in x.

An example of statements is 
```js
if( x==3 ){
  //do something
}
```
Notice that nothing is stored or returned as result of the action thata was taken.

##ARRAYS 
Technically an array is a map from indices( natural numbers, starting from zero ) to arbitrary value----speaking javascript by Axel Rauschmayer.
That's for the big boys.Lol
Basically an array is a mother container (or variable ) that is used to store multiple children. Here the children are data types such as boolean, numbers, strings etc.

Suppose we have a group of numbers viz; 1,2,3,4,5,6 and we want to store them in a variable, we could do something like this;
```js
let number1 = 1
let number2 = 2
let number3 = 3
let number4 = 4 
...etc
```
That's tedious storing all the numbers in various variables.However arrays allows us to store all of them in one variabe like this;
```js
let numbers = [1,2,3,4,5,6]
```
Hurray! You just declared your first array.
You may be wondering how do we access each of the numbers, quite simple, we will talk about that in a bit.

##Creating an array
Using array literal 
```js
let arr = [] 
// Notice that ararys are characterized by square brackets
``` 
Array constructor
```js
let arr = new Arr(4)
```
In the array constructor method we created an empty array of length 4. The length of an array is an array property that tells the number of elements in that array.

##Array elements are stored, retrieved/accessed by index starting from 0.
So the first element of an array is stored at index 0, the second element is at index 1, the third element is at index 2.
Infact, mathematically , the nth position of an element of an array is stored at index n-1. Where n is a number.

```js
n = index(n-1);
// that is
element(n) = index( n-1 );
```

Consider this array;
```js
let names = ['John','Chidera','Mathew','Paul']
```

Each of the elements can be accessed via their index
so calling
```js
names[ index ] // where index is a number
``` 
gives us the element at the specified index;




Lets access the first element we do 
```js
elementAtPosition( 1 ) = index( 1 - 1);
elementAtPosition( 1 ) = index( 0 );

names[0] // "John"
```
// Lets acces the second element which is Chidera
```js
elementAtPosition( 2) = index( 2 - 1);
elementAtPosition( 2 ) = index( 1 );

// In summary
names[1] // "chidera"
names[2] //"mathew"
names[3] //"Paul"
``` 
and so on

#The "in" property
The "in" returns a boolean if an "element  index" is present in array. 
```js
let names = ['John','Chidera','Mathew','Paul']

console.log( 1 in names ) // true
console.log( 8 in names ) //false
```

###Day54
#Array Methods
Remember when we talked about functions here.
Now there are certain functions which are specific to arrays. We call them array methods.
Lets take a look at them.
We will group these array methods into two categories, the ones that  mutate the array, that is change the array that they were called upon  and the ones that do not mutate the array, these group usually return a new array.

##Mutating Array Methods

###Array Methods that add and remove elements
#Array.push()
This methods is used to add an element at the end of an array. It increases the length of the array.
You can add as many elements as you want by separating them by a comma
```js
let arrays = [1,2,3,4,5,6]
arrays.push('a', 'b' )
console.log(arrays) // [1,2,3,4,5,6, 'a', 'b' ]

// Notice that the string has been added to the end of the array and returns a length of 7
```
#Array.unshift()
This adds an element to the beginning of an array.It increases the array length
```js
let arrays = [1,2,3,4,5,6]
arrays.unshift( 'a', 'b' )
console.log(arrays) // ['a', 'b', 1,2,3,4,5,6]
```

#Array.pop()
Unlike the other two methods,the array.pop() removes the element at the end of the array and it does not take in a value.
It reduces the length of the array and can also return the removed array if the pop was stored in a variable.
```js
let arrays = [1,2,3,4,5,6]

let removedElement = arrays.pop()

console.log(arrays) // [ 1,2,3,4,5,]

console.log( removedElement ) // 6
```

#Array.shift()
Like the array.pop() it does not take in a value. What it does is that it removes the element at the beginning of the array. It reduces the length of the array and can also return the removed array if the pop was stored in a variable.

```js
let arrays = [1,2,3,4,5,6]

let removedElement = arrays.shift()

console.log(arrays) // [ ,2,3,4,5,6]

console.log( removedElement ) // 1
```

#Array.splice()
This array method does two things, first it can delete an element(s) from an array and it can insert new element(s) in the array. Here's the syntax. 
```js
array.splice( startFromThisIndex, removeThisNumberOfElements, addThisElement, addThisElement,...)
```
#startFromThisIndex: 
When the splice is called, you specify an index where it should start removing items
#removeThisNumberOfElements:
After specifying where it should start, you specify HOW MANY NUMBER OF ELEMENTS SHOULD BE REMOVED. For instance starting from index 0, remove 4 items from the array.
#addThisElement:
In place of the removed elements, add this element(s).
 Lets give an instance and say we want to remove Paul and John from the names array and replace them with Michael and Gideon.
 ```js
 let names = ['Chidera', 'Paul', 'John', 'Emmanuel']
 ```
To remove Paul and John, we have to start from index 1 because Paul the first name is at index 1.
Next we say, from that index, remove 2 items.These two items includes Paul and John.
After removing two items which are Paul and John, add Michael and Gideon.

Recall the syntax
```js
array.splice( startFromThisIndex, removeThisNumberOfElements, addThisElement, addThisElement,...)
// which is a way of saying
 array.splice( startFromIndexOfPaul, removeTwoElementsWhichIsPaulAndJohn, addMichael, addGideon,...)
```
we apply it in our names array

```js
names.splice( 1, 2, 'Michael', 'Gideon')
console.log( names ) // [ 'Chidera', 'Michael', 'Gideon', 'Emmanuel' ]
```

However, when you specify only the start position, it removes all the elements from that start position.
For instance
```js
let fruits = ['orange', 'pear', 'mango','pineapple']
fruits.splice( 1 )
console.log( fruits ) // [ 'orange' ]

//We started from index 1 which is pear and removed all the other elements
```

What if we want to add an element but we do not want to delete any element.
Lets say, from the fruits array, we want to add banana immediately after orange so that our array will be something like this
```js
let addFruits = ['orange', 'pear', 'mango','pineapple']
```
Here's what we can do

```js 
let addFruits = ['orange', 'pear', 'mango','pineapple']
addFruits.splice( 1, 0, 'banana' )
console.log( addFruits ) //[ 'orange', 'banana', 'pear', 'mango', 'pineapple' ]
```
Wow, so what did we do, this is it:
We started at index 1, removed zero (0) item and added banana. Thats all. 


P.S: Notice that this array method mutates or changes the original array. So be careful when using it.

#Array.reverse()
The reverse method changes the order of the array elements. The first element becomes the last and so on. It also changes the original array.
```js
let reverseFruits = ['orange', 'pear', 'mango','pineapple']
 reverseFruits.reverse() //[ 'pineapple', 'mango', 'pear', 'orange' ]
```

#Array.sort()
The sort method sorts the elements of an array in place and returns the array.---MDN
The method sort elements in ascending and alphabetical order and casting the elements as strings.

For simple data types, it sorts the elements alphabetically. An example
```js
 let sortFruits = ['orange', 'pear', 'mango','pineapple']
 sortFruits.sort()
 console.log( sortFruits ) //[ 'mango', 'orange', 'pear', 'pineapple' ]
```
Notice that the fruits are sorted in alphabetical order.
But Consider the numbers to sort
```js
 let sortNumbers = [9,37,6,50,1]
 sortNumbers.sort()
 console.log(  sortNumbers ) //[ 1, 37, 50, 6, 9 ]
 ```
 Did you notice anything odd? wwell, I did. By default  the sort method sorts the numbers in alphabetical order. The method is saying that the numbers 37 and 50 are less than the numbers 6 and 9. Horrible! So horrible!
  To combat this, we use callback functions or specifically called compare functions to specify to the sort method how the sorting should be done.


The sort method takes a function called the compare function which specifies the sort order.


The compare function
The compare function takes two arguments say a and b. 
Here are the rules

In sorting two elemements a and b,

1) If a should come first,  Return 1
2) If b should come first,  Return -1
3)If either a or b should come first,  Return 0 .

Now lets sort the numbers again in ascending order
```js
let sortNumbersInAscending = [9,37,6,50,1]
sortNumbersInAscending.sort((a,b) => {
   if ( a > b){
     return 1      //that is, a should come first
   }else if ( b > a ) {
     return -1     // that is b should come first
   }else{
     return 0       // either a or b should come first
   }
 })
 console.log( sortNumbersInAscending )   //[ 1, 6, 9, 37, 50 ]
```

Lets sort in descending order
```js
   let sortNumbersInDescending = [9,37,6,50,1]
 sortNumbersInDescending.sort(( a, b ) => {
   if( a > b ){
     return -1          // b, the smaller one  should come first
   }else if( b > a ){
     return 1            // a, the smaller one should come first
   }else{
     return 0            // any one should come first
   }
 })
 console.log( sortNumbersInDescending )  //[ 50, 37, 9, 6, 1 ]
```
And thats all for the sort method.

##Non-mutating Array Methods
These are array methods that do not change the original array. Instead they return a new array.

#Array.concat()
Ever tried to combine two arrays? or add some elements to an array. Lok no further.
The concat method takes an array and joins other arrays or elements to it.It returns a new array altogeether. The array where the concat was called is not changed. 

```js
let scienceSubjects = ['Maths','Chemistry','Physics'];
let artSubjects = ['commerce', 'fine art', 'account'];
let skills = ['reading', 'coding']

lets concat

let theirCombination = scienceSubjects.concat( artSubjects, 'programming', 'problem solving', skills );

console.log( theirCombination  ) //[ 'Maths','Chemistry','Physics','commerce','fine art','account','programming','problem solving','reading','coding' ]

console.log( scienceSubjects ) //['Maths','Chemistry','Physics']; )
```
We have a new array

#Array.slice()
Not array.splice() o. This one is quite different.
The slice method copies a portion of an array and returns it in a new array. The main array is never changed.The main array remains the same, unlike the splice method that changes/alters the main array.
So how does it work. Very similar to the splice method, it takes two arguements, like this
```js
array.slice( startFromThisIndex, copyThisNumberOfElements )
```
Whats happening? 

#startFromThisIndex:
Starting from this index...
#copyThisNumberOfElements:
Copy this number of elements. Usually a value.

```js
let numbers = [1,2,3,4,5,6];

let sliceNumbers = numbers.slice( 0, 4 );

console.log( sliceNumbers ); // [1,2,3,4]

console.log( numbers ); // [1,2,3,4,5,6]
```
We started from index 0 and copied 4 items. Those four items are numbers [1,2,3,4] and we saved them in a new variable called sliceNumber.

#Array.join()
This method applies the toString() property on all the array elements thereby converting them to strings. By default, it adds a comma in between the new string elements. Infact whatever is a given in the separator value is what will be added between the elements. The separator value added in the brackets that define the join methodd.
```js
let evenNumbers = [2,4,6,8]
// without any separaator
let joinNumbers1 = evenNumbers.join() 

console.log( joinNumbers )  //2,4,6,8        -----the elements have been converted to strings. Notice the comma in between the elements.the numbers

// with space as a separator 
let joinNumbers2 = evenNumbers.join(' ') 
console.log( joinNumbers2 )  //2 4 6 8             ------Notice that what separates the numbers is now spaces
```
Anything can be used as a separator.

#Array.indexOf( arrayElement, startFromIndex )
If you want to know the index of an element in array, this method is just the big shot. If startIndex is specified, it starts from there else it searches the whole array.
lets find the index of chidera in this array
```js
let newNames = ['Paul', 'John', 'Chidera', 'Peter', 'Gideon']
let index = newNames.indexOf('Chidera');
console.log(index)  //2     
```
Indeed, Chidera is at index 2.


#Array.lastIndexOf( arrayElement, startFromIndex )
This method finds the index of the last occurence of an element. It searches backwards.  If startIndex is specified, it starts from there else it searches the whole array. 
```js
let Names = ['Paul','Chidera','John',  'Peter', 'Gideon','Chidera','Shalom']
let index = Names.lastIndexOf('Chidera');
console.log(index) //5 Clearly the last index where chidera can be found is at index 5  
```
#Array.forEach()
This method loops through all the elements of an array and executes a particular function once on each of the elements.
```js
let Names = ['Paul','Chidera','John',  'Peter', 'Gideon','Chidera','Shalom']

// forEach using es5
Names.forEach( function( eachName ) {
  console.log( eachName + " is worthy" )
})
// Paul is worthy
// Chidera is worthy
// John is worthy
// Peter is worthy
// Gideon is worthy
// Chidera is worthy

// forEach using es6
Names.forEach(( eachName ) => console.log( `${eachName} is worthy` ) )
// Paul is worthy
// Chidera is worthy
// John is worthy
// Peter is worthy
// Gideon is worthy
// Chidera is worthy
```
One thing to note is that forEach() does not return a value. This happens to be the major difference between forEach and map.

#Array.every()
This array method takes a condition and returns true if all the elements of the array meets the condition. 
```js
let evenNumbers = [2,4,6,8]
let isEven = evenNumbers.every(function( numbers ){
  numbers % 2 == 0
})

console.log( isEven )  //true  ---- ---because all of the elements is even

// Lets do something else

let notEvenNumbers = [2,4,6,8,9]
let isNotEven = notEvenNumbers.every(( numbers ) => numbers % 2 == 0 )
console.log( isNotEven ) //false   ---because one of the elements is not even
```

#Array.some()
This method returns true if at least one of the elements meets the condition
```js
let notEvenNumbers = [3,5,7,8,9]
let isNotEven = notEvenNumbers.some(( numbers ) => numbers % 2 == 0 )
console.log( isNotEven ) //true  ---because one of the elements is  even
```


#Array.map()
This array method takes a function and executes it on every element of the array. It returns a new array with the new elements.
```js
let numbers = [1,2,3,4,5,6]
let doubleNumbers = numbers.map(( eachNumber ) => eachNumber * 4)
console.log( doubleNumbers ) //[ 4, 8, 12, 16, 20, 24 ]
console.log( numbers ) //[ 1, 2, 3, 4, 5, 6 ]   
```

#Array.filter()
This method returns a new array of the elements that meets the specified condition of the callback function.
```js
let numbers = [1,2,3,4,5,6]
let numbersGreaterThanThree = numbers.filter(( eachNumber ) => eachNumber > 3 )
console.log( numbersGreaterThanThree ) //[ 4, 5, 6 ]
console.log( numbers ) //[ 1, 2, 3, 4, 5, 6 ] 
```  

#Array.reduce()
As the name implies, this method takes the elements of an array and tries to reduce them into a single value.
```js
array.reduce(( latestValue, newValue) => {
  return latestValue + newValue
}, startingValue);
```

So lets add up some numbers
```js
let numbers = [1,2,3,4,5,6]

let sumNumbers = numbers.reduce(( latestValue, newValue) => {
  return latestValue + newValue
},0)
console.log( sumNumbers ) // 21

// P.S: latestValue and newValue are variable names and so can be changed. Could have been a,b etc
```
We got a sum of 21. Note that our starting value is set to 0. What happens when we set it to 4 or 5.
Lets see what we get. We'll also change the parameter names.

```js
let numbers = [1,2,3,4,5,6]

let sumNumbers = numbers.reduce(( a,b ) => {
  return a + b
},4)
console.log( sumNumbers ) // 25 is the new total
```
Here we started at 4 and summed up everything. 

AND THATS IT FOR ARRAY METHODS.
GIVE A CLAP GUYS!

#Day55
Objects
I have a laptop. The model is lenovo Thinkpad Edge, it has a black color, a RAM size of 4gb, HDD of 500gb, and 2.40ghz processsor. My friend has a laptop too, the model is hp something something, ith a white color, RAM size of 3gb, 320HDD, and 2.14ghz processor.
We are describing a laptop. The color, model, RAM size etc and their values are called properties of the laptop. In javascript, the laptop itself is called object. An object is characterized by properties. The properties are made up of two things. What we call a key such as "color" and then what we call a value which is "white".
The syntax of an object is something like this:
```js
let newObject = {
  //properties
  key: value,
  key: value,
  ...etc
}
```
Now for our laptop object we have like so
```js
let chideraLaptop = {
  //properties of this laptop
  model:  " lenovo Thinkpad Edge ",
  color: "black",
  ram: 4,
  HDD: 500,
  processor: 2.40,
}
```
 
 and for my friend's laptop
 ```js
let friendLaptop = {
  //properties of this laptop
  model:  " hp something something ",
  color: "white",
  ram: 3,
  HDD: 320,
  processor: 2.14,
}
```
#Creating objects
Indeed, to create a new object we would take one of two approaches ,
```js
let newObject = new Object(); // "object constructor" syntax

// OR

let newObject = {};  // "object literal" syntax
```
Thats all. Now its left for you to add the properties that you want inside the laptop.

#Adding properties to objects
You now know how to create an object. Next lets describe or add properties to our object.
As in arrays, There are two ways to add and also access object properties:
 One is through the dot notation, the second is 
 through the  square beracket notation. This requires that the "key" be wrapped in quotation marks. Can be used to use multiple words as "key".

```js
  let laptop = {}

// lets add the model,processor and ram using dot notation
laptop.model = "lenovo thinkpad";
laptop.ram = 4;
laptop.processor = 2.40

// lets add the color and HDD using bracket notation

laptop["color"] = "white";
laptop["HDD"] = 500;

// lets view our new laptp object

console.log( laptop );

// { model: 'lenovo thinkpad',
//   ram: 4,
//   processor: 2.4,
//   color: 'white',
//   HDD: 500 }
```

#Accessing object properties
We still use the dot and square bracket notation to acces object properties;

lets access a few properties from our laptop object:
```js
// lets get the ram, model and processor using the dot notation
console.log( laptop.ram ) // 4;
console.log( laptop.model ) //lenovo thinkpad;
console.log( laptop.processor ) //2.40;

// lets acces the color and HDD using the bracket notation
console.log( laptop["color"] )  // black;
console.log( laptop["HDD"] )    //500
```
#Object methods
Javascript has functions(put link) which are group of codes that can be called to do a particular thing.
Now objects has functions too in them. These functions are called methods. They can be used a lot of things in the object. For instance instead of accessing all the properties of the object one after the other, we can create a method and call it summary. When we call the summary method it should, like a function give us all the infi=ormation about the laptop. 
Lets achieve this:
```js
  let chideraLaptop = {
    //properties of this laptop
    model:  " lenovo Thinkpad Edge ",
    color: "black",
    ram: 4,
    HDD: 500,
    processor: 2.40,
    describe: function(){
      console.log(`${chideraLaptop.model} is a ${chideraLaptop.color} ${chideraLaptop.ram}gb ram laptop, it has a ${chideraLaptop.HDD} HDD and a processor of ${this.processor}`)  // WE ARE USING ES6 SYNTAX HERE
    }
  }
// lets call the describe function
chideralaptop.describe() //  lenovo Thinkpad Edge  is a black 4gb ram laptop, it has a 500 HDD and a processor of 2.4;
```
Wow, awesome! awesome!!
A few things to note from what we just did.
In the describe method, to access any of the properties, we first have to call the name of the object which at this time is chideraLaptop, followed by the property key we wish to access, for instance the model. So we have "chideraLaptop.model".
Secondly recall when we were accessing object properties, we did something like this
```js
chideraLaptop.model // lenovo thinkpad
```
to access methods, we do the same thing but we add brackets like so;
```js
chideralaptop.describe()  //  lenovo Thinkpad Edge  is a black 4gb ram laptop, it has a 500 HDD and a processor of 2.4;
```

#The "this" keyword
Simply put, the "this" keyword is used to refer to the object where it is used. Thats all for now about the this keyword.
Here's what I mean.
Recall in our describe() method, we kept repeating "chideraLaptop.something" etc. Thats bad practice. Yeah. Instead of using the object name, we use the "this" keyword. So our describe should be smething like this.
```js
  let chideraLaptop = {
    //properties of this laptop
    model:  " lenovo Thinkpad Edge ",
    color: "black",
    ram: 4,
    HDD: 500,
    processor: 2.40,
    describe: function(){
      console.log(`${this.model} is a ${this.color} ${this.ram}gb ram laptop, it has a ${this.HDD} HDD and a processor of ${this.processor}`)  // WE ARE USING ES6 SYNTAX HERE
    }
  }

chideraLaptop.describe() //  lenovo Thinkpad Edge  is a black 4gb ram laptop, it has a 500 HDD and a processor of 2.4
```
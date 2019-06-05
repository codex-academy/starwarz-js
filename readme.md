# Star warz

Practice programming algorithms drawing stars

## Draw a line

Create a function called `createLine` that creates a line of stars for the given length.

At star is `* ` - `"* "` - an asteric followed by a space.

`createLine(5);` returns `* * * * * `

`createLine(7);` returns `* * * * * * * `

## The print function

To make things testable all functions from here on should return an array filled with stars. Use the `print` function print the drawing on the screen.

## Draw a square

Create a function called `createSquare` that can draw a square of stars for the given dimension.

Note:

* Use the `createLine` function
* The ``


`createSquare(5);` draws:

```
 * * * * * 
 * * * * *
 * * * * *
 * * * * *
 * * * * *
```

`createSquare(7);` draws:

```
* * * * * * *  
* * * * * * *  
* * * * * * *  
* * * * * * *  
* * * * * * *  
* * * * * * *  
* * * * * * * 
```

## Draw a rectangle

Create a function called `createRectangle` that can draw a square of stars for the given width and height.

`createRectangle(5,3);` draws:

```
 * * * * * 
 * * * * *
 * * * * *
```

`createRectangle(7,2);` draws:

```
* * * * * * *  
* * * * * * *  
```

## Draw a Triangle

Create a function called `createTriangle` that can draw a triangle of stars for the given base.

`createTriangle(5);` draws:

```
 *  
 * * 
 * * * 
 * * * * 
 * * * * * 
```

`createTriangle(7,2);` draws:

```
*   
* * 
* * *
* * * * 
* * * * * 
* * * * * * 
* * * * * * *
```

## Draw a flat top Triangle

Create a function called `flatTopTriangle` that can draw a triangle of stars for the given base with a base on top.

`flatTopTriangle(5);` draws:

```
 * * * * *  
 * * * *
 * * *
 * *  
 * 
```

`flatTopTriangle(7);` draws:

```
* * * * * * *   
* * * * * * 
* * * * * 
* * * * 
* * * 
* * 
*
```

## Draw empty square

Create a function called `createSquareOutline` that can draw a square of stars for the given dimension that is outline only.


`createSquareOutline(5);` draws:

```
 * * * * * 
 *       *
 *       *
 *       *
 * * * * *
```

`createSquareOutline(7);` draws:

```
* * * * * * *  
*           *  
*           *  
*           *  
*           *  
*           *  
* * * * * * * 
```
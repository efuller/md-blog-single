# Math.abs()

`Math.abs()` is a function that returns the absolute value of a number.

An absolute number is a number with any sign. Its main use is to remove the `-` sign from a negative number.

The `Math.abs()` function is a static method on the `Math` object, so it should always just be used as `Math.abs()`.

## Syntax

```
	Math.abs(x);
```

## Parameters

#### x

A number

## Return value

The absolute value of the number provided.

## Example 1

Let's take a simple negative number and return its absolute value.

```
	Math.abs(-5); // output will be 5
```

## Example 2

This example will show how you can do math calculations as a parameter.

```
Math.abs(5 - 10); // output will be 5
```

## Example 3

`Math.abs()` will also accept named variables as well!

```
	var num = 10;
	
	Math.abs(num - 15); // output will be 5
```

## Special Notes

If you pass a `string` in like `Math.abs('I am a string');`, you will get a returned result of `NaN` or `not a number`.

If you pass in `null`, you will get a returned result of `0`.
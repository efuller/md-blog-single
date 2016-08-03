#Array.prototype.sort()

All array instances inherit from Array.prototype. The prototype constructor of an array allows to add new methods and properties to the Array() object.

The **sort()** method sorts the elements of an array *in place* and returns the array. The sort is not necessarily [stable](https://en.wikipedia.org/wiki/Sorting_algorithm#Stabilityhttps://en.wikipedia.org/wiki/Sorting_algorithm#Stability). The default sort order is according to string Unicode code points.

##Syntax
```
arr.sort([compareFunction])
```
##Parameters
**compareFunction**
Optional. specifies a function that defines the sort prder. If omitted, the array is sorted according to each character's [Unicode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Unicode) oint value, according to the string conversion of each element.

##Return value

The sorted array.

##Description

If *compareFunction* is not supplied, elements are sorted by converting them to strings and comparing strings in Unicode point order. For example, "Banana" comes before "cherry". In numeric sort, 9 comes before 80, but becuase numbers areconverted to strings, "80" comes before "9" in Unicode order.

If *compareFunction is supplied, the array elements are sorted according to the return value of the compare function. If a and b are two elements being compared, then:

* if *compareFunction(a,b)* is less than 0, sort a to a lower index than b, i.e. a comes firts.
* if *compareFunction(a,b)* returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: The ECMAscript standard  does not guarantee this behaviour, and thus not all browers(e.g. Mozilla versions dating back to at least 2003) respect this.
* if *compareFunction(a,b)* is greater than 0, sort b to a lower index than a.
* *compareFunction(a, b)* must always return the same value when given a specific pair of elements a and b as its two arguments.

So, the compare function has the following form:

```
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```
To compare numbers instead of string, the compare function can simply subtract b from a. The following function will sort the array ascending:

```
function compareNumbers(a, b) {
  return a - b;
}
```

The sort method can be conveniently used with function (and closures):

```
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
```
##Sorting non-ASCII characters
For sorting strings with non-ASCII characters, i.e. strings with accented characters (e, é, è, a, ä, etc.), strings from languages other than English: use [String.localeCompare](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare). This function can compare those characters so they appear in the right order.

```
var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});

// items is ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']
```

##Sorting with map
The *compareFunction* can be invoked multiple times per element within the array. Depending on the compareFunction's nature, this may yield a high overhead. The more work a compareFunction does and the more elements there are to sort, the wiser it may be to consider using a [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) for sorting. The idea is to walk the array once to extract the actual values used for sorting into a temporary array, sort the temporary array and then walk the temporary array to achieve the right order.



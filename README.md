# JS Callback Functions Activity

## Instructions

### 1. Is this number odd?

Write a function that returns `true` or `false` for a given number. We will reuse this function, so make it reusable.

#### Example:

```
isOdd(4);  //false
isOdd(5);  //true
```

### 2. Exclaim

Write a function that returns the given string with a concatenated exclamation `!` at the end. We will reuse this function, so make it reusable.

#### Example:

```
exclaim('Allan');  //'Allan!'
exclaim(exclaim('Allan'));  //'Allan!!'
```

### 3. Double the chars!

Write a function that duplicates each char in a string. If I pass `'abc'` to the function, it should return `'aabbcc'`. We will reuse this function, so make it reusable.

#### Example:

```
doubleChars('Muhanned');  //'MMuuhhaannnneedd'
```

### 4. At least two elements

Write a function called `atLeastTwo` that receives an array and a callback as its arguments. If at least two elements from the array return a truthy value when passed as an argument to the callback, `atLeastTwo` should return `true`. If there aren't at least two elements from the array that return a truthy value when passed as arguments to the callback, `atLeastTwo` should return `false`.

#### Example:

```
atLeastTwo([1, 2, 3, 4, 5], isOdd);  //true
atLeastTwo([2, 4, 6], isOdd);  //false
atLeastTwo([1, 2, 3, 4, 5], t => t > 3);  //true
```

### 5. Repeat the function x times

Write a repeat function that receives 3 arguments: a `string`, `number of repetitions`, and a `callback` that will be repeated. The repeat function should pass the `string` to the `callback` as an argument and repeat the `callback` `x` times, with the result of the previous repetition as an argument.

#### Example:

```
repeat('Kutay', 3, exclaim);  //'Kutay!!!'
repeat('Kutay', 2, doubleChars);  //'KKKKuuuuttttaaaayyyy'
```

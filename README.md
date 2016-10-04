# first-of-array
Return the first element in an array. Is tested.

##Overview

The module can be used when you need a function that returns the first element of an array

##Installing 

```javascript
npm i first-of-array --save-dev
```

##Usage

Simply require the `first-of-array` module. The export function can be used in any module you desire:

```javascript
const first = require('first-of-array');

first([1,100,1000); // 1
first([['Ahad', 12, 10000], 12, 'Three', true]); // ['Ahad', 12, 10000]

```

##TODO

* add more tests

##Tests

`npm test`

Also supports the standards JavaScript library, configure as follows:

```JSON
"standard": {
    "ignore": [
      "/test/test.js",
      "app.js"
    ]
  }
```

```javascript
first([1,2,3,4,5]);                  // ==> returns a number
first([['Ahad',2,3,4,5]);            // ==> returns a string
first([[1,2e10],2,3,4,5])            // ==> returns only the first element
first([[true, false], 'id', 1004]);  // ==> returns the first element, even if is array
first([]);                           // ==> returns undefined, if passed empty array
```

##Related Modules

* [is-even-integer](https://github.com/ahadb/is-even-integer)
* [node-range](https://github.com/ahadb/node-range)
* [last-of-array](https://github.com/ahadb/last-of-array)
* [node-camel-case](https://github.com/ahadb/node-camel-case)

##Contributing

Feel free to file an issue or bug.

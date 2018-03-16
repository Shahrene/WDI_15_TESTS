//### JS Variables

//1. Assign the string "Jack" to a variable called `captain`
//<br><br>

var captain = 'Jack';

//2. Using the `captain` variable,
//use string concatenation to form the string
//"Oh Jack, my Jack!", assigning it to a variable
//named `phrase`

var captain = 'Jack';
var phrase = ('Oh ' + captain + ', my ' + captain + '!');

//### JS Conditionals
//```js
var souls = 3;
var lifeRafts = 2;
//```

//1. Write an `if` statement that console.logs "SOS!"
//if there are more _souls_ than _lifeRafts_
//<br><br>

var souls = 3;
var lifeRafts = 2;
 if (souls > lifeRafts);
  console.log ('SOS!');

//### Data Structures - JS Arrays

//1. Create an array named `weekend` with just 'Saturday' in it
//<br><br>

var weekend = ['Saturday',];

//2. Add 'Sunday' to the end of the `weekend` array
//<br><br>

weekend.push('Sunday');

// 3. Add 'Friday' to the front to the front of the `weekend` array
// <br><br>

weekend.unshift('Friday');

// 4. Access 'Saturday' in the array and assign to a variable named `day`
// <br><br>

var day = weekend[1];

// 5. Remove 'Friday' from the array
// <br><br>

weekend.shift();

// ### Data Structures - JS Objects
//
// 1. Write an object literal named `brain` having a property of
//`energyLevel` with a value of `10`
// <br><br>

var brain = {
  energyLevel: 10,
}

// 2. Assign the property of `energyLevel` to a variable named `energy`
// <br><br>

var energy = brain.energyLevel;

// 3. Add a `dream` property to the `brain` object that
//holds the string  'electric sheep'
// <br><br>
//

brain.dream = 'electric sheep';

// ### JS Functions
//
// 1. Write a function to return the area of a rectangle
//(the product of its length and its width)
// <br><br>

var areaOfRectangle = function(num1, num2) {
 return num1 * num2
}
// 2. Invoke the function with `3` and `4` as arguments and save it to a variable
// <br><br>

var area = areaOfRectangle (3, 4);

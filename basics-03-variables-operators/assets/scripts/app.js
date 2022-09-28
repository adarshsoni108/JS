// your Javascript code gets executed from top to bottom,

// actually your HTML file gets parsed from top to bottom by the browser

// and if you then import some Javascript in there, that file gets evaluated and executed by the browser

// and the code in there also gets executed from top to bottom and

// that's the default Javascript behavior and hence of course if you do something in this line and then you

// use it in the line thereafter, you get the result from this line and not the result from the first line.

// It would be pretty bad if that would be the case because then you could never do anything in your code.

const defaultResult = 0; //value in here will never change
let currentResult = defaultResult; //intialized the variable

// Now we introduced a constant and you might be wondering if we're not implicitly still changing the constant

// with our code because I initialize current result with the value which is stored in my constant and

// since I thereafter change current result, you could think that implicitly we also change the constant, right,

// because we set those equal in this line

// but it's important to understand that indeed we are not changing the constant here because here, we are

// copying the value that's in a constant into this brand new variable.

// So if we thereafter change the variable, we're changing the copy, the original constant and its value are

// untouched

// if we then change the variable, that's something important to keep in mind here or to understand. An

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';

outputResult(currentResult, calculationDescription);
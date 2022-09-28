// your Javascript code gets executed from top to bottom,

// actually your HTML file gets parsed from top to bottom by the browser

// and if you then import some Javascript in there, that file gets evaluated and executed by the browser

// and the code in there also gets executed from top to bottom and

// that's the default Javascript behavior and hence of course if you do something in this line and then you

// use it in the line thereafter, you get the result from this line and not the result from the first line.

// It would be pretty bad if that would be the case because then you could never do anything in your code.

const defaultResult = 0; //value in here will never change
let currentResult = defaultResult; //intialized the variable

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';

outputResult(currentResult, calculationDescription);
// your Javascript code gets executed from top to bottom,

// actually your HTML file gets parsed from top to bottom by the browser

// and if you then import some Javascript in there, that file gets evaluated and executed by the browser

// and the code in there also gets executed from top to bottom and

// that's the default Javascript behavior and hence of course if you do something in this line and then you

// use it in the line thereafter, you get the result from this line and not the result from the first line.

// It would be pretty bad if that would be the case because then you could never do anything in your code.

const defaultResult = 0; //value in here will never change because it is const
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


// Well there are numbers which I just used

// and of course not just positive, non-decimal numbers but also negative numbers like -3 or numbers

// with decimal places like 22.956

// and important here, numbers with decimal places,

// so like 22.956 are called floats or floating point numbers,

// numbers without decimal places like here, 2 or -3, are called integers.

// Now you of course use numbers for any code where you need to calculate something or where you just need

// to work with a number

// and of course typically that's a lot of code, whether you're having a calculator like we're writing it

// or you're working with some prices or something like that,

// you would typically work with numbers of course.

// Now you don't just have numbers in code

// however, sometimes you also need text,

// let's say you're working with the name of a user who logged in

// or you want to show a message to the user, then you're working with text or also called strings and

// it's not just called strings in Javascript but in other programming languages as well,

// so if I say a string, I mean a text type.

// Now you can actually create a string by wrapping your text between single quotes, double quotes or these

// back ticks here which you find on your keyboard,

// all three creates a valid string.

// You can use whatever you want, you just should be consistent though

// the third option here, the back ticks,

// that's kind of special,

// Numbers 2,-3,22.35
// Strings (Text) 'Hi',"Hi",`Hi`
const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

//let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';

// We're building our string here with three pieces of text you could say, with the opening parentheses,

// with this code thereafter or with this text thereafter and with the value that's stored in default result.

// Now in such cases, you can actually also use back ticks instead of single quotes.

// So this is now not a single quote,

// this is the back tick character which you'll find on your keyboard, get rid of all other single quotes

// you actually have and get rid of these pluses you used to combine your strings, only keep the plus which

// you want to output on the page and replace the closing single quote

// also with the closing back tick or with the back tick.

// So now I got two back ticks which surround my text and therefore now if I save this, unsurprisingly here

// I say default result instead of the value which is actually stored in that default result constant

// but now back ticks give you access to a special syntax.

// You can now use a dollar sign in here and then an opening and closing curly brace and now you can put

// your variable or any expression which yields some result, which can be output as text,

// so you could also have a calculation like one plus one in here, so you can put that between your opening

// and closing curly braces

// now and what this does is it tells Javascript to output the value that's in this constant in this case in

// this place of your text. So it will not output the dollar sign or the curly brace,

// instead it will output the value of the expression as it's called,

// so in this case of the constant you have between the opening and closing curly brace. So if you now save

// that file and you reload, you'll see zero here which indeed is the value we have in default

// result. This only works with back ticks, if you used single or double quotes,

// this dollar sign curly brace thing would be treated as regular text and therefore output as such as you

// can see.

// So this is a really nice feature, using these back tics with this dollar sign curly brace thing,

// if you have some text in which you want to embed or inject some dynamic value, so the result of some

// calculation or the value that's stored in a variable or a constant, then this is simply shorter, it saves

// you the manual string concatenation which we previously had to do where we combined multiple strings with

// the plus operator,

// this is simply a bit shorter and therefore how you typically would build a string that includes dynamic

// values.

// This overall construct here is called a template literal, so if you ever Google for Javascript template

// literal, you'll find exactly this piece of syntax.

//important links (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation)
let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);
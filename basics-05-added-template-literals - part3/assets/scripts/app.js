const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

// to demonstrate how we work with normal, which means non-template literal strings,

// then of course you use single or double quotes and you might have a message like an error occurred, something

// like this.

// If you would want to split this across multiple lines, you have two options - you can close the string

// here by adding a single quote and then reopen a new one and combine them with a plus and then add a

// line break,

// this is valid Javascript code, you can span expressions that use operators across multiple lines,

// that would be possible here for mathematical operations just as it is possible for concatenating strings

// with the plus operator

// and here you can also indent. If you do this and you would output this somewhere on the webpage,

// this indeed would not include a line break and also not extra whitespace because this is really just

// something we do for us here in the IDE to make this more readable. The string that's getting constructed

// only consists of these characters between the single quotes, so there's no line break in there and there

// is also no extra whitespace.

// Now if you would want to add a real line break here in a string enclosed by single or double quotes,

// that is possible with a special character or a special combination of characters - you add a backslash

// and then n. What this will do if it would be rendered to the screen is it will not output \n

// there but instead it will treat this as a line break. To show this,

// let's temporarily output the error message here instead of the calculation description, just temporarily

// so that we can see that.

// Now with that if you reload here, we see an error occurred and if we go back and add our good old style

// here to the h2 element right in developer tools down there by setting whitespace to pre, you see the

// line break here as well and you can also see it here,

// there is a line break after error.

// So with this \n, you can add a line break in a string no matter if you use single or double

// quotes, you could also use this here in the template literal by the way,

// it's also supported there but there you don't need it because there you can just add a normal line break

// and since you're in a template literal, that will add a line break to the string as well.

// So there, this is available, here in a normal string with single or double quotes, you need that \n

// thing.

// And by the way, using a backslash in a string has a special meaning, it escapes the character that comes

// after the backslash, which means the character after the backslash is not treated as a normal character

// with its normal meaning but instead combined with the backslash, it gets a special meaning.

// In this case here, we escaped the n and therefore we don't just output n here but instead backslash

// and n combined mean line break.

// You have more such combinations and attached, you will find a list of available shortcuts or combinations

// here in your strings. One other important combination for example is backslash and then a single quote.

// This is helpful if you want to output a single quote in your string, especially if your string is enclosed

// by single quotes. Without the backslash, we would have a syntax error here because what happens is we

// open a string with a single quote, here we then close it and then here in this case, we have a redundant

// single quote that tries to open a new string which then never gets closed.

// So we have to tell Javascript that this single quote should not be used as it normally uses single quotes,

// i.e. to close that string but instead that we want to output this single quote here as a normal character

// in our text and adding a backslash in front of it escapes the meaning the single quote would otherwise

// have and therefore allows us to do that, and of course an alternative always is to use double quotes

// to surround the string instead of single quotes and then you can use single quotes in the double quoted

// string without issues and without escaping it because it then won't have that special meaning of finishing

// your string or closing your string because you can only close a string with the character with which

// you opened it

// and since here, we opened a string with a double quote character, we can only close it with such and Javascript

// won't interpret a single quote as please close my string character,

// still useful to know that you could escape it like this. By the way if you want to output a backslash

// in the string, you need to escape this as well because otherwise, a single backslash always tells Javascript

// that the character after the backslash should be considered or should be escaped.

// So if you want to output just a backslash, you put another backslash in front of it to tell Javascript

// hey the character after this backslash has a special meaning and double backslash then in fact tells

// Javascript I want to output a single backslash here as part of my string. So these are some of the useful

// things that you should know about strings,

// you will encounter them throughout this course

// and throughout your career as a developer. You don't need to learn all these things by heart,

// the attached list of escapable characters might be useful, though \n, \\

// and backslash single quote are the most important ones I would argue, the ones you typically use most

// often.

// And being aware of the template literal, that you can interpolate content here and that you can easily

// add line breaks and whitespace in here,

// that's also something which is good to know I guess.

// And with that, I reverted all of that, again I'm sending a calculation description to output result and

// I deleted the extra error message variable because we don't need it here to continue,

// I just wanted to dive into some of these string specialties and things you should know.
//===============================================
//no line break or extra white space
// let errorMessage = 'An error' +  
//                       'Occured' 

//=======================================
//To add line break using \n
let errorMessage = 'An error \n' +  
                      'Occured' 

//=========================================
//To add single quote inside string without breaking the string using escape charater backslash (\)
// let errorMessage = 'An error \'' +  
//                       'Occured'

//=========================================
//To add single quote inside string without breaking the string using double quotes
// let errorMessage = "An error '" +  
//                       "Occured"

//=========================================
//Single blackslash always tell js that character after backslash 
//should be considered as escape. To output just backslash u put another blackslash
// let errorMessage = 'An error \\' +  
//                       'Occured'

outputResult(currentResult, calculationDescription);
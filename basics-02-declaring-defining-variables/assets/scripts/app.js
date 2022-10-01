// So the casing in the names you choose really matters and that's important to keep in mind.

// Now also allowed would be a name like this,

// It's basically similar to the first example but this also includes a digit because your variable names

// can be made up of any letters or digits.

// You can also use the dollar sign special character and your variable name can even start with it,

// you can use it anywhere in the variable name but it can even start with it.

// Similarly, you can also use the underscore character at the beginning of your variable name or anywhere

// inside of it,

// so that's also allowed.

// Now there are a couple of names which are not allowed or not recommended, for example userName like

// this.

// This is actually allowed but it's a bad practice,

// You should use this camel case notation on the left with lowercase starting character, one word and each

// word instead of the words starting with an uppercase character.

// So here, what you see there is actually another convention called snake case which you have in some

// other programming languages like Python but not in Javascript.

// So whilst this technically would be a valid name, you can use the underscore here, whilst this would be a

// valid name, it's not recommended

// instead use the version on the left.

// Now what's not recommended but more importantly, not allowed is for example a variable name like this.

// Whilst I did say that you can use any name that uses letters or digits,

// you must not start with a digit, so your variable name or your constant name and everything I explained

// here is true for constants created with the const keyword as well, these

// variables and constants must not start with a digit. Now there also are special rules when it comes to

// special characters, you can use dollar sign and underscore at the beginning of your variable or anywhere

// in your variable but you must not use other special characters, neither at the beginning of your variable

// nor anywhere else,

// so dashes or whitespace is not allowed.

// The underscore is allowed as mentioned on the left but other special characters are not allowed no matter

// where you plan on using them. And the last important thing you should keep in mind, in this course you

// will learn about a couple of keywords like let and const and using these keywords as names is also

// not allowed because how would Javascript be able to find out whether you want to use the keyword here

// or your variable,

// right?

// It wouldn't and therefore this is not allowed.

// So now that we know what's allowed and what's not allowed,

// let's go back to our code and write some good code.

// So I got the current result variable and now we could write the variable just like this.

//=======================================================================

// Now in Javascript, you don't have to initialize this variable with a value, so you can leave it like this

// and now it's an uninitialized variable.

// You could also say and that's a term you will hear in other programming languages as well,

// this variable is now declared, the program

// Javascript is now aware of its existence but it's not initialized or defined yet,

// it has no value yet or no value set by you. So you can leave it like this and sometimes this is just

// what you need,

// let currentResult //it is declared but unintialized variable.

//====================================================================
let currentResult = 0;


// sometimes you have certain variables where you don't really need a starting value. For the result

// however, I'd like to have one and therefore I'll add an equal sign and then set an initial value which

// could be zero here, the number zero and I'm using a number here because of course, I want to use this

// variable in some calculations later and add numbers,

// the dec numbers and so on and therefore having a number here with which we can do mathematical operations

// makes a lot of sense. Now to conclude our first line of good Javascript code we write,

// let's see how we end this line.

// We could end it like this and just go to the next line to write the next piece of code but you'll also

// often see code where we use a semicolon to finish off this line.

// Now in Javascript, using the semicolon is generally optional,

// I'm saying generally because there are some very rare niche cases where it's not optional but you can

// avoid these cases typically and hence you can write Javascript code without semicolons and you'll

// see certain tutorials or guides which actually recommend that you don't add a semicolon.

// Ultimately, it's up to you whether you want to end each line of code and that's not just the case for variable

// definitions but for any code you write basically, whether you want to end these lines with semicolons

// or not.

// I personally like to do it, also because there are many other programming languages where it's

// mandatory to use a semicolon and it's easier to switch to those if you're used to adding it but you

// can also avoid it and just use a new line to write a new expression.

// It's up to you, just whatever you use,

// you should then stick to it and be consistent.

// So I will go with semicolons, not just here but throughout the rest of the course

// but it is up to you.
const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

// Now some additional information about strings and template literals as we have it here.

// One convenient thing about template literals is that you can easily write multiline strings there. Now

// with multiline strings, I mean strings which really do have a line break in them.

// So let's say here in front of the asterisk character, I add a couple of line breaks and hence this string

// looks like that might look a bit strange at first but this is valid Javascript syntax,

// we opened a string here, we close it here and since it is a template literal with back ticks, this is

// allowed. For a normal string with single or double quotes, this would not be allowed but I will come back

// to that. Now if you save that and you reload this in the browser, you'll not see a difference, though if

// you have the developer tools opened which you can always open with view

// developer, developer tools and you then click on this select icon there and you select this part of

// your webpage, you will see that indeed the whitespace is considered here,

// it's just the browser and the default behavior of the browser and the h2 element that basically strips

// this redundant whitespace but it's output there and depending on where you output this, in which element

// and how that element is styled, you might also get that whitespace or the extra line break here in your

// webpage.

// So the fact that we don't see the line break here in the middle is really just due to how this is styled

// and rendered.

// If you go down here to the elements style of the h2 element which is selected and you add whitespace

// pre for example, then you will see the whitespace here as well because this is some CSS styling

// which does not omit the extra whitespace but instead render it, here in this case that means it renders

// this extra line break. So you can easily add line breaks here when using the template literal syntax,

// this can help you with readability because you might be able to read long strings easier or better here

// in the IDE if you add line breaks but you should always keep in mind that this is not just a visual

// thing for you in the IDE but that the line breaks really are part of the string.

// The same is true if you indent this, for example you could think that if you write it like this, it's

// a normal string but it's more readable to you as a developer.

// Well if you save that and you reload, our styling will be lost because we reloaded but here on the right

// you can see this extra whitespace,

// it really is part of the string and if we re-add this style here to our h2 element here in the developer

// tools by setting whitespace to pre, you see we really do have the line break and the extra whitespace

// in here. So be careful when you use that and really only use the line break or extra whitespace feature

// here

// if you want to build a string that has the extra whitespace or that has the line break, don't do it just

// for readability.

// Now if I come back to normal strings, there
let calculationDescription = `(${defaultResult} + 10)


* 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);
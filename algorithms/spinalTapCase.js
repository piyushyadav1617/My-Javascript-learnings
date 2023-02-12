// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

//The regex /\s|_|(?=[A-Z])/ is a regular expression pattern that can be used to split strings into separate words.

// Here's what each part of the pattern does:

// \s matches any white space character, including spaces, tabs, and newline characters.
// | is the OR operator in regular expressions, which matches either the expression to its left or the expression to its right.
// _ matches the underscore character.
// (?=[A-Z]) is a positive lookahead assertion, which checks if the next character is an uppercase letter without consuming it.
// So the pattern as a whole will match either a white space character, an underscore, or an uppercase letter that's immediately
//followed by a lowercase letter. This can be used to split a string into separate words based on these separators

function spinalCase(str) {
  let strArr = str.split(/\s|_|(?=[A-Z])/);
  return strArr.join("-").toLowerCase();
}
console.log(spinalCase("This Is Spinal Tap"));

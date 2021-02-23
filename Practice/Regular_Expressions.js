//searching single string literal
let myString = "Hello World";
let pattern = /World/;

if(pattern.test(myString))
{
    console.log("TRUE");
}
else
{
    console.log("FALSE");
}

//searching more than one word
let petString = "James has a pet cat.";
let pattern1 = /dog|cat|bird|fish/;
if(pattern1){
    console.log("TRUE");
}
else
{
    console.log("FALSE");
}

//match pattern with no matter what its case and match abbreviations or variations with spaces
let myString1 = "freeCodeCamp";
let pattern2 = /free code  camp/i;
if(pattern2){
    console.log("TRUE");
}
else
{
    console.log("FALSE");
}

//extracting strings with match() ==> its syntax is opposite of test
// syntax : "string".match(/regex/);
//returns : ["string"] if its then in string otherwise [] <-empty list

let extractStr ="Extract the word 'coding' from this string.";
let pattern3 = /coding/;
let res = extractStr.match(pattern3);
console.log(res);

//extracting more than one occurences of a word using flag g
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig;
let result0 = twinkleStar.match(starRegex);
console.log(result0);

//using wildcard character (.) 
//For example, if you wanted to match "hug", "huh", "hut", and "hum", you can use the regex /hu./ to match all four words.
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr); // true cuz fun is present (first character can be anything)

//Match Single Character with Multiple Possibilities
//using [ ] square brackets
//print all the vowel character [resent in the sentence
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; //
let result1 = quoteSample.match(vowelRegex);
console.log(result1);

//Match Letters of the Alphabet
let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // 
let result2 = quoteSample1.match(alphabetRegex);
console.log(result2);

//match number and alphabets of a sentence
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig;
let result3 = quoteSample2.match(myRegex);
console.log(result3)

//Match Single Characters Not Specified
let quoteSample3 = "3 blind mice.";
let myRegex1 = /[^0-9aeiou]/gi; // "^" used inside the square bracket then it represents the negation of the string
let result4 = quoteSample3.match(myRegex1); 
console.log(result4);

//Match Characters that Occur One or More Times
//used the plus + sign to look for characters that occur one or more times
let difficultSpelling = "Mississippi";
let myRegex2 = /s+/g;
let result5 = difficultSpelling.match(myRegex2);
console.log(result5);

//Match Characters that Occur Zero or More Times
// * option that matches characters that occur zero or more times
let chewieQuote = "AaaaaaaaaaaaaaaarrrAaaagh!";
let chewieRegex = /Aa+/g;
let result6 = chewieQuote.match(chewieRegex);
console.log(result6);

//Find Characters with Lazy Matching (?)
let text = "<h1>Winter is coming</h1>";
let myRegex3 = /<[a-z1-9]*?>/;
let result7 = text.match(myRegex3);
console.log(result7);

//caret character (^)
//if "^" (caret character used outside the square barcket then it represents begining)
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result8 = calRegex.test(rickyAndCal);
console.log(result8) //returns true

//"$" used to match ending string
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let result9 = lastRegex.test(caboose);
console.log(result9);

//Match All Letters and Numbers (\w)
//match alphanumeric
let quoteSample4 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // "\w" -> shortcut for [A-Za-z0-9_] (it includes undescore ("_"))
let result10 = quoteSample4.match(alphabetRegexV2).length; // results character array size
console.log(result10);

//match non-alpha numeric (\W)
let quoteSample5 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; //matches all aloha numerics such as whitespaces and dot(.) in the above quote sample 5)
let result11 = quoteSample5.match(nonAlphabetRegex).length;
console.log(result11); 

//Match All Numbers \d
let movieName = "2001: A six Space Odyssey";
let numRegex = /\d/g;  // \d (digit) shortcut for numbers
let result12 = movieName.match(numRegex).length;
console.log(result12); 

//Match All Non-Numbers \D
let movieName1 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; 
let result13 = movieName1.match(noNumRegex).length;
console.log(result13);

//Task - 1
//check username is valid or not
/**
 * CONDITIONS:
 * Usernames can only use alpha-numeric characters.
 * The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
 * Username letters can be lowercase and uppercase.
 * Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
 */
let username = "prasad145";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
/**
 * ^[a-z] - begin with a-z
 * [a-z]+ - after that one or more letters
 * \d*$ - end with zero or more digits
 * |
 * ^[a-z] - begin with a-z
 * \d - next number should be digit
 * \d+$ - end with one or more digit  
 */
let result14 = userCheck.test(username);
if(result14)
{
    console.log("Valid Username");
}
else{
    console.log("Invalid Username");
}

//Match Whitespace \s (space) <- shortcut
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;  // it also matches carriage return, tab, form feed, new line characteres [\r\t\f\n\v]
let result15 = sample.match(countWhiteSpace);
console.log(result15);

//Match Non-Whitespace Characters
let sample1 = "Whitespace is important in separating words";
let countNonWhiteSpace1 = /\S/g; //[^\r\t\f\n\v]
let result16 = sample.match(countNonWhiteSpace1).length;
console.log(result16);

//Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; 
let result17 = ohRegex.test(ohStr); //return ture;
console.log(result17);

//Specify Only the Lower Number of Matches
//z four or more times
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; 
let result18 = haRegex.test(haStr);
console.log(result18);

//Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result19 = timRegex.test(timStr);
console.log(result19);

//Check for All or None
let favWord = "favorite"; // In american english -> favorite, in british english -> favourite in order to check we need to take care of "u" so we use "?" ti check part of is present or not
let favRegex = /favou?rite/;  
let result20 = favRegex.test(favWord);
console.log(result20);

//Positive and Negative Lookahead
//Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/i;
let result21 = pwRegex.test(sampleWord);
console.log(result21); //false

//Check For Mixed Grouping of Characters
let myString2 = "Eleanor Roosevelt";
let myRegex4 = /(Franklin|Eleanor).*Roosevelt/i;   
let result22 = myRegex4.test(myString2); 
console.log(result22);

//Reuse Patterns Using Capture Groups "()"
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result23 = reRegex.test(repeatNum); // return true;
console.log(result23);

//Capture Groups to Search and Replace
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceText = "$3 $2 $1"; //You can also access capture groups in the replacement string with dollar signs ($).
let result24 = str.replace(fixRegex, replaceText);
console.log(result24);

//replace whitespaces at begining and end of the string 
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let result25 = hello.replace(wsRegex,"");
console.log(result25); 
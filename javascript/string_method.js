let text = "Hello, JavaScript World!";

console.log("Length:", text.length); 

console.log("Slice:", text.slice(7, 17)); 
console.log("Substring:", text.substring(7, 17)); 
console.log("Substr:", text.substr(7, 10)); 

console.log("Replace:", text.replace("JavaScript", "JS")); 

console.log("To Upper Case:", text.toUpperCase()); 
console.log("To Lower Case:", text.toLowerCase()); 

console.log("Concat:", text.concat(" - Have Fun!")); 

let textWithSpaces = "   Hello World!   ";
console.log("Trim:", textWithSpaces.trim()); !

console.log("Pad Start:", text.padStart(30, "*")); 
console.log("Pad End:", text.padEnd(30, "*")); 

console.log("Starts with 'Hello':", text.startsWith("Hello")); 
console.log("Ends with 'World!':", text.endsWith("World!")); 
console.log("Includes 'JavaScript':", text.includes("JavaScript")); 

console.log("Index of 'JavaScript':", text.indexOf("JavaScript")); 
console.log("Last index of 'o':", text.lastIndexOf("o")); 
console.log("Search 'World':", text.search("World")); 

console.log("Character at index 0:", text.charAt(0)); 
console.log("Access character by index:", text[0]); 

console.log("Split by space:", text.split(" "));
console.log("Repeat 3 times:", text.repeat(3));

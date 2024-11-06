let a = "10";       
let b = 5;           
let c = true;        
let d = undefined;   
let e = null;        
let f = "Hello";     
let g = [1, 2, 3];  

// Implicit conversions in arithmetic operations
let result1 = a - b;               
let result2 = a * c;              
let result3 = f + b;            

// Implicit conversions in comparison operators
let result4 = a == b;             
let result5 = a == "10";          
let result6 = a === "10";         
let result7 = a === 10;  
          
// Explicit conversions
let result8 = Number(a) + b;       
let result9 = Boolean(e);          
let result10 = Boolean(g);        

// Implicit conversions in logical operations
let result11 = d || "default";    
let result12 = e && a;           
let result13 = g || b;            

// Converting objects to primitive values
let obj = { valueOf: () => 4 };    
let result14 = obj + 1;           

// Testing output
console.log(result1);   
console.log(result2);   
console.log(result3);   
console.log(result4);   
console.log(result5);  
console.log(result6);
console.log(result7);   
console.log(result8);   
console.log(result9);   
console.log(result10);  
console.log(result11);  
console.log(result12);  
console.log(result13);  
console.log(result14);  

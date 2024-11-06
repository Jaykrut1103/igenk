function outerFunction() {
    const outerVar = "I'm in the outer scope";
  
    function innerFunction() {
      console.log(outerVar); 
    }
  
    innerFunction(); 
  }
  
  outerFunction(); 
  
const globalVar = "global";

function outerFunction() {
  const outerVar = "outer";
  const newVar="outerFunctionVar"
  function middleFunction() {
    const middleVar = "middle";

    function innerFunction() {
      const innerVar = "inner";
      const newVar="innerFunctionVar"
      console.log(globalVar); 
      console.log(outerVar);   
      console.log(middleVar);  
      console.log(innerVar);  
      console.log(newVar)
    }

    innerFunction();
  }

  middleFunction();
}

outerFunction();

let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) =>{
        if(e.target.innerHTML == '='){
            if(string == ""){
              input.value = "bad expression";
            }
            else{
              string = eval(input.value);
              input.value = string;
            }
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else {
          if (string == "" && isMathOperator(e.target.innerHTML)) {
              input.value = "bad expression";
          } 
          else{
            if(string == "" && isMathOperator(e.target.innerHTML) == true ){
                // string += e.target.innerHTML;
                input.value = "bad expression";
            }
            else{
                string += e.target.innerHTML;
                input.value = string;
            }
        }
      }
       
    })
})

function isMathOperator(input) {
  // Define a regular expression pattern for common mathematical operators
  var operatorPattern = /^[\+\-\*\/%.]$/;   

  // Check if the input matches the pattern
  return operatorPattern.test(input);
}
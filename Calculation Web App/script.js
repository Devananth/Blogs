
// Saving HTML elements in JS variables 

// Getting first input from the DOM
var firstInput = document.querySelector('#firstInput');

// Getting second input from the DOM
var secondInput = document.querySelector("#secondInput");

// Getting operators 
var add = document.querySelector('#addition');
var sub = document.querySelector('#subtraction');
var mul = document.querySelector('#multiplication');
var div = document.querySelector('#division');

// Getting result div to store the output
var outputDiv = document.querySelector('.result'); 


// Assinging eventListeners to the buttons(operators)
add.addEventListener('click' , () => {

    //Extracting the values from the input
    var val1 = firstInput.value;
    var val2 = secondInput.value;

    //Checking the both values
    if(val1 && val2){
        val1 = Number(val1);
        val2 = Number(val2);
    }
    else
    {
        //Showing error
        outputDiv.innerText = "Enter the valid inputs";
        return false;
    }

    //storing the calculated result
    var result = val1 + val2;

    // Display the result in the output div
    outputDiv.innerHTML = "The answer is " + result;

});

sub.addEventListener('click' , () => {

    //Extracting the values from the input
    var val1 = firstInput.value;
    var val2 = secondInput.value;

    //Checking the both values
    if(val1 && val2){
        val1 = Number(val1);
        val2 = Number(val2);
    }
    else
    {
        outputDiv.innerText = "Enter the valid inputs";
        return false;
    }

    result = val1 - val2;

    outputDiv.innerHTML = "The answer is " + result;

});

mul.addEventListener('click' , () => {
    //Extracting the values from the input
    var val1 = firstInput.value;
    var val2 = secondInput.value;

    //Checking the both values
    if(val1 && val2){
        val1 = Number(val1);
        val2 = Number(val2);
    }
    else
    {
        outputDiv.innerText = "Enter the valid inputs";
        return false;
    }

    result = val1 * val2;

    outputDiv.innerHTML = "The answer is " + result;
    
});

div.addEventListener('click' , () => {
   //Extracting the values from the input
   var val1 = firstInput.value;
   var val2 = secondInput.value;

   //Checking the both values
   if(val1 && val2){
       val1 = Number(val1);
       val2 = Number(val2);
   }
   else
   {
       outputDiv.innerText = "Enter the valid inputs";
       return false;
   }

   result = val1 / val2;

   outputDiv.innerHTML = "The answer is " + result;
});




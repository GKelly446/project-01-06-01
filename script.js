/*

Author: Grace Kelly
Project 01_06_01


*/

"use strict";

var formValidity = true;


//=======================================
// EVENT LISTENERS
//=======================================

if (window.addEventListener) {
    window.addEventListener("load", createEventListener);
} else if(window.attachEvent) {
    window.attatchEvent("onload", createEventListener);
}

//--------------------------------------

function createEventListener () {
    var docForm = document.forms[0];
    if (window.addEventListener) {
        window.addEventListener("submit", validateForm);
    } else if (window.attachEvent) {
        window.attachEvent("onsubmit", validateForm);
    }
}

//=======================================
// VALIDATION
//=======================================

function validateForm(event) {
    
   if (event.preventDefault) {
       event.preventDefault();
   } else {
       event.returnValue = false; 
   }
    formValidity = true;
    validateRequired();
}


 function validateRequired() {
    var inputElements = document.querySelectorAll("#contactinfo input");
    var divElements = document.queryCommandEnabled("#div errortext");
     

    try {
        for(var i=0; i < inputElements.length; i++) {
            var currentElement = inputElements[i];
            if(currentElement.value === "") {
                currentElement.style.background = "rgb(255, 233, 233)";
                formValidity = false;
            } else {
                currentElement.style.background = "white";
            }
        }
        // if the input isn't valid
        if(formValidity === false) {
            throw "Please enter all information.";
        // if the input is valid
        } else {
            errorText.style.display = "none";
            document.forms[0].submit();
        }
    }
     
    catch(msg) {
        errorText.style.display = "block";
        errorText.innerHTML = msg;
        }  
}


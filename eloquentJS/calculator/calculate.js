/* 
 * calculate
 */

let done = false;                                                               //this will detect whether the equals button has been pressed or not
function getHistory(){                                                          //function that returns the history in the screen
    return document.getElementById("history-value").innerText;
}

function printHistory(num){                                                     //prints history in the screen while the calculation is undertaken
    document.getElementById("history-value").innerText = num;                   //changing the history value to the value of 'num'
}

function getOutput(){                                                           //returns output
    return document.getElementById("output").innerText;                         //inner text (textContent) of id 'output'
}

function printOutput(num){                                                      //prints output
    if(num === ""){                                                              //if number is an empty string
        document.getElementById("output-value").innerText = num;                //set the output value to number
    }
    else{                                                                       //otherwise
        document.getElementById("output-value")                                 //set the output value(screen)
                .innerText = getFormattedNumber(num);                           //to the formatted version of 'num', commas and stuff
    }
}

function getFormattedNumber(num){                                               //function for showing thousand, million etc.. comma separations 
    if(num === "-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");                                         //for separating the number with commas
    return value;                                                               //formatted number 
}

function reverseNumberFormat(num){                                              //removing the commas so that there is no errors upon evaluation
    return Number(num.replace(/,/g, ''));                                       //using regular expressions to remove the commas
}

function reverseMathObject(number){
    return number; //must use regular expressions
}

/*EVENT HANDLING: OPERATORS*/
var operator = document.getElementsByClassName("operator");                     //binding variable operator to the class name 'operator'
for(var i = 0; i < operator.length; i++){                                       //for loop for going thru all operations instead of writting a function for each operator
    operator[i].addEventListener("click", function(){                           //for every operator add an event handler: apparently the variable operator is an array
        if(this.id === "clear"){                                                 //when 'C' is pressed
            printHistory("");                                                   //clear the history
            printOutput("0");                                                   //and print "0" on the display
        }
        else if(this.id === "backspace"){                                        //if backspace is pressed
            var output = reverseNumberFormat(getOutput()).toString();           //remove the formatting on output, and make it a string
            if(output){                                                         //if output has a value
                output = output.substr(0, output.length - 1);                   //decrease the length of output by one character
                printOutput(output);                                            //print the resulting string
            }
        }
         
        
        else{
            var output = getOutput();                                           //get the output
            var history = getHistory();                                         //get history
            if(output === "" && history !== ""){                                  //if output is an empty string and history is not..
                
                printHistory(getHistory());
                printOutput("");
                
                if(isNaN(history[history.length - 1])){                         //and if the last character is not a number...
                    history = history.sbstr(0, history.length - 1);             //remove that character
                }                                                               //this makes sure that whatever we evaluate with stock..
            }                                                                   //function 'eval()' doesnt produce NaN(Not a Number)
            if(output !== "" || history !== ""){                                  //if output is not an empty string or history is not an empty string
                output = output == "" ? output : reverseNumberFormat(output);   //tenery operator still need to study this thoroughly
                history = history + output;                                     //adding to the history
                if(this.id === "="){                                             //if equal to is pressed
                    var result = eval(history);                                 //let variable result be the evaluation of history: eval is the key function for any calcualtor (I think)
                    printOutput(result);                                        //display the result
                    console.log(result);
                    printHistory("");                                           //clear history
                    done  = true;
                }
                
                /*OPERATIONS*/
                if(this.id === "sqrt"){                                         //square root
                    result = Math.sqrt(history);
                    printOutput(result);
                    printHistory(`root(${history})`);
                }
                else if(this.id === "pi"){                                      //pi
                    result = Math.PI * (history);
                    printOutput(result);
                    printHistory(`${history} * Pi`);
                }
                else if(this.id === "ln"){                                      //log
                    result = Math.log2(history);
                    printOutput(result);
                    printHistory(`ln(${history})`);
                }
                else if(this.id === "sin"){                                     //sin()
                    result = Math.sin(history);
                    printOutput(result);
                    printHistory(`sin(${history})`);
                }
                else if(this.id === "cos"){                                     //cos
                    result = Math.cos(history);
                    printOutput(result);
                    printHistory(`cos(${history})`);
                }
                else if(this.id === "tan"){                                     //tan()
                    result = Math.tan(history);
                    printOutput(result);
                    printHistory(`tan(${history})`);
                }
                else if(this.id === "square"){                                  //squaring
                    result = Math.pow(history, 2);
                    printOutput(result);
                    printHistory(`${history}^2`);
                }
                else if(this.id === "cube"){                                    //cubing
                    result = Math.pow(history, 3);
                    printOutput(result);
                    //printHistory(`${history}^3`);
                }
                else if(this.id === "e"){
                    result = history * Math.E;
                    printOutput(result);
                    //printHistory(`${history}e`);
                }
                else{                                                           //otherwise...
                    history = history + this.id;                                //on the history add the id of the operator
                    printHistory(history);                                      //display the updated history
                    if(!isNaN && result !== 0){
                        printOutput("");                                            //clear the main display
                    }
                }
            }
        }
    });
}

/*EVENT HANDLING: NUMBERS*/
var number = document.getElementsByClassName("number");                         //binding variable number to class name number
for(var i = 0; i < number.length; i++){                                         //for loop for going thru the array
    number[i].addEventListener("click", function(){                             //adding event handler to every item of the array(number)
        var output = reverseNumberFormat(getOutput());                          //get the output and reversethe formatting and bind that to variable output
        if(output != NaN){                                                      //if output is a number
            output = output + this.id;                                          //add the id of the number to screen, (textContent would have work too i guess)
            printOutput(output);                                                //print output
        }                                                                       //even handling number is not reall complex
    });
}

/*EVENT HANDLING: SCIENTIFIC AND SIMPLE CALCULATOR*/
let sci = document.getElementById("sci");                                       //the button that for scieintific operations
let simple = document.getElementById("simple");                                 //the button for simple operations
let calculator = document.getElementById("calculator");                         //the div for the calculator
let expanded = document.getElementById("expand");                               //the div that contains scientific operations
expanded.style.display = `none`;                                                //the scientific div starts out hidden

sci.addEventListener("click", () => {                                           //event listener for the `sci` button
    calculator.style.width = `560px`;                                           //increase the width of the calculator div to make room for the buttons to be displayed
    expanded.style.display = `inline-block`;                                    //displaying the scientific buttons that started out hidden
});

simple.addEventListener("click", () => {                                        //event handler for reverting to the simple calculator(button)
    calculator.style.width = `320px`;                                           //decreasing the width of the calculator
    expanded.style.display = `none`;                                            //and hiding the scientific buttons
});

let match = /\d+/.exec("ne two 100");
console.log(match);
console.log(match.index);

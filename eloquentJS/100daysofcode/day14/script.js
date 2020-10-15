/* script*/
let evaluated = false;                                                          //to see whether eval has been executed or not
let operated = false;                                                           //my attempt at stopping ++++++ from happening
function sin(){                                                                 //sin() button
    document.calculator.result.value = 
            Math.sin(document.calculator.result.value).toFixed(10);                         //new value
    
    evaluated = true;                                                           //evaluation has happened
    operated = false;
}
function cos(){                                                                 //cos() button
    document.calculator.result.value = 
            Math.cos(document.calculator.result.value).toFixed(10);                         //new value
    evaluated = true;                                                           //evaluation has happened
    operated = false;
}
function tan(){                                                                 //tan() button
    document.calculator.result.value = 
            Math.tan(document.calculator.result.value).toFixed(10);                         //new value thru the Math Object
    evaluated = true;                                                           //evaluation has happened
    operated = false;
}
function BACKSPC(){                                                             //backspace button
    var a = document.calculator.result.value;
    document.calculator.result.value = a.substr(0, a.length - 1);               //using substr to trim the end of the string
    evaluated = false;                                                           //evaluated
    operated = false;
}
function square(){                                                              //square button
    document.calculator.result.value = 
            Math.pow(document.calculator.result.value, 2);                      //using Math.pow(base, exponent)
    evaluated = true;                                                           //set evaluated to true
    operated = false;
}
function qubbed(){                                                              //qubbed button
    document.calculator.result.value = 
            Math.pow(document.calculator.result.value, 3);                      //Math.pow(base, exponent)
    evaluated = true;                                                           //set evaluated to true
    operated = false;
}
function sqrt2(){                                                               //square root button
    document.calculator.result.value = 
            Math.pow(document.calculator.result.value, 1/2);                    //Math.pow(base, exponent)
    evaluated = true;                                                           //set evaluated to true
    operated = false;
}
function sqrt3(){                                                               //qube root button
    document.calculator.result.value = 
            Math.pow(document.calculator.result.value, 1/3);                    //Math object: Math.pow(base, exponent)
    evaluated = true;                                                           //set evaluated to true
    operated = false;
}
function number(value){                                                         //all number buttons
    
    if(evaluated === true){                                                     //if 'equals to' has been pressed...
        document.calculator.result.value = value;                               //change the value on screen to the current numberbeing pressed
        evaluated = false;                                                      //then set evaluated to false so that other numbers can be pressed to without overwriting the present one
        operated = false;
    }
    else{                                                                       //otherwise..
        document.calculator.result.value +=value;                               //add the value to whats on screen
        evaluated = false;                                                      //set evaluated to false
        operated = false;
    }
    
}
function cls(){                                                                 //clear button
    document.calculator.result.value = "";                                      //set the value to empty: then the placeholder kicks in
}
function equals(){                                                               //equals to
    
    if(document.calculator.result.value === "0"){                               //when equals to is pressed while nothing is on display except 0
        evaluated = false;                                                      //evaluted is false
        operated = false;
    }
    else{                                                                       //otherwise
        document.calculator.result.value = 
                eval(document.calculator.result.value);                         //evaluate 
        evaluated = true;                                                       //setevaluated totrue since it has occured
        operated = false;
    }
}
function operator(value){                                                       // *+-/ operators
    if(operated === false){
        document.calculator.result.value += value;
        operated = true;
        evaluated = false;
        
    }
    
}
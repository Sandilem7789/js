//CREATE A PLATFORM FOR CREATING MUSIC ONLINE: AN ONLINE STUDIO OR A SERVICE THAT CONNECTS ONLINE STUDIOS:-)
//NOT THIS VERY MOMENT,  PERSONAL PROJECT, WHEN YOU KNOW YOUR SPELLS.

/*Use console.log() to display on browser, using F12 developer tools function*/

function factorial(n){
    if(n===0){
        return 1;
    }
    else{
        return factorial(n-1)*n;
    }
}

//var theNumber = Number(prompt("Pick a Number"));

function faka(a,b){
    return a*b;
}

//example 1: Prompt
var theNumber = Number(prompt('pick a number'));
if(!Number.isNaN(theNumber)){
    console.log('Your Number is the square root of ' + theNumber*theNumber);
}
else{
    console.log("Value picked is not a number");
}

//Example 2: While Loop
let number = 0;
while(number <= 12){
    console.log(number);
    number = number + 2;
}

//Eample 3
let result = 1;
let counter = 0;
while(counter < 10){
    //there are two "tentacles" here
        result = result*2;              //tentacle #1
        counter = counter+1;            //tentacle #2
        console.log('c = '+counter + ' r = ' +
                result +' and for kicks r/c = '+(result/counter)); //play
}
console.log('final result: '+result);

//Examle 4: Do...While...
let yourName;
do{
    yourName = prompt("Who are you?");  
}
while(!yourName){
    console.log(yourName);
}

//Example 5: For Loop
    //First part:initializes;
    //Second part:checks; 
    //Third part:updates;
let result = 1;
for(let counter = 0; counter < 10; counter + 1){                                //counter = counter + 1:ERROR Correction
    result = result * 2;
    console.log("c = " +counter+":"+"r = "+result+"..");
}
console.log(result);                                                            //this loop seems to run forever.....syntax error.
//correct example 5
let result = 1;
for(let number = 0; number <=10; number +=1){
    result = result *2;
}
console.log(result);

//Example 6: Breaking out of a loop
for(let current = 20; ; current = current + 1){
    if(current % 7 == 0){
        console.log(current);
        break;
    }
}

//excersize 1: Looping a triangle of #
//Do not tip-toe safely to your death I dare you to dream.

var str = '#';                                                                  //instead of this being a number let it be a string
console.log(str);
for(var num = 1 ; num<=6; num += 1){                                            //loop will loop until num = 6.
    str = str + '#';
    console.log(str);
}


//Exersize 2: print Fizz for value divisible by three and..
//print FizzBuzz for values divisble by both 3 & 5.

for(var counter = 0; counter<=100; counter += 1){ 
    if(counter % 3 !== 0){                                                      //if the value(counter) is not divisible by 3 .
        console.log(counter);                                                   //print it.
        
    }
    else if(counter % 3 === 0 && counter % 5 !== 0){                            //else if the value(counter) divsble by 3 & not 5.
        console.log('Fizz');                                                    //print Fizz.
    }
    else if(counter % 3 === 0 &&  counter % 5 === 0){                           //else if the value(counter) divisible by..
        console.log('FizzBuzz');                                                //both 3 & 5.
                                                                                //print Fizz Buzz.  
    }
    else{
        console.log(counter);
    }
}

//Exersize 3: Print chess board of any size(height & width).
var height_ = Number(prompt('Enter Height'));                                   //insert height.
var height = (height_/2);                                                       //the structure of our spell requires this:(Loop[Loop1 Loop2]).
var width  = Number(prompt('Enter Width'));                                     //insert width.
//main Loop
for(var counter = 0; counter < height; counter +=1){
    //Loop 1: for blacks.
    var str1 = '# ';                                                            //small required block  of incantation to build the chess pattern.
    for(var counterBlack = 1 ; counterBlack < width; counterBlack += 1){        //Loop1: loop as compelled by the width.
        str1 = str1 + '# ';
    }
console.log(str1);                                                              //print:# # #...as compelled by the width.
    //Loop 2: for whites.
    var str2 = ' #';                                                            //small required block  of code to build the chess pattern.
    for(var counterWhite = 1 ; counterWhite < width; counterWhite += 1){        //Loop2: loop as compelled by the width.
        str2 = str2 + ' #';
    }
console.log(str2);                                                              //print: # # #...as compelled by the width.
}
//this problem teaches us to reuse spells(i.e Excersize 1).

//Example 7: functions
//make noise: this can be an alert
const makeNoise = function(){
    console.log('Pling');
};

//example 8:
//Functions: exponents
var power = function(base, exponent){                                           
    var result = 1;
    for(var count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
};

//Example 9: this one didnt run :( : bacause you were getting overly cocky my guy
var hummus = function(factor){
  var ingredient = function(amount, unit, name){
      var ingredientAmount = amount*factor;
      if(ingredient > 1){
          unit += 's';
      }
      console.log(`${ingredientAmount}` + ` ${unit}` + ` ${name}`);             //this is where the error lied the + signs were not needed
  };
  ingredient(1, 'can', 'chickpeas');
  ingredient(0.25, 'cup', 'tahini');
  ingredient(0.25, 'can', 'lemon juice');
  ingredient(1, 'clove', 'garlic');
  ingredient(2, 'tablespoon', 'olive oil');
  ingredient(0.5, 'teaspoon', 'cumin');
  
};

//this one did run: power of consistency
const hummus = function(factor){
    const ingredient = function(amount, unit, name){
        let ingredientAmount = Number(amount * factor);
        if(ingredientAmount > 1){
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

console.log(hummus(3.3));

//Example 9: Arrow functions
var power = (base, exponent) => {
    let result = 1;
    for(let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
};

//Example 10: Greetings.
//Hello Harry howsit come see me.
function greet(who){
    console.log('Hello ' + who);
}
greet('Harry');
console.log('Howsit come see me');

//Example 11: Infinite Recursing.
function chicken(){
    console.log('cir');
    return egg();
}
function egg(){
    console.log('cle');
    return chicken();
}
console.log(chicken() + '');

//Exapmle 11: treating functions as values in other functions.
function multiplier(factor){
    return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));

//Example 12: using recursion to find a solution.
function findSolution(target){
    function find(current, history){                                            //the heart;
        if(current == target){                                                  //=== will not bring the desired outcome.
            return history;
        }
        else if(current > target){
            return null;
        }
        else{
            return find(current + 5, `(${history} + 5)`) ||                     //alternative path to solution.
                   find(current * 3, `(${history} * 3)`);                       //alternative path to solution.
        }
    }
    return find(1, "1");                                                        //(current, history).
}
console.log(findSolution(13));                                                  //find the solution to 13: (((1*3)+5)+5).

//Example 13: Basic Padding
function printFarmInventory(cows, chickens){                    
    let cowString = String(cows);
    let chickenString = String(chickens);
    
    while(cowString.length < 3){                                                //loop keeps adding 0s until 000
        cowString = '0' + cowString;
    }
    
    while(chickenString.length < 3){                                            //loop keeps adding 0s until 000
        chickenString = '0' + chickenString;
    }
    console.log('Cows: '     + `${cowString}`);
    console.log('Chickens: ' + `${chickenString}`);
}
printFarmInventory(7, 11);

//Exapmle 14: using functions to write organized spells i.e not repeating yourself 
function zeroPad(number, width){
    let string  = String(number);
    while(string.length < width){
        string = "0" + string;
    }
    return string;
}


function printFarmInventory(cows, chickens, pigs){
    console.log(`${zeroPad(cows, 3)} Cows`);                                    //``:allows us to put functions or values in the output
    console.log(`${zeroPad(chickens, 3)} Chickens`);                            //instead of '' or "" and + this makes coding a lil faster.
    console.log(`${zeroPad(pigs, 3)} Pigs`);                                    //padded to 3 digits: 003 pigs, 011 chickens, 007 cows(african bond lol)
}

printFarmInventory(7, 11, 3);

/*Excersize 4:
 *function for finding the minimum value */
function min(a1,a2){
    if(a1>a2){                                                                  //checks min.
        console.log(`${a2} is the min`);
    }
    else if(a2>a1){                                                             //checks min.
        console.log(`${a1} is the min`);
    }
    else{                                                                       //when values are  equal.
        console.log(`${a1} and ${a2} are equal try other values`);              //reminds me of $ from PHP
    }
}

let a1 = Number(prompt(`Enter first digit`));                                   //asking for the first value
let a2 = Number(prompt(`Enter second digit`));                                  //asking for the second vallue

min(a1,a2);                                                                     //calling the function

//Excersice 5 attempt: nth
function isEven(n){
    do{
        n = n - 2;
        if(n === 0){
            console.log('Even Value');
            break;
        }
        else if(n === 1){
            console.log('Odd Value');
            break;
        }
        else{
            continue;
            }
        }
        while(n - 1 > 0)
    
    if(n=== 0){
        console.log('Even Value:');
    }
    else if(n === 1){
        console.log('Odd value');
    }
    else if(n > 2){
        isEven(n);
    }
}

let n = Number(isEven(prompt('Enter Number')));                                 //didnt work as desired, but the obstacle is the way

//Excersize 5: Recursive (another nth attempt, took the entire day)
function isEven(number){
    if(number < 0){                                                             //incatation for negative numbers(make them positive). Math.abs(but we didnt know this at this point)
        number = (number * -1);                                                 // neg * neg = pos.
        isEven(number);                                                         //spell(function) calling itself: Recursion.
    }
    else if(number == 0){                                                       //if number = o...
        console.log(`${Boolean(number)}`);                                      //that value is even.
    }
    else if(number == 1){                                                       //if number = 1...
        console.log(`${Boolean(number)}`);                                      //that value is odd
    }
    else{                                                                       //otherwise..
        number = (number - 2);                                                  //subtract two from number...
        isEven(number);                                                         //and call the spell(function) to investigate: Recursion.
    }
}

let number = prompt(`Enter number`);                                            //user enters value they want evaluated.
isEven(number);                                                                 //first invoke to the recursive spell.
console.log(`Odd is false, Even is true except for 0`);                         //compromise, the spell didnt work as desired on zero.

//Excersize 6:count bs: 
//try:1
str = `Baberton`;
n= 0;
let bee = `b`;
console.log(str[n]);                                                            //here Im just trying to see how this spell works.
//another try
function countBs(str){
    for(let count = 0; count <= str.length; count++){
        if(str[count] === `B`){
            console.log(`B found`);
            
        }
        else if(count === str.length){                                          //this else isnot really needed.
            console.log(`No B in string`);
        }
    }
}
str = countBs(prompt(`Enter String`));

//COUNT Bs
function countB(str){
    let nofB = 0;                                                               //kepps score of Bs.
    for(let count = 0; count < str.length; count++){                            //loops thru the string until the last character: str.length-1 === count <str.length.
        if(str[count] === `B`){                                                 //if you find a 'B'....
            nofB++;                                                             //update the score.
            
        }
    }
    console.log(`The number of B chartacters in your string is ${nofB}`);       //display the results.
}

str = countB(prompt(`Enter String`));                                           //this is where the spell is being called.

//COUNT CHAR 
function countChar(str){
    let nofChar = 0;                                                            //keeps score
    let findMe = String(prompt(`Enter character to count`));                    //Charater to look up
    for(let count = 0; count < str.length; count++){                            //loops thru the string until the last character: str.length-1 === count <str.length
        if(str[count] === findMe){                                              //if you find charascter....
            nofChar++;                                                          //update the score.
            
        }
    }
    console.log(`The number of ${findMe} chartacters is ${nofChar} in string`); //display the results, with the cahracter.
}

str = countChar(prompt(`Enter String`));                                        //this is where the spell is being called:start of Execution.

//DATA STRUCTURES: ARRAYS & OBJECTS.
//Example 15:Arrays.
let listofNumbers = [2,3,5,7,11];
console.log(listofNumbers[2]);

//Example 16: Objects
let day1 = {
    squirrel: false,
    events  : ["work", "touched tree", "pizza", "running" ]
};

console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

//Example 17: Object Properties.
let anObject = {left: 1, right: 2};
console.log(anObject.left);                                                     //produces a value.
console.log("left" in anObject);                                                //Boolean: false if the property in not there.
delete anObject.left;                                                           //remove a property.
console.log(anObject.left);                                                     //will return undefined.
console.log("left" in anObject);                                                //will return false.
console.log("right" in anObject);                                               //will return true, since the property hasnt been obliterated.

//cntnd: me try
let anObject = {left: 1, right: 2};
console.log(anObject.keys);                                                     //this will return undefined since its not correct. 
console.log(Object.keys(anObject));                                             //Object.keys() is a function, not anObject.keys[....array thinking].

//Exampple 18:Object.assign function.
let objectA = {a:1, b:2};
Object.assign(objectA, {b:3, c:4});                                             //this overrides the previous assignment of b = 2 to b = 3.
console.log(objectA);                                                           
console.log(Object.keys(objectA));

//Example 19: Arrays and Objects combined: 
//to accees the object, journal[Nth position].
//An array of objects.
let journal = [
    {events  :["work", "touched a tree", "pizza","running", "television"],
     squirrel: false},                                                          //object 1: index 0.
    
    {events  :["work", "ice cream", "cauliflower", "lasagna", "touched a tree", 
              "brushed teeth"], 
     squirrel: false},                                                          //object 2: index 1.
    
    {events  :["weekend", "cycling", "break", "peanuts", "beer"], 
     squirrel: true}                                                            //object 3: index 2.
];

console.log(Object.keys(journal[0]));                                           //returns properties of the 1st element(object 1) of the Journal Array.

//Example 20.
//mutability.
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 === object2);                                               //this is true.
console.log(object1 === object3);                                               //but this is false: reason :: mutability.

object1.value = 15;                                                             //thiswill also change the value of object2.
console.log(object2);

//Exampple 21
const score = {visitors: 0, home: 0};
console.log(score);                                                             //show nil nil.
score.visitors = 1;                                                             //adds goal or point to the visitors.
console.log(score);                                                             //show the above operation.
score.home = 28;                                                                //adds 28 points or goals to the home team.
console.log(score);

//Exapmle 22
let journal = [];
console.log(journal);

function addEntry(events, squirrel){                                            //function for adding entry
    journal.push(events, squirrel);
}
         /*Events*/                                                 /*squirrelpart*/
addEntry(["work", "touched a tree", "pizza","running", "television"], false);   //calling the add entry function.                                        
console.log(journal);

//Example 23:statistics :-)
function phi(table){
    return ((table[3]*table[0]-table[2]*table[1])/                              //[positions of the valuse in the array]
            Math.sqrt((table[2]+table[3])*                                      //this ish is easy: but a lil confusing.
                      (table[0]+table[1])*
                      (table[1]+table[3])*
                      (table[0]+table[2])));
}

console.log(phi([76, 9, 4, 1]));

//example 24: almost cried on this one.
/*
 * This part(THE JOURNAL ARRAY) of the code I downloaded from "eloquentjavascript.net/code#4" (sandbox).
 * thie function is an example from the book.
 */
var JOURNAL = [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","computer","work"],"squirrel":false},
  {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["cauliflower","reading","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
  {"events":["spaghetti","nachos","work"],"squirrel":false},
  {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
  {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
  {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["pizza","ice cream","computer","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work"],"squirrel":false},
  {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["potatoes","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","work"],"squirrel":false},
  {"events":["pizza","beer","work","dentist"],"squirrel":false},
  {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
  {"events":["lasagna","peanuts","work"],"squirrel":true},
  {"events":["pizza","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
  {"events":["pizza","cycling","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","peanuts","candy","work"],"squirrel":true},
  {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
  {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
  {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","candy","work"],"squirrel":false},
  {"events":["potatoes","nachos","work"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
  {"events":["brussel sprouts","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
  {"events":["candy","brushed teeth","work"],"squirrel":false},
  {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
  {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
  {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
  {"events":["brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
  {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","reading","weekend"],"squirrel":false},
  {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
  {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];

//this part is from the book: this almost ruined my day LOL.
/*
 * Arrays have an "includes" method that checks whether a given value exists in
 * the array.
 */
//I think the "includes" can be used to do the deep compare that is yet to come 
//in the excersizes section.
function tableFor(event, JOURNAL){                                              
    let table  = [0, 0, 0, 0];
    for(let i = 0; i < JOURNAL.length; i++){
        let entry = JOURNAL[i], index = 0;
        if(entry.events.includes(event)) index += 1;                            //the binary positions: 01 == 1
        if(entry.squirrel) index += 2;                                          //the binary positions: 10 == 2
        table[index] += 1;                                                      //binary:               11 == 3
    }
    return table;
}

console.log(tableFor("pizza", JOURNAL));

/*
 ***************************************************************************************************************** 
 *the following code will look like the above, its just a few added things.
 */
/*
 * This part(THE JOURNAL ARRAY) of the code I downloaded from "eloquentjavascript.net/code#4".
 * thie function is an example from the book.
 */
var JOURNAL = [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","computer","work"],"squirrel":false},
  {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["cauliflower","reading","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
  {"events":["spaghetti","nachos","work"],"squirrel":false},
  {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
  {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
  {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["pizza","ice cream","computer","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work"],"squirrel":false},
  {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["potatoes","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","work"],"squirrel":false},
  {"events":["pizza","beer","work","dentist"],"squirrel":false},
  {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
  {"events":["lasagna","peanuts","work"],"squirrel":true},
  {"events":["pizza","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
  {"events":["pizza","cycling","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","peanuts","candy","work"],"squirrel":true},
  {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
  {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
  {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","candy","work"],"squirrel":false},
  {"events":["potatoes","nachos","work"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
  {"events":["brussel sprouts","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
  {"events":["candy","brushed teeth","work"],"squirrel":false},
  {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
  {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
  {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
  {"events":["brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
  {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","reading","weekend"],"squirrel":false},
  {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
  {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];

//this part is from the book: this almost ruined my day LOL.
/*
 * Arrays have an "includes" method that checks whether a given value exists in
 * the array.
 */
//I think the "includes" can be used to do the deep compare that is yet to come 
//in the excersizes section.
function tableFor(event, JOURNAL){                                              
    let table  = [0, 0, 0, 0];
    for(let i = 0; i < JOURNAL.length; i++){
        let entry = JOURNAL[i], index = 0;
        if(entry.events.includes(event)) index += 1;                            //the binary positions: 01 == 1
        if(entry.squirrel) index += 2;                                          //the binary positions: 10 == 2
        table[index] += 1;                                                      //binary:               11 == 3
    }
    return table;
}

console.log(tableFor("pizza", JOURNAL));

//this function prints all events in Jacq's journal
function journalEvents(journal){
    let events = [];
    for(let entry of journal){
        for(let event of entry.events){
            if(!events.includes(event)){
                events.push(event);
            }
        }
    }
    return events;
}
console.log(journalEvents(JOURNAL));



//this forloop uses 'tableFor' function as an input in the 'phi' function. 
//I find this very interesting.
for(let event of journalEvents(JOURNAL)){
    console.log(event + ":", phi(tableFor(event, JOURNAL)));                    //function as a variable in another function, sweet!!!
}
 console.log("_________________________________");

/*now the following for loop, looks for probability: events that  trigger 
 *squirrel-lycanthrophy.
 */
for(let event of journalEvents(JOURNAL)){
    let correlation = phi(tableFor(event, JOURNAL));
    const cor = (1/10);
    if(correlation > cor || correlation < -(cor)){
       
        console.log(event + ": ", correlation);
    }
}

//this function is needed by the for loop on line 140(cadu.js, dont mind this comment).
function phi(table){
    return ((table[3]*table[0]-table[2]*table[1])/                              //[positions of the valuse in the array]
            Math.sqrt((table[2]+table[3])*                                      //this ish is easy
                      (table[0]+table[1])*
                      (table[1]+table[3])*
                      (table[0]+table[2])));                                    //remember{we are using binary positionson this particular example}
}

 console.log("_________________________________");
 
 //now we getting to the real cause of Jacq turning into a squirrel.
 for(let entry of JOURNAL){
     if(entry.events.includes("peanuts") &&                                     //if the dude eats some peanuts.
        !entry.events.includes("brushed teeth")){                               //and doesnt brus his teeth.
            entry.events.push("peanut teeth");                                  //push this as an event in the journal array.
        }
 }
 console.log(phi(tableFor("peanut teeth", JOURNAL)));                           //aaaaha, too much peanuts and lack of dental hygiene make Jaqc a squirrel.
 
 //IMAGINE A SYSTEM THAT USES OTHER PEOPLE'S PHONE POWER AND/OR INTERNAL MEMORY THRU WIFI AND BLUETOOTH.
 //(AND REQUIERES LITTLE BANDWIDTH) AND PAY THEM FOR THAT IN DATA OR SOMETHING(dISTRIBUTED SYSTEMS)!!!!!
 
 
 //Example 25
/*The following spellwork manages a queue of tasks. You add tasks to the end of the
queue by calling remember("groceries"), and when you’re ready to do something,
you call getTask() to get (and remove) the front item from the queue.
The rememberUrgently function also adds a task but adds it to the front instead
of the back of the queue.
To search for a specific*/

let todoList = [];
function remember(task){
    todoList.push(task);                                                        //adding at the end.
}
function getTask(){
    return todoList.shift();                                                    //equivalent to pop(): removes at the start of the array.
}
function rememberUrgently(task){
    todoList.unshift(task);                                                     //equivalent to push(): inserts an element at the start.
}

console.log("remember()");
remember("groceries");                                                          //adding 'groceries' in the todoList.
remember("invest in buttcoin");                                                 //adding 'buttcoin' in the todoList.
remember("Feel good");
remember("Everything");

console.log(todoList);
getTask();                                                                      //removing 'groceries' at the front of the queue
console.log("after shift");
console.log(todoList);
todoList.pop();                                                                 //removing 'everything' at the end of the queue
console.log("after pop");
console.log(todoList);

rememberUrgently("Fakela ukhetha imali");                                       //using 'unshift()' to skip the line
console.log("after rememberUrgently(using 'unshift()')");
console.log(todoList);                                                          //displaying the remainning things to do.

//FURHTER ARRAYOLOGY
//REMEMBER FOR ARRAY INDICES(plural for index) ALWAYS COUNT FROM ZERO: 0,1,2...
var ar = [1,2,3,3,2,1];                                                         //might confuse you, try an array of letters.
console.log(ar);
console.log(`the index of 2 is at:${ar.indexOf(2)}`);                           //search for 2 in the array.
console.log(`2 was last seen at location ${ar.lastIndexOf(2)}`);
console.log(ar.indexOf(2,3));                                                   //search for 2 in the array, starting from position 3(N-1)(not value 3, dont confuse this).

//MORE demonstration of array spells(indexOf() & lastIndexOf())/.
var strArray = ["A", "B", "C", "D", "C", "E"];                                  //LETTERS ARE LESS CONFUSING
console.log(strArray);
console.log(`C is at location(index) ${strArray.indexOf("C")}`);
console.log(`C was last seen at ${strArray.lastIndexOf("C")}`);
console.log(`from index 3, C is at ${strArray.indexOf("C",3)}`);                //indexOf() spell with second variable indicating where to start, LOOK FOR C STARTING FRM POS 3
                                                                                //lastIndexOf spell does work with the second variable too.
                                                                                
//Now lets slice() arrays. (Exciting)
console.log("slice() function");
/*When the end index is not given, slice will take all of the elements after the
start index.*/
let newArray = strArray.slice(1,4);                                             //nice slicing: notice how the new array inherits the arrayness from strArray.
console.log(`new array thru sclicing: ${newArray}`);                            //abracadabra.
console.log(`on the new array C is at: ${newArray.indexOf("C")}`);              //boom! 

//slicing with no end(no second variable)
let itbe = strArray.slice(2);
console.log(`slicing at index 2 produces array itbe: [${itbe}]`);
let ibe = itbe.shift();  //VARIABLE ibe STORES THE SHIFTED VALUE                //shift() and pop(): u shift at the start and you pop at the end, NICE SONG.
console.log(`after shifting: ${itbe}`);

//the opposite of slice iS concat()
//EXAMPLE 26
function remove(array, index){                                                  //this spell takes in two arguments(array and index).
    return array.slice(0, index).concat(array.slice(index+1));                  //array.slice(0, index) results an array1; and then concat is +
}                                                                               //array.slice(index+1) results an array2 too, so: array1.concat(array2) BASICALLY array1 + array2.
console.log(remove(['a','b','c','d','e'],2));                                   //this is where we get the position to cut at, in this case: sliCe at index two.

console.log(`concat [${strArray}] and [${ar}]: [${strArray.concat(ar)}]`);      //concat works as + in strings.

//MAKE strArray abcde: we'll be using the remove function from the book
let letter = remove(strArray, 4);
console.log(`after removing the second c: strArray[${letter}]`);

//EXAMPLE 27:
//STRINGS AND THEIR PROPERTIES.
console.log("coconuts".slice(4,7));                                             //like arrays.
console.log("coconut".indexOf("u"));                                            //like arrays.

/* One difference is that a string’s indexOf can search for a string containing
 * more than one character, whereas the corresponding array method looks only
 * for a single element.
 */

console.log("one two three".indexOf("ee"));                                     //unlike arrays, I suspect this is beacause of minor differences between arrays and strings.
var str = String("Are you ok \n Jo");
console.log(str);
console.log(str.trim());                                                        //i dont think this works :-(

//JS built in padding
console.log(String(7).padStart(3, "0"));                                        //works only on strings, not numbers

/*Experiment*/
let num1 = String(4).padStart(3, "0");
let num2 = String(2).padStart(3, "0");
let num3 = num1 * num2;
console.log(num3);                                                              //AUTOMATIC TYPE CONVERSION(string to number): REMEMBER THAT,this is what happens here


//splitimg a string
/*You can split a string on every occurrence of another string with split and
join it again with join.*/

let sentence = "Secretary birds specialize in stomping";
let words = sentence.split(" ");                                                //split when u see a space(could be anything really), a string function(property)
console.log(words);
let newSentence = words.join(". ");                                             //join spell, a string function(property)
console.log(newSentence);                                                       //notice how most spells come with their oppposites,

/*
 * Notice how most [stock] spells(functions) come with their opposites: 
 * pop() and push() in arrays
 * shift() and unshift()
 * split() and join() in strings
 * + and - in arithmetic
 * * and /
 * slice() and concat()
 * this is more than just coding: this is philosophy.
 * yin and yang
 * Love and fear
 * this is a way of life
 */

//enought lahnding.
let str3peat = "La";
console.log(str3peat.repeat(3));                                                //repeating spell:repeat().
let string = "abc";
console.log(string.length);                                                     //we already know this.
console.log(string[1]);                                                         //like arrays we can look at indices.

/*Experiment: Morden JS for looop*/
//morden for loop try: 1
function countBs(string){
    let nofLetter = 0;
    for(str of string){
        if(string[str] === `B`){
            nofLetter++;
        }
    }
    console.log(`The number of B chartacters in your string is ${nofLetter}`); 
}
string = countBs(prompt(`Enter String`));                                       //doesnt work, will see in chpt6

//Example 28:
/*
 * REST PARAMETERS.
 */
function max(...numbers){                                                       //three dotsmean we taking anynumber of arguments: neat spell.
    let result = -Infinity;                                                     //WHY?????: we are always comparing to this value. 
    for(let number of numbers){                                                 //and there is no real number that less than -infinity
        if(number > result) result = number;                                    //other than -(infinity - 1) which is -infinity too 
    }
    return result;
}
console.log(max(4, 1, 9, -2));                                                  //had to go take a dump to understand this LOL. :-)

/*You can use a similar three-dot notation to call a function with an array of
arguments.*/
let numbers = [5,1,7];
console.log(max(...numbers));
console.log(max(2,3,...numbers,9, -5));

//self written:
//lets try writing our own min spell.

function min(...numbers){
    let result2 = Infinity;
    for(let number of numbers){
        if(number < result2) result2 = number;
    }
    return result2;
}
console.log(min(...numbers));

//now lets write our own (self made) spell that lets you know of both the max and 
// andthe min, by calling the already defined functions
function maxAndMin(...numbers){
    console.log(`the maximum is ${max(...numbers)} and the minimum is ${min(...numbers)}`);
    median = ((max(...numbers))+(min(...numbers)))/2;
    console.log(`and the median is ${median}`);                                 //not sure about the calculation but you catch my drift
}

console.log(maxAndMin(...numbers));

/*Square bracket array notation similarly allows the triple-dot operator to
spread another array into the new array.*/
let words = [`always`, `fully`];
console.log([`we`,...words, `understand`]);

/*The Math Object*/
//Example 29: Math.random

/*This is a spell that returns a
new pseudorandom(semi-random) number 
between zero (inclusive) and one (exclusive) every
time you call it, and I think this is neat*/
function randomPointOnCircle(radius){
    let angle = Math.random() * 2 * Math.PI;                                    //this could be useful in our future A-Frame projects
    return{x: radius * Math.cos(angle),                                         //maths becoming useful in my life wow!!!
           y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(2));

console.log(Math.random());
console.log(Math.floor(10.9));                                                  //Math.floor spell, rounds DOWN(10.9 = 10) to the nearest whole number.
console.log(Math.ceil(11.1));                                                   //Math.ceil spell, rounds UP(11.1 = 12) to thenearest whole number.
console.log(Math.round(10.9));                                                  //Math.round spell, works like the high school method of rounding up(traditional).
console.log(Math.abs(-11.5));                                                   //Math.abs spell, returns the absolute of the value. Ex 5: Recursive could have used this.
console.log(Math.floor(Math.random() * 10));                                    

/*DESTRUCTURING*/
//the following spell was a lil confusing(not hard) in the previous examples TBH.
// now....
//Exapmle 30: phi spell from squirrelification.
function phi(table){
    return (table[3] * table[0] - table[2] * table[1])/
            Math.sqrt((table[2] + table[3])*
                      (table[0] + table[1])*
                      (table[1] + table[3])*
                      (table[0] + table[2]));
}
//FORTUNATELY there is another way of doing this.
//the author wizard says the following way is SUCCICNT: very clear.
function phI([n00, n01, n10,n11]){
    return (n11 * n00 - n10 * n01)/
            Math.sqrt((n10 + n11) * (n00 + n01) * 
                      (n01 + n11) * (n00 + n10));                               //to me, this is less confusing since we r actually notating it in binary.
}

//look..
let {name, age} = {name: `Sandile`, age: 27};                                   
console.log(name);                                                              //ooooh
console.log(age);                                                               //makes sense now, looking inside huh!

//but what if we tried this...
let{model, make, year} = {`Tesla`, `Roadster`, `2020`};
console.log(make);                                                              //Doesnt work this way :-)
/*BASICALLY DESTRUCTURING MEANS: ACCESSING A VALUE OF SOMETHING INDIRECLY.
* THATSMY TAKE, MIGHT BE WRONG*/

/*JSON: JavaScript Object Notation*/
/*JSON is widely used as a
data storage and communication format on the Web, 
even on other languages other than JavaScript*/

//lets try some..
let string  = JSON.stringify({squirrel: false,                                  //mmmh, nice.
                              events  : [`Weekend`, `Hunting`]});
console.log(string);                                                            //this returns a JSON encoded string.
console.log(JSON.parse(string).events);                                         //from the book

let parsedString = JSON.parse(string);                                          //my little experiment.
console.log(parsedString);                                                      //my little experiment.

/*Excersize 7: Sum of Range*/
function range(start, end){                                                     //spell that takes two arguments and prints an array from 
    start = Number(prompt(`Enter start value`));                                //strat to..
    end = Number(prompt(`Enter end value`));                                    //end.
    let numbers = [];                                                           //array is empty at the beggining.
    
    for(let count = start; count <= end; count++){                              //for loop
        numbers.push(count);                                                    //populates the array
    }
    console.log(numbers);
    return numbers;
}
//Damn had to go to ther internet for this
let ar = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

for(let i = 0; i < ar.length; i++){
    sum += ar[i];
}
console.log(sum);

//function range a value in function sum.
function range(start, end){                                                     //spell that takes two arguments and prints an array from 
    start = Number(prompt(`Enter start value`));                                //strat to..
    end = Number(prompt(`Enter end value`));                                    //end.
    let numbers = [];                                                           //array is empty at the beggining.
    
    for(let count = start; count <= end; count++){                              //for loop
        numbers.push(count);                                                    //populates the array
    }
    return numbers;
}

let sum = (array) => {                                                          //this time we using arrow spells for simplicity.
    let total = 0;                                                              //this is the container we gonna kepp pouring too.
    for(let i = 0; i < array.length; i++){                                      //classic for loop.
        total += array[i];                                                      //pouring all the contents to this cup.
    }
    return total;                                                               //then log the sum.
};

console.log(sum(range()));                                                      //calling the spell.

//Modified range with a step.
function range(start, end, step){                                               //spell that takes three arguments and prints an array from 
    start = Number(prompt(`Enter start value`));                                //strat to..
    end = Number(prompt(`Enter end value`));                                    //end.
    step = Number(Math.abs(prompt(`Enter step value`)));
    
    realEnd = Math.ceil(end/2);
    let numbers = [];                                                           //array is empty at the biginning.
    if(start < end){                                                            //this is for a count up.
        for(let count = start; count <= realEnd; count++){                      //for loop,
            if(step === 0)step = 1;
            n = step*(count)-1;
            numbers.push(n);                                                    //populates the array,
        }
    }
    if(start > end){                                                            //if start is bigger than end(thisis for a count down)
        realStart = Math.ceil(start/2);                                         //we divide by 2 so that we get the actual value that we need.
        for(let i = realStart; i > 0; i--){                                     //let i be start, boundary ==0, so that the loop doesnt run forever
            if(step ===0) step = 1;                                             //if step is zero then lets set it to 1;
            n = step*(i)-1;                                                     //the formula that accodates the step.
            numbers.push(n);
            
        }
    }
    console.log(numbers);
    return numbers;
}

range();

/*Excersize 8: Reversing an array without the built in reverse spell*/

arr = [1,2,3,4,5];


let reverseArray = (array) =>{
    let array2 = [];                                                            //empty cup.
    let lngth = array.length;                                                   //spell work only when I do it thus.
    
    for(let i = lngth -1; i > -1; i--){                                         //-1 cause indices start at 0 not 1 otherwise there will bea missing value.
        e = array[i];                                                           //initially I was popping elements but then itleftme with empty arrays
        array2.push(e);                                                         //filling the cup.
    }
    return array2;
};
arr2 = reverseArray(arr);

let reverseArrayInPlace = (array) => {
    let array3 = [];
    let lngth = array.length;
    
    for(let i = lngth - 1; i > -1; i--){                                        //pretty much same as the above but turning the tables to whatwas already.
        e = array[i];
        array3.push(e);
    }
    return array3;
};

console.log(reverseArray(arr));                                                 //invoke, could havecalled it twice and it would have re-reverse the array
console.log(reverseArrayInPlace(arr2));                                         //invoke
console.log(reverseArrayInPlace(reverseArray(arr)));                            //spitts the same arrsy as input

//ArrayToList was super hard Ihad to go and download the solution.:-)
//my attempts LOL
var list = {
    value: 1,
    rest:{
        value: 2,
        rest:{
            value: 3,
            rest:null
        }
    }
};
console.log(list);
console.log(list.rest.rest.value);

arr = [10,20,30,40,list];

e = arr[0];

list.rest.rest.rest = {value: 4, rest: null};
console.log(arr);

//recursive function must list.value = 1, list.rest shows the following object
//to access value 2 in the list: list.rest.value and push that to an array
//arrayToList, access the indices and list.vulue the first item and then list.rest.value the following
//list.rest.rest.value the following.

var lst = {};
lst.value = arr[0];
lst.rest.value = arr[1];
lst.rest.rest.value = arr[2];
lst.rest.rest.rest.value = arr[3];
console.log(lst);

/*Excersiza 9*/
/*
 * I got this solution from the book solutions page this is not my mind.
 */

//array to list
let arrayToList = (array) => {
    let list = null;                                                            //initially set the list to be empty
    lngth = array.length;                                                       //I do this cause sometimes the out come out unsatisfactory
    for(let i = lngth - 1; i >= 0; i--){                                        //looping thru the array indices copying values to the list
        list = {value: array[i], rest: list};                                   //the actual exodus
    }
    return list;
};

arr = [1,2,3,4,5];
console.log(arr.length);

console.log(arrayToList(arr));                                                  //calling the spell.

//the resulting list from array to list
lst = arrayToList(arr);                                                         //make arr a list.

console.log(lst.value);                                                         //testing the spell.

//list to array
let listToArray = (list) => {                                                   //list to array spell,
    let array = [];                                                             //start with an empty array
    for(let node = list; node; node = node.rest){                               //this for loop i dont fully understand.
        array.push(node.value);                                                 //we pushing the value from the list to the array.
    }
    return array;                                                               //return an array
};

newArr = listToArray(lst);
console.log(newArr);       


//function prepend
function prepend(value,list){                                                   //start of the function, arguments: a value and a list.
    return {value, rest:list};                                                  //return a list object with the new value as number 1.
}

lst2 = prepend(9000,lst);                                                       //similar to unshift() or push().
console.log(lst2);                                                              //testing the spell.

//function nth: this spell returns an element on the position of your liking
function nth(list, n){
    if(!list) return undefined;                                                 //if not in the list return undefined
    else if(n === 0) return list.value;                                         //if the position is index 0 return the first node in the list
    else return nth(list.rest, n-1);                                            //otherwise recurse, and adjust the position.
}

lst3 = nth(lst2,5);
console.log(lst3);

//attempt at deep compare
if(typeof(lst1) === typeof(lst2)){
    if(lst1.value === lst2.value){
        console.log("Hip Hip");
    }
    console.log("Hurray");
}

//another attempt

function deepEqual(obj1, obj2){
    if(typeof(obj1) !== typeof(obj2)){
        false;
    }
    else if(typeof(obj1) === typeof(obj2)){
        let objA = obj1.value;
        let objB = obj2.value;
        deepEqual(objA, objB);
    }
    return true;
}
//damn i didnt finish this one
var listA = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 9,
      rest: null
    }
  }
};
var arr = String;
var listB = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};


function deepEqual(listA, listB){                                               //not complete
    if(typeof(listA) === typeof(listB)                                          //first check the type
            && listA.length === listB.length){                                  //and the length
        
        //code to compare the values
        a = listA.pop();
        console.log(a);
        return true;
    }
    return false;
}

t = deepEqual(listA,listB);
console.log(t);                                                                 ///not complete

/*
 * Higher Order Spells 
 */

//example 31
function repeat(n, action){
    for(let i = 0; i <= n; i++){
        action(i);
    }
}

repeat(5, console.log);

let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i+1 * i/4*i}`);                                         //this is basically a loop with a number to wich it must loop
    });
    
console.log(labels);    

//example 32
function greaterThan(n){
    return m => m > n;
}
let greaterThan10 = greaterThan(10);                                            //we could replace greaterThan10 with any thing a g even
console.log(greaterThan10(11));                                                 //and it will work.

//example 33
function noisy(f){
    return (...args) => {                                                       //(...args) is an arrow spell.
        console.log("calling with: ", args);                                    //args is whatever arguments you want to use in the function.
        let result = f(...args);                                                // f is Math.min or Math.max or whatever function you  want to change.
        console.log("called with: ", args, ", returned", result);
        return result;
    };
}
//---(   f    )(..args)----                                                     //noisy function changes the way functions are called and written.
noisy(Math.min)(3,2,1);
noisy(Math.max)(3,2,1,0);
noisy(Math.min)(4,5,6);

//funcvtion unless
function repeat(n, action){
    for(let i = 0; i <= n; i++){                                                
        action(i);
    }
}

function unless(test, then){
    if(!test) {then();}
}

//looks like a forr loop
repeat(7, n => {                                                                //repeat this action 7 times, 
    unless(n % 2 ===1, () => {                                                  //the action being repeated calls anotheter function
        console.log(n, "is even");                                              //an the function being called changes the control flow.
    });
});

["A", "B","C", 3].forEach(l => console.log(l));

let arr = [1,2,3,4,"H"];

arr.forEach(l => console.log(l/2));

/**/
//code wont run without this SCRIPTS array
var SCRIPTS = [
  {
    name: "Adlam",
    ranges: [[125184, 125259], [125264, 125274], [125278, 125280]],
    direction: "rtl",
    year: 1987,
    living: true,
    link: "https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet"
  },
  {
    name: "Caucasian Albanian",
    ranges: [[66864, 66916], [66927, 66928]],
    direction: "ltr",
    year: 420,
    living: false,
    link: "https://en.wikipedia.org/wiki/Caucasian_Albanian_alphabet"
  },
  {
    name: "Ahom",
    ranges: [[71424, 71450], [71453, 71468], [71472, 71488]],
    direction: "ltr",
    year: 1250,
    living: false,
    link: "https://en.wikipedia.org/wiki/Ahom_alphabet"
  },
  {
    name: "Arabic",
    ranges: [[1536, 1541], [1542, 1548], [1549, 1563], [1564, 1565], [1566, 1567], [1568, 1600], [1601, 1611], [1622, 1648], [1649, 1757], [1758, 1792], [1872, 1920], [2208, 2229], [2230, 2238], [2260, 2274], [2275, 2304], [64336, 64450], [64467, 64830], [64848, 64912], [64914, 64968], [65008, 65022], [65136, 65141], [65142, 65277], [69216, 69247], [126464, 126468], [126469, 126496], [126497, 126499], [126500, 126501], [126503, 126504], [126505, 126515], [126516, 126520], [126521, 126522], [126523, 126524], [126530, 126531], [126535, 126536], [126537, 126538], [126539, 126540], [126541, 126544], [126545, 126547], [126548, 126549], [126551, 126552], [126553, 126554], [126555, 126556], [126557, 126558], [126559, 126560], [126561, 126563], [126564, 126565], [126567, 126571], [126572, 126579], [126580, 126584], [126585, 126589], [126590, 126591], [126592, 126602], [126603, 126620], [126625, 126628], [126629, 126634], [126635, 126652], [126704, 126706]],
    direction: "rtl",
    year: 400,
    living: true,
    link: "https://en.wikipedia.org/wiki/Arabic_script"
  },
  {
    name: "Imperial Aramaic",
    ranges: [[67648, 67670], [67671, 67680]],
    direction: "rtl",
    year: 800,
    living: false,
    link: "https://en.wikipedia.org/wiki/Aramaic_alphabet"
  },
  {
    name: "Armenian",
    ranges: [[1329, 1367], [1369, 1376], [1377, 1416], [1418, 1419], [1421, 1424], [64275, 64280]],
    direction: "ltr",
    year: 405,
    living: true,
    link: "https://en.wikipedia.org/wiki/Armenian_alphabet"
  },
  {
    name: "Avestan",
    ranges: [[68352, 68406], [68409, 68416]],
    direction: "rtl",
    year: 400,
    living: false,
    link: "https://en.wikipedia.org/wiki/Avestan_alphabet"
  },
  {
    name: "Balinese",
    ranges: [[6912, 6988], [6992, 7037]],
    direction: "ltr",
    year: 1000,
    living: true,
    link: "https://en.wikipedia.org/wiki/Balinese_script"
  },
  {
    name: "Bamum",
    ranges: [[42656, 42744], [92160, 92729]],
    direction: "ltr",
    year: 1896,
    living: true,
    link: "https://en.wikipedia.org/wiki/Bamum_script"
  },
  {
    name: "Bassa Vah",
    ranges: [[92880, 92910], [92912, 92918]],
    direction: "ltr",
    year: 1950,
    living: false,
    link: "https://en.wikipedia.org/wiki/Bassa_alphabet"
  },
  {
    name: "Batak",
    ranges: [[7104, 7156], [7164, 7168]],
    direction: "ltr",
    year: 1300,
    living: true,
    link: "https://en.wikipedia.org/wiki/Batak_alphabet"
  },
  {
    name: "Bengali",
    ranges: [[2432, 2436], [2437, 2445], [2447, 2449], [2451, 2473], [2474, 2481], [2482, 2483], [2486, 2490], [2492, 2501], [2503, 2505], [2507, 2511], [2519, 2520], [2524, 2526], [2527, 2532], [2534, 2558]],
    direction: "ltr",
    year: 1050,
    living: true,
    link: "https://en.wikipedia.org/wiki/Bengali_alphabet"
  },
  {
    name: "Bhaiksuki",
    ranges: [[72704, 72713], [72714, 72759], [72760, 72774], [72784, 72813]],
    direction: "ltr",
    year: 1050,
    living: false,
    link: "https://en.wikipedia.org/wiki/Bhaiksuki_alphabet"
  },
  {
    name: "Bopomofo",
    ranges: [[746, 748], [12549, 12591], [12704, 12731]],
    direction: "ltr",
    year: 1918,
    living: true,
    link: "https://en.wikipedia.org/wiki/Bopomofo"
  },
  {
    name: "Brahmi",
    ranges: [[69632, 69710], [69714, 69744], [69759, 69760]],
    direction: "ltr",
    year: -250,
    living: false,
    link: "https://en.wikipedia.org/wiki/Brahmi_script"
  },
  {
    name: "Braille",
    ranges: [[10240, 10496]],
    direction: "ltr",
    year: 1824,
    living: true,
    link: "https://en.wikipedia.org/wiki/Braille"
  },
  {
    name: "Buginese",
    ranges: [[6656, 6684], [6686, 6688]],
    direction: "ltr",
    year: 1650,
    living: true,
    link: "https://en.wikipedia.org/wiki/Lontara_script"
  },
  {
    name: "Buhid",
    ranges: [[5952, 5972]],
    direction: "ltr",
    year: 1300,
    living: true,
    link: "https://en.wikipedia.org/wiki/Buhid_alphabet"
  },
  {
    name: "Chakma",
    ranges: [[69888, 69941], [69942, 69956]],
    direction: "ltr",
    year: 1050,
    living: true,
    link: "https://en.wikipedia.org/wiki/Chakma_alphabet"
  },
  {
    name: "Canadian Aboriginal",
    ranges: [[5120, 5760], [6320, 6390]],
    direction: "ltr",
    year: 1840,
    living: true,
    link: "https://en.wikipedia.org/wiki/Canadian_Aboriginal_syllabics"
  },
  {
    name: "Carian",
    ranges: [[66208, 66257]],
    direction: "ltr",
    year: -650,
    living: false,
    link: "https://en.wikipedia.org/wiki/Carian_alphabets"
  },
  {
    name: "Cham",
    ranges: [[43520, 43575], [43584, 43598], [43600, 43610], [43612, 43616]],
    direction: "ltr",
    year: 750,
    living: true,
    link: "https://en.wikipedia.org/wiki/Cham_alphabet"
  },
  {
    name: "Cherokee",
    ranges: [[5024, 5110], [5112, 5118], [43888, 43968]],
    direction: "ltr",
    year: 1820,
    living: true,
    link: "https://en.wikipedia.org/wiki/Cherokee_syllabary"
  },
  {
    name: "Coptic",
    ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
    direction: "ltr",
    year: -200,
    living: false,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
  },
  {
    name: "Cypriot",
    ranges: [[67584, 67590], [67592, 67593], [67594, 67638], [67639, 67641], [67644, 67645], [67647, 67648]],
    direction: "rtl",
    year: -1100,
    living: false,
    link: "https://en.wikipedia.org/wiki/Cypriot_syllabary"
  },
  {
    name: "Cyrillic",
    ranges: [[1024, 1157], [1159, 1328], [7296, 7305], [7467, 7468], [7544, 7545], [11744, 11776], [42560, 42656], [65070, 65072]],
    direction: "ltr",
    year: 950,
    living: true,
    link: "https://en.wikipedia.org/wiki/Cyrillic_script"
  },
  {
    name: "Devanagari",
    ranges: [[2304, 2385], [2387, 2404], [2406, 2432], [43232, 43262]],
    direction: "ltr",
    year: 100,
    living: true,
    link: "https://en.wikipedia.org/wiki/Devanagari"
  },
  {
    name: "Deseret",
    ranges: [[66560, 66640]],
    direction: "ltr",
    year: 1854,
    living: true,
    link: "https://en.wikipedia.org/wiki/Deseret_alphabet"
  },
  {
    name: "Duployan",
    ranges: [[113664, 113771], [113776, 113789], [113792, 113801], [113808, 113818], [113820, 113824]],
    direction: "ltr",
    year: 1860,
    living: true,
    link: "https://en.wikipedia.org/wiki/Duployan_shorthand"
  },
  {
    name: "Egyptian Hieroglyphs",
    ranges: [[77824, 78895]],
    direction: "ltr",
    year: -3200,
    living: false,
    link: "https://en.wikipedia.org/wiki/Egyptian_hieroglyphs"
  },
  {
    name: "Elbasan",
    ranges: [[66816, 66856]],
    direction: "ltr",
    year: 1750,
    living: false,
    link: "https://en.wikipedia.org/wiki/Elbasan_alphabet"
  },
  {
    name: "Ethiopic",
    ranges: [[4608, 4681], [4682, 4686], [4688, 4695], [4696, 4697], [4698, 4702], [4704, 4745], [4746, 4750], [4752, 4785], [4786, 4790], [4792, 4799], [4800, 4801], [4802, 4806], [4808, 4823], [4824, 4881], [4882, 4886], [4888, 4955], [4957, 4989], [4992, 5018], [11648, 11671], [11680, 11687], [11688, 11695], [11696, 11703], [11704, 11711], [11712, 11719], [11720, 11727], [11728, 11735], [11736, 11743], [43777, 43783], [43785, 43791], [43793, 43799], [43808, 43815], [43816, 43823]],
    direction: "ltr",
    year: -900,
    living: true,
    link: "https://en.wikipedia.org/wiki/Ge%27ez_script"
  },
  {
    name: "Georgian",
    ranges: [[4256, 4294], [4295, 4296], [4301, 4302], [4304, 4347], [4348, 4352], [11520, 11558], [11559, 11560], [11565, 11566]],
    direction: "ltr",
    year: 430,
    living: true,
    link: "https://en.wikipedia.org/wiki/Georgian_scripts"
  },
  {
    name: "Glagolitic",
    ranges: [[11264, 11311], [11312, 11359], [122880, 122887], [122888, 122905], [122907, 122914], [122915, 122917], [122918, 122923]],
    direction: "ltr",
    year: 862,
    living: false,
    link: "https://en.wikipedia.org/wiki/Glagolitic_script"
  },
  {
    name: "Masaram Gondi",
    ranges: [[72960, 72967], [72968, 72970], [72971, 73015], [73018, 73019], [73020, 73022], [73023, 73032], [73040, 73050]],
    direction: "ltr",
    year: 1918,
    living: true,
    link: "https://en.wikipedia.org/wiki/Gondi_writing#Masaram"
  },
  {
    name: "Gothic",
    ranges: [[66352, 66379]],
    direction: "ltr",
    year: 350,
    living: false,
    link: "https://en.wikipedia.org/wiki/Gothic_alphabet"
  },
  {
    name: "Grantha",
    ranges: [[70400, 70404], [70405, 70413], [70415, 70417], [70419, 70441], [70442, 70449], [70450, 70452], [70453, 70458], [70460, 70469], [70471, 70473], [70475, 70478], [70480, 70481], [70487, 70488], [70493, 70500], [70502, 70509], [70512, 70517]],
    direction: "ltr",
    year: 550,
    living: false,
    link: "https://en.wikipedia.org/wiki/Grantha_alphabet"
  },
  {
    name: "Greek",
    ranges: [[880, 884], [885, 888], [890, 894], [895, 896], [900, 901], [902, 903], [904, 907], [908, 909], [910, 930], [931, 994], [1008, 1024], [7462, 7467], [7517, 7522], [7526, 7531], [7615, 7616], [7936, 7958], [7960, 7966], [7968, 8006], [8008, 8014], [8016, 8024], [8025, 8026], [8027, 8028], [8029, 8030], [8031, 8062], [8064, 8117], [8118, 8133], [8134, 8148], [8150, 8156], [8157, 8176], [8178, 8181], [8182, 8191], [8486, 8487], [43877, 43878], [65856, 65935], [65952, 65953], [119296, 119366]],
    direction: "ltr",
    year: -800,
    living: true,
    link: "https://en.wikipedia.org/wiki/Greek_alphabet"
  },
  {
    name: "Gujarati",
    ranges: [[2689, 2692], [2693, 2702], [2703, 2706], [2707, 2729], [2730, 2737], [2738, 2740], [2741, 2746], [2748, 2758], [2759, 2762], [2763, 2766], [2768, 2769], [2784, 2788], [2790, 2802], [2809, 2816]],
    direction: "ltr",
    year: 1592,
    living: true,
    link: "https://en.wikipedia.org/wiki/Gujarati_alphabet"
  },
  {
    name: "Gurmukhi",
    ranges: [[2561, 2564], [2565, 2571], [2575, 2577], [2579, 2601], [2602, 2609], [2610, 2612], [2613, 2615], [2616, 2618], [2620, 2621], [2622, 2627], [2631, 2633], [2635, 2638], [2641, 2642], [2649, 2653], [2654, 2655], [2662, 2678]],
    direction: "ltr",
    year: 1550,
    living: true,
    link: "https://en.wikipedia.org/wiki/Gurmukh%C4%AB_alphabet"
  },
  {
    name: "Hangul",
    ranges: [[4352, 4608], [12334, 12336], [12593, 12687], [12800, 12831], [12896, 12927], [43360, 43389], [44032, 55204], [55216, 55239], [55243, 55292], [65440, 65471], [65474, 65480], [65482, 65488], [65490, 65496], [65498, 65501]],
    direction: "ltr",
    year: 1443,
    living: true,
    link: "https://en.wikipedia.org/wiki/Hangul"
  },
  {
    name: "Han",
    ranges: [[11904, 11930], [11931, 12020], [12032, 12246], [12293, 12294], [12295, 12296], [12321, 12330], [12344, 12348], [13312, 19894], [19968, 40939], [63744, 64110], [64112, 64218], [131072, 173783], [173824, 177973], [177984, 178206], [178208, 183970], [183984, 191457], [194560, 195102]],
    direction: "ltr",
    year: -1100,
    living: true,
    link: "https://en.wikipedia.org/wiki/Chinese_characters"
  },
  {
    name: "Hanunoo",
    ranges: [[5920, 5941]],
    direction: "ltr",
    year: 1300,
    living: true,
    link: "https://en.wikipedia.org/wiki/Hanun%C3%B3%27o_alphabet"
  },
  {
    name: "Hatran",
    ranges: [[67808, 67827], [67828, 67830], [67835, 67840]],
    direction: "rtl",
    year: -40,
    living: false,
    link: "https://en.wikipedia.org/wiki/Hatran_alphabet"
  },
  {
    name: "Hebrew",
    ranges: [[1425, 1480], [1488, 1515], [1520, 1525], [64285, 64311], [64312, 64317], [64318, 64319], [64320, 64322], [64323, 64325], [64326, 64336]],
    direction: "rtl",
    year: -100,
    living: true,
    link: "https://en.wikipedia.org/wiki/Hebrew_alphabet"
  },
  {
    name: "Hiragana",
    ranges: [[12353, 12439], [12445, 12448], [110593, 110879], [127488, 127489]],
    direction: "ltr",
    year: 800,
    living: true,
    link: "https://en.wikipedia.org/wiki/Hiragana"
  },
  {
    name: "Anatolian Hieroglyphs",
    ranges: [[82944, 83527]],
    direction: "ltr",
    year: -1400,
    living: false,
    link: "https://en.wikipedia.org/wiki/Anatolian_hieroglyphs"
  },
  {
    name: "Pahawh Hmong",
    ranges: [[92928, 92998], [93008, 93018], [93019, 93026], [93027, 93048], [93053, 93072]],
    direction: "ltr",
    year: 1959,
    living: true,
    link: "https://en.wikipedia.org/wiki/Pahawh_Hmong"
  },
  {
    name: "Old Hungarian",
    ranges: [[68736, 68787], [68800, 68851], [68858, 68864]],
    direction: "rtl",
    year: 1150,
    living: false,
    link: "https://en.wikipedia.org/wiki/Old_Hungarian_alphabet"
  },
  {
    name: "Old Italic",
    ranges: [[66304, 66340], [66349, 66352]],
    direction: "ltr",
    year: -750,
    living: false,
    link: "https://en.wikipedia.org/wiki/Old_Italic_script"
  },
  {
    name: "Javanese",
    ranges: [[43392, 43470], [43472, 43482], [43486, 43488]],
    direction: "ltr",
    year: 1250,
    living: true,
    link: "https://en.wikipedia.org/wiki/Javanese_script"
  },
  {
    name: "Kayah Li",
    ranges: [[43264, 43310], [43311, 43312]],
    direction: "ltr",
    year: 1962,
    living: true,
    link: "https://en.wikipedia.org/wiki/Kayah_Li_alphabet"
  },
  {
    name: "Katakana",
    ranges: [[12449, 12539], [12541, 12544], [12784, 12800], [13008, 13055], [13056, 13144], [65382, 65392], [65393, 65438], [110592, 110593]],
    direction: "ltr",
    year: 800,
    living: true,
    link: "https://en.wikipedia.org/wiki/Katakana"
  },
  {
    name: "Kharoshthi",
    ranges: [[68096, 68100], [68101, 68103], [68108, 68116], [68117, 68120], [68121, 68148], [68152, 68155], [68159, 68168], [68176, 68185]],
    direction: "rtl",
    year: -400,
    living: false,
    link: "https://en.wikipedia.org/wiki/Kharosthi"
  },
  {
    name: "Khmer",
    ranges: [[6016, 6110], [6112, 6122], [6128, 6138], [6624, 6656]],
    direction: "ltr",
    year: 611,
    living: true,
    link: "https://en.wikipedia.org/wiki/Khmer_alphabet"
  },
  {
    name: "Khojki",
    ranges: [[70144, 70162], [70163, 70207]],
    direction: "ltr",
    year: 1520,
    living: false,
    link: "https://en.wikipedia.org/wiki/Khojki_script"
  },
  {
    name: "Kannada",
    ranges: [[3200, 3204], [3205, 3213], [3214, 3217], [3218, 3241], [3242, 3252], [3253, 3258], [3260, 3269], [3270, 3273], [3274, 3278], [3285, 3287], [3294, 3295], [3296, 3300], [3302, 3312], [3313, 3315]],
    direction: "ltr",
    year: 450,
    living: true,
    link: "https://en.wikipedia.org/wiki/Kannada_alphabet"
  },
  {
    name: "Kaithi",
    ranges: [[69760, 69826]],
    direction: "ltr",
    year: 1550,
    living: false,
    link: "https://en.wikipedia.org/wiki/Kaithi"
  },
  {
    name: "Tai Tham",
    ranges: [[6688, 6751], [6752, 6781], [6783, 6794], [6800, 6810], [6816, 6830]],
    direction: "ltr",
    year: 1300,
    living: true,
    link: "https://en.wikipedia.org/wiki/Tai_Tham_alphabet"
  },
  {
    name: "Lao",
    ranges: [[3713, 3715], [3716, 3717], [3719, 3721], [3722, 3723], [3725, 3726], [3732, 3736], [3737, 3744], [3745, 3748], [3749, 3750], [3751, 3752], [3754, 3756], [3757, 3770], [3771, 3774], [3776, 3781], [3782, 3783], [3784, 3790], [3792, 3802], [3804, 3808]],
    direction: "ltr",
    year: 1350,
    living: true,
    link: "https://en.wikipedia.org/wiki/Lao_alphabet"
  },
  {
    name: "Latin",
    ranges: [[65, 91], [97, 123], [170, 171], [186, 187], [192, 215], [216, 247], [248, 697], [736, 741], [7424, 7462], [7468, 7517], [7522, 7526], [7531, 7544], [7545, 7615], [7680, 7936], [8305, 8306], [8319, 8320], [8336, 8349], [8490, 8492], [8498, 8499], [8526, 8527], [8544, 8585], [11360, 11392], [42786, 42888], [42891, 42927], [42928, 42936], [42999, 43008], [43824, 43867], [43868, 43877], [64256, 64263], [65313, 65339], [65345, 65371]],
    direction: "ltr",
    year: -700,
    living: true,
    link: "https://en.wikipedia.org/wiki/Latin_script"
  },
  {
    name: "Lepcha",
    ranges: [[7168, 7224], [7227, 7242], [7245, 7248]],
    direction: "ltr",
    year: 1700,
    living: true,
    link: "https://en.wikipedia.org/wiki/Lepcha_alphabet"
  },
  {
    name: "Limbu",
    ranges: [[6400, 6431], [6432, 6444], [6448, 6460], [6464, 6465], [6468, 6480]],
    direction: "ltr",
    year: 1740,
    living: true,
    link: "https://en.wikipedia.org/wiki/Limbu_alphabet"
  },
  {
    name: "Linear A",
    ranges: [[67072, 67383], [67392, 67414], [67424, 67432]],
    direction: "ltr",
    year: -2500,
    living: false,
    link: "https://en.wikipedia.org/wiki/Linear_A"
  },
  {
    name: "Linear B",
    ranges: [[65536, 65548], [65549, 65575], [65576, 65595], [65596, 65598], [65599, 65614], [65616, 65630], [65664, 65787]],
    direction: "ltr",
    year: -1450,
    living: false,
    link: "https://en.wikipedia.org/wiki/Linear_B"
  },
  {
    name: "Lisu",
    ranges: [[42192, 42240]],
    direction: "ltr",
    year: 1915,
    living: true,
    link: "https://en.wikipedia.org/wiki/Fraser_alphabet"
  },
  {
    name: "Lycian",
    ranges: [[66176, 66205]],
    direction: "ltr",
    year: -500,
    living: false,
    link: "https://en.wikipedia.org/wiki/Lycian_alphabet"
  },
  {
    name: "Lydian",
    ranges: [[67872, 67898], [67903, 67904]],
    direction: "rtl",
    year: -700,
    living: false,
    link: "https://en.wikipedia.org/wiki/Lydian_alphabet"
  },
  {
    name: "Mahajani",
    ranges: [[69968, 70007]],
    direction: "ltr",
    year: 1150,
    living: false,
    link: "https://en.wikipedia.org/wiki/Mahajani"
  },
  {
    name: "Mandaic",
    ranges: [[2112, 2140], [2142, 2143]],
    direction: "rtl",
    year: 200,
    living: true,
    link: "https://en.wikipedia.org/wiki/Mandaic_alphabet"
  },
  {
    name: "Manichaean",
    ranges: [[68288, 68327], [68331, 68343]],
    direction: "rtl",
    year: 250,
    living: false,
    link: "https://en.wikipedia.org/wiki/Manichaean_alphabet"
  },
  {
    name: "Marchen",
    ranges: [[72816, 72848], [72850, 72872], [72873, 72887]],
    direction: "ltr",
    year: 650,
    living: false,
    link: "https://en.wikipedia.org/wiki/Zhang-Zhung_language#Scripts"
  },
  {
    name: "Mende Kikakui",
    ranges: [[124928, 125125], [125127, 125143]],
    direction: "rtl",
    year: 1880,
    living: true,
    link: "https://en.wikipedia.org/wiki/Mende_Kikakui_script"
  },
  {
    name: "Meroitic Cursive",
    ranges: [[68000, 68024], [68028, 68048], [68050, 68096]],
    direction: "rtl",
    year: -300,
    living: false,
    link: "https://en.wikipedia.org/wiki/Meroitic_alphabet"
  },
  {
    name: "Meroitic Hieroglyphs",
    ranges: [[67968, 68000]],
    direction: "rtl",
    year: -300,
    living: false,
    link: "https://en.wikipedia.org/wiki/Meroitic_alphabet"
  },
  {
    name: "Malayalam",
    ranges: [[3328, 3332], [3333, 3341], [3342, 3345], [3346, 3397], [3398, 3401], [3402, 3408], [3412, 3428], [3430, 3456]],
    direction: "ltr",
    year: 830,
    living: true,
    link: "https://en.wikipedia.org/wiki/Malayalam_script"
  },
  {
    name: "Modi",
    ranges: [[71168, 71237], [71248, 71258]],
    direction: "ltr",
    year: 1200,
    living: false,
    link: "https://en.wikipedia.org/wiki/Modi_alphabet"
  },
  {
    name: "Mongolian",
    ranges: [[6144, 6146], [6148, 6149], [6150, 6159], [6160, 6170], [6176, 6264], [6272, 6315], [71264, 71277]],
    direction: "ttb",
    year: 1204,
    living: false,
    link: "https://en.wikipedia.org/wiki/Mongolian_script"
  },
  {
    name: "Mro",
    ranges: [[92736, 92767], [92768, 92778], [92782, 92784]],
    direction: "ltr",
    year: 1985,
    living: true,
    link: "https://en.wikipedia.org/wiki/Mru_language#Alphabet"
  },
  {
    name: "Meetei Mayek",
    ranges: [[43744, 43767], [43968, 44014], [44016, 44026]],
    direction: "ltr",
    year: 200,
    living: true,
    link: "https://en.wikipedia.org/wiki/Meitei_script"
  },
  {
    name: "Multani",
    ranges: [[70272, 70279], [70280, 70281], [70282, 70286], [70287, 70302], [70303, 70314]],
    direction: "ltr",
    year: 1750,
    living: false,
    link: "https://en.wikipedia.org/wiki/Multani_alphabet"
  },
  {
    name: "Myanmar",
    ranges: [[4096, 4256], [43488, 43519], [43616, 43648]],
    direction: "ltr",
    year: 984,
    living: true,
    link: "https://en.wikipedia.org/wiki/Burmese_alphabet"
  },
  {
    name: "Old North Arabian",
    ranges: [[68224, 68256]],
    direction: "rtl",
    year: 750,
    living: false,
    link: "https://en.wikipedia.org/wiki/Ancient_North_Arabian"
  },
  {
    name: "Nabataean",
    ranges: [[67712, 67743], [67751, 67760]],
    direction: "rtl",
    year: 150,
    living: false,
    link: "https://en.wikipedia.org/wiki/Nabataean_alphabet"
  },
  {
    name: "Newa",
    ranges: [[70656, 70746], [70747, 70748], [70749, 70750]],
    direction: "ltr",
    year: 1000,
    living: true,
    link: "https://en.wikipedia.org/wiki/Prachalit_Nepal_alphabet"
  },
  {
    name: "Nko",
    ranges: [[1984, 2043]],
    direction: "rtl",
    year: 1949,
    living: false,
    link: "https://en.wikipedia.org/wiki/N%27Ko_alphabet"
  },
  {
    name: "Nushu",
    ranges: [[94177, 94178], [110960, 111356]],
    direction: "ltr",
    year: 1500,
    living: true,
    link: "https://en.wikipedia.org/wiki/N%C3%BCshu_script"
  },
  {
    name: "Ogham",
    ranges: [[5760, 5789]],
    direction: "ltr",
    year: 350,
    living: false,
    link: "https://en.wikipedia.org/wiki/Ogham"
  },
  {
    name: "Ol Chiki",
    ranges: [[7248, 7296]],
    direction: "ltr",
    year: 1925,
    living: true,
    link: "https://en.wikipedia.org/wiki/Ol_Chiki_script"
  },
  {
    name: "Old Turkic",
    ranges: [[68608, 68681]],
    direction: "rtl",
    year: 750,
    living: false,
    link: "https://en.wikipedia.org/wiki/Old_Turkic_alphabet"
  },
  {
    name: "Oriya",
    ranges: [[2817, 2820], [2821, 2829], [2831, 2833], [2835, 2857], [2858, 2865], [2866, 2868], [2869, 2874], [2876, 2885], [2887, 2889], [2891, 2894], [2902, 2904], [2908, 2910], [2911, 2916], [2918, 2936]],
    direction: "ltr",
    year: 1060,
    living: true,
    link: "https://en.wikipedia.org/wiki/Odia_alphabet"
  },
  {
    name: "Osage",
    ranges: [[66736, 66772], [66776, 66812]],
    direction: "ltr",
    year: 2006,
    living: true,
    link: "https://en.wikipedia.org/wiki/Osage_alphabet"
  },
  {
    name: "Osmanya",
    ranges: [[66688, 66718], [66720, 66730]],
    direction: "ltr",
    year: 1920,
    living: true,
    link: "https://en.wikipedia.org/wiki/Osmanya_alphabet"
  },
  {
    name: "Palmyrene",
    ranges: [[67680, 67712]],
    direction: "rtl",
    year: -100,
    living: false,
    link: "https://en.wikipedia.org/wiki/Palmyrene_alphabet"
  },
  {
    name: "Pau Cin Hau",
    ranges: [[72384, 72441]],
    direction: "ltr",
    year: 1900,
    living: true,
    link: "https://en.wikipedia.org/wiki/Pau_Cin_Hau"
  },
  {
    name: "Old Permic",
    ranges: [[66384, 66427]],
    direction: "ltr",
    year: 1372,
    living: false,
    link: "https://en.wikipedia.org/wiki/Old_Permic_alphabet"
  },
  {
    name: "Phags-pa",
    ranges: [[43072, 43123], [43124, 43127]],
    direction: "ttb",
    year: 1269,
    living: false,
    link: "https://en.wikipedia.org/wiki/%27Phags-pa_script"
  },
  {
    name: "Inscriptional Pahlavi",
    ranges: [[68448, 68467], [68472, 68480]],
    direction: "rtl",
    year: -171,
    living: false,
    link: "https://en.wikipedia.org/wiki/Inscriptional_Pahlavi"
  },
  {
    name: "Psalter Pahlavi",
    ranges: [[68480, 68498], [68505, 68509], [68521, 68528]],
    direction: "rtl",
    year: 550,
    living: false,
    link: "https://en.wikipedia.org/wiki/Psalter_Pahlavi"
  },
  {
    name: "Phoenician",
    ranges: [[67840, 67868], [67871, 67872]],
    direction: "rtl",
    year: -1200,
    living: false,
    link: "https://en.wikipedia.org/wiki/Phoenician_alphabet"
  },
  {
    name: "Miao",
    ranges: [[93952, 94021], [94032, 94079], [94095, 94112]],
    direction: "ltr",
    year: 1936,
    living: true,
    link: "https://en.wikipedia.org/wiki/Pollard_script"
  },
  {
    name: "Inscriptional Parthian",
    ranges: [[68416, 68438], [68440, 68448]],
    direction: "rtl",
    year: -250,
    living: false,
    link: "https://en.wikipedia.org/wiki/Inscriptional_Parthian"
  },
  {
    name: "Rejang",
    ranges: [[43312, 43348], [43359, 43360]],
    direction: "ltr",
    year: 1750,
    living: true,
    link: "https://en.wikipedia.org/wiki/Rejang_script"
  },
  {
    name: "Runic",
    ranges: [[5792, 5867], [5870, 5881]],
    direction: "ltr",
    year: 150,
    living: false,
    link: "https://en.wikipedia.org/wiki/Runes"
  },
  {
    name: "Samaritan",
    ranges: [[2048, 2094], [2096, 2111]],
    direction: "rtl",
    year: -600,
    living: true,
    link: "https://en.wikipedia.org/wiki/Samaritan_alphabet"
  },
  {
    name: "Old South Arabian",
    ranges: [[68192, 68224]],
    direction: "rtl",
    year: -850,
    living: false,
    link: "https://en.wikipedia.org/wiki/Ancient_South_Arabian_script"
  },
  {
    name: "Saurashtra",
    ranges: [[43136, 43206], [43214, 43226]],
    direction: "ltr",
    year: 1920,
    living: true,
    link: "https://en.wikipedia.org/wiki/Saurashtra_alphabet"
  },
  {
    name: "SignWriting",
    ranges: [[120832, 121484], [121499, 121504], [121505, 121520]],
    direction: "ttb",
    year: 1974,
    living: true,
    link: "https://en.wikipedia.org/wiki/SignWriting"
  },
  {
    name: "Shavian",
    ranges: [[66640, 66688]],
    direction: "ltr",
    year: 1960,
    living: true,
    link: "https://en.wikipedia.org/wiki/Shavian_alphabet"
  },
  {
    name: "Sharada",
    ranges: [[70016, 70094], [70096, 70112]],
    direction: "ltr",
    year: 800,
    living: true,
    link: "https://en.wikipedia.org/wiki/%C5%9A%C4%81rad%C4%81_script"
  },
  {
    name: "Siddham",
    ranges: [[71040, 71094], [71096, 71134]],
    direction: "ltr",
    year: 550,
    living: false,
    link: "https://en.wikipedia.org/wiki/Siddha%E1%B9%83_script"
  },
  {
    name: "Khudawadi",
    ranges: [[70320, 70379], [70384, 70394]],
    direction: "ltr",
    year: 1550,
    living: true,
    link: "https://en.wikipedia.org/wiki/Khudabadi_script"
  },
  {
    name: "Sinhala",
    ranges: [[3458, 3460], [3461, 3479], [3482, 3506], [3507, 3516], [3517, 3518], [3520, 3527], [3530, 3531], [3535, 3541], [3542, 3543], [3544, 3552], [3558, 3568], [3570, 3573], [70113, 70133]],
    direction: "ltr",
    year: 700,
    living: true,
    link: "https://en.wikipedia.org/wiki/Sinhalese_alphabet"
  },
  {
    name: "Sora Sompeng",
    ranges: [[69840, 69865], [69872, 69882]],
    direction: "ltr",
    year: 1936,
    living: true,
    link: "https://en.wikipedia.org/wiki/Sorang_Sompeng_alphabet"
  },
  {
    name: "Soyombo",
    ranges: [[72272, 72324], [72326, 72349], [72350, 72355]],
    direction: "ltr",
    year: 1650,
    living: false,
    link: "https://en.wikipedia.org/wiki/Soyombo_alphabet"
  },
  {
    name: "Sundanese",
    ranges: [[7040, 7104], [7360, 7368]],
    direction: "ltr",
    year: 1350,
    living: true,
    link: "https://en.wikipedia.org/wiki/Sundanese_script"
  },
  {
    name: "Syloti Nagri",
    ranges: [[43008, 43052]],
    direction: "ltr",
    year: 1303,
    living: true,
    link: "https://en.wikipedia.org/wiki/Sylheti_Nagari"
  },
  {
    name: "Syriac",
    ranges: [[1792, 1806], [1807, 1867], [1869, 1872], [2144, 2155]],
    direction: "rtl",
    year: -200,
    living: true,
    link: "https://en.wikipedia.org/wiki/Syriac_alphabet"
  },
  {
    name: "Tagbanwa",
    ranges: [[5984, 5997], [5998, 6001], [6002, 6004]],
    direction: "ltr",
    year: 1300,
    living: true,
    link: "https://en.wikipedia.org/wiki/Tagbanwa_script"
  },
  {
    name: "Takri",
    ranges: [[71296, 71352], [71360, 71370]],
    direction: "ltr",
    year: 1550,
    living: true,
    link: "https://en.wikipedia.org/wiki/Takri_alphabet"
  },
  {
    name: "Tai Le",
    ranges: [[6480, 6510], [6512, 6517]],
    direction: "ltr",
    year: 1200,
    living: true,
    link: "https://en.wikipedia.org/wiki/Tai_Le_alphabet"
  },
  {
    name: "New Tai Lue",
    ranges: [[6528, 6572], [6576, 6602], [6608, 6619], [6622, 6624]],
    direction: "ltr",
    year: 1950,
    living: true,
    link: "https://en.wikipedia.org/wiki/New_Tai_Lue_alphabet"
  },
  {
    name: "Tamil",
    ranges: [[2946, 2948], [2949, 2955], [2958, 2961], [2962, 2966], [2969, 2971], [2972, 2973], [2974, 2976], [2979, 2981], [2984, 2987], [2990, 3002], [3006, 3011], [3014, 3017], [3018, 3022], [3024, 3025], [3031, 3032], [3046, 3067]],
    direction: "ltr",
    year: 700,
    living: true,
    link: "https://en.wikipedia.org/wiki/Tamil_script"
  },
  {
    name: "Tangut",
    ranges: [[94176, 94177], [94208, 100333], [100352, 101107]],
    direction: "ltr",
    year: 1036,
    living: false,
    link: "https://en.wikipedia.org/wiki/Tangut_script"
  },
  {
    name: "Tai Viet",
    ranges: [[43648, 43715], [43739, 43744]],
    direction: "ltr",
    year: 1200,
    living: true,
    link: "https://en.wikipedia.org/wiki/Tai_Dam_language#Writing_system"
  },
  {
    name: "Telugu",
    ranges: [[3072, 3076], [3077, 3085], [3086, 3089], [3090, 3113], [3114, 3130], [3133, 3141], [3142, 3145], [3146, 3150], [3157, 3159], [3160, 3163], [3168, 3172], [3174, 3184], [3192, 3200]],
    direction: "ltr",
    year: -900,
    living: true,
    link: "https://en.wikipedia.org/wiki/Telugu_script"
  },
  {
    name: "Tifinagh",
    ranges: [[11568, 11624], [11631, 11633], [11647, 11648]],
    direction: "ltr",
    year: -300,
    living: true,
    link: "https://en.wikipedia.org/wiki/Tifinagh"
  },
  {
    name: "Tagalog",
    ranges: [[5888, 5901], [5902, 5909]],
    direction: "ltr",
    year: 1250,
    living: true,
    link: "https://en.wikipedia.org/wiki/Baybayin"
  },
  {
    name: "Thaana",
    ranges: [[1920, 1970]],
    direction: "rtl",
    year: 1599,
    living: true,
    link: "https://en.wikipedia.org/wiki/Thaana"
  },
  {
    name: "Thai",
    ranges: [[3585, 3643], [3648, 3676]],
    direction: "ltr",
    year: 1283,
    living: true,
    link: "https://en.wikipedia.org/wiki/Thai_alphabet"
  },
  {
    name: "Tibetan",
    ranges: [[3840, 3912], [3913, 3949], [3953, 3992], [3993, 4029], [4030, 4045], [4046, 4053], [4057, 4059]],
    direction: "ltr",
    year: 650,
    living: false,
    link: "https://en.wikipedia.org/wiki/Tibetan_alphabet"
  },
  {
    name: "Tirhuta",
    ranges: [[70784, 70856], [70864, 70874]],
    direction: "ltr",
    year: 1450,
    living: true,
    link: "https://en.wikipedia.org/wiki/Tirhuta"
  },
  {
    name: "Ugaritic",
    ranges: [[66432, 66462], [66463, 66464]],
    direction: "ltr",
    year: -1400,
    living: false,
    link: "https://en.wikipedia.org/wiki/Ugaritic_alphabet"
  },
  {
    name: "Vai",
    ranges: [[42240, 42540]],
    direction: "ltr",
    year: 1830,
    living: true,
    link: "https://en.wikipedia.org/wiki/Vai_syllabary"
  },
  {
    name: "Warang Citi",
    ranges: [[71840, 71923], [71935, 71936]],
    direction: "ltr",
    year: 1946,
    living: true,
    link: "https://en.wikipedia.org/wiki/Warang_Citi"
  },
  {
    name: "Old Persian",
    ranges: [[66464, 66500], [66504, 66518]],
    direction: "ltr",
    year: -525,
    living: false,
    link: "https://en.wikipedia.org/wiki/Old_Persian_cuneiform"
  },
  {
    name: "Cuneiform",
    ranges: [[73728, 74650], [74752, 74863], [74864, 74869], [74880, 75076]],
    direction: "ltr",
    year: -3050,
    living: false,
    link: "https://en.wikipedia.org/wiki/Cuneiform_script"
  },
  {
    name: "Yi",
    ranges: [[40960, 42125], [42128, 42183]],
    direction: "ltr",
    year: 1450,
    living: true,
    link: "https://en.wikipedia.org/wiki/Yi_script"
  },
  {
    name: "Zanabazar Square",
    ranges: [[72192, 72264]],
    direction: "ltr",
    year: 1700,
    living: false,
    link: "https://en.wikipedia.org/wiki/Mongolian_writing_systems#Horizontal_square_script"
  }
];

//Filtering Arrays
function filter(array, test){                                                   //this is to show how the stock spell works.
    let passed = [];                                                            //empty cup
    for (let element of array){                 
        if(test(element)){
            passed.push(element);                                               //pishing elements into the empty cup
        }                                                                       //filter() is a pure function since it doesnt alter the given array
    }                                                                           //instead it creates a new one with the value it filters from the input array.
    return passed;
}

console.log(filter(SCRIPTS, script => script.living));                          //calling the spell

//filter is a stock(JS) array spell.
console.log(SCRIPTS.filter(s => s.direction === "ttb"));                        //intro to "array.filter()" spell

function map(array, transform){                                                 //this is to show how the spell works, again there is a stock map() spell.
    let mapped = [];
    for(let element of array){
        mapped.push(transform(element));
    }
    return mapped;
}

//IN  A WEB VR APP, YOU CAN USE THIS FILTER METHOD TO FILTER PART OF YOUR 
//VIRTUAL WORLD THAT ARE VISITED THE MOST AND DO SOMETHING ABOUT THAT.

let rltScripts = SCRIPTS.filter(s => s.direction === "rtl");
console.log(map(rltScripts, s => s.name));

console.log("_____");
let t = SCRIPTS.filter(s =>s.year < -3000);
console.log(t.map(s => s.name));

//reduce spell
function reduce(array, combine, start){                                         //array: the input array, combine: the arithmetic that we wanna do on the array
    let current = start;                                                        //and the start is initial value to which adding to or subtracting from or dividing on; depending on...
    for(let element of array){                                                  //the arithmetic function corresponding to combine argument.
        current = combine(current, element);
    }
    return current;
}

console.log(reduce([1,2,3,4],(a,b) => a + b, 0));                               //reduces array [1,2,3,4], by doing this: a+b, start adding on 0.
console.log(reduce([1,2,3,4],(a,b)=> a*b, 1));                                  //reduce array by doin this 1*[1,2,3,4]; answer 24
                                                                                //dont start from 0 if the combine is multipliying.
//reducing(twice);

function characterCount(script){
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to  - from);
    }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));


//average year of origin
function average(array){                                                        //this method is readable but in large data sets it may be slower
    return array.reduce((a, b) => a + b)/array.length;
}

console.log(Math.round(average(
        SCRIPTS.filter(s => s.living).map(s => s.year))));
console.log(Math.round(average(
        SCRIPTS.filter(s => !s.living).map(s => s.year))));

//non absttract way
let total = 0, count = 0;
for(let script of SCRIPTS){                                                     //this method is faster but less readable.
    if(script.living){                                                          //if script is living: script.living, since living  is either true or false.
        total += script.year;
        count += 1;
    }
}
console.log(Math.round(total/count));

//Strings and Character codes
function characterScript(code){                                                 //This spell looks for the code you put in and returns...
    for(let script of SCRIPTS){                                                 //the corresponding script.
        if(script.ranges.some(([from, to]) => {                                 //you can put a spell within a condition?? the some method is a higher of=rder function too..
            return code >= from && code < to;}))                                //it takes a test function and tells you whether that function returns true or any of the elements in the array,
        {
            return script;
        }
    }
    return null;
}

console.log(characterScript(1331));


let horseShoe = "🐴👟";
console.log(horseShoe.length);
console.log(horseShoe[0]);
console.log(horseShoe.charCodeAt(0));                                           //charCodeAt method returns a code unit not a full character code.
console.log(horseShoe.codePointAt(0));                                          //codePointAt method returns a full Uncode character

let roseDragon = "🌹🐉";
for(let char of roseDragon){
    console.log(char);                                                          //chrome console doesnt really show the
}

//Recognizing Text
//characterScript spell
/*
 * The countBy function expects a collection (anything that we can loop over
 * with for/of) and a function that computes a group name for a given element.
 * It returns an array of objects, each of which names a group and tells you the
 * number of elements that were found in that group.
 * It uses another array method—findIndex.
 */
function countBy(items, groupName){
    let counts = [];
    for(let item of items){
        let name = groupName(item);
        let known = counts.findIndex(c => c.name === name);
        if(known === -1){
            counts.push({name, count: 1});
        }
        else{
            counts[known].count++;
        }
    }
    return counts;
}

console.log(countBy([1,2,3,4,5],n => n >= 3));                                  //in the array how many value are greaterThan or equal to 3.

//using countBy we can now write cast a spell that count the type of charaters 
//in a string.
function textScripts(text){
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";                                   
    }).filter(({name}) => name  !== "none");
    
    let total = scripts.reduce((n, {count}) => n + count, 0);
    if(total === 0) return "No scripts found";
    
    return scripts.map(({name, count}) => {
        return `${Math.round(count * 100 / total)} % ${name}`;
    }).join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
console.log('英国的狗说"woof", 俄罗斯的狗说"тяв"');

/*Excersizes*/
//from the solutions page
let arrays =[[1,2,3,4], [5,6], 7];

let emptyArr = [];                                                              //empty array to reduce things into
let con = (flat, current) => flat.concat(current);                              //concatinating.

let redjuice = arrays.reduce(con, emptyArr);                                    //had to write the spells separately.       
console.log(redjuice);                                                          //otherwise i would have understood.

function repeat(n, action){
    for(let i = 0; i < n; i++){
        action(i);
    }
}

function unless(test, then){
    if(!test) then();
}


repeat(10, n => {
    unless(n % 2 === 1, () => {
        console.log(n, 'is even');
    });
});

arr = ["a","b","c","d"];

arr.forEach(s => console.log(s));

numArr = [10,20,39,40,56,64,73,82,39,310];

function filterEven(array, test){
    let evenArr = [];
    for(let element of array){
        if(test(element)){
            evenArr.push(element);
        }
    }
    return evenArr;
}

test = s => s % 2 === 0;

console.log(filterEven(numArr, test));

console.log(numArr.filter(s => s % 2 === 0));

//YOUR OWN LOOP: FROM EXCERSIZE SOLUTIONS.
function loop(start, test, update, body){
    for(let value = start; test(value); value = update(value)){
        body(value);
    }
}

loop(10, n => n > 0, n => n - 1, console.log);

//another take of every
function every(array, predicate){                                               //arguments array and predicate
    for(let element of array){                                                  
        if(!predicate(element)) return false;                                   //if the predicate condition is not met return false.
    }
    return true;
}
console.log(every([1,3,5,7,9], n => n % 2 === 0));                              //testing if its even or odd.

//if the users position is not on the database or they have turned
//off location services on their devices do something
//like alrt them that they should yturn on their device location on their 
//settings, the above function can work in those cases... I might be wrong


//another take of every
function every2(array, predicate){                                              
    return !array.some(element => !predicate(element));                         
}
console.log(every2([2,4,6,8], n => n % 2 === 0));                               

console.log(1 < 2 ? 100 : -100);                                                //if the condition on the left of the ? is true, the the vaslue 
                                                                                //in the middle is returned, else the value on the far right ids returned.
                                                                                
function countBy(items, groupName){
    let counts = [];
    for(let item of items){
        let name = groupName(item);
        let known = counts.findIndex(c => c.name === name);
        if(known === -1){
            counts.push({name, count: 1});
        }
        else{
            counts[known].count++;
        }
    }
    return counts;
}

let SCRIPTS = [];

function characterScript(code){                                                 //This spell looks for the code you put in and returns...
    for(let script of SCRIPTS){                                                 //the corresponding script.
        if(script.ranges.some(([from, to]) => {                                 //you can put a spell within a condition?? the some method is a higher of=rder function too..
            return code >= from && code < to;}))                                //it takes a test function and tells you whether that function returns true or any of the elements in the array,
        {
            return script;
        }
    }
    return null;
}
//solutionfrom the book not from me
function dominantDirection (text){                                              //Spell dominantDirection
    let counted = countBy(text, char => {
       let script = characterScript(char.codePointAt(0));
       return script ? script.direction : "none";
    }).filter(({name}) => name !== "none");
    
    if(counted.length === 0) return "ltr";
    
    return counted.reduce((a,b) => a.count > b.count ? a : b).name;             
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl


//Example 34.
//Methods are properties that hold function values.
let rabbit = {};
rabbit.speak = function(line){
    console.log(`The rabbit says '${line}'`);
};

rabbit.speak(`I am alive`);

//Most times methods need to do something with the object it was called on
function speak(line){
    console.log(`The ${this.type} rabbit says: '${line}'`);                     //"this" is a binding that point at an object being called.
}

let whiteRabbit = {type: 'white', speak};
let hungryRabbit = {type: 'hungry', speak};

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
hungryRabbit.speak("I could use a carrot right now");

//to pass "this" explicitly we use "call".
speak.call(hungryRabbit, "burp");                                               //is it possible to call a function and override some of its methods???

function normalize(){
    console.log(this.coords.map(n => n / this.length));
}

normalize.call({coords: [0, 2, 3], length: 5});

/* this is not gonna work.
let cod = {cord: [0, 2, 3], length: 5};
normal = function(){
    console.log(this.cord.map(n => n / this.length));
};
 

normal.call(); 
 */

/*PROTOTYPES*/
let empty = {};
console.log(empty.toString);
console.log(empty.toString());
console.log(Object.keys(empty));                                                //my experiment.

/* A prototype is another object that is used as a fallback
 * source of properties. When an object gets a request for a property 
 * that it does not have, its prototype will be searched for the property, 
 * then the prototype’s prototype, and so on.
 */

console.log(Object.getPrototypeOf({}) === Object.prototype);
//-> true   
console.log(Object.getPrototypeOf(Object.prototype));
//-> null

/* Many Objects have Object.prototype as their ancestor
 * or the most basic building block of objects
 * in biology the most basic building block of every animal is the animal cell
 * in evolution all living being come from a single cell organism
 * that is the same as Object.prototype, Function.prototype, Array.prototype ect...
 */

console.log(Object.getPrototypeOf(Math.max) === Function.prototype);
console.log(Object.getPrototypeOf([]) === Array.prototype);                     //I see...mmh

/*One can use Object.create to create an object with a specific prototype.*/

let protoRabbit = {                                                             //prototype
    speak(line){                                                                //propery of the new prototype: it was a function before(line: 2749) a short hand way of difining an method
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

let killerRabbit = Object.create(protoRabbit);                                  //creating a new object from the prototype
killerRabbit.type = "killer";                                                   //type of the new object
killerRabbit.speak("SKREEEE!");                                                 //-> the killer rabiit says SKREEE!

//let the prototype of killer rabbit
console.log(Object.getPrototypeOf(killerRabbit) == protoRabbit.prototype + 'H');


/*CLASSES*/

//a class defines the shape of a type of object--what method and properties 
//it has.

function makeRabbit(type){                                                      //this is a constructor function
    let rabbit = Object.create(protoRabbit);                                    
    rabbit.type = type;                                                         //every rabbit has a type of some sort
    return rabbit;
}

/* JavaScript provides a way to make defining this type of function easier. If
 * you put the keyword 'new' in front of a function call, the function is treated
 * as a constructor. This means that an object with the right prototype is
 * automatically created, bound to this in the function,
 * and returned at the end of the function.
 */

function Rabbit(type){                                                          //constructors are Capitalized to distinguish themfrom other functions
    this.type = type;
}

Rabbit.prototype.speak = function(line){
    console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");                                          //putting the reserved word new make any function a cunstructor.
//every constructor is a function.

console.log(Object.getPrototypeOf(Rabbit) === Function.prototype);              //since Rabbit() is a function.
//-> true
//console.log(Object.getPrototypeOf(weirdRabbit.prototype) === Rabbit.prototype); //returns an error: null cant be converted int an object; I wonder why?
console.log(weirdRabbit);

//now letstry another way

let  weirdRabbit2 = Object.create(Rabbit);
console.log(weirdRabbit2);

//now lets see the prototype of weirdRabbit2
console.log(Object.getPrototypeOf(weirdRabbit2.prototype) === Object.prototype);

//CLASS NOTATION
class Rabbit2{
    constructor(type){
        this.type = type;
    }
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit2 = new Rabbit2("killer");
let blackRabbit2 = new Rabbit2("black");

//lets try something
console.log(Object.getPrototypeOf(killerRabbit2));                              //these errors may be due to new additions in JS, like PHP did.: nope twas just bad coding

//one is allowed to ommit the word class in class expression
let object = new class {
    getWord(){
        return "hello";
    }
};

console.log(object.getWord());
//______________________________________________________________________\\
class Rabbit{
    constructor(type){
        this.type = type;
    }
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

//overriding derived properties
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);                                                //In the above code I should have refered to killerRabit2, thats why it was confusing

//more overrides
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);                                                //-> long, sharp, and bloody

//so everytime code confuses you, just start afresh on that piece of code
//this is the reason why modular coding is best.

console.log(blackRabbit.teeth);                                                 //-> small
console.log(Rabbit.prototype.teeth);                                            //-> small

/*Overriding is also used to give the standard function and array prototypes a
 *different toString method than the basic object prototype.
 */

console.log(Array.prototype.toString === Object.prototype.toString);            //-> false
console.log([1,2].toString());                                                  //-> 1,2: spot the difference on toString and toString()

//.join reminder
let arr1 = [1,2,3];
console.log(arr1.join(" waka "));

/*Calling toString on an array gives a result similar to calling .join(",") on
 * it—it puts commas between the values in the array. 
 * Directly calling Object.prototype.toString with an 
 * array produces a different string. That function doesn’t know about arrays,
 * so it simply puts the word object and the name of Sthe type between square 
 * brackets.*/

console.log(Object.prototype.toString.call([1,2]));                             //[object Array]

//now lets try this...
console.log(Object.prototype.toString.call({name: "Sandile", age: 27}));        //->[object Object]
//console.log(Object.protoype.toString.call(n => n/2));                         //cannot read property toString of undefined.
console.log(Object.prototype.toString.call(Math.max(1,2,3)));                   //->[object Number]

/*MAPS
 * A map (noun) is a data structure that associates values (the keys) with other
values. For example, you might want to map names to ages. It is possible to
use objects for this.*/
let ages = {
    Boris :39,
    Toj   :108,
    Mbhele: 209
};
console.log(`Toj is ${ages["Toj"]} years old`);                                 //-> Toj is 108 years old
console.log(`Is Ntaba's age known?`, "Ntaba" in ages);                          //-> Is Ntabas age known? false
console.log(`toString in ages?`, 'toString' in ages);                           //-> toString in ages? true
console.log(`Math.max in ages?`, 'Math.max' in ages);                           //-> Math.max in ages? false

//it is possible to create objects with no prototypes. 
//And I gues we can define our own prototypes.
console.log('toString' in Object.create(null));                                 //-> false

/*JavaScript comes with a class called Map that is written for this
exact purpose. It stores a mapping and allows any type of keys.*/
let age = new Map();
age.set("Boris", 39);
age.set("Toj", 108);
age.set('Ntaba', 230);

console.log(`Ntaba is ${age.get('Ntaba')}`);                                    //-> Ntaba is 230
console.log(`Is Makwili's age known?`, age.has('Makwili'));                     //-> Is Makwilis age known? false 
console.log(`toString?`, age.has("toString"));                                  //-> toString? false

//set, get, has are part of the Map interface
//'in' operator has an alternative 'hasOwnPropery'

console.log({x : 1}.hasOwnProperty("x"));                                       //-> true
console.log({x : 1}.hasOwnProperty("toString"));                                //-> false

/*POLYMORPHISM*/
/* When a piece of code is written
 * to work with objects that have a certain interface—in this case, a toString
 * method—any kind of object that happens to support this interface can be
 * plugged into the code, and it will just work.
 * This technique is called polymorphism.*/

class Rabbit{
    constructor(type){                                                          //keyword constructor is always ther in JS classes; I might be wrong tho
        this.type = type;
    }
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
blackRabbit.speak("DUDE IM  OVER HERE!!");

Rabbit.prototype.toString = function(){
    return `a ${this.type} rabbit.`;
};

console.log(String(blackRabbit));                                               //-> a black rabbit : had to rewrite the class for these mods to work.
console.log(String(killerRabbit));                                              //-> a killer rabbit.


/*SYMBOLS*/
//symbols are values created with the function symbol.
let sym = Symbol("name");                                                       //creating a symbol
console.log(sym === Symbol("name"));                                            //-> false : because you cant create the same symbol twice.
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);                                                  //-> 55 : since blackRabbit is an instance of class rabbit.

const toStringSymbol = Symbol("toString");                                      //creating a symbol
Array.prototype[toStringSymbol] = function(){                                   //adding a known prototype(from arrays) to that symbol.
    return `${this.length} cm of blue yarn`;                                    //length of an array({this.length})
};

console.log([1,2].toString());                                                  //-> 1,2
console.log([1,2][toStringSymbol]());                                           //-> 2 cm of blue yarn: 2===this.length from the array prototype

/*It is possible to include symbol properties in object expressions and classes
by using square brackets around the property name. That causes the property
name to be evaluated, much like the square bracket property access notation,
which allows us to refer to a binding that holds the symbol.*/

let stringObject = {
    [toStringSymbol](){
        return `a jute rope`;
    }
};
console.log(stringObject[toStringSymbol]());                                    //-> a jute rope.

/*THE ITERATOR INTERFACE*/
//using the for/of Symbol.iterator spell

let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());                                                 //-> {value: "O", done: false}     : which means we can still iterate
console.log(okIterator.next());                                                 //-> {value: "K", done: false}     : until undefined is return we can still iterate.
console.log(okIterator.next());                                                 //-> {value: undefined, done:true} : now that done is true we are done
console.log(okIterator.next());                                                 //we gon keep getting the above cause we done


//here's an iterable datastructure
class Matrix{
    constructor(width, height, element = (x, y) => undefined){                  //keyword constructor is alway ther in a class; I might be wrong tho
        this.width = width;
        this.height = height;
        this.content = [];
        
        for(let y = 0; y < height; y++){
            for(let x = 0; x < width; x++){
                this.content[y * width + x] = element(x, y);
            }
        }
    }
    get(x, y){
        return this.content[y * this.width + x];
    }
    set(x, y, value){
        this.content[y * this.width + x] = value;
    }
}

class MatrixIterator{
    constructor(matrix){
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }
    next(){
        if(this.y === this.matrix.height) return {done: true};                  //if y is equal to height then we done iterating
        
        let value = {x: this.x,
                     y: this.y,
                     value: this.matrix.get(this.x, this.y)};
        this.x++;
        if(this.x === this.matrix.width){
            this.x = 0;
            this.y++;
        }
        return {value, done: false};
    }
}

//under normal circumstances the following method would be declared directly
//in the class.

Matrix.prototype[Symbol.iterator] = function(){
    return new MatrixIterator(this);
};

//We can now loop over a matrix with for/of

let matrix = new Matrix(3, 5, (x, y) => `value ${x}, ${y}`);
for(let {x, y, value} of matrix){
    console.log(x, y, value);
}

/*GETTERS, SETTERS AND STATICS*/
//getter: retrieving a property's value
let varyingSize = {
    get size(){                                                                 //size() is a getter...classes can be getters to
        return Math.floor(Math.random() * 100);
    }   
};

console.log(varyingSize.size);

//setter
/*The Temperature class allows us to read and write the temperature in either
degrees Celsius or degrees Fahrenheit, but internally it stores only Celsius and
automatically converts to and from Celsius in the fahrenheit getter and setter.
Sometimes you want to attach some properties directly to your constructor*/

class Temperature{
    constructor(celcius){
        this.celcius = celcius;
    }
    get fahrenheit(){                                                           //getter
        return this.celcius * 1.8 + 32;                                         //this is where the calculation that return on line 33 
    }
    set fahrenheit(value){                                                      //setter
        this.celcius = (value - 32)/1.8;                                        //calculation on line 35 happens here
    }
    static fromFahrenheit(value){
        return new Temperature((value - 32)/ 1.8);
    }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);                                                   //-> 71.6
temp.fahrenheit = 86;
console.log(temp.celcius);                                                      //-> 30

/*Inheritance*/
//writting a new calls with added methods from an old class is called 
//inheritance in object oriented programming.

//we need this class
class Matrix{
    constructor(width, height, element = (x, y) => undefined){                  //keyword constructor is alway ther in a class; I might be wrong tho
        this.width = width;
        this.height = height;
        this.content = [];
        
        for(let y = 0; y < height; y++){
            for(let x = 0; x < width; x++){
                this.content[y * width + x] = element(x, y);
            }
        }
    }
    get(x, y){
        return this.content[y * this.width + x];
    }
    set(x, y, value){
        this.content[y * this.width + x] = value;
    }
}

//and then lets do some inheritance
class SymmetricMatrix extends Matrix{                                           //SymmetricMatrix is now a sub class of Matrix thru the useof extends
    constructor(size, element = (x, y) => undefined){                           //this constructor is made up of methods from the superclass constructor
        super(size, size, (x, y) => {                                           //keyword super calls a superclass constructor(Matrix in this case)
            if(x < y) return element(y, x);                                     //swap x and y if x is less than y
            else return element(x, y);
        });
    }
    set(x, y, value){
        super.set(x, y, value);                                                 //another call to the super class constructor
        if(x !== y){
            super.set(y, x, value);                                             //call to the super class constructor: swapping x and y along the diagonal
        }
    }
}

let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);                     //5 is size
console.log(matrix.get(2, 3));                                                  //-> 3,2 : returns undefined if you call for value that are not in the matrix
console.log(matrix);                                                            //this will show the actual matrix with all the values that you can call
//the actual matrix
/*x
 0,0^  1,0  2,0  3,0  4,0
 1,0  1,1^  2,1  3,1  4,1
 2,0  2,1  2,2^  3,2  4,2
 3,0  3,1  3,2   3,3^ 4,3
 4,0  4,1  4,2  4,3   4,4^
 y :*the above matrix is a symmetrix matrix*/

/*INSTANCE OF OPERATOR*/
console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);                 //-> true
console.log(new Matrix(2,2) instanceof SymmetricMatrix);                        //-> false
console.log([] instanceof Array);                                               //-> true
console.log(Array instanceof Object);                                           //-> true

/*Exersizes*/
class Vec{                                                                      //this class is pretty much self explanotory
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    plus(x, y){
        return `New Vector: V(x, y) = ${this.x + x}i + ${this.y + y}j`;
    }
    minus(x, y){
        if(this.x - x === 0) return `New vector: V(x, y) = ${this.y- y}j`;
        
        else if(this.y - y === 0) return `New Vector: V(x, y) = ${this.x -x}i`;
        
        else{
            return `New Vector: V(x, y) = ${this.x - x}i + ${this.y - y}j`;
        }
        
    }
    get leng(){
        let num = (this.x * this.x + this.y * this.y);
        return `The Length is: ${Math.sqrt(num)}`;                              //fix this when we come back: fixed
    }
}

let vector = new Vec(3,5);
let vector1 = vector.plus(1,1);
let vector2 = vector.minus(4,4);

console.log(vector1);
console.log(vector2);
console.log(vector.leng);

//2
class Group_{
    constructor(value){
        group = [];
        this.value = value;
    }
    add(value){
        group.push(this.value);
    }
    delete(){
        group.pop();
    }
    has(value){
        for(let element of group){
            if(value === element){
                return `Group has the ${this.value}`;
            }
            else{
                return `${this.value}in not in Group`;
            }
        }
    }
}

//let grp = new Group(1, group = []);
//console.log(grp);
//grp.add(2);
//grp.delete();
//console.log(grp.has(2));

//the above is wrong but close


class Group{                                                                    //this code is from the solutions.
    constructor(){
        this.members = [];                                                      //basically declaring a members array.
    }
    add(value){
        this.members.push(value);                                               //pushing a value into an array
    }
    delete(value){
        this.members.filter(v => v !== value);                                  //instead of pop like i thought, we delete thru filtering
    }
    has(value){
        return this.members.includes(value);                                    //searching thru includes
    }
    static from(collection){                                                    //static method where we initialize the first values of the group.
        let group = new Group;
        for(let value of collection){
            group.add(value);
        }
        return group;
    }
    [Symbol.iterator](){
        return new GroupIterator(this);
    }
}

let group = Group.from([1,2,3,4]);
console.log(group);
console.log(group.has(7));
console.log(group.has(3));
 
class GroupIterator{
    constructor(group){
        this.group = group;                                                     //array
        this.index = 0;                                                         //index of the array
    }
    next(){
        if(this.index >= this.group.members.length){                            //if the index is bigger than the arrays length
            return {done: true};                                                //we are done iterating
        }
        else{
            let result = {value: this.group.members[this.index],                //writing the values
                           done:false                
            };
            this.index++;                                                       //going to thenext index
            return result;
        }
        
    }
}

for(let value of Group.from(['a','b','c'])){                                    //at first i tried element instead of value but the code simply didnt work
    console.log(value);                                             
}

//hasOwnProperty
let map = {one: true, two: true, hasOwnProperty: true};
console.log(Object.prototype.hasOwnProperty.call(map, 'one'));
//---------------------------------------------------------------------------\\
//Chapter 7: dont mind this one
VillageState.mine = function(parcelCount = 2){
    let parcels = [];
    for(let i = 0; i < parcelCount; i++){
        let address = "Market Place";
        let place;
        
        do{
           place = "Grete's House"; 
        }
        while(place == address);
        parcels.push({place, address});
    }
    return new VillageState("Grete's House", parcels);
};


/*IN-BOOK PROJECT[CHAPTER 7]*/

const roads = [
    "Alice's House-Bob's House",      "Alice's House-Cabin",
    "Alice's House-Post Office",      "Bob's House-Town Hall",
    "Daria's House-Ernie's House",    "Daria's House-Town Hall",
    "Ernie's House-Grete's House",    "Grete's House-Farm",
    "Grete's House-Shop",             "Market Place-Farm",
    "Market Place-Post Office",       "Market Place-Shop",
    "Market Place-Town Hall",         "Shop-Town Hall"
];

function buildGraph(edges){
    let graph = Object.create;
    
    function addEdge(from, to){
        if(graph[from] == null){
            graph[from] = [to];
        }
        else{
            graph[from].push(to);
        }
    }
    
    for(let [from, to] of edges.map(r => r.split("-"))){
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
    console.log(graph.keys());
}

const roadGraph = buildGraph(roads);

console.log(Object.keys(roadGraph));

class VillageState{
    constructor(place, parcels){
        this.place = place;
        this.parcels = parcels;
    }
    move(destination){
        if(!roadGraph[this.place].includes(destination)){                       //this line is erronous in my system, now it is obvious that this part 
            return this;                                                        //needs to be done on the sand box online, that being said good night mLuD.
        }
        else{
            let parcels = this.parcels.map(p => {
                        if(p.place !== this.place) return p;
                
                        return {place: destination, address: p.address};
            }).filter(p => p.place !== p.address);
            
            return new VillageState(destination, parcels);
        }
    }
}

let first = new VillageState(
        "Post Office",                                                          //destination
        [{place: "Post Office", address: "Alice's House"}]                      //parcels
);
console.log(first.parcels[0]);                                                  //my experiment


let next = first.move("Alice's House");
console.log(next.place);                                                        //-> Alice's House
console.log(next.parcels);                                                      //-> []; delivered
console.log(first.place);                                                       //-> Post Office 
                                                                                //first.place is the old state of the village
                                                                                //a state is more like a snapshot before and after certain events have

/*PESISTASNT DATA:
 Its the immutables, data structures that cannot be changed, wedothis
by casting a freeze spell on them
 */

let object = Object.freeze({value: 5});                                         //this is done to manage complexity
object.value = 10;                                                              //this value will be ignored: cold isn't it ;-)
console.log(object.value);                                                      //-> 5

//SIMULATION

function runRobot(state, robot, memory){
    for(let turn = 0;; turn++){
        if(state.parcels.length == 0){
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

//the dumbest strategy that could possibly work

function randomPick(array){
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state){
    return {direction: randomPick(roadGraph[state.place])};
}



//for the robot to get to work, lets create a new village state 
//with parcels to deliver

VillageState.random = function(parcelCount = 5){
    let parcels = [];
    for(let i = 0; i < parcelCount; i++){
        let address = randomPick(Object.keys(roadGraph));
        let place;
        
        do{
            place = randomPick(Object.keys(roadGraph));
        }
        while(place === address);
        
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
};

//runRobot(VillageState.random(), routeRobot);                                   //the results are random so....yeah

const mailRoute = [                                                             //MAIL TRUCK ROUTE
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House", "Grete's House",
    "Shop", "Grete's House", "Farm", "Market Place", "Post Office"
];


//let make the robot follow a route: THE MAILE TRUCKS ROUTE

function routeRobot(state, memory){
    if(memory.length == 0){
        memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};
}

//function to find the shortest route

function findRoute(graph, from, to){
    let work = [{at: from, route: []}];
    
    for(let i = 0; i < work.length; i++){
        let {at, route} = work[i];                  
        
        for(let place of graph[at]){
            if(place == to){
                return route.concat(place);
            }
            if(!work.some(w => w.at == place)){
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
}



//now lets create a goal oriented robot

function goalOrientedRobot({place, parcels}, route){
    if(route.length == 0){
        let parcel = parcels[0];
        if(parcel.place != place){
            route = findRoute(roadGraph, place, parcel.place);
        }
        else{
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}



let from = "Alice's House";
let to = "Cabin";
let pathFinder = findRoute(roadGraph, from, to);
console.log(pathFinder);                                                        //fiinds the quickest path from: starting-point to: end-point

let go = goalOrientedRobot({place: "Market Place", parcels: 3}, mailRoute);     //another test of countless experiments
console.log(go);                                                                //try try try never stop


let myState = new VillageState(
        "Alice's House",                                                        //where the robot is
        [{place: "Bob's House", address: "Town Hall"},
         {place: "Grete's House", address: "Farm"},
         {place: "Market Place", address: "Alice's House"}]                     //parcels
);

console.log("\n-----Goal Oriented Robot-----");
runRobot(myState, goalOrientedRobot, pathFinder);

console.log("\n-----Route Robot----");
runRobot(myState, routeRobot, pathFinder);

//attempt at comparing the robots
//I am gonna reuse runRobot code

function runRobot2(state, robot, memory){
    for(let turn = 0;; turn++){
        if(state.parcels.length == 0){
            return turn;
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        //console.log(`Moved to ${action.direction}`);
    }
}

function runRobot3(state, robot, memory){                                       //you were right by thinking of reusing this code, you just haver to stop doubting yourself and keep pushing when it getshard
    for(let turn = 0;; turn++){                                                 //and your need to plan your ideas on paper very well, because most times you are on the right track, keep thatin mind 
        if(state.parcels.length == 0){
            return turn;
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        //console.log(`Moved to ${action.direction}`);
    }
}

let r1 = console.log(runRobot2(myState, routeRobot, pathFinder));
let r2 = console.log(runRobot3(myState, goalOrientedRobot, pathFinder));

let c = console.log(r2 > r1);

if(c == false){
    console.log(`Route Oriented Robot wins, done in ${r1} turns`);
}
else if(r1 > r2){
    console.log(`Goal Oriented Robot wins, done in ${r2} turns`);
}
else if (r1-r2 > 0){
    console.log(`Its a tie`);
}

//solution from the solutions: we need to stop this
function countSteps(state, robot, memory){
    for(let steps = 0; ; steps++){
        if(state.parcels.length == 0){
            return steps;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
    }
}

function compareRobots(robot1, memory1, robot2, memory2){
    let total1 = 0, total2 = 0;
    for(let i = 0; i < 100; i++){
        let state = VillageState.random();
        total1 += countSteps(state, robot1, memory1);
        total2 += countSteps(state, robot2, memory2);
    }
    console.log(`Robot 1 needed ${total1/100} steps per task`);
    console.log(`Robot 2 needed ${total2/200} steps per task`);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);

//7.2 from the solutions

function lazyRobot({place, parcels}, route){
    if(route.length == 0){                                                      //describes the route for every parcel
        let routes = parcels.map(parcel => {
            if(parcel.place != place){
                return {route: findRoute(roadGraph, place, parcel.place),
                pickUp: true};
            }
            else{
                return{route: findRoute(roadGraph, place, parcel.place),
                pickUp: false};
            }
        });
        /*This determines theprecedence a route gets when choosing.
         *Route length counts negatively, routes that pick up
         *a package get a small bonus*/
        
//        function score({route, pickup}){
//            return (pickUp ? 0.5 : 0) - route.length;
//        }
//        route = routes.reduce((a,b) => score(a) > score(b) ? a : b).route;
    }
    return {direction: route[0], memory: route.slice(1)};
}

//runRobot(myState, lazyRobot, pathFinder);                                     //lazy robotruns for evernotso lazyafter all

class PGroup_{                                                                   //this is my attempt at making a persistent group; its wrong but its mine
    constructor(members){
        this.members = members;
    }
    add(value){
        if(this.members.includes(value)) return this;
        let pGroup = this.members.push(value);
        return pGroup;
    }
    delete(value){
        if(!this.members.includes(value)) return this;
        let pGroup = this.members;
        pGroup.filter(value);
        return pGroup;
    }
    has(value){
        return this.members.includes(value);
    }
}

//this PGroup solution is from the solution

class PGroup{
    constructor(members){
        this.members = members;
    }
    add(value){
        if(this.members.includes([value])) return this;
        return new PGroup(this.members.concat([value]));
    }
    delete(value){
        if(!this.has(value)) return this;
        return new PGroup(this.members.filter(m => m !== value));
    }
    has(value){
        return this.members.includes(value);
    }
}

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log("\n");
console.log(a.has("a"));                                                        //-> true
console.log(ab.has("b"));                                                       //-> true
console.log(a.has("b"));                                                        //-> false
console.log(b.has("a"));                                                        //-> false


/*BUGS AND ERROS: Chapter 8*/
//testing

function test(label, body){                                                     //function for test 
    if(!body()) console.log(`Failed: ${label}`);                                //when failer occurs display this
    else console.log(`Succeded: ${label}`);                                     //Upon success display this
}

test("convert Latin text to uppercase", () => {
    return "Hello".toUpperCase() === "Hello";
});

//debugging

function numberToString(n, base = 10){
    let result = "", sign = "";
    if(n < 0){
        sign = "-";
        n = -n;
    }
    do{
        result = String(n % base) + result;
        console.log(n);
        n = Math.floor(n/base);
    }
    while(n > 0);
    return sign + result;
}
console.log(numberToString(13, 10));


//Error Propergation
function lastElement(array){                                                    //this function is for when you want to wrap the outcome in away that will shoo
    if(array.length === 0){                                                     //whether the function call was successful or not.
        return {failed: true};
    }
    else{
        return {element: array[array.length - 1]};
    }
}

let array = [1,2,3,4];
console.log(lastElement(array));

let ary = [];
console.log(lastElement(ary));

//Exceptions

function promptDirection(question){
    "strict mode";
    let result = prompt(question);
    if(result.toLowerCase() === "left") return "L";
    if(result.toLowerCase() === "right") return "R";
    throw new Error("Invalid Direction: " + result);
}

function look(){
    if(promptDirection("Which Way") === "L"){
        return "a house";
    }
    else{
        return "two angry bears";
    }
}

try {
    console.log("You see", look());
}
catch(error){
    console.log("Something went wrong: " + error);
}

//cleaning up after exceptions
//bad banking code....
const accounts = {
    a: 100,
    b: 0,
    c: 20
};

function getAccount(){                                                          //a purposely bad banking code
    let accountName = prompt("Enter Account Name");
    if(!accounts.hasOwnProperty(accountName)){
        throw new Error(`No such account: ${accountName}`);
    }
    return accountName;
}

function transfare(from, amount){
    if(accounts[from] < amount) return;
    accounts[from] -= amount;
    accounts[getAccount()] += amount;
}
let a;

//console.log(transfare(a,9));
//console.log(accounts);

//loop that keeps calling promptDirection until one gives a valid input
for(;;){                                                                        //for(;;) is a deliberaste construct for a loop that doesnt terminates on its own
    try{
        let dir = promtDirection("Where?");                                     //if this function is mispelled the loop will go on for ever 
        console.log("You see", dir);                                            //and the exception will not be caught...
        break;
    }
    catch(e){                                                                   //because the error will be buried under the infinite looping error
        console.log("Not a direction. Try again");                              //So, the general rule is do not blanket catch exeptions unless it is for the purpose
    }                                                                           //of routing them somewher else, like over the network to tell another system that a program crashed.
}

class InputError extends Error{};

function promptDirect(question){
    let result = prompt(question);
    if(result.toLowerCase() === "left") return "L";
    if(result.toLowerCase() === "right") return "R";
    throw new InputError("Invalid direction: " + result);
}

for(;;){
    try{
        let dir = promptDirect("Where?");                                       //calling prompt direction.
        console.log("You chose ", dir);                                         
        break;
    }
    catch(e){
        if(e instanceof InputError){                                            //catches the intended exception.
            console.log("Not a valid input. Try again");
        }
        else{                                                                   //if there is another error that we pover looked.
            throw e;
        }
    }
}

function firstElement(array){                                                   //function to return the first element of an array
    if(array.length === 0){                                                     //ifthe length equals 0, meaning the array is empty
        throw new Error("firstElement called with []");                         //throw an error
    }
    return array[0];                                                            //otherwisereturn the first element.
}

let arr = [1,2,3];
console.log(firstElement(arr));

/*EXERCISE 8.1: primitiveMultiply: not from the solutions but my head*/

function primitiveMultiply(){                                                   //function primitive multiply.
    let n1 = Number(prompt("Enter first number"));                              //first number
    let n2 = Number(prompt("Enter second number"));                             //second number
    if((Math.floor(Math.random() * 10)) > 2){                                   //the function must only be successful only 20% of the time, this is my take on that.
        throw new MultiplicatorUnitFailure("Multiplicator Unit Failure");       //throw the exception
    }
    else{                                                                       //otherwise if Math.floor(Math.random() * 10) < 2...
        let product = n1 * n2;                                                  //calculate the product and...
        console.log(product);                                                   //log it.
    }
}

class MultiplicatorUnitFailure extends Error{};                                 //new class MultiplicatorUnitFailure that extends class error.

for(;;){                                                                        //non self regulating loop, runs for ever if there is not breaking condition in its body
    try{                                                                        //try block...
        primitiveMultiply();                                                    //calling primitiveMultiply function
        break;                                                                  //break: this will regulate the loop, get it to stop
    }
    catch(e){                                                                   //catch block, catches errors..
        if(e instanceof MultiplicatorUnitFailure){                              //only those that are instance of the class MultiplicatorUnitFailure which extends class Error
            console.log("Multiplicator Unit Failure: Try again");
        }
        else{
            throw e;                                                            //this will throe errors that are not accoiciated with the MultiplicatorUnitFailure class.
        }
    }
}

/*EXERCISE 8.2: Locked Box: from me head*/
const box = {
    locked: true,
    unlock(){this.locked = false;},
    lock(){this.locked = true;},
    _content: ["Gold and Precious Stones"],
    get content(){
        if(this.locked) throw new LockedBoxError;
        return this._content;
    }
};

//path to solution: how to access objects in general
let days = {d1: "Monday", d2: "Teusday", d3: "Wednesday"};
console.log(days.d1);                                                           //-> Monday

//Now lets try to access content in the box
//console.log(box.content);                                                                 -> Uncaught Error: Box is locked

days.d1 = "Moon day";
console.log(days);                                                              //{d1: Moon day, d2: Teusday, d3: Wednesday}

//the key: i.e the actual solution
class LockedBoxError extends Error{};                                           //class LockedBoxError

function iAmIn(){                                                               //function to be run once the box has been unlocked
    box._content.push("I got it");                                              //this is what we are gonna push to the _content array once we are in
    console.log(box.content);                                                   //and the we are gonna log the array with the changes
}

function withBoxUnlocked(){                                                     //the key: withBoxUnlocked
    box.unlock();                                                               //calling the unlock() spell that is inside the box object
    iAmIn();                                                                    //calling the iAmIn function
    box.lock();                                                                 //calling the lock() spell that is inside the box object
    return "";                                                                  //avoiding the return of undefined
}

try{                                                                            //try block
    console.log(withBoxUnlocked());                                             //logging the withBoxUnlocked function
}
catch(e){
    if(e instanceof LockedBoxError){                                            //catching errors that are instances of class LockedBox
        console.log("The box is locked: first unlock then access");             //Error Message
    }
    else{
        throw e;                                                                //cathcing other errors that may arise.
    }
}
//-> ["Gold and Precious Stones", "I got it"]

/*CHAPTER 9: REGULAR EXPRESSIONS*/
//gotta know them very well if you want to be an effective programmer.
//they are a way of describing patterns in string data.
//Creating Regular Expressions.
let re1 = new RegExp("abc");                                                    //Two ways, this one uses the RegExp constructor: pattern written as a norma string.
let re2 = /abc/;                                                                //Pattern in between forward slashes.

//backslashes use.
let eighteenPlus = /eighteen\+/;                                                //backslashes before special characters that are meant to be part of the expression.

//TESTING FOR MATCHES
// test method.
console.log(/abc/.test("abcde"));                                               //-> true: test returns a boolean value always.
console.log(RegExp("abc").test("gigababc"));                                    //-> true: as long as there's an 'a' fol.by 'b' fol.by 'c' in a string test will return true.
console.log(re1.test("abcde"));                                                 //-> true: fol.by === my shorthand of followed by, lol.
console.log(/abc/.test("abxd"));                                                //-> false
console.log(re2.test("abdv"));                                                  //-> false

console.log(/[0123456789]/.test("in 1992"));                                    //-> true: putting [] between slashes means any number/character.
console.log(/[0-9]/.test("in 1992"));                                           //-> true

console.log(/\d/.test(1992));                                                   //-> true: /[0-9]/ is the same as /\d/: digit characters.
console.log(/\w/.test("wani"));                                                 //-> true: alphanumeric or simply word characters.
console.log(/\w/.test("[{]("));                                                 //-> false: no alpha numeric characters or simply word characters.
console.log(/\s/.test("w    in"));                                              //-> true: white space characters, tab in this case.
console.log(/\s/.test("win"));                                                  //-> false: no whitespace charachter.
console.log(/./.test("'/.09Hj44$"));                                            //-> true: any character except newline(\n).
console.log(/./.test("\n"));                                                    //-> false: new line character.

//we can also match dates.
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));                                 //true: date matched the specified formaton dateTime.
console.log(dateTime.test("jan-30-2003 15:20"));                                //false:string doest really match the format of dateTime.

let dateTime_ = /\w\w\w-\d\d-\d\d\d\d \d\d:\d\d:\d\d/;
console.log(dateTime_.test("jan-30-2003 15:20:58"));                            //-> true: matches the specified format of dateTime_.

//the not operator '!' doesnt work in regular expressions, we use "[^]" instead.
console.log(/[^abc]/.test("abc"));                                              //false:
console.log(/[^abc]/.test("123"));                                              //true: 123 doesnt match string pattern abc.

let notDateTime = /[^\d\d-\d\d-\d\d\d\d \d\d:\d\d]/;
console.log(notDateTime.test("jan-30-2003 15:20"));                             //true: a little confusing but true.

//binary test.
let notBinary = /[^01]/;                                                        //say we dont want binary input, or return value.
console.log(notBinary.test("1010001010"));                                      //-> false: the string is a binary string.
console.log(notBinary.test("1010002010"));                                      //-> true: string not a binary string.

//REPEATING PARTS OF A PATTERN
//when you want match a repeating pattern.

//the plus sign(+)
console.log(/'\d+'/.test("'123'"));                                             //-> true: there is a repeating pattern of digits in the string.
console.log(/'\d+'/.test("'1two3'"));                                           //-> false: because the is an alphanumeric value in the string: therefore the string is not a repeating pattern of digital characters.
console.log(/\d+/.test("1two3"));                                               //-> true: because we did not use the single quotes('') to denote that we are looking reaping pattern of digits.
console.log(/'\d'/.test("'1two3'"));                                            //-> false: because the string is not a repeating pattern of digital characters.
console.log(/\d/.test("1two3"));                                                //-> true: there is a at least one digital character.

//the asteric (*)
console.log(/'\d*'/.test("'onetwothree4'"));                                    //-> false: alphanumeric characters found 
console.log(/'\d*'/.test("'12w'"));                                             //-> false: alphanumeric character found
console.log(/'\d*'/.test("''"));                                                //-> true: empty string
console.log(/'\d*'/.test("'123'"));                                             //-> true: repeating digital pattern

//the question mark (?)
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbor"));                                         //-> true: ? is for alternative spellings
console.log(neighbor.test("neighbour"));                                        //-> true: u is here but we dont really care whether u is there or not, cause the show must go on.
console.log(neighbor.test("neighboor"));

let um = /Mu?hlekazi/;
console.log(um.test("Mhlekazi"));                                               //-> true: uyabona nje nawe.
console.log(um.test("Muhlekazi"));                                              //-> true

let kwa = /k?w?a?ntaba/;
console.log(kwa.test("ntaba"));                                                 //-> true
console.log(kwa.test("kantaba"));                                               //-> true
console.log(kwa.test("kwantaba"));                                              //-> true
//minor set back tho
console.log(kwa.test("wantaba"));                                               //-> true
console.log(kwa.test("wntaba"));                                                //-> true
console.log(kwa.test("antaba"));                                                //-> true: pros and cons bro, pros and cons.
    
//to indicate the number of times a pattern must occur, use curly braces: {no. of times}
let sukuTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;                           //{1,4} at least 1 time, at most 4 times.
console.log(sukuTime.test("1-30-2003 8:45"));                                   //-> true

//look...
console.log(/\d{1}-\d{2} \d{1}/.test("1-11"));                                  //-> true: space missing.
console.log(/\d{1}-\d{2} \d{1}/.test("1234443-11 1"));                          //-> true: this is confusing because its supposed \d{1} is supposed to say strictly 1 digit but  it return true.

//this how we actually become strict on expressions; we use ('')
console.log(/'\d{1}'/.test("'12'"));                                            //-> false: more than one digit.
console.log(/'\d{1}'/.test("'1'"));                                             //-> true: adheres to the ristriction.

//to avoid confusion do it like this.
let strictTest1 = /'\d{1,4}'/;
let strictTest2 = /'\d{3,}'/;

//strictTest1
console.log(strictTest1.test("'1'"));                                           //-> true: fits within the range.
console.log(strictTest1.test("'12345'"));                                       //-> false: exceeds the limit.

//strictTest2
console.log(strictTest2.test("'1'"));                                           //-> false: below the lower limit.
console.log(strictTest2.test("'123'"));                                         //-> true: fits the lower limit.
console.log(strictTest2.test("'12345566777889'"));                              //-> true: the upper limit is infinit.

let strictTest3 = /'\d{1,2}-\d{2}-\d{3}'/;

console.log(strictTest3.test("'1-11-111'"));                                    //-> true: adheres to the strict rule.
console.log(strictTest3.test("'1-1-111'"));                                     //-> false: does not adhere to the strict rule.

//GROUPING SUB-EXPRESSIONS
let cartoonCrying = /boo+(hoo+)+/i;                                             //that 'i' means the string test will be case insensitive.
console.log(cartoonCrying.test("Boohoohooooooo"));                              //-> true: there must be atleast one 'boo' and one 'hoo'.
console.log(cartoonCrying.test("booho"));                                       //-> false: missing 'o'.

//MATCHES AND GROUPS
//exec method (execute)
let match = /\d+/.exec("one two 100");                                          //exec returns an array object: and the array can be manipulated into whatever we want check my experiments.
match.groups = "colors";                                                        //my experiment: setting groups, I know it could be useful in the future but we'll see.
console.log(match);                                                             //->["100", index: 8, input: "one to 100", groups: "colors"]
console.log(match.index);                                                       //-> 8
console.log(match.input);                                                       //-> one two 100: returns the input.

//strings have a match method too(arrays and strings cousins??)
console.log("one two 100".match(/\d+/));                                        //if you leave out the + in /\d+/ you will only look at 1 of 100 and not the other two zeros

//my experiments.
console.log(match[0]);                                                          //-> 100
let newThing = {newthing: 101};                                                 //object.
match.push(newThing, "101");                                                    //adds an object newThing.
console.log(match);                                                             //-> returns the modified array.
match.index = 100;                                                              //changes the indedx value from 8 to 100.
console.log(match);                                                             //logs the array object.

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));                               //-> ["'hello'", "hello", index: 9, input: "she said 'hello'", groups: undefined]

//my experiments
console.log(quotedText.exec("she said 'hello'")[0]);                            //-> 'hello' : here we simply accessing the first element of the array.
console.log(quotedText.exec("she said 'hello'")[1]);                            //-> hello : the second element of the array.
console.log(quotedText.exec("she said 'hello'").index);                         //-> 9: where we found our hello.
console.log(quotedText.exec("she said 'hello'").input);                         //-> she said 'hello' : checking our input.

//when a group is not matched
console.log(/bad(ly)?/.exec("bad"));                                            //-> ["bad", undefined, index: 0, input: "bad", groups: undefined]
console.log(/bad(ly)?/.exec("badly"));                                          //-> ["bad", "ly", index: 0, input: "bad", groups: undefined]
console.log(/bad(ly)?/.exec("badl"));                                           //-> ["bad", undefined, index: 0, input: "badl", groups: undefined]

//when it is matched, only the last index is returned
console.log(/(\d)+/.exec("123"));                                               //-> ["123", "3", undefined, index: 0, input: "123", groups: undefined]

//THE DATE CLASS
console.log(new Date());                                                        //-> Teu Jul 21 2020 08:23:04 GMT+0200 (South African Standard Time)

//date changes accordingly
//we can also create an object for a certain date
console.log(new Date(2009, 11, 9));                                             //-> Wed Dec 09 2009 00:00:00 GMT+0200 (South African Standard Time)
console.log(new Date(2011, 10, 11, 11,11,11));                                  //-> Fri Nov 11 2011 11:11:11 GMT+0200 (South African Standard Time)
//notice that December in the 11th month: that zero index counting meaning Jan == month 0.
console.log(new Date(000, 00, 00, 00,00,00, 999));                              //-> Sun Dec 31 1899 00:00:00 GMT+0130 (South African Standard Time)

//Timestamp
//They are stored as the number of milliseconds that have elapsed since the start of 1970
console.log(new Date(2020, 06, 21).getTime());                                  //-> 1595282400000: this is the number of milliseconds that have elapsed since 01 Jan 1970.
console.log(new Date(1595282400000));                                           //-> :returns todays date.
//If you give the date object one argument, it is going to interprete it as a millisecond
console.log(new Date(10));                                                      //-> Thu Jan 01 1970 02:00:00 GMT+0200 (South African Standard Time): 02:00 Am because of the timezone.

//other methods of the Date() object
//getFullYear
console.log(new Date(2020, 06, 21).getFullYear());                              //-> 2020

//getMonth
console.log(new Date(2020, 06, 21).getMonth());                                 //-> 6: (7 - 1) zero index counting this mean July.

//getDay
console.log(new Date(2020, 06, 21).getDay());                                   //-> 2: Second day of the week, days do not use zero index counting.

//getDate
console.log(new Date(2020, 06, 21).getDate());                                  //-> 21: its the 21st of the month.

//getYear
console.log(new Date(2020, 06, 21).getYear());                                  //-> 120: gives (2020 - 1900): mostly useless unless you wanna know how many years have elapsed since 1900


//Creating a date object from a string.
function getDate(string){
    let [_, month, day, year] =                                                 // the underscore(_) is there to prevent the return of (or skip) the full match, remember exec returns an array with two elements(excluding index, input, and groups)
            /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);                         //regular expression and exec method for extracting the datefrom a string: DESTRUCTURING
    return new Date(year, month-1, day);                                        //then we use the date object to make a date not just a number.
}
console.log(getDate("1-30-2003"));                                              //-> Thu Jan 30 2003 00:00:00 GMT+0200 (South African Standard Time)
console.log(/(\d{1,2})-(\d{1,2})-(\d{4})/.exec("1-30-2003"));                   //-> ["1-30-2003", "1", "30", "2003", index: 0, input: "1-30-2003", groups: undefined]
//the first item of the array, we skip with the underscore(_),                             //-------- month:"1", day:"30", year:"2003".
//then  destructuring happens
//then plug the new values in the date object,
//then bang we got ourself a date, lol


//WORD AND STRING BOUNDERIES
// markers ^ and $ are used to enforce that the match must span the entire string.
// the caret(^) mathches the beggining of the string while the dollar sign matches the end.

console.log(/cat/.test("concatenate"));                                         //-> true: unbbounded
console.log(/\bcat\b/.test("concatenate"));                                     //-> false: bounded, \b means boundery
console.log(/\bcat\b/.test("cat"));                                             //-> true
console.log(/'cat'/.test("concatenate"));                                       //-> false: sorta has the same meaning as \b

//CHOICE PATTERNS
// we use the pipe character (|)

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 cows"));                                       //-> true
console.log(animalCount.test("2 chickens"));                                    //-> true
console.log(animalCount.test("0 cowchickens"));                                 //-> false

console.log(animalCount.exec("10 chickens"));                                   //-> ["10 chickens", "chicken", index: 0, input: "10 chickens", groups undefined]


//Backtracking
let back = /\b([01]+b|[\da-f]+h|\d+)\b/;                                        //

console.log(back.test("001"));                                                  //-> true
console.log(back.test("001b"));                                                 //-> true
console.log(back.test("012b8afh"));                                             //-> true
console.log(back.test("vnjd"));                                                 //-> false

//THE REPLACE METHOD
console.log("papa".replace("p", "m"));                                          //-> mapa: replace 'p' with 'm'
console.log("pama".replace("p", "m"));                                          //-> mama: replace 'p' with 'm'

console.log("ubrucodubro".replace(/[ou]/, "a"));                                //-> abrucudubru
console.log("ubrucodubro".replace(/[ou]/g, "a"));                               //-> abracadabra: 'g' means global, meanign a

//look...
console.log("Liskov, \tBarbra\nMcCarthy, \tJohn\nWadler, \tPhilip");            
//-> Liskov, Barbra
//-> McCarthy, John
//-> Wadler, Philip

console.log("Liskov, Barbra\nMcCarthy, John\nWadler, Philip"
        .replace(/(\w+), (\w+)/g, "$2\t $1"));                                  //$1: first Match, $2: Second Match, ....until $9, $& means the whole Match
//-> Babra Liskov
//-> John MacCarthy
//-> Philip Wadler

//passing a function rather than a string
let s = "the cia and the fbi";                                                  //input string
let rep = s.replace(/\b(cia|fbi)\b/g, str => str.toUpperCase());                //replace 'cia' and 'fbi' with uppercases, we get there by passing the toUpperCase() function rather than typing the replacements ourselves.
console.log(rep);                                                               //-> the CIA and the FBI

//more magick
let stock = "1 lemon, 2 cabbages, and 101 eggs";                                //input string
function minusOne(match, amount, unit){                                         //function minusOne(match: input string, amount: digit, unit: name of item).
    amount = Number(amount) - 1;                                                // amount - 1
    if(amount === 1){                                                           //if amount is equal to 1...
        unit = unit.slice(0, unit.length - 1);                                  //remove the 's', slice the string at string.length - 1: remove one character from the end of the string.
    }
    else if(amount === 0){                                                      //if amount is equal to 0...
        amount = "no";                                                          //instead of outputting 0 lemons; no lemons
    }
    return amount + " " + unit;                                                 //THIS COULD BE USEFUL IN A GROCERY APP.
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));                           //-> no lemons, 1 cabbage, and 100 eggs

let nna = "Names";
console.log(nna.slice(0, nna.length-1));                                        //-> Name: removes the last letter of the string

//GREED
//writing a function that removes comments from a piece of code using replace
function stripComments(code){
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");                            //   /  \/   \/  .* | \/  \*  [^]*  \*  \/  /g
}                                                                               //   inline comments| block comments(/*....*/)
console.log(stripComments("1 + /* 2 */3"));                                     //-> 1 + 3
console.log(stripComments("x = 10; //ten!"));                                   //-> x = 10;

//alternative to the greedy stripComments function above.
function nonGreedyStripper(code){                                               //non greedy variant of the stripComment function.
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");                           //  /  \/  \/  .*  |  \/  \*  [^]*?  \*  \/  /g
}                                                                               // in-line comments|  block comments(/*...*/)
console.log(nonGreedyStripper("1 /*a*/+/*b*/ 1"));                              //-> 1 + 1

//DYNAMICALLY CREATING RegExp OBJECTS
let name = "sandile";
let text = "Sandile the wizard of Toj.";
let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));                                      //-> _Sandile_ the wizard of Toj.

//what if there the name is 'deat+l[]rd'

let name_ = "dea+hl[]rd";
let text_ = "a teen named dea+hl[]rd?";                                         //regexp abover couldnt handle these, [] and ?

let escaped = name_.replace(/[\\[.+*?(){|^$]/g, "\\$&");                        //handling escaped characters
let regexp_ = new RegExp("\\b" + escaped + "\\b", "gi");                        //g: global, i: case insensitive
console.log(text_.replace(regexp_, "_$&_"));                                    //-> a teen named _dea+hl[]rd_?
console.log(escaped);

//THE SEARCH METHOD
console.log("   word".search(/\S/));                                            //-> 3: found non whitespace character at poition 3 of the string: like indexOf but for RegExp's.
console.log("  word".search(/\S/));                                             //-> 2: two spaces.
console.log(" word".search(/\S/));                                              //-> 1: one space.
console.log("word".search(/\S/));                                               //-> 0: fount it at position 0.
console.log("   ".search(/\S/));                                                //-> -1: -1 === false in JS, meaning there is no whitespace character in the string..

console.log("word and 1 number".search(/\d/));                                  //-> 9: found a digit character at index 9.
console.log("1 number and a word".search(/\d/));                                //-> 0: found a digit character at index 0.
console.log("1 number and a word".search(/umber/));                             //-> 3

//THE LASTINDEX PROPERTY
console.log("\n\n");                                                            //new line *2
let pattern = /y/g;                                                             //we are looking for 'y'.
pattern.lastIndex = 3;                                                          //start searching for y after index 3 of the string: remember we start counting from 0.
let match_ = pattern.exec("xyzzy");                                             //search on this string usiing the 'exec()' method.
console.log(match_.index);                                                      //-> 4: 'y' was found on index no. 4.
console.log(pattern.lastIndex);                                                 //-> 5: if the call is successful, the call to exec automatically updates the lastIndex property to point after the match.

//another try
console.log("\n");                                                              //new line: //->  
let oogle = /n/g;                                                               //search for n in the string that i will provide.
oogle.lastIndex = 0;                                                            //start from this index.
let qe = oogle.exec("danone");                                                  //donone.
console.log(qe.index);                                                          //-> 2: first 'n' from index 0.
console.log(oogle.lastIndex);                                                   //-> 3: if the call is a success, the call to exec automatically updates the lastIndex property to point after the match.

/*
 * The difference between the global and the sticky options is that, when sticky
 * is enabled, the match will succeed only if it starts directly at lastIndex,
 * whereas with global, it will search ahead for a position
 * where a match can start.
 */
let global = /abc/g;                                                            //g: global
console.log(global.exec("xyz abc"));                                            //-> ["abc", index: 4, input: "xyz abc",groups: undefined]
let sticky = /abc/y;                                                            //y: sticky
console.log(sticky.exec("xyz abc"));                                            //-> null

//using shared expression value for multiple exec calls causesprblems, since updates
//to the lastIndex property are automatic.
let digit = /\d/g;
console.log(digit.exec("here it is: 1"));                                       //-> ["1", index: 12, input: "here it is: 1", groups: undefined]
console.log(digit.exec("and now: 1"));                                          //-> null
//but
console.log(digit.exec("the digit is farther now :1"));                         //-> ["1", index: 26, input: "the digit is farther now :1", groups: undefined]

//the global, 'g' also changes the way match works on strings
console.log("Banana".match(/an/g));                                             //-> ["an", "an"]


//LOOPING OVER MATCHES
let input = "A string with 3 numbers in it... 42 and 88.";                      //input string
let number = /\b\d+\b/g;                                                        //looking for digits(repeating pattern), globlaly in a string
let match_1;
while(match_1 = number.exec(input)){
    console.log("Found", match_1[0], "at index", match_1.index);                //-> found 3 at index 14
}                                                                               //   found 42 at index 33
                                                                                //   found 88 at index 40

//PARSING AN INI FILE
function parseINI(string){
    let result = {};
    let section = result;
    string.split(/\r?\n/).forEach(line => {
        let match_2;
        if(match_2 = line.match(/^(\w+)\s?=\s?(.*)$/)){                         //match method: ^: start, $:end: word = any character except newline(\n): \s? there may be whitespace[my addition], this is looking for headers.
            section[match_2[1]] = match_2[2];
        }
        else if(match_2 = line.match(/^\[(.*)\]$/)){                            //match method: ^: boundary(start), $:boundary(end): [anycharacter except new line], [] means a new section in the INI file rules.
            section = result[match_2[1]] = {};
        }
        else if(!/^\s*(;.*)?$/.test(line)){                                     //if line is not a section or a header, the regular expression checks whether its a comment or an empty line.
            throw new Error("Line '" + line + "' is not valid.");               //when a line doesnt match any of the expected formats.
        }
    });
    return result;
}
console.log(parseINI(`
name=Vasilis
[address]
city=Tessaloniki`));                                                            //-> {name: "Vasilis", address: {city: "Tessaloniki"}}

//test the error
console.log(parseINI(`
name=Sandile
[address]
city=Toj
[Occupation]
Profession=JS Programmer
SkillLevel=Wizard
[other]
nickname=WizardofToj`));                                                        //-> {name: "Urika", address: {city: "Toj"}, Occupation: {Profession: "Js Programmer", SkillLevel: "Wizard"}, other: {nickname: "WizardofToj"}}

//International Characters
console.log(/🍎{3}/.test("🍎🍎🍎"));                                                //-> false: apples thati can not see
console.log(/🍎{3}/u.test("🍎🍎🍎"));                                               //-> true: when the u for Unicode is put
console.log(/<.>/.test("<🌹>"));                                                 //-> a rose emoji that i can not see here
console.log(/<.>/u.test("<🌹>"));                                                //-> true: for such characters, emojis and non Latin characters, add u, for Unicode for a non bogus behaviour.
//use \p to in a regular expression that must have the Unicode expression enables
console.log("----/\\\p{Property=Value}\/u-----\n");
console.log(/\p{Script=Greek}/u.test("α"));                                     //-> true
console.log(/\p{Script=Arabic}/u.test("α"));                                    //-> false
console.log(/\p{Alphabetic}/u.test("α"));                                       //-> true
console.log(/\p{Alphabetic}/u.test("!"));                                       //-> false

/*EXERCISES: CHPT 9*/
//9.1: car and cat
let tst1 = /cat|r/;
console.log(tst1.test("car"));                                                  //-> true
console.log(tst1.test("cat"));                                                  //-> true

//9.2: prop and pop
let tst2 = /pr?op/;
console.log(tst2.test("pop"));                                                  //-> true
console.log(tst2.test("prop"));                                                 //-> true

//9.3: ferret, ferry, ferrari
let tst3 = /ferre?t?y?a?r?i?/;
console.log(tst3.test("ferret"));                                               //-> true
console.log(tst3.test("ferry"));                                                //-> true
console.log(tst3.test("ferrari"));                                              //-> true

//9.4: any word ending with ious
let tst4 = /\w+ious/;
console.log(tst4.test("pious"));                                                //-> true
console.log(tst4.test("precious"));                                             //-> true
console.log(tst4.test("serious"));                                              //-> true
console.log(tst4.test("marvelous"));                                            //-> false
console.log(tst4.test("ious"));                                                 //-> false

//9.5: A whitespace character followed by a period, a comma, a colon or a semicolon
let tst5 = /\s\.\,\:?;?/;
console.log(tst5.test(" .,:"));                                                 //-> true
console.log(tst5.test(" .,;"));                                                 //-> true

//9.6: A word longer than six characters
let tst6 = /\w{6,}/;
console.log(tst6.test("ottffss"));                                              //-> true: more than 6 characters.
console.log(tst6.test("ottff"));                                                //-> false: less than six characters.
console.log(tst6.test("ottffs"));                                               //-> true: exactly 6 characters.

//9.7: A word without the letter e or E
console.log("\n");
let tst7 = /\w[^e]/i;                                                           //this one doesnt work as required, must look at the solutions
console.log(tst7.test("test"));//must be false
console.log(tst7.test("formula E")); //must be false
console.log(tst7.test("fast"));//must be true
console.log("\n we did this with a function");

function noE(string){
    if(!(/e/i.test(string))) return true;                                       //if ther is no e in the string return true
    else if(/e/i.test(string)) return false;                                    //if the is e on the string return false
}

console.log(noE("test"));                                                       //-> false
console.log(noE("fast"));                                                       //-> true
console.log(noE("formula E"));                                                  //-> false

//QOUTING STYLE
//first try
console.log("\nQuoting Style");
let quote = "MizRaIm said 'Ehlid this valley is Toj'";
let doublequote = quote.replace(/\'\w*.*\w?\'/, "\"$&\"");
let quote2 = "We happy you've finally made it here";
console.log(quote.match(/\'\w*.*\w?\'/));
console.log(quote2.match(/\w+\'\w+/));
console.log(doublequote);

//third attempt
let quote = "MizRaIm said 'Ehlid welcome to Toj, we're happy you've arrived'";
console.log(quote.replace(/\s'|'$/g, " \""));                                   //-> MizRaim said "Ehlid welcome to Toj, we're happy you've arrived "

//NUMBERS AGAIN
console.log(/cat/.test("cincatinate"));                                         //reminding myself: testing
console.log(".5".match(/\d+/));                                                 //reminding myself: matching                                            
console.log("-.5-e3".match(/\-?.?\d+-?\e?\d+?/i));                              //-> ["-.5-e3", index: 0, input: "-.5-e3", groups: undefined]
console.log("25E3".match(/\-?.?\d+-?\e?\d+?/i));                                //matches: ["25E3", index: 0, input: "25E3", groups: undefined]
console.log(".".match(/\-?.?\d+-?\e?\d+?/i));                                   //null: meaning the number can not be a dot alone

/*Modules*/

//improvised modules
const weekDay = function (){                                                    //Interface
    const names = ["Sunday", "Monday", "Teusday", "Wednesday", "Thursday",
        "Friday", "Saturday"];                                                  //names array
    return {
        name(number){ return names[number]; },                                  //responsible for returning the actual name of the day
        number(name){ return names.indexOf(name); }                             //returns the index when given say "Teusday" it will return 2, zero index remember.
    };
}();

console.log(weekDay.name(weekDay.number("Sunday")));                            //-> Sunday
console.log(weekDay.number(weekDay.name("Sunday")));                            //-> -1: meaning I didnt understand this code at this time, a little reading helps.
console.log(weekDay.number("Teusday"));                                         //-> 2: returns the index of the day from the 'names' array.
console.log(weekDay.name(4));                                                   //-> Thursday: takes in the index of the day, and returns the name of the day, from the 'names' array in the module.

//Evaluating data as code
const x = 1;
function evalAndReturnX(code){                                      
    eval(code);                                                                 //special method for evaluating strings as code: I suspect this is used in sand boxes.  
    return x;                                               
}
console.log(evalAndReturnX("var x = 2;"));                                       //-> 2
console.log(x);                                                                 //-> 1

//the Function constructor
let plusOne = Function("n", "return n + 1;");                                   
console.log(plusOne(4));                                                        //-> 5: this is because 4, 4 + 1

//CommonJS: Apparently modules dont work in browser.
const ordinal = require(["ordinal"]);
const {days, months} = require(["date-names"]);
    
exports.formatDate = function(date, format){
    return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
        if(tag === "YYYY") return date.getFullYear();
        if(tag === "M") return date.getMonth();
        if(tag === "D") return date.getDate();
        if(tag === "Do") return ordinal(date.getDate());
        if(tag === "dddd") return days[date.getDay()];
    });
};

const {formatDate} = require("./format-date");
console.log(formatDate(new Date(2017, 9, 13), "dddd the Do"));

//we also gonna skip chapter 11 for now.

//Chapter 12: A programming language
function parseExpression(program){                                              //interpreter of the our programming language Egg
    program = skipSpace(program);                                               //our language allows any amount of white space so we have to cut it..
    let match, expr;
    if(match = /^"([^"]*)/.exec(program)){                                      //..until we come across a string..
        expr = {type: "value", value: match[1]};
    }
    else if(match = /^\d+\b/.exec(program)){                                    //..a number..
        expr = {type: "value", value: Number(match[0])};
    }
    else if(match = /^[^\s(),#"]+/.exec(program)){                              //..or a word..
        expr = {type: "word", name: match[0]};
    }
    else{
        throw new SyntaxError("Unexpected syntax: " + program);                 //...and throw an error if it is something else: Syntax error isanother standard error type besides class Error.
    }
    return parseApply(expr, program.slice(match[0].length));                    //indirect recursion: parseExpression calling parseApply: (parseApply will call parseExpression youll see).
}
/******************************************************************************/
function skipSpace(string){                                                     //function for cutting white space between expressions.
    let first = string.search(/\S/);                                            //regular expression for finding non white space, when it finds whitespace it returns -1.
    if(first == -1) return "";                                                  //if there is whitespace found...
    return string.slice(first);                                                 //slice it.
}
/******************************************************************************/
function parseApply(expr, program){
    program = skipSpace(program);                                               //calling skipSpace.
    if(program[0] != "(" ){                                                     //if the next character in the program is not an opening parenthisis, this is not an application...
        return {expr: expr, rest: program};                                     //and parseApply returns the expression it was given.
    }
    
    program = skipSpace(program.slice(1));                                      //other wise it skips the opening parenthisis and...
    expr = {type: "apply", operator: expr, args: []};                           //creates a syntax tree object for this application.
    while(program[0] != ")" ){                                                  //while we havent come across a closing parenthisis.
        let arg = parseExpression(program);                                     //inderect recurtion: call to parseExpression to parse each argument until a closing prenthisis is found
        expr.args.push(arg.expr);                                               
        program = skipSpace(arg.rest);
        
        if(program[0] == ","){                                                  //when we come a cross a coma, skip it since we are looking for a closing parenthisis
            program = skipSpace(program.slice(1));
        }
        else if(program[0] != ")" ){                                            //if we never find the closing paranthisis
            throw new SyntaxError("Expected ',' or ')' ");                      //throw an error, telling the user we are expecting a closing parenthisis or a coma
        }
    }
    return parseApply(expr, program.slice(1));                                  //parseApply must call itself again to see if there is an opening parenthisis or not.
}

function parse(program){
    let {expr, rest} = parseExpression(program);                                //destructureing}}}}:
    if(skipSpace(rest).length > 0){                                             //part that verifies that parseApply has reached the end of the input string after parsing the èxpression
        throw new SyntaxError("Unexpected text after program");                 //thows this error when theres additional meaningless text (Eggs context, not JS).
    }
    return expr;
}

console.log(parse("+(a, 10)"));                                                 //{type: "apply", operator: {name: "+", type: "word"}, args[{type: "word", name: "a"}, {type: "value", value:10}]}
console.log(parse(">(x, 10)"));                                                 //{type: "apply", operator: {name: ">", type: "word"}, args[{type: "word", name: "x"}, {type: "value", value:10}]}

//THE EVALUATOR
const specialForms = Object.create(null);                                       //creation of an object called 'specialForms' reminds me of that game object in the other dimension
function evaluate(expr, scope){
    if(expr.type == "value"){                                                   //expression type: value..if this is the case.
        return expr.value;                                                      // return the value as is.
    }
    else if(expr.type == "word"){                                               //expression type: word.
        if(expr.name in scope){                                                 //if the expression is type word and is in scope.
            return scope[expr.name];                                            //return scopes expression name.
        }
        else{                                                                   //otherwise...
            throw new ReferenceError(
                    `Undefined binding: ${expr.name}`);                         //throw an error.
        }
    }
    else if(expr.type == "apply"){                                              //expression type: apply.
        let {operator, args} = expr;                                            //destructuring}}}}: if the expression is of type apply: look at the 8th line of 'parseApply' to see the structure of the syntax tree.
        if(operator.type == "word" &&
        operator.name in specialForms){                                         //if the name of the operator is in the object called 'specialForm'.
            return specialForms[operator.name](expr.args, scope);               //
        }
        else{
            let op = evaluate(operator, scope);                                 //recursion: evasluate calls itself: evaluating the operator, its type and whether it is in scope or not.
            if(typeof op == "function"){                                        //if the oprator is a function.
                return op(...args.map(arg => evaluate(arg, scope)));            //return the operator with its arguments and recursively call evaluate to evaluate the arguments.
            }
            else{
                throw new TypeError("Applying a non-function.");                //if operator is not a function, throw an error.
            }
        }
    }
}

//SPECIAL FORMS (Object)
//if
specialForms.if = (args, scope) => {                                            //remembr this king of function when creating the mainloop function on the other dimention
    if(args.length != 3){                                                       //when the arguments to 'if' are less than 3...
        throw new SyntaxError("Wrong number of args to if");                    //throw an error. Eggs 'if' statement expects exactly 3 arguments, no more no less.
    }
    else if(evaluate(args[0], scope) !== false){                                //if evaluation of the 1st arg is anything but false...
        return evaluate(args[1], scope);                                        //evaluate the second argument.
    }
    else{
        return evaluate(args[2], scope);                                        //otherwise evaluate the third one
    }
};                                           

//while
specialForms.while = (args, scope) => {
    if(args.length != 2){                                                       //if arguments are not 2, throw an error, a syntax error.
        throw new SyntaxError("Wrong number of args for while");
    }
    while(evaluate(args[0], scope) !== false){                                  //while the evaluation of the first argument is not false, evaluate the second argument
        evaluate(args[1], scope);
    }                       
    return false;                                                               //since undefined does not exist in Egg, and its more miningful than nothing at all.
    
};

//do
specialForms.do = (args, scope) => {
    let value = false;
    for(let arg of args){                                                       //evaluate all args
        value = evaluate(arg, scope);                                           //value of 'value' comes from the last arg to be evaluated
    }
    return value;
};

//define
specialForms.define =(args, scope) => {
    if(args.length != 2 || args[0].type != "word"){                             //arguments must be two, and the type of the exoression must that of word.
        throw new SyntaxError("Incorrect use of define");                       //if that is not the case throw an error
    }
    let value = evaluate(args[1], scope);
    scope[args[0].name] = value;
    return value;                                                               //returns a value that was assigned just like JS's '='(equal to)
};

//THE EMVIRONMENT
const topScope = Object.create(null);
topScope.true = true;                                                           //since the are only two boolean values we dont need special syntax for them.
topScope.false = false;

//now we can evaluate simple expressions
let prog = parse(`if(true, false, true)`);                                      //an experssion that negates a Boolean value.
console.log(evaluate(prog, topScope));                                          //false

//basically for basic ariythmetic lol
for(let op of ["+", "-", "*", "/", "==", "<", ">"]){
    topScope[op] = Function("a, b", `return a ${op} b;`);
}

//and a way to output the values
topScope.print = value => {
    console.log(value);
    return value;
};

//to parse programs in a fresh scope
function run(program){
    return evaluate(parse(program), Object.create(topScope));
}

//now lets run something in our new language
run(`
do (define(total, 0),                                                           
    define(count, 1),
    while(<(count, 11),
        do (define(total, +(total, count)),
            define(count, +(count, 1)))),
    print(total))
`);

//Functions
specialForms.fun = (args, scope) => {
    if(!args.length){
        throw new SyntaxError("Functions must have a body");
    }
    let body = args[args.length - 1];
    let params = args.slice(0, args.length - 1).map(expr => {
        if(expr.type != "word"){
            throw new SyntaxError("Parameter names must be words");
        }
        return expr.name;
    });
    return function(){
        if(arguments.length != params.length){
            throw new TypeError("Wrong number of arguments");
        }
        let localScope = Object.create(scope);
        for(let i = 0; i < arguments.length; i++){
            localScope[params[i]] = arguments[i];
        }
        return evaluate(body, localScope);
    };
};

//Egg program: function addition
run(`
do(define(plusOne, fun(a, +(a, 1))),
    print(plusOne(10)))
`);

//Egg program: function exponents
run(`
do(define(pow, fun(base, exp, 
    if(==(exp, 0),1,*(base,pow(base, -(exp, 1)))))),
    print(pow(2, 10)))
`); 

/*Exercises CHPT 12*/

//adding the array function
topScope.array1 = (...element) => {                                             //array1: means first try at creating function array
    let array = [];
    array.push(element);
    return array;
};

topScope.array = (...elements) =>{
    let array = [];
    for(let element of elements){
        array.push(element);
    }
    return array;
};

run(`print(array(1,2,3))`);
run(`
do(
    define(numbers, array(1,2,3)),
    print(numbers))
`);                                                                             //-> [1, 2, 3]

topScope.getLength1 = array => {                                                //this attempt at getting the length of the array doesnt work
    return topScope.array.length;
};

//finding the length of the array

topScope.getLength = (arr) => {
    let len = arr.length;                                                       //lol this is basically cheating(compared to the cheating from the solutions this is slavery lol)
    return len;
};

run(`
do(
    define(numeru, array(1,2,3)),
    print(getLength(numeru)))       
`);                                                                             //-> 3: prints the length

//finding the nth element of the array
topScope.getElement = (array, n) => {
    if(n > array.length - 1){
        throw new SyntaxError("Out of bounds");
    }
    return array[n];
};

run(`
do(
define(num, array(12, 13, 14)),
print(getElement(num, 2)))
`);

console.log("#This is a coment.c".match(/^#\w+.*\.$/));                         //attempt at modifying skipspace
//the code below is from the solutions
function skipSpace(string) {
  let skippable = string.match(/^(\s|#.*)*/);
  return string.slice(skippable[0].length);
}

console.log(parse("# hello\nx"));
// → {type: "word", name: "x"}

console.log(parse("a # one\n   # two\n()"));
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}

//set: also from the solutions
specialForms.set = (args, env) => {
  if (args.length != 2 || args[0].type != "word") {
    throw new SyntaxError("Bad use of set");
  }
  let varName = args[0].name;
  let value = evaluate(args[1], env);

  for (let scope = env; scope; scope = Object.getPrototypeOf(scope)) {
    if (Object.prototype.hasOwnProperty.call(scope, varName)) {
      scope[varName] = value;
      return value;
    }
  }
  throw new ReferenceError(`Setting undefined variable ${varName}`);
};

run(`
do(define(x, 4),
   define(setx, fun(val, set(x, val))),
   setx(50),
   print(x))
`);
// → 50
run(`set(quux, true)`);
// → Some kind of ReferenceError


/*Chapter 13*/
function talksAbout(node, string){                                              //this function looks for a string in each and every node in the body of the page
    if(node.nodeType == Node.ELEMENT_NODE){                                     //if the node is an Element
        for(let i = 0; i < node.childNodes.length; i++){                        //lets look at all the child nodes
            if(talksAbout(node.childNodes[i], string)){                         //at each node lets look for the string
                console.log(node.childNodes[5]);
                return true;                                                    // when we find the string at a node return true
                
            }
        }
        return false;
    }
    else if(node.nodeType === Node.TEXT_NODE){
        return node.nodeValue.indexOf(string) > -1;                             //this (String) gave me a lot of trouble, had to be (string) instead, pay attention to this nxt time
    }
}

console.log(talksAbout(document.body, "book"));                                 //true: this looks like basic scraping in javasript

//Finding Elemnts
let link = document.body.getElementsByTagName("a")[0];
console.log(link.href);
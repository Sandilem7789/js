/* 
 * script
 */
function time(){                                                                  //function time
    let timeButton = document.getElementById("time");
    console.log("Hey");
};

function light(){
    document.body.style.background = "repeating-linear-gradient(grey, whitesmoke, lightgrey) fixed";
    document.clock.display.style.background = "white";
    document.clock.display.style.color = "black";
}

function dark(){
    document.body.style.background = "repeating-linear-gradient(black, brown, black) fixed";
    document.clock.display.style.background = "black";
    document.clock.display.style.color = "white";
}

let bombTimer = setTimeout(() => {
    console.log("BOOM");
    let date = Date.now();
    console.log(date);
}, 500);

let ticks = 0;
let min = 59;
let hour = 23;

let clock = setInterval(() => {
    let sec = ticks++;
    
    if(ticks === 60) {
        min++;
        ticks = 0;
        if(min === 60){
            hour++;
            min = 0;
            if(hour === 24){
                hour = 0;
            }
        }
    }
    
    document.clock.display.value = `${hour}:${min}:${sec}`;
    if(ticks === Infinity){
        clearInterval(clock);  
    }
}, 1000);


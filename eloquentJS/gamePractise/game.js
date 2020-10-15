/* Dipapadi */

/*Reading a level*/
class Level{
    constructor(plan){
        let rows = plan.trim().split("\n").map(l => [...l]);
        this.height = rows.length;
        this.width = rows[0].length;
        this.startActors = [];
        
        this.rows = rows.map((row, y) => {
            return row.map((ch, x) => {
                let type = levelChars[ch];
                if(typeof type === "string"){
                    return type;
                }
                this.startActors.push(
                        type.create(new Vec(x, y), ch));
                return "empty";
            });
        });
    }
}

/*Tracking The State of a Running Game*/
class State{
    constructor(level, actors, status){
        this.level = level;
        this.actors = actors;
        this.status = status;
    }
    static start(level){
        return new State(level, level.startActors, "playing");
    }
    get player(){
        return this.actors.find(a => a.type == "player");
    }
    
}

/*Container for two-dimensional values*/
class Vec{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    plus(other){
        return new Vec(this.x + other.x, this.y + other.y);
    }
    times(factor){
        return new Vec(this.x * factor, this.y * factor);
    }
}

/*Player*/
class Player{
    constructor(pos, speed){
        this.pos = pos;
        this.speed = speed;
    }
    get type(){
        return "player";
    }
    static create(pos){
        return new Player(pos.plus(new Vec(0, -0.5)), new Vec(0, 0));
    }
}
Player.prototype.size = new Vec(4, 0.6);                                        //vertical slab

/*Ball*/
ballSpeed = 10;

class Ball{
    constructor(pos, speed){
        this.pos = pos;
        this.speed = speed;
    }
    get type(){
        return "ball";
    }
    static create(pos){
        return new Ball(pos, new Vec(0, 2));
    }
}
Ball.prototype.size = new Vec(0.8, 0.8);

/*Opponent*/
opponentSpeed = 5;

class Opponent{
    constructor(pos, speed){
        this.pos = pos;
        this.speed = speed;
    }
    get type(){
        return "opponent";
    }
    static create(pos){
        return new Opponent(pos.plus(new Vec(0, -0.5)), new Vec(0, 0));
    }
    
    update(time, state){
        let ball = state.ball;
        let speed = (ball.pos.x < this.pos.x ? -1 : 1) * time * opponentSpeed;
        let newPos = new Vec(this.pos.x + speed, this.pos.y);
        if(state.level.touches(newPos, this.size, "wall")) return this;
        else return new Opponent(newPos);  
    }
    collide(state){
        let ball = state.ball;
        ball.speed * -1;
        return new State(state.level, state.actors, state.status);
    }
}
Opponent.prototype.size = new Vec(4, 0.6);

const levelChars = {
    "." : "empty", "#" : "wall", "@" : Player,
    "O": Opponent, "b" : Ball
};

let simpleLevelPlan = 
`
#########################################################
#...........................O...........................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#...........................b...........................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#.......................................................#
#...........................@...........................#
#########################################################
`;

let simpleLevel = new Level(simpleLevelPlan);                                   //testing if there are bugsor nah
console.log(`${simpleLevel.width} by ${simpleLevel.height}`);                   //this is to see if it works or no

/*Helper function for creating elements*/
function elt(name, attrs, ...children){
    let dom = document.createElement(name);
    for(let attr of Object.keys(attrs)){
        dom.setAttribute(attr, attrs[attr]);
    }
    for(let child of children){
        dom.appendChild(child);
    }
    return dom;
}

/*Display*/
class DOMDisplay{
    constructor(parent, level){
        this.dom = elt("div", {class: "game"}, drawGrid(level));
        this.actorLayer = null;
        parent.appendChild(this.dom);
    }
    clear(){
        this.dom.remove();
    }
}

var scale = 20;

function drawGrid(level){
    return elt("table", {
        class: "background",
        style: `width: ${level.width * scale}px`
    },
    ...level.rows.map(row => elt("tr", {style: `height: ${scale}px`},           //create Table Rows
        ...row.map(type => elt("td", {class: type})))));                        //in every Table Row(tr), create Table Data(td)
}

function drawActors(actors){
    return elt("div", {}, ...actors.map(actor => {
        let rect = elt("div", {class: `actor ${actor.type}`});
        rect.style.width = `${actor.size.x * scale}px`;
        rect.style.height = `${actor.pos.y * scale}px`;
        rect.style.left = `${actor.pos.x * scale}px`;
        rect.style.top = `${actor.pos.y * scale}px`;
        return rect;
    }));
}

DOMDisplay.prototype.syncState = function(state){
    if(this.actorLayer) this.actorlayer.remove();
    this.actorLayer = drawActors(state.actors);
    this.dom.appendChild(this.actorLayer);
    this.dom.className = `game ${state.status}`;
    //I dont think we need scrollPlayer but will see
};

/*Motion and Collision*/
Level.prototype.touches = function(pos, size, type){
    var xStart = Math.floor(pos.x);
    var xEnd = Math.ceil(pos.x + size.x);
    var yStart = Math.floor(pos.y);
    var yEnd = Math.ceil(pos.y + size.y);
    
    for(var y = yStart; y < yEnd; y++){
        for(var x = xStart; x < xEnd; x++){
            let isOutside = x < 0 || x >= this.width ||
                            y < 0 || y >= this.height;
            let here = isOutside ? "wall" : this.rows[y][x];                    //row instead of rows: caused an error
            if(here == type) return true;
        }
    }
    return false;
    
};

State.prototype.update = function(time, keys){
    let actors = this.actors.map(actor => actor.update(time, this, keys));
    let newState = new State(this.level, actors, this.status);
    
    if(newState.status != "playing") return newState;
    let ball = newState.ball;
    let player = newState.player;
    console.log(actors);
    if(this.level.touches(player.pos, player.size, "ball")){
        //code goes here
        ball.speed * -1;
    }
    for(let actor of actors){
        if(actor != player && overlap(actor, player)){
            newState = actor.collide(newState);
        }
    }
    return newState;
};

function overlap(actor1, actor2){
    return actor1.pos.x + actor1.size.x > actor2.pos.x &&
            actor1.pos.x < actor2.pos.x + actor2.size.x &&
            actor1.pos.y + actor1.size.y > actor2.pos.y &&
            actor1.pos.y < actor2.pos.y + actor2.size.y;
}

Ball.prototype.collide = function(state){
    let player = state.player;
    let opponent = state.opponent;
    let newPos = this.pos.plus(this.speed.times(time));
    if(!state.level.touches(newPos, this.size, "wall")){
        return new Lava(newPos, this.speed, this.reset);
    }
    else if(state.level.touches(newPos, this.size, "opponent")){
        return new Ball(newPos, this.speed.times(-1));
    }
    else if(state.level.touches(newPos, this.size, "player")){
        return new Ball(newPos, this.speed.times(-1));
    }
};

/*Constants*/
const playerXSpeed = 7;

Player.prototype.update = function(time, state, keys){
    let xSpeed = this.speed.y + time;
    let ySpeed = 0;
    if(keys.ArrowLeft) xSpeed -= playerXSpeed;
    if(keys.ArrowRight) xSpeed += playerXSpeed;
            
    let pos = this.pos;
    let movedX = pos.plus(new Vec(xSpeed * time, 0));
    if(!state.level.touches(movedX, this.size, "wall")){
        pos = movedX;
    }
    
    let movedY = pos.plus(new Vec(0, ySpeed * time));
    if(!state.level.touches(movedY, this.size, "wall")){
        pos = movedY;
    }
    else if(keys.ArrowUp && ySpeed > 0){
        ySpeed = -jumpSpeed;
    }
    else{
        ySpeed = 0;
    }
    return new Player(pos, new Vec(xSpeed, ySpeed));
};

/*Listens to the state of Arrow Keys*/
function trackKeys(keys){
    let down = Object.create(null);
    function track(event){
        if(keys.includes(event.key)){
            down[event.key] = event.type == "keydown";
            event.preventDefault();
        }
    }
    window.addEventListener("keydown", track);
    window.addEventListener("keyup", track);
    return down;
}

const arrowKeys = trackKeys(["ArrowLeft", "ArrowRight", "ArrowUp",
    "ArrowDown","Escape"]);

/*Function for Animation*/
function runAnimation(frameFunc){
    let lastTime = null;
    function frame(time){
        if(lastTime != null){
            let timeStep = Math.min(time - lastTime, 100);                    //value of p changes when Escape is pressed(Exercise 16.2)
            if(frameFunc(timeStep) === false) return;                           //animation stops if the value of frame func is false.
        }
        lastTime = time;
        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
}


/*Use async and promises*/
function runLevel(level, Display){
    let display = new Display(document.body, level);
    let state = State.start(level);
    let ending = 1;
    
    return new Promise(resolve => {
        runAnimation(time => {
            state = state.update(time, arrowKeys);
            display.syncState(state);
            if(state.status == "playing"){
                return true;
            }
            else if(ending > 0){
                ending -= time;
                return true;
            }
            else{
                display.clear();
                resolve(state.status);
                return false;
            }
        });
    });
}

/*Game over: Exercise 16.1*/

async function runGame(plans, Display){
    for(let level = 0; level < plans.length;){
        
        
        let status = await runLevel(new Level(plans[level]), Display);
        
        //Exersize 16.1: Game Over
        if(status === "lost"){
            lives--;
            if(lives <= 0){
                console.log("GAME OVER!!");
                level = 0;
                lives = 3;
            }
        }
        //end of excersize
        
        if(status == "won"){
            console.log(`Congrats you have completed level ${level + 1}`);
            level++;
        };
    }
}
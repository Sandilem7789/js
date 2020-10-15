/* 
 *We added this script on "Curves" subsection
 */
bind = (id) =>{
    return document.querySelector(id).getContext("2d");
};

let canvases = document.querySelector("#canvases");
canvases.style.width = "510px";
canvases.style.background = "darkgrey";

/*Drawing on Canvas C1: Quadratic Curve*/
let cx1 = bind("#c1");
cx1.beginPath();
cx1.fillStyle = "blue";
cx1.lineWidth = 1.5;
cx1.moveTo(10, 90);
cx1.quadraticCurveTo(250, 100, 500, 90);                                        //control:(250, 100) goal:(500, 90) top curve
cx1.lineTo(500, 250);
cx1.quadraticCurveTo(250, 220, 10, 250);                                        //control:(250, 220) goal:(10, 250) bottom curve
cx1.lineTo(10, 250);
cx1.closePath();
cx1.fill();
cx1.stroke();

/*Drawing on Canvas C2: Bezier Curve*/
let cx2 = bind("#c2");
cx2.beginPath();
cx2.fillStyle = "blue";
cx2.lineWidth = 1.5;
cx2.moveTo(10, 190);
cx2.bezierCurveTo(300, 0, 240, 300, 500, 10);                                      //control1:(10, 10) control2:(90, 10) control3:(50, 90)
cx2.lineTo(500, 300);
cx2.lineTo(10, 300);
cx2.closePath();
cx2.fill();
cx2.stroke();

/*Drawing on Canvas C3: Arc*/
let cx3 = bind("#c3");
cx3.beginPath();
cx3.arc(250, 250, 40, 0, 7);                                                      //center:(50, 50) radius:(40) angle:(0, 7)
cx3.arc(350, 250, 40, 0, 0.5 * Math.PI);
cx3.arc(280, 250, 70, 2, Math.PI);
cx3.fillStyle = "whitesmoke";
cx3.fill();
cx3.stroke();

/*Drawing a PieChart*/
const results = [
    {name: "Satisfied", count: 1043, color: "lightblue"},
    {name: "Neutral", count: 563, color: "lightgreen"},
    {name: "Unsatisfied", count: 510, color: "pink"},
    {name: "No comment", count: 175, color: "silver"}
];

let cx4 = bind("#c4");
let total = results.reduce((sum, {count}) => sum + count, 0);                   //reduce is an array function for adding up all numbers in the array, starting from index 0

//starting at the top
let currentAngle = -0.5 * Math.PI;
let n = 90;
for(let result of results){
    n += 30;
    let sliceAngle = (result.count / total) * 2 * Math.PI;
    cx4.beginPath();
    cx4.arc(150, 150, 150,                                                      //center:(100, 100) redius:(100)
    currentAngle, currentAngle + sliceAngle);
    currentAngle += sliceAngle;
    cx4.lineTo(150, 150);
    cx4.fillStyle = result.color;
    cx4.fill();
    cx4.font = "30px Georgia";
    cx4.fillStyle = "fucshia";
    cx4.fillText(`${result.name}: ${result.count}`, result.count / total, 250 + n + currentAngle);
}


/*Text*/
let cx5 = bind("#c5");
cx5.font = "80px  Georgia ";
cx5.fillStyle = "fucschia";
cx5.fillText("GAME OVER", 10, 60);
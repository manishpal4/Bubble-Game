function createbubble(){
    var clutter= "";

for(var i=1 ; i<=189 ; i++){
    var rm = Math.floor(Math.random()*10)
   clutter += `<div class="bubble">${rm}</div>`
               
}
document.querySelector("#lowerdiv").innerHTML= clutter;
}

var timer=60;
function runtimer(){
    var timeinterval= setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timer").textContent =timer;
        }
        else{
            clearInterval(timeinterval);
            document.querySelector("#lowerdiv").innerHTML = "GAME OVER";
        }
    },1000);
}

score=0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreboard").textContent=score;
}

var hit;
function getHit(){
    hit=Math.floor(Math.random()*10);
    document.querySelector("#newhit").textContent = hit;
}

document.querySelector("#lowerdiv")
.addEventListener("click", function(dets){
var clickedNumber = Number(dets.target.textContent);
if(clickedNumber === hit){
    increaseScore();
    getHit();
    createbubble();
}
});
runtimer();
getHit();
createbubble();

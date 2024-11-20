let timer = 60;

let score = 0;
let hitrn = 0;

function increaseScore(){
    score+= 10;
    document.querySelector("#valueScore").textContent = score;
}


function getHitval(){
     hitrn = Math.floor(Math.random()*10)
    document.querySelector("#strikeval").textContent = hitrn;
}

function makeBubble(){
    let clutter = "";

for(let i = 1; i<=114; i++){
    let random = Math.floor(Math.random() * 10)
    clutter += `<div class="bubble">${random}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
 let timerint = setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
    }
    else{
        
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over! Have a good day.</h1>`
    }
    
 },1000)
}

document.querySelector("#pbtm").addEventListener("click", function(details){
 let clickedval = Number(details.target.textContent);
 if(clickedval === hitrn){
    increaseScore();
    makeBubble();
    getHitval();

 }
});


runTimer()
makeBubble();
getHitval();
// increaseScore();
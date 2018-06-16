var easy=document.querySelector("#easy");
var medium=document.querySelector("#medium");
var hard=document.querySelector("#hard");
var score=document.querySelector("#score");
var word=document.querySelector("#word");
var answer=document.querySelector("#answer");

var array;
var easyArray;
var mediumArray;
var hardArray;

easy.addEventListener("click",easy_mode);
medium.addEventListener("click",medium_mode);
hard.addEventListener("click",hard_mode);

word.innerHTML="select difficulty";

function countdown(){
  var i=2;
  word.innerHTML=3;
  var interval=setInterval(count,1000);
  function count(){
    word.innerHTML=i;
    i-=1;
    if(i<0){
      clearInterval(interval);
      gameStart();
    }
  }
}

function easy_mode(event){
  medium.classList.toggle('active',false);
  hard.classList.toggle('active',false);
  easy.classList.toggle('active',true);
  answer.select();
  array=easyArray;
  countdown();
}
function medium_mode(event){
  easy.classList.toggle('active',false);
  hard.classList.toggle('active',false);
  medium.classList.toggle('active',true);
  answer.select();
  array=mediumArray;
  countdown();
}
function hard_mode(event){
  easy.classList.toggle('active',false);
  medium.classList.toggle('active',false);
  hard.classList.toggle('active',true);
  answer.select();
  array=hardArray;
  countdown();
}
function gameStart(){
  word.innerHTML="play";
}
var easy=document.querySelector("#easy");
var medium=document.querySelector("#medium");
var hard=document.querySelector("#hard");
var score=document.querySelector("#score");
var word=document.querySelector("#word");
var answer=document.querySelector("#answer");
var timeline=document.querySelector(".progress-bar");

var progressHTMl=document.querySelector(".progress");
var progressHTMLvalue=progressHTMl.innerHTML;

var array;

var interval1;
var interval2;

var finalScore;

easy.addEventListener("click",easy_mode);
medium.addEventListener("click",medium_mode);
hard.addEventListener("click",hard_mode);

word.innerHTML="select difficulty";


function easy_mode(event){
  clearInterval(interval1);
  clearInterval(interval2);
  progressHTMl.innerHTML=progressHTMLvalue;
  timeline=document.querySelector(".progress-bar");
  medium.classList.toggle('active',false);
  hard.classList.toggle('active',false);
  easy.classList.toggle('active',true);
  answer.select();
  array=easyArray;
  answer.value="";
  score.innerHTML="0";
  countdown();
}
function medium_mode(event){
  clearInterval(interval1);
  clearInterval(interval2);
  progressHTMl.innerHTML=progressHTMLvalue;
  timeline=document.querySelector(".progress-bar");
  easy.classList.toggle('active',false);
  hard.classList.toggle('active',false);
  medium.classList.toggle('active',true);
  answer.select();
  array=mediumArray;
  answer.value="";
  score.innerHTML="0";
  countdown();
}
function hard_mode(event){
  clearInterval(interval1);
  clearInterval(interval2);
  progressHTMl.innerHTML=progressHTMLvalue;
  timeline=document.querySelector(".progress-bar");
  easy.classList.toggle('active',false);
  medium.classList.toggle('active',false);
  hard.classList.toggle('active',true);
  answer.select();
  array=hardArray;
  answer.value="";
  score.innerHTML="0";
  countdown();
}

function countdown(){
  var i=2;
  word.innerHTML=3;
  interval1=setInterval(count,1000);
  function count(){
    word.innerHTML=i;
    i-=1;
    if(i<0){
      clearInterval(interval1);
      gameStart();
      return;
    }
    return;
  }
}

function gameStart(){
  finalScore=0;
  word.innerHTML=(array[Math.floor((Math.random()*array.length))]).toLowerCase();
  var perc=0;
  interval2=setInterval(count,20);
  function count(){
    perc+=1
    timeline.style.width=perc+"%";
    if(perc==102){
      progressHTMl.innerHTML=progressHTMLvalue;
      timeline=document.querySelector(".progress-bar");
      if(answer.value.toLowerCase()!=(word.innerHTML).toLowerCase()){
        clearInterval(interval2);
        gameEnd();
        return;
      }
      finalScore++;
      score.innerHTML=finalScore;
      word.innerHTML=(array[Math.floor((Math.random()*array.length))]).toLowerCase();
      answer.value="";
      progressHTMl.innerHTML=progressHTMLvalue;
      timeline=document.querySelector(".progress-bar");
      perc=0;
    }
    return;
  }
  return;
}
function gameEnd(){
  word.innerHTML="try again";
  answer.value="";
  window.getSelection().empty();
}

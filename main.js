var easy=document.querySelector("#easy");
var medium=document.querySelector("#medium");
var hard=document.querySelector("#hard");
var score=document.querySelector("#score");
var word=document.querySelector("#word");
var answer=document.querySelector("#answer");

easy.addEventListener("click",easy_mode);
medium.addEventListener("click",medium_mode);
hard.addEventListener("click",hard_mode);

// easy.classList.toggle('active');
// medium.classList.toggle('active');
// hard.classList.toggle('active');

function easy_mode(event){
  medium.classList.toggle('active',false);
  hard.classList.toggle('active',false);
  easy.classList.toggle('active',true);
}
function medium_mode(event){
  easy.classList.toggle('active',false);
  hard.classList.toggle('active',false);
  medium.classList.toggle('active',true);
}
function hard_mode(event){
  easy.classList.toggle('active',false);
  medium.classList.toggle('active',false);
  hard.classList.toggle('active',true);
}
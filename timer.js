let seconds=0;
let minutes=0;
let hours=0;

function startTimer(){
  seconds++;

  if(seconds/60===1){
    seconds=0;
    minutes++;

    if(minutes/60===1){
      minutes=0;
      hours++;
    }
  }

  document.getElementById('clock').innerHTML=hours+':'+minutes+':'+seconds;

}

let timer=window.setInterval(startTimer,1000);



function answer(){
  const question = document.querySelectorAll('.item');
  const answer = document.querySelectorAll('.box');

  if(question && answer && answer[6].style.backgroundColor===question[0].style.backgroundColor && answer[7].style.backgroundColor===question[1].style.backgroundColor && answer[8].style.backgroundColor===question[2].style.backgroundColor && answer[11].style.backgroundColor===question[3].style.backgroundColor &&answer[12].style.backgroundColor===question[4].style.backgroundColor &&answer[13].style.backgroundColor===question[5].style.backgroundColor && answer[16].style.backgroundColor===question[6].style.backgroundColor && answer[17].style.backgroundColor===question[7].style.backgroundColor && answer[18].style.backgroundColor===question[8].style.backgroundColor){
    document.getElementById('win').play();
    swal(" Congratulations!!🥳 | | Clicks You Used:  "+ x +" | | "+ " You time is :  "+ hours + ":" + minutes+":" + seconds);
    window.clearInterval(timer);  
    }
}

let x=0
function points(){
  x=x+1;
}
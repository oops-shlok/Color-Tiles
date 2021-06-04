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

window.setInterval(startTimer,1000);


//function movementMechanism(swap){
  const swapTop= +swap-5;
  const swapBottom=+swap+5;
  const swapLeft=+swap-1;
  const swapRight=+swap+1;

  let check_grids= new Array(swapTop,swapBottom,swapLeft,swapRight);
  check_grids.forEach((box)=>{
    if (document.getElementById(String(box)).style.backgroundColor==""){
      document.getElementById(String(box)).style.backgroundColor= document.getElementById(swap).style.backgroundColor;
      document.getElementById(swap).style.backgroundColor="";
    }
  })
//
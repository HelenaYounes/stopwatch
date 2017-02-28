var startbutton;
var startInterval;
var onLoad = function(){

  startbutton = document.querySelector('.start');
  startbutton.addEventListener('click', start);

  var buttonstop = document.querySelector('.stop');
  buttonstop.addEventListener('click', stop);
}

function increment(){
  var object= document.querySelector('.counter');
  object.innerHTML++;
}
function stop(){
  clearInterval(startInterval);
}

function start(){
  stop();
  startInterval = setInterval(increment, 1000);
}
window.addEventListener('load', onLoad);
//array interval a clearer;

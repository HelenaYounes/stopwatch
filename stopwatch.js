var start;
var onLoad = function(){

  start = setInterval(increment, 1000);
  var buttonstop = document.querySelector('.stop');
  buttonstop.addEventListener('click', stop);
}

function increment(){
  var object= document.querySelector('.counter');
  object.innerHTML++;
}
function stop(){
  clearInterval(start);
}
window.addEventListener('load', onLoad);

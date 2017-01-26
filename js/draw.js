var canvas = document.getElementById('drawing-board');
canvas.width = 1200;
canvas.height = 850;
var ctx = canvas.getContext('2d');

window.onload = function () {

  //Apply the background color to the buttons
  for(var i = 0; i < document.getElementsByClassName('btn-color').length; i++) {
    document.getElementsByClassName('btn-color')[i].style.background = document.getElementsByClassName('btn-color')[i].value;
  }

  document.getElementById('choice').style.background = document.getElementById('colorChoice').value;
  draw();
}

var choiceButton = document.getElementById('colorChoice').addEventListener('click', function () {
  ctx.fillStyle = document.getElementById('colorChoice').value;
});

document.getElementById('button-area').addEventListener('click', function(e) {
  changeColor(e.target);
});

var choiceButtonChange = document.getElementById('colorChoice').addEventListener('change', function () {
  ctx.fillStyle = document.getElementById('colorChoice').value;
  document.getElementById('choice').style.background = document.getElementById('colorChoice').value;
  draw();
});

function draw () {
  ctx.fillStyle = document.getElementById('colorChoice').value;
  ctx.fillRect(10,10,50,50);
}

function changeColor(elem) {
  ctx.fillStyle = elem.value;
  document.getElementById('choice').style.background = elem.value;
}

(function clear () {
  document.getElementById('clear-button').addEventListener('click', function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
})();

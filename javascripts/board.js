// document.addEventListener("DOMContentLoaded", function(event) {

window.onload = function() {

  // setup
  canvas = document.getElementById("myCanvas")
  ctx = canvas.getContext("2d")
  speed = 5
  positionX = 10



  // create food
  function makeFood(x, y, xs, ys, color) {
    ctx.fillStyle = color
    ctx.fillRect(x, y, xs, ys) // x, y, sizex, size y
  }


  // create snake
  function snakeUnit(x, y, xs, ys, color) {
    ctx.fillStyle = color
    ctx.fillRect(x, y, xs, ys) // x, y, sizex, size y
  }

  // move snake
  function move(piece) {
    position += speed
  }


  // // add to snake length
  // function growSnake(x, y, xs, ys, color) {
  //   // add 1 snakeUnit to existing snakeUnit
  //   ctx.fillStyle = color
  //   // conditional: depending on direction of movement
  //   // append to last snakeUnit + 20
  //   ctx.fillRect(x, y, xs, ys) // x, y, sizex, size y
  //
  // }










  // call functions

  makeFood(90, 60, 20, 20, 'blue')
  snakeUnit(positionX, 10, 20, 20, 'green')
  // growSnake(30, 10, 20, 20, 'green')
  // growSnake(50, 10, 20, 20, 'green')
  // move()









}


// end of document load
// }) // end of document load

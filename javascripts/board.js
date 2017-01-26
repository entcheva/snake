document.addEventListener("DOMContentLoaded", function(event) {

  var canvas = document.getElementById("myCanvas")
  var ctx = canvas.getContext("2d")

  function makeFood(x, y, xs, ys, color) {
    ctx.fillStyle = color
    ctx.fillRect(x, y, xs, ys) // x, y, sizex, size y
  }

  function makeSnakeUnit(x, y, xs, ys, color) {
    ctx.fillStyle = color
    ctx.fillRect(x, y, xs, ys) // x, y, sizex, size y
  }

  function growSnake(x, y, xs, ys, color) {
    // add 1 makeSnakeUnit to existing makeSnakeUnit
    ctx.fillStyle = color
    // conditional: depending on direction of movement
    // append to last snakeUnit + 20
    ctx.fillRect(x, y, xs, ys) // x, y, sizex, size y

  }












  makeFood(90, 60, 20, 20, 'blue')
  makeSnakeUnit(10, 10, 20, 20, 'green')
  growSnake(30, 10, 20, 20, 'green')
  growSnake(50, 10, 20, 20, 'green')


})

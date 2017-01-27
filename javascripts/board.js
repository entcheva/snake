window.onload = function() {
  var keys = {
    37 : 'left',
    38 : 'up',
    39 : 'right',
    40 : 'down'
  };

  speed = 20
  scale = 20
  // positionX = 10
  // positionY = 10

  // setup
  canvas = document.getElementById("myCanvas") // ideally we would create canvas in js
  ctx = canvas.getContext("2d")

  // // make new objects
  // snake = new Snake()
  // food = new Food()

  // fill obejcts with values

  // snake.ctx.fillStyle = color
  // snake.ctx.fillRect(x, y, xs, ys)

  // call all functions
  food(90, 60, scale, scale, 'blue')
  snake(positionX, positionY, scale, scale, 'green')
  move(snake)

  // redraw the frame
  setInterval(move, 50)

// end of window.onload
} // end of window.onload



/*******************************************************************************/


// at the beginning (or end) clear the canvas
// clearRect() ?

// save the canvas state each time a frame is drawn

// draw the actual frame & content

// move snake
// move the position of the current snake unit over based on keypress

// create food
function food(x, y, xs, ys, color) {
  ctx.fillStyle = color
  ctx.fillRect(x, y, xs, ys) // x, y, sizex, size y
}

// create snake
function snake(x, y, xs, ys, color) {
  ctx.fillStyle = color
  ctx.fillRect(x, y, xs, ys) // x, y, sizex, size y
}

function move() {
  positionX = positionX + speed
  positionY = positiony + speed
}











// update method
// setInterval() ?


// // add to snake length
// function growSnake(x, y, xs, ys, color) {
//   // add 1 snake to existing snake
//   ctx.fillStyle = color
//   // conditional: depending on direction of movement
//   // append to last snake + 20
//   ctx.fillRect(x, y, xs, ys) // x, y, sizex, size y
//
// }

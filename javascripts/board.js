window.onload = function() {

  canvas = document.getElementById("myCanvas") // ideally we would create canvas in js
  ctx = canvas.getContext("2d")

  snake = new Snake()
  food = new Food()

  // food(90, 60, 20, 20, 'blue')
  // call render
  food.position(food.x, food.y, 20, 20, 'blue')
  snake.position(snake.x, snake.y, snake.xs, snake.ys, 'red')
  snake.move()
  snake.eat()


} // end of window.onload







// ctx.drawImage(food, 25, 25)




































/*******************************************************************************/

// draw, render, draw, render, draw, render, etc

// at the beginning (or end) clear the canvas // clearRect() ?
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

}

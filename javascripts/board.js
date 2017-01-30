window.onload = function() {

  canvas = document.getElementById("myCanvas") // ideally we would create canvas in js
  ctx = canvas.getContext("2d")

  snake = new Snake()
  food = new Food()




  // call functions
  food.position(food.x, food.y, food.sizeX, food.sizeY, 'blue')
  snake.position(snake.x, snake.y, snake.sizeX, snake.sizeY, 'green')
  snake.move()

  setInterval(food.respawn, 100)
  // setInterval(snake.grow, 300)


} // end of window.onload



// if (
//   ((snake.x + snake.sizeX + 20) === food.x || (snake.x + snake.sizeX - 20) === food.x)
//   &&
//   ((snake.y + snake.sizeY + 20) === food.x || (snake.y + snake.sizeY - 20) === food.x)
// )

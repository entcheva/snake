window.onload = function() {

  canvas = document.getElementById("myCanvas")
  ctx = canvas.getContext("2d")

  snake = new Snake()
  snake2 = new Snake2()
  food = new Food()

  // call functions
  food.position(food.x, food.y, food.sizeX, food.sizeY, 'blue')
  snake.position(snake.x, snake.y, snake.sizeX, snake.sizeY, 'green')
  snake2.position(snake2.x, snake2.y, snake2.sizeX, snake2.sizeY, 'red')
  snake.move()
  snake2.move()


  setInterval(snake.grow, 300)
  setInterval(snake2.grow, 300)
  
  setInterval(food.respawn, 300)

} // end of window.onload

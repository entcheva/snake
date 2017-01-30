window.onload = function() {

  canvas = document.getElementById("myCanvas") // ideally we would create canvas in js
  ctx = canvas.getContext("2d")

  snake = new Snake()
  food = new Food()


  // call functions
  food.position(food.x, food.y, food.sizeX, food.sizeY, 'blue')
  snake.position(snake.x, snake.y, snake.sizeX, snake.sizeY, 'red')
  snake.move()
  // snake.eat()


} // end of window.onload

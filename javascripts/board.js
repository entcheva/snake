window.onload = function() {

  canvas = document.getElementById("myCanvas") // ideally we would create canvas in js
  ctx = canvas.getContext("2d")

  snake = new Snake()
  food = new Food()
  this.sprite = new Image()
  this.sprite.src = 'sprite.svg'


  // call functions
  food.position(food.x, food.y, food.sizeX, food.sizeY, 'blue')
  snake.position(snake.x, snake.y, snake.sizeX, snake.sizeY, 'green')
  snake.move()

  setInterval(snake.grow, 300)
  setInterval(food.respawn, 300)


} // end of window.onload

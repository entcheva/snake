function Snake() {
  this.sizeX = 20
  this.sizeY = 20
  this.speed = 50

  // set min/max location, lock x/y coordinates to grid
  this.x = Math.round((Math.random()*(280-0)+0)/20)*20
  this.y = Math.round((Math.random()*(280-0)+0)/20)*20

  // make a snake
  Snake.prototype.position = function(x, y, sizeX, sizeY, color) {
    ctx.fillStyle = color
    ctx.fillRect(x, y, sizeX, sizeY)
  }

  var up
  var down
  var left
  var right

  // move snake
  Snake.prototype.move = function () {
    document.addEventListener('keydown', (key) => {

      if (key.which === 38) { // up
        clearInterval(right)
        clearInterval(down)
        clearInterval(left)
        up = setInterval(snake.moveUp, 100)
      } else if (key.which === 40) { // down
        clearInterval(up)
        clearInterval(right)
        clearInterval(left)
        down = setInterval(snake.moveDown, 100)
      } else if (key.which === 39) { // right
        clearInterval(up)
        clearInterval(down)
        clearInterval(left)
        right = setInterval(snake.moveRight, 100)
      } else if (key.which === 37) { // left
        clearInterval(up)
        clearInterval(down)
        clearInterval(right)
        left = setInterval(snake.moveLeft, 100)
      }

      // redraw food at new location
      if ((snake.x === food.x) && (snake.y === food.y)) {
        food.x = Math.round((Math.random()*(280-0)+0)/20)*20
        food.y = Math.round((Math.random()*(280-0)+0)/20)*20
        ctx.fillStyle = 'blue'
        ctx.fillRect(food.x, food.y, 20, 20)
        // ctx.fillRect(snake.x, snake.y, 20, 40)
      }

      // grow snake
      // make a snake array & append new square to it



    }) // end eventlistener function
  } // end move function



Snake.prototype.moveUp = function () {
  let oldy = snake.y
  snake.y -= 20
  ctx.clearRect(snake.x, oldy, 20, 20)
  snake.position(snake.x, snake.y, 20, 20, 'red')
}


Snake.prototype.moveDown = function () {
  let oldy = snake.y
  snake.y += 20
  ctx.clearRect(snake.x, oldy, 20, 20)
  snake.position(snake.x, snake.y, 20, 20, 'red')
}

Snake.prototype.moveLeft = function () {
  let oldx = snake.x
  snake.x -= 20
  ctx.clearRect(oldx, snake.y, 20, 20)
  snake.position(snake.x, snake.y, 20, 20, 'red')
}

Snake.prototype.moveRight = function () {
  let oldx = snake.x
  snake.x += 20
  ctx.clearRect(oldx, snake.y, 20, 20)
  snake.position(snake.x, snake.y, 20, 20, 'red')
}







  // Snake.prototype.eat = function () {
  //   if ((snake.x === food.x) && (snake.y === food.y)) {
  //     snake.sizeX += 20
  //   }
  // }




} // end Snake function

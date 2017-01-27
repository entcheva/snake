function Snake() {

  var s

  this.x = 10
  this.y = 10
  this.speed = 50


  Snake.prototype.position = function(x, y, xs, ys, color) {
    ctx.fillStyle = color
    ctx.fillRect(x, y, xs, ys)
  }

  Snake.prototype.move = function () {
    document.addEventListener('keydown', (key) => {
      if (key.which === 38) { // up
        let oldy = snake.y
        snake.y -= 20
        ctx.clearRect(snake.x, oldy, 20, 20)
        snake.position(snake.x, snake.y, 20, 20, 'red')
      } else if (key.which === 40) { // down
        let oldy = snake.y
        snake.y += 20
        ctx.clearRect(snake.x, oldy, 20, 20)
        snake.position(snake.x, snake.y, 20, 20, 'red')
      } else if (key.which === 39) { // right
        let oldx = snake.x
        snake.x += 20
        ctx.clearRect(oldx, snake.y, 20, 20)
        snake.position(snake.x, snake.y, 20, 20, 'red')
      } else if (key.which === 37) { // left
        let oldx = snake.x
        snake.x -= 20
        ctx.clearRect(oldx, snake.y, 20, 20)
        snake.position(snake.x, snake.y, 20, 20, 'red')
      }
    }) // end eventlistener function
  } // end move function










} // end Snake function

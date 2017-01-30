function Snake2() {
  this.sizeX = 20
  this.sizeY = 20
  this.speed = 50
  var up
  var down
  var left
  var right
  var body


  // set min/max location, lock x/y coordinates to grid
  this.x = Math.round((Math.random()*(280-0)+0)/20)*20
  this.y = Math.round((Math.random()*(280-0)+0)/20)*20
  this.body = [[0, 0]]

  // make a snake2
  Snake2.prototype.position = function(x, y, sizeX, sizeY, color) {
    ctx.fillStyle = color
    ctx.fillRect(x, y, sizeX, sizeY)
  }

  // move snake2
  Snake2.prototype.move = function () {
    document.addEventListener('keydown', (key) => {
      if (key.which === 87) { // up
        clearInterval(right)
        clearInterval(down)
        clearInterval(left)
        up = setInterval(snake2.moveUp, 300)
      } else if (key.which === 83) { // down
        clearInterval(up)
        clearInterval(right)
        clearInterval(left)
        down = setInterval(snake2.moveDown, 300)
      } else if (key.which === 68) { // right
        clearInterval(up)
        clearInterval(down)
        clearInterval(left)
        right = setInterval(snake2.moveRight, 300)
      } else if (key.which === 65) { // left
        clearInterval(up)
        clearInterval(down)
        clearInterval(right)
        left = setInterval(snake2.moveLeft, 300)
      }
    }) // end eventlistener function
  } // end move function



/****************************************************************/
  // move functions for eventListener
  Snake2.prototype.moveUp = function () {
    let oldy = snake2.y
    snake2.y -= 20
    ctx.clearRect(snake2.x, oldy, snake2.sizeX, snake2.sizeY)
    snake2.position(snake2.x, snake2.y, snake2.sizeX, snake2.sizeY, 'green')
  }

  Snake2.prototype.moveDown = function () {
    let oldy = snake2.y
    snake2.y += 20
    ctx.clearRect(snake2.x, oldy, snake2.sizeX, snake2.sizeY)
    snake2.position(snake2.x, snake2.y, snake2.sizeX, snake2.sizeY, 'green')
  }

  Snake2.prototype.moveLeft = function () {
    let oldx = snake2.x
    snake2.x -= 20
    ctx.clearRect(oldx, snake2.y, snake2.sizeX, snake2.sizeY)
    snake2.position(snake2.x, snake2.y, snake2.sizeX, snake2.sizeY, 'green')
  }

  Snake2.prototype.moveRight = function () {
    let oldx = snake2.x
    snake2.x += 20
    ctx.clearRect(oldx, snake2.y, snake2.sizeX, snake2.sizeY)
    snake2.position(snake2.x, snake2.y, snake2.sizeX, snake2.sizeY, 'green')
  }


} // end Snake2 function

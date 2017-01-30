function Food() {
  this.sizeX = 20
  this.sizeY = 20

  // set min/max location, lock x/y coordinates to grid
  this.x = Math.round((Math.random()*(280-0)+0)/20)*20
  this.y = Math.round((Math.random()*(280-0)+0)/20)*20

  // make food
  Food.prototype.position = function(x, y, sizeX, sizeY, color) {
    ctx.fillStyle = color
    ctx.fillRect(x, y, sizeX, sizeY)
  }

  // redraw food at new location
  Food.prototype.respawn = function () {
    // debugger
    // console.log('snake X position', snake.x + snake.sizeX)
    // console.log('snake Y position', snake.y + snake.sizeY)
    // console.log('food X position', food.x)
    // console.log('food Y position', food.y)
    if (
      ((snake.x + snake.sizeX + 20) === food.x || (snake.x + snake.sizeX - 20) === food.x)
      &&
      ((snake.y + snake.sizeY + 20) === food.y || (snake.y + snake.sizeY - 20) === food.y)
    ) {
      // if ((snake.x === food.x) && (snake.y === food.y)) {
      snake.grow()
  
      food.x = Math.round((Math.random()*(280-0)+0)/20)*20
      food.y = Math.round((Math.random()*(280-0)+0)/20)*20
      ctx.fillStyle = 'blue'
      ctx.fillRect(food.x, food.y, 20, 20)
    }
  }


  // Food.prototype.respawn = function () {
  //   // debugger
  //   if ((snake.x === food.x) && (snake.y === food.y)) {
  //     food.x = Math.round((Math.random()*(280-0)+0)/20)*20
  //     food.y = Math.round((Math.random()*(280-0)+0)/20)*20
  //     ctx.fillStyle = 'blue'
  //     ctx.fillRect(food.x, food.y, 20, 20)
  //   }
  // }





} // end Food function

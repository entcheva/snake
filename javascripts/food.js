

function Food() {

  // this.x = this.rando(10, 20)
  this.x = Math.floor(Math.random() * (280 - 0 + 1)) + 0
  this.y = Math.floor(Math.random() * (280 - 0 + 1)) + 0

  Food.prototype.position = function(x, y, xs, ys, color) {
    ctx.fillStyle = color
    ctx.fillRect(x, y, xs, ys)
  }

  // food should not appear on square where snake is


}

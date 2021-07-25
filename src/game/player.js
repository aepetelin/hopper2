const player = function (p5, h) {
  this.size = 30
  this.floor = h - 1
  this.surface = this.floor
  this.p5 = p5
  this.x = 50
  this.y = this.floor - this.size / 2
  this.xVelocity = 1
  this.yVelocity = 0
  this.speed = 0.1
  this.maxSpeed = 4
  this.bounce = 0.4
  this.color = p5.color
  this.color = p5.color(100, 254, 180)
}

player.prototype.keyPressed = function () {
  console.log('[DEBUG] player', this.y + this.size / 2, this.surface)
  if (this.p5.keyCode === 32 && Math.abs(this.y + this.size / 2 - this.surface) < 5) {
    this.jump()
  }
}

player.prototype.jump = function () {
  this.yVelocity = -3
}

player.prototype.center = function () {
  return this.x + this.size / 2
}

player.prototype.move = function () {
  if (this.yVelocity < 0.01) {
    if (this.p5.keyIsDown(this.p5.LEFT_ARROW)) {
      if (this.xVelocity >= -this.maxSpeed) {
        this.xVelocity -= this.speed
      }
    } else if (this.p5.keyIsDown(this.p5.RIGHT_ARROW)) {
      this.xVelocity += this.speed
      if (this.xVelocity >= this.maxSpeed) {
        this.xVelocity = this.maxSpeed
      }
    }
  }

  this.x += this.xVelocity;
  this.y += this.yVelocity;
  this.gravity();
  this.xVelocity *= 0.95; // friction

}

player.prototype.gravity = function () {
  if (this.y + this.size / 2 < this.surface) {
    this.yVelocity += 0.1;
    return
  }
  this.y = this.surface - this.size / 2
  this.yVelocity = this.yVelocity * this.bounce * -1
}

player.prototype.draw = function () {
  this.p5.push()

  this.p5.strokeWeight(1);
  this.p5.fill(this.color)
  this.p5.circle(this.x, this.y, this.size)

  // ...
  this.p5.pop()
}

export default player
import levelFactory from './levelFactory'
import player from './player'

const controller = function(p5, w, h) {
  this.p5 = p5
  this.posX = 50
  this.width = w || 1000
  this.height = h || 400
  this.factory = new levelFactory(p5, this.width, this.height)
  this.isPlaying = false
  this.isGameOver = false
  this.level = this.factory.createLevel(0)

  this.player = new player(p5, this.height)
}

controller.prototype.update = function () {
  if (!this.isPlaying) {
    return
  }
  this.level.update()

  const collision = this.getCollisionY(this.player, this.level)
  if (collision != null) {
    this.player.surface = collision
  } else {
    this.player.surface = this.player.floor
  }
  // console.log('[DEBUG] collision', collision)

  this.player.move()

}

controller.prototype.getCollisionY = function (player, level) {
  for (let obj of level.objects.filter(p => Math.abs(p.pos.x - player.x) < 500)) {
    const deltaX = Math.abs(obj.center() - player.center())
    if (deltaX < obj.w / 2) {
      // console.log('[DEBUG] obj.y', obj.pos.y - obj.h)
      const surface = obj.pos.y - obj.h
      const deltaY = surface - (player.y + player.size / 2)
      // console.log('[DEBUG] deltaY', deltaY)
      if (deltaY < 1 && deltaY > 0) {
        return surface
      }
    }
  }
  return null
}



controller.prototype.keyPressed = function () {
  this.player.keyPressed()
}

controller.prototype.draw = function () {
  if (!this.isPlaying) {
    return
  }
  this.level.draw()
  this.player.draw()
  if (this.level.isFinished() && !this.isGameOver) {
    this.gameOver()
  }
}

controller.prototype.play = function () {
  this.isPlaying = true
}

controller.prototype.gameOver = function () {
  this.p5.textFont('monospace')
  this.p5.textAlign(this.p5.CENTER, this.p5.CENTER)
  this.p5.textSize(60)
  this.p5.fill(150, 150, 150)
  this.p5.text('GAME OVER', this.width / 2, this.height / 2);
  this.isPlaying = false
}

export default controller
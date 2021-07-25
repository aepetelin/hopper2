const level = function (p5, {name, objects}) {
  this.p5 = p5
  this.name = name
  this.objects = objects
  this.speed = -1.5
}

level.prototype.update = function () {
  if (this.isFinished()) {
    return
  }
  for (let obj of this.objects) {
    obj.pos.x += this.speed
  }
}

level.prototype.draw = function () {
  if (this.isFinished()) {
    return
  }
  this.p5.background(220)
  for (let obj of this.objects) {
    obj.draw()
  }
}

level.prototype.isFinished = function () {
  return this.objects[this.objects.length - 1].pos.x < 400
}

export default level
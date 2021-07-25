export const block = function (p5, x, y, w, h) {
  this.p5 = p5
  this.pos = {x, y}
  this.w = w
  this.h = h
}

block.prototype.draw = function () {
  this.p5.push()
  this.p5.rect(this.pos.x, this.pos.y - this.h, this.w, this.h)
  this.p5.pop()
}

block.prototype.center = function () {
  return this.pos.x + this.w / 2
}





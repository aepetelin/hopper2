import { levelMaps } from './levelMaps'
import level from './level'
import { block } from './blocks'

const levelFactory = function (p5, width, height) {
  this.p5 = p5
  this.width = width | 1000
  this.height = height | 400
  this.blockWidth = 80
  this.levels = [
    {name: 'level one', objects: this.createObjects(levelMaps[0].objects)},
    {name: 'level two', objects: this.createObjects(levelMaps[1].objects)}
  ]
}

levelFactory.prototype.createObjects = function (levelMap) {
  // console.log('[DEBUG] levelMap', levelMap)
  const levelObjects = []
  const yStep = this.height / ((levelMap[0].length | 1) - 1)

  console.log('[DEBUG] yStep', yStep)

  for (let x = 0; x < levelMap.length; x++) {
    for (let y = 0; y < levelMap[x].length; y++) {
      const cell = levelMap[x][y]
      const xPos = x * this.blockWidth
      const yPos = y * yStep
      let obj

      // console.log('[DEBUG] cell', cell)

      switch (cell) {
        case 1:
          obj = new block(this.p5, this.width + xPos, this.height - yPos, this.blockWidth, yStep)
          // console.log('[DEBUG] new obj', obj)
          break
        default:
          break
      }
      if (obj) {
        levelObjects.push(obj)
      }
    }
  }
  // console.log('[DEBUG] level objects', levelObjects)
  return levelObjects
}

levelFactory.prototype.createLevel = function (n) {
  // console.log('[DEBUG] levels', this.levels)
  return new level(this.p5, this.levels[n | 0])
}

export default levelFactory
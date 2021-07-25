import * as _p5 from 'p5'
import controller from './controller'

let gameController

let init = (w, h, callback) => {
  return (p5) => {
    gameController = new controller(p5, w, h)
    gameController.isPlaying = true

    p5.setup = () => {
      p5.createCanvas(w || 1000, h || 400)
    }

    p5.draw = () => {
      gameController.update()
      gameController.draw()
    }

    p5.keyPressed = () => {
      gameController.keyPressed()
    }

    callback(gameController)
  }
}

export const P5 = function (w, h, callback) {
  const fn = init(w, h, callback)
  return new _p5(fn)
}

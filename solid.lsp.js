

class Rectangle {
  constructor (width, height) {
    this._width = width
    this._height = height
  }

  get width () {
    return this._width
  }

  get height () {
    return this._height
  }

  set width (val) {
    this._width = val
  }

  set height (val) {
    this._height = val
  }

  get Area () {
    return this._width * this._height
  }

  toString () {
    return `${this._width} * ${this._height}`
  }
}

class Square extends Rectangle {
  constructor (lineLength) {
    super(lineLength, lineLength)
  }
  set width (val) {
    this._width = this._height = val
  }

  set height (val) {
    this._width = this._height = val
  }


}


let use =function(re){
    let width = re._width
    re.width = 4
    console.log(`Expected area of ${10 * width}  ` + `got ${re.Area}`);
}

let rc = new Rectangle(2,3)
use(rc)

let sq = new Square(3)
use(sq)
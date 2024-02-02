let aggregation = (baseClass, ...mixins) => {
  class base extends baseClass {
    constructor (...args) {
      super(...args)
      mixins.forEach(mixin => {
        copyProps(this,( new mixin))
      })
    }
  }

  let copyProps = (target, source) => {
    Object.getOwnPropertyNames(source)
      .concat(Object.getOwnPropertySymbols(source))
      .forEach(prop => {
        if (
          !prop.match(
            /^(?:constructor | prototype | arguments | caller | name | bind | call | apply | toString | length)$/
          )
        ) {
          Object.defineProperty(
            target,
            prop,
            Object.getOwnPropertyDescriptors(source, prop)
          )
        }
      })
  }

  mixins.forEach(mixin => {
    copyProps(base.prototype, mixin.prototype)
    copyProps(base, mixin)
  })
  return base
}

class Document {}

class Machine {
  constructor () {
    if (this.constructor.name === 'Machine') {
      throw new Error('Machine is abstract!')
    }
  }

  print (doc) {}
  fax () {}
  scan () {}
}

class MultifunctionPrinter extends Machine {
  print () {}
  fax () {}
  scan () {}
}

class NoImplementationError extends Error {
  constructor (name) {
    let msg = `${name} is not implemented!`
    super(msg)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this.NoImplementationError)
    }
  }
}

class OldFashionedPrinter extends Machine {
  print (doc) {}
  fax () {}
  scan () {
    throw new NoImplementationError('OldFashionedPrinter.scan')
  }
}

class Printer {
  constructor () {
    if (this.constructor.name === 'Printer')
      throw new Error('Printer is abstract!')
  }

  print () {}
}

class Scanner {
  constructor () {
    if (this.constructor.name === 'Scanner')
      throw new Error('Scanner is abstract!')
  }

  scan () {}
}

class Photocopier extends aggregation(Printer, Scanner) {
  print () {}

  scan () {}
}

let printer = new OldFashionedPrinter()
printer.fax()

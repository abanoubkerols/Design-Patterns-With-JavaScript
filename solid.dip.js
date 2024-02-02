let Relationship = Object.freeze({
  parent: 0,
  child: 1,
  sibling: 2
})

class Person {
  constructor (name) {
    this.name = name
  }
}

class RelationshipBrowser {
  constructor () {
    if (this.constructor.name === 'RelationshipBrowser') {
      throw new Error('RelationshipBrowser is abstract!')
    }
  }
  findAllChildrenOf (name) {}
}

class Relationships extends RelationshipBrowser {
  constructor () {
    super()
    this.data = []
  }

  addParentAndChild (parent, child) {
    this.data.push({
      from: parent,
      type: Relationship.parent,
      to: child
    })
    this.data.push({
      from: child,
      type: Relationship.child,
      to: parent
    })
  }

  findAllChildrenOf (name) {
    return this.data
      .filter(r => r.from.name === name && r.type === Relationship.parent)
      .map(r => r.to)
  }

  findAllParentOf (name) {
    return this.data
      .filter(r => r.from.name === name && r.type === Relationship.child)
      .map(r => r.to)
  }
}


let p0 = document.createElement('p')
let p1 = document.createElement('p')


class Research {
  constructor (browser, input) {
    for (let p of browser.findAllChildrenOf(input)) {
      p0.innerHTML +=  `${input} has a child named ${p.name} <br>`
    }

    for (let c of browser.findAllParentOf(input)) {
      p1.innerHTML+= `${input} has a parent named ${c.name} <br>`
    }
  }
}

let div = document.createElement('div')
let input = document.createElement('input')


div.appendChild(input)
document.body.appendChild(div)
document.body.appendChild(p0)
document.body.appendChild(p1)


setTimeout(()=>{
  
let parent = new Person(input.value)
let child1 = new Person('Chris')
let child2 = new Person('Matt')
let rels = new Relationships()
rels.addParentAndChild(parent, child1)
rels.addParentAndChild(parent, child2)

new Research(rels, parent.name)
new Research(rels, child1.name)
new Research(rels, child2.name)

}, 5000)
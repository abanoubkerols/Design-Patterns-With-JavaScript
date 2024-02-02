let Size = Object.freeze({
  small: 'small',
  medium: 'medium',
  large: 'large',
  huge: 'huge'
})

let Color = Object.freeze({
  red: 'red',
  green: 'green',
  blue: 'blue'
})

class Product {
  constructor (name, color, size) {
    this.name = name
    this.color = color
    this.size = size
  }
}

class ProductFilter { 
  filterByColor (product, color) {
    return product.filter(p => p.color === color)
  }

  filterBySize (product, size) {
    return product.filter(p => p.size === size)
  }

  filterBySizeAndColor (products, size, color) {
    return products.filter(p => p.size === size && p.color === color)
  }
}

let apple = new Product('Apple', Color.green, Size.small)
let tree = new Product('Tree', Color.green, Size.large)
let house = new Product('House', Color.blue, Size.large)

let products = [apple, tree, house]

let pf = new ProductFilter()

console.log(`Green product (old) : `)

for (let p of pf.filterByColor(products, Color.green)) {
  console.log(`=> ${p.name} is green`)
}

class ColorSpecification {
  constructor (color) {
    this.color = color
  }

  isSatisfied (item) {
    return item.color === this.color
  }
}

class SizeSpecification {
  constructor (size) { 
    this.size = size
  }

  isSatisfied (item) {
    return item.size === this.size
  }
}

class BetterFilter {
  filter (item, spec) {
    return item.filter(x => spec.isSatisfied(x))
  }
}

class AndSpecification {
  constructor (...specs) {
    this.specs = specs
  }
 
  isSatisfied (item) {
    return this.specs.every(x => x.isSatisfied(item))
  }
}

let bf = new BetterFilter()

console.log(`Green Products (new) : `)

for (let p of bf.filter(products, new ColorSpecification(Color.green))) {
  console.log(`=> ${p.name} is green`)
}

console.log(`Large products`)

for (let p of bf.filter(products, new SizeSpecification(Size.large))) {
  console.log(`=> ${p.name} is Large`)
}

console.log(`large and green Products`)

let spec = new AndSpecification(
  new ColorSpecification(Color.green),
  new SizeSpecification(Size.large)
)

for(let p of bf.filter(products , spec)){
    console.log(`=> ${p.name} is large and green`);
}
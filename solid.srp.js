const fs = require('fs')

class Journal {
  constructor () {
    this.entries = {}
  }

  addEntry (t) {
    let c = ++Journal.count
    let entry = `${c}: ${t}`
    this.entries[c] = entry
    return c
  }

  //update entries object with try catch
  updateEntries (id, newText) {
    try {
      if (!this.entries[id]) {
        throw new Error(`No entry with ID: "${id}"`)
      }
      this.entries[id] = newText
    } catch (e) {
      console.log(e.message)
    }
  }

  //read file  from test.txt and show it in  console
 

  //read file and return it as an array
  readFileAsArray () {
    let fileData = fs.readFileSync('./test.txt', 'utf-8')
    return fileData.split('\n')
  }
  //read file and return it as an object
  readFileAsObject () {
    let fileData = fs.readFileSync('./test.txt', 'utf-8')
    return Object.entries(fileData.split('\n'))
  }
  //read file and return it as a string
  readFileAsString () {
    let fileData = fs.readFileSync('./test.txt', 'utf-8')
    return fileData
  }

  removeEntry (index) {
    delete this.entries[index]
  }

  toString () {
    return Object.entries(this.entries).join('\n')
  }
}
Journal.count = 0

class WriteToFile {
  constructor () {}
  saveToFile (journal, fileName) {
    fs.writeFileSync(fileName, journal.toString())
  }
}

let i = new Journal()
i.addEntry('i will Be good')
i.addEntry('no no ')
i.addEntry('yes ')

let r = new WriteToFile()
let fileName = './test.txt'

r.saveToFile(i, fileName)

console.log(i.toString())
console.log(i.entries)
console.log(i.readFileAsArray())
console.log(i.readFileAsObject())
console.log(i.readFileAsString())

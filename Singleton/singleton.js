class Singleton{
    constructor(){
        let instance = this.constructor.instance
        if(instance){
            return instance 
        }

        this.constructor.instance = this

    }
}

let a = new Singleton()
let z = new Singleton()
console.log(a === z) //true
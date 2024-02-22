class ChiefExecutiveOfficer{
     
        get Name(){
            return ChiefExecutiveOfficer._name;
        }
        set Name(value){
             ChiefExecutiveOfficer._name = value
        }
        
        get Age(){
            return ChiefExecutiveOfficer._age;
        }
        set Age(value){
             ChiefExecutiveOfficer._age = value
        }

        toString(){
            return `CEO's name ${this.Name} - ${this.Age}`
        }


}

let ceo = new ChiefExecutiveOfficer()
ceo.Name = 'John'
ceo.Age = 50
console.log(ceo.toString())

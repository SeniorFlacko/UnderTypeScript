class Person{
    public name:string
    private type: string
    protected age:number=21

    constructor(name:string,public username:string){
        this.name = name
    }

    printAge(){
        console.log(this.age)
        this.setType("Cool")
    }

    private setType(type:string){
        this.type = type
        console.log(this.type)
    }
}

const person = new Person("Panchito","Panchito21")
console.log(person.name,person.username)
person.printAge()
//person.setType("Cool")


//Herencia

class Cris extends Person{
    

    constructor(username:string){
        super("Bradon",username)
        this.age = 22
    }

}

const cris = new Cris("bran123")
console.log(cris)


class Plant{
    private _species:string

    constructor(){

    }

    get species():string{
        return this._species
    }

    set species(value:string){
        if(value.length>3){
            this._species=value
        }
        else{
            this._species="Default"
        }
    }
}

let plant = new Plant()
console.log(plant.species)
plant.species="AB"
console.log(plant.species)
plant.species="Green"
console.log(plant.species)

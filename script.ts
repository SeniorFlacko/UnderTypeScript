
/* Tipos implicitos  En su declaracion */

// string
let myName = 'Cris'

// number
let myAge = 21.6

//boolean
let hasBoobies = true


/* Tipos explicitos */

//type any (No recomendado)
let myRealAge
myRealAge = 21
myRealAge = "21"

//type number
let myTrueAge:number
myTrueAge = 21

//type string
let myTrueName:string
myTrueName = "Flacko!"

//array of string
let hobbies:string[] = ["Cooking","Sports"]
console.log(typeof hobbies[0])

//tuples
let address: [string,number] = ["JJ Cantu",218]

//enum
enum Color {
    Gray,
    Green = 100,
    Blue
}

let myColor:Color = Color.Green
console.log(myColor)


// any

//Any can take various forms can be 
// String and then Object and then a Number

let car:any = "BMW"
console.log(car)
car = {car:"BMW",series:3}
console.log(car)


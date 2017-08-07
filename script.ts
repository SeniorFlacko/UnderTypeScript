
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


//function returns string
function returMyName():string{
    return "My truely name is: " + myTrueName
}
console.log(returMyName())

//void
function sayHello():void{
    console.log("Hello")
}

sayHello()

//argument types

function multiply(value1:number,value2:number):number{
    return value1 * value2
}
console.log(multiply(3,3))

// Funcion como un tipo
let myMultiply;
myMultiply = sayHello
myMultiply()
myMultiply = multiply
console.log(myMultiply(5,2))

// Funcion como un tipo mas especifico

/*  
    Esto no es una funcion sino una declaracion 
    De una variable la cual especificamos que tipo de 
    Funciones(Signatura y Return) puede aceptar
    para ser igualada

    Declara que tipo de funciones son aceptadas
    Por la variable
 */

let myMultiply2:(val1:number,val2:number) => number;
myMultiply2 = multiply
console.log(myMultiply2(100,2))


// Objects

/* 
    Typescript Infiere el esquema de un objeto 
    De tal manera que nos sugiere los distintos campos
    a traves del operador punto

    userDate.name o userDate.age

    Esto nos obliga a cumplir con es esquema del 
    objeto ademas debemos respetar el nombre de las
    PROPIEDADES

    El orden importa ademas del nombre.

*/
let userDate = {
    name:"Max",
    age:27
}

userDate ={
   name:"Cristian",
   age:21
}

/* 
    Si se quiere declarar una variable explicita como
    un objeto

    Se puede hacer lo siguente aunque no es lo mas eficiente
    :/
 */

let userData: {name:string,age:number} = {
    name: "Cris",
    age:21 
} 

let complex: { data : number[], output: (all:boolean) => number[] } = {
    data: [100,3.9,10],
    output: function(all:boolean):number[]{
        return this.data
    }
}

/* 
    Podemos ocupar un type personalizado para 
    Hacer mas reusable el codigo
 */

type Complex = { data : number[], output: (all:boolean) => number[] }

let complejo:Complex = {
    data: [100,3.9,10],
    output: function(all:boolean):number[]{
        return this.data
    }
}

// Union Type es cuando una variable puede tener uno o mas tipos 
// Sin necesariamente ser TODOS los tipos

let myFavoriteNumber:number | string = 21
myFavoriteNumber = 101


// Podemos revisar que tipo de type es en tiempo de ejecucion
// mediante typeof pero el tipo debe ir entre comillas

if(typeof myFavoriteNumber == "string"){
    console.log("Es un string")
}
if(typeof myFavoriteNumber == "number"){
    console.log("Es un numero")
}

console.log("LET & CONST")

let variable = "Test"
console.log(variable)
variable = "Another Value"
console.log(variable)

const maxLevels = 100;
console.log(maxLevels)

function reset(){
    let variable = null 
    console.log(variable)
}

reset()
console.log(variable)

// Arrow Functions

console.log("ARROW FUNCTION")


/* Las viejas funciones */
const addNumbers = function(number1:number,number2:number):number{
    return number1 + number2
}

console.log(addNumbers(1,1))

/* 
    Las Funciones arrow se igualan directamente a los parmetros 
    Con el operador flecha se especifica el body de la funcion 

    Si solo es un return puede ir en una misma linea y sin la palabra return

 */
const multiplyNumbers = (number1:number,number2:number)=> number1*number2

console.log(multiplyNumbers(3,3))

/* Funcion arrow sin parametros */
const greet = () =>  {
    console.log("hello!!!!")
}

greet()

/* Funcion arrow con un parametro */
const greetFriend = (friend:string) => console.log("hello!!!!"+ friend)

greetFriend("Pancho")

/* Funcion arrow mas de un parametro */
const greetFriends = (friend1:string,friend2:string) => console.log("hello!!!!"+ friend1 +" "+ friend2)

greetFriends("Pancho","Cris")

//Default Parameters

console.log("DEFAULT PARAMETERS")

const countdown = (start:number=10):void => {
    console.log("Init",start)
    while(start>0){
        start--;
    }
    console.log("Done",start)
}

//Inicia countdown con un valor por defecto de 10
countdown() 

//Inicia countdown con un valor de 30
countdown(30) 

//REST & Spread
console.log("REST AND SPREAD")
const numbers = [1,10,99,-5]

console.log(Math.max(33,99,10,-3))
console.log(Math.max(...numbers))

function makeArray(...args:number[]) {
    return args
}
console.log(makeArray(1,2,7,8,8,8))

console.log("DESTRUCTORS")

console.log("Destructuring Array")
const myHobbies = ["Cooking","Sports"]
const [ho1,ho2] = myHobbies
console.log(ho1,ho2)

console.log("Destructuring Object")
const userDatos = {userName:"Cris",age:21}
const {userName,age} = userDatos
console.log(userName,age)


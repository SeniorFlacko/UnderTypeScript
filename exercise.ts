/*
Try to be as explicit as possible and add Types to everything you can!

let bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};

let myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

*/

type BankAccount = {money:number,deposit:(value:number)=>number}
let bankAccount:BankAccount = {
    money:2000,
    deposit:function(value){
        return this.money +=value
    }
}

type MySelf = {name:string,bankAccount:BankAccount,hobbies:string[]}
let myself:MySelf = {
    name: "Cristian",
    bankAccount: bankAccount,
    hobbies: ["Woman", "Politics"]
};


console.log(myself.bankAccount.money)
console.log(myself.bankAccount.deposit(3000))
console.log(myself)
console.log(myself.bankAccount.deposit(3000))

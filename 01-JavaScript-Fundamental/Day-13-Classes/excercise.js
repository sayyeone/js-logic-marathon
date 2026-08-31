// METHOD DENGAN PARAMETER
class Person {
    constructor(name){
        this.name = name;
    }

    getName(greeting) {
        return (this.name)
    }
}

const person1 = new Person("Adis");
console.log(person1.getName("Adis"))
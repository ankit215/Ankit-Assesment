//QUESTION 2.
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + 'makes noise');
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    speak() {
        super.speak();
        console.log(this.name + 'barks');
    }
    getBreed(){
        return this.breed;
    }
}
let dog = new Dog('Bolt', 'White German Shepherd')
console.log(dog.getBreed()); 


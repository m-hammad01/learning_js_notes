// Polymorphism 
// Function Overriding

class Animal {
  makeSound() {
    console.log('Animal makes a sound');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('Dog barks');
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('Cat meows');
  }
}

const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

animal.makeSound(); 
dog.makeSound();    
cat.makeSound();    



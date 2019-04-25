/*Creational Patterns*/

//Prototype Class Design Pattern:
class Car {
    constructor(type, transmission, color) {
        this.type = type;
        this.transmission = transmission;
        this.color = color;
    }
}

//Constructor Pattern
class SportUtilityVehicle extends Car {
    constructor(type, transmission, color) {
        super(type, transmission, color);
        this.wheels = 'sport';
    }
}

//Singleton Pattern
let instance = null;

class Honda {
    constructor(type, transmission, color) {
        if (!instance) {
            this.type = type;
            this.transmission = transmission;
            this.color = color;
            instance = this;
        } else {
            return instance;
        }
        
    }
}

//Factory Pattern
class CarFactory {
    createCar(type) {
        switch(type) {
            case 'mitsubishi':
                return new Car('Sport', 'manual', 'brown')
            case 'hyundai':
                return new Car('Sport', 'automatic', 'red')
        }
    }
}

//Abstract Factory
class SportUtilityVehicleFactory {
    createSuv(type) {
        switch(type) {
            case 'ferrari':
                return new Car('Sport', 'automatic', 'black')
            case 'porsche':
                return new Car('Sport', 'automatic', 'orange')
        }
    }
}

const carFactory = new CarFactory();
const suvFactory = new SportUtilityVehicleFactory();

const autoManufacturer = (type, model) => {
    switch(type) {
        case 'car':
            return carFactory.createCar(model);
        case 'suv':
            return suvFactory.createSuv(model);
    }
}

const sedan = new Car('Sedan', 'manual', 'red');

const CX = new SportUtilityVehicle('Sport', 'automatic', 'red');

const newCarHonda = new Honda('Sport', 'automatic', 'white');
console.log('**Creational Patterns**');
console.log('--Prototype Class Design Pattern--');
console.log(sedan);
console.log('--Constructor Pattern--');
console.log(CX);
console.log('--Singleton Pattern--');
console.log(newCarHonda);

const factory = new CarFactory();
const mitsubishi = factory.createCar('mitsubishi');
console.log('--Factory Pattern--');
console.log(mitsubishi);

const porsche = autoManufacturer('suv', 'porsche');

console.log('--Abstract Factory--');

console.log(porsche);

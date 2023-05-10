import { Component } from '@angular/core';

class Car {
  public make: string;
  public model: string;
  public color: string;
  private isRunning: boolean = false;

  constructor(make: string, model: string, color: string) {
    this.make = make;
    this.model = model;
    this.color = color;
  }

  public start(): void {
    this.isRunning = true;
    console.log(`The ${this.color} ${this.make} ${this.model} is now running.`);
  }

  public stop(): void {
    this.isRunning = false;
    console.log(`The ${this.color} ${this.make} ${this.model} has been turned off.`);
  }

  public honk(): void {
    console.log(`The ${this.color} ${this.make} ${this.model} is honking its horn.`);
  }
}

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  public myCar = new Car('', '', '');
  public yourCar = new Car('', '', '');
}







// import { Component } from '@angular/core';

// class Car {
//   private make: string;
//   private model: string;
//   private color: string;
//   private isRunning: boolean = false;

//   constructor(make: string, model: string, color: string) {
//     this.make = make;
//     this.model = model;
//     this.color = color;
//   }

//   public start(): void {
//     this.isRunning = true;
//     console.log(`The ${this.color} ${this.make} ${this.model} is now running.`);
//   }

//   public stop(): void {
//     this.isRunning = false;
//     console.log(`The ${this.color} ${this.make} ${this.model} has been turned off.`);
//   }

//   public honk(): void {
//     console.log(`The ${this.color} ${this.make} ${this.model} is honking its horn.`);
//      } 
// }

// @Component({
//   selector: 'app-car',
//   templateUrl: './car.component.html',
//   styleUrls: ['./car.component.css']
// })
// export class CarComponent {
//   public myCar = new Car('Toyota', 'Camry', 'red');
//   public yourCar = new Car('Honda', 'Accord', 'blue');
// }

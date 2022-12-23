class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version id ${this.version}`;
  }
}

class Car {
  readonly model: string;
  readonly numberOfWheels: number = 4;

  constructor(theModel: string) {
    this.model = theModel;
  }
}

class Car2 {
  readonly numberOfWheels: number = 4;

  constructor(readonly model: string) {}
}

// Модификаторы

class Animal {
  protected voice: string = ""; // доступны для Animal и для классов которые наследуются от Animal
  public color: string = "black"; // по умолчанию public

  constructor() {
    this.go();
  }
  private go() {
    console.log("Go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
    // this.go() // Error
  }
}

const cat = new Cat();

// Абстрактный класс

abstract class MyComponent {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends MyComponent {
  render(): void {
    console.log("Component on render");
  }

  info(): string {
    return "This is info";
  }
}

export {};

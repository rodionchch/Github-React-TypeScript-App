function Log(constructor: Function) {
  console.log(constructor);
}

function Log2(target: any, propName: string | Symbol) {
  console.log(target, propName);
}

function Log3(
  target: any,
  propName: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log(target, propName, descriptor);
}

@Log
class Component {
  @Log2
  name: string;

  @Log3
  get componentName() {
    return this.name;
  }

  constructor(name: string) {
    this.name = name;
  }

  @Log3
  logName(): void {
    console.log(`Component Name: ${this.name}`);
  }
}

interface ComponentDecorator {
  selector: string;
  template: string;
}

function Component2(config: ComponentDecorator) {
  return function <T extends { new (...args: any[]): object }>(Constructor: T) {
    return class extends Constructor {
      constructor(...args: any) {
        super(...args);

        const el = document.querySelector(config.selector)!;
        el.innerHTML = config.template;
      }
    };
  };
}

function Bind(
  _: any,
  _2: any,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const original = descriptor.value;

  return {
    configurable: true,
    enumerable: false,
    get() {
      return original.bind(this);
    },
  };
}

@Component2({
  selector: "#card",
  template: `<div class='card'>Card component</div>`,
})
class CardComponent2 {
  constructor(public name: string) {
    this.name = name;
  }

  @Bind
  logName(): void {
    console.log(`Component Name: ${this.name}`);
  }
}

const card = new CardComponent2("My Card Component");

const button = document.querySelector("#button");

button?.addEventListener("click", card.logName);

type ValidatorType = "required" | "email";

interface ValidatorConfig {
  [props: string]: {
    [validateProp: string]: ValidatorType;
  };
}

const validators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  validators[target.constructor.name] = {
    ...validators[target.constructor.name],
    [propName]: `required`,
  };
}

function validate(obj: any): boolean {
  const objConfig = validators[obj.constructor.name];
  if (!objConfig) {
    return true;
  }

  let isValid = true;

  Object.keys(objConfig).forEach((key) => {
    if (objConfig[key] === "required") {
      isValid = isValid && !!obj[key];
    }
  });

  return isValid;
}

class Form {
  @Required
  public email: string | void;

  constructor(email?: string) {
    this.email = email;
  }
}

const form = new Form("rodionchch@gmail.com");

if (validate(form)) {
  console.log("Valid: ", form);
} else {
  console.log("Validation Error");
}

console.log("form: ", form);

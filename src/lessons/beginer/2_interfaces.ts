interface Rect {
  readonly id: string; // Только для чтения
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: "1",
  color: "red",
  size: {
    width: 100,
    height: 100,
  },
};

const rect2: Rect = {
  id: "2",
  size: {
    width: 50,
    height: 50,
  },
};

rect2.color = "#000";

const react3 = {} as Rect;
const rect4 = <Rect>{}; // Старая запить

interface RectWithArea extends Rect {
  getArea: () => number;
}

const rect5: RectWithArea = {
  id: "3",
  size: {
    width: 20,
    height: 20,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time = new Date();

  setTime(date: Date) {
    this.time = date;
  }
}

interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: "1px solid #000",
  marginTop: "2px",
  borderRadius: "5px",
};

console.log(rect1, rect2);

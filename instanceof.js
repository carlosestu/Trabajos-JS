// Define a class called AreaCalculator. Inside it, create a static method that let you calculate the area of the geometric figure passed as parameter.
//  The method will let you calculate the square, the rectangle and the circle area.

class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}
function multiplicacion(a, b) {
  let result = a * b;
  return result;
}
//usando el metodo switch.
// class AreaCalculator {
//   static calculate(figure) {
//     let resultado = 0;
//     switch (figure.constructor) {
//       case Square:
//         resultado = multiplicacion(figure.side, figure.side);
//         break;
//       case Rectangle:
//         resultado = multiplicacion(figure.width, figure.height);
//         break;
//       case Circle:
//         resultado = multiplicacion(Math.PI, figure.radius * figure.radius);
//         break;
//         return resultado;
//     }
//     return resultado;
//   }
// }
class AreaCalculator {
  static calculate(figure) {
    let resultado = 0;
    if (figure instanceof Square) {
      resultado = multiplicacion(figure.side, figure.side);
    } else if (figure instanceof Rectangle) {
      resultado = multiplicacion(figure.width, figure.height);
    } else if (figure instanceof Circle) {
      resultado = multiplicacion(Math.PI, figure.radius * figure.radius);
    }
    return resultado;
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));

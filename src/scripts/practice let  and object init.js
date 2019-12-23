import "../styles/index.scss";

console.log("webpack starterkit");

// function sendCars(day, ...carIds) {
//   carIds.forEach(id => console.log(id));
// }

// sendCars("Monay", 1, 2, 3);

let carIds = [1, 2, 3];
let [car1, car2, ...rest1] = carIds;

console.log(car1, car2, rest1);

let car = { id: 5000, style: "conevertible" };
let id, style;

//funny use of parentheis probably you would never need it!
({ id, style } = car);

console.log(id, style);

//rest syntax collects up and sotres in an Array
//spread is opposite spreads out from Array or Object into various parameters

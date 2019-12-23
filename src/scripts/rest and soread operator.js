import "../styles/index.scss";

function sendCars(a, b, c, ...rest) {
  console.log(rest);
}

let carIds = [1, 2, 3, 4, 5, 6];
sendCars(...carIds);
//rest syntax collects up and sotres in an Array
//spread is opposite spreads out from Array or Object into various parameters

//practice convert to a number, remember need to start with a number, very weird!
console.log(Number.parseFloat("aa55.8AAAA"));
console.log(Number.parseFloat("55.8AAAA"));

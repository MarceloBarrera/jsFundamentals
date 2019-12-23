let promise = new Promise(function(resolve, reject) {
  setTimeout(reject, 100, "pepe");
});

promise.then(
  value => console.log("fullfilled: ", value),
  error => console.log("rejecyed: " + error)
);
console.log(promise);

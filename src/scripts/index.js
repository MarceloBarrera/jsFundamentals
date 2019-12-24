//good reference to get the promise support:  wwww.promisejs.org , that was when Promise was not fully supported.

const asyncMethod = message => {
  return new Promise((fullfill, reject) => {
    setTimeout(() => {
      console.log(message);
      fullfill();
    }, 500);
  });
};

//With Promise then this become "Thenable"
asyncMethod("open DB connection").then(() => {
  asyncMethod("find user").then(() => {
    asyncMethod("validate user").then(() => {
      asyncMethod("doStuff").then(() => {});
    });
  });
});

//good reference to get the promise support:  wwww.promisejs.org , that was when Promise was not fully supported.

const asyncMethod = message => {
  return new Promise((fullfill, reject) => {
    setTimeout(() => {
      console.log(message);
      fullfill();
    }, 500);
  });
};

const findUser = () => {
  asyncMethod("find user").then(validateUser);
};

const validateUser = () => {
  asyncMethod("validate user").then(doStuff);
};

const doStuff = () => {
  asyncMethod("doStuff").then(() => {});
};

asyncMethod("open DB connection").then(findUser);

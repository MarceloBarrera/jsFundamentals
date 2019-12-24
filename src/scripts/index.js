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
  return asyncMethod("find user");
};

const validateUser = () => {
  return asyncMethod("validate user");
};

const doStuff = () => {
  return asyncMethod("doStuff");
};

asyncMethod("open DB connection")
  .then(findUser)
  .then(validateUser)
  .then(doStuff)
  .then(() => {});

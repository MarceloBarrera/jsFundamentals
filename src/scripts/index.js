const asyncMethod = (message, cb) => {
  setTimeout(function() {
    console.log(message);
    cb();
  }, 500);
};

//Xmas tree code:
asyncMethod("open DB connection", () => {
  asyncMethod("find user", () => {
    asyncMethod("validate user", () => {
      asyncMethod("doStuff", () => {});
    });
  });
});

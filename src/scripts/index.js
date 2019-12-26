//check out es6 features preset and so on:
//https://kangax.github.io/compat-table/es6/

const asyncMethod = (message, number) => {
  return new Promise((fullfill, reject) => {
    setTimeout(() => {
      console.log(message, number);
      fullfill(number + 1);
    }, 500);
  });
};

const main = async () => {
  const one = await asyncMethod("open db connection", 0);
  const two = await asyncMethod("find user", one);
  const three = await asyncMethod("validate user", two);
  const four = await asyncMethod("do stuff", three);
};

main();

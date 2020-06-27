// this function returns number
function API(num) {
  return num;
}

//this function works with promise
function square(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let number = API(num);
      number = number * number;
      console.log(number);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("error");
      }
    }, 2000);
  });
}

console.log(square(9));

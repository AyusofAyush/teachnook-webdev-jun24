let myPromise = new Promise(function (resolve, reject) {
  let x = 0;

  // The producing code (this may take some time)

  if (x == 0) {
    resolve("OK");
  } else {
    reject("Error");
  }
});

// how to consume it ?
//   1. promise way of comsuming
myPromise
  .then((value) => {
    //   myDisplayer(value)
    return value + " second value";
  })
  .then((value) => {
    console.log("Another value", value);
  })
  .catch((error) => {
    //   myDisplayer(error);
    console.log("Some error", error);
  });

// 2. Async wait way of consuming

function testPromise() {
  return new Promise(function (resolve, reject) {
    let x = 0;

    // The producing code (this may take some time)

    if (x == 0) {
      resolve("OK");
    } else {
      reject("Error");
    }
  });
}

const myAsync = async () => {
  try {
    let result = await testPromise();
    console.log("My promise value", result);
  } catch (err) {
    console.log("Some error", err);
  }
};

myAsync();

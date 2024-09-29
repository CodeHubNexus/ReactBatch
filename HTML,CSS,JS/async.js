// console.log("Learning new things");

// setTimeout(() => {
//   console.log("After few minutes");
// }, 0);

// console.log("Async programming");

// const myPromise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("Operation Succesful");
//   } else {
//     reject("Operation failed");
//   }
// });

// myPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("promise executed");
//   });

//   callback hell

// setTimeout(() => {
//   console.log("execution 1");
//   setTimeout(() => {
//     console.log("execution 2");
//     setTimeout(() => {
//       console.log("execution 3");
//       setTimeout(() => {
//         console.log("execution 4");
//         setTimeout(() => {
//           console.log("execution 5");
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

// new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("promise execution 1");
//     resolve();
//   }, 1000);
// })
//   .then(() => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("promise execution 2");
//         resolve();
//       }, 1000);
//     });
//   })
//   .then(() => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("promise execution 3");
//         resolve();
//       }, 1000);
//     });
//   })
//   .then(() => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("promise execution 4");
//         resolve();
//       }, 1000);
//     });
//   })
//   .then(() => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("promise execution 5");
//         resolve();
//       }, 1000);
//     });
//   });

//   Async & await

// async function pro() {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("async execution 1");
//       resolve();
//     }, 1000);
//   });
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("async execution 2");
//       resolve();
//     }, 1000);
//   });
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("async execution =3");
//       resolve();
//     }, 1000);
//   });
// }

// pro();

const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/uss");
    console.log(response);
    if (response.status !== 200) {
      throw new Error();
    }

    const data = await response.json();
    console.log(data);
    console.log("fetching api");
  } catch (err) {
    console.log("your error is 💥", err);
  }
};
fetchData();

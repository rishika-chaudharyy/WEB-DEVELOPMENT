// -------------------------MEANING OF ASYNCHRONOUS WITH EXAMPLE------------------------

// console.log("1");
// console.log("2");

// setTimeout(() => {
//     console.log("Hello")
// }, 4000);

// console.log("3");//these code will not wait for set time out function to be executed.
// console.log("4");






// -------------------------MEANING OF CALLBACK WITH EXAMPLE------------------------

// const helloFunction = () => {
//     console.log("Hello");
// }

// setTimeout(helloFunction, 3000);






// -------------------------MEANING OF CALLBACK HELL WITH EXAMPLE------------------------

// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("Data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000)
// }
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", dataId);
//             resolve("Success")
//         }, 2000)
//     })
// }
// console.log("Getting data 1....")
// getData(1, () => {
//     console.log("Getting data 2...")
//     getData(2, () => {
//         console.log("Getting data 3...")
//         getData(3, () => {
//             console.log("Getting data 4...")
//             getData(4);
//         });
//     });
// })






// -------------------------MEANING OF CALLBACK HELL VS PROMISE CHAIN WITH EXAMPLE---------

// getData(1).then((res) => {
//     return getData(2);
// }).then((res) => {
//     return getData(3);
// }).then((res) => {
//     console.log(res);
// })





// -------------------------MEANING OF PROMISES WITH EXAMPLE------------------------

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("Success");
//     reject("Some error occured!")
// })

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", dataId);
//             resolve("Success")
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 2000)
//     })
// }

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("Success");
//         // reject("Some error occured!");
//     })
// }

// let promise = getPromise();

// promise.then((res) => {
//     console.log("Promise fulfilled",res);
// })

// promise.catch((err) => {
//     console.log("Promise rejected", err);
// })











// -------------------------MEANING OF PROMISE CHAIN WITH EXAMPLE------------------------

// function asyncFunction() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 1");
//             resolve("Success")
//         }, 4000)
//     })
// }

// function asyncFunction2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 2");
//             resolve("Success")
//         }, 4000)
//     })
// }

// console.log("Fetching data 1 ..")
// let p1 = asyncFunction();
// p1.then((res) => {
//     console.log("Fetching data 2 ..");
//     let p2 = asyncFunction2();
//     p2.then((res) => {
//     })
// })

// // console.log("Fetching data 2 ..")
// // let p2 = asyncFunction2();
// // p2.then((res) => {
// //     console.log(res);
// // })











// -------------------------MEANING OF ASYNC AWAIT WITH EXAMPLE------------------------

// async function hello() {
//     console.log("Hello")
// }


// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather api");
//             resolve(200);
//         }, 2000)
//     })
// }

// async function getWeatherApi() {
//     await api();
//     await api();
// }

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("Success")
//         }, 2000)
//     })
// }


// (async function () {
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
//     await getData(5);
//     await getData(6);
//     await getData(7);
// })();


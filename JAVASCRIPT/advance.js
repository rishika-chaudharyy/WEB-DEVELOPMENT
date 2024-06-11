// console.log("one");
// console.log("two");

// function hello() {
//     console.log("Hello")
// }

// setTimeout(hello, 2000);

// setTimeout(() => {
//     console.log("hello after 4sec")
// }, 4000);

// console.log("Three")
// console.log("Four")

// //Callback
// function sum(a, b) {
//     console.log(a + b);
// }

// function calc(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// console.log(calc(2, 3, sum))
//promise chaining


function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("Success")
        }, 2000)
    });
}

(async function () {
    await getData(1);
    await getData(2);
    await getData(3);
})();

// getData(1).then((res) => {
//     return getData(2);
// }).then((res) => {
//     return getData(3);
// }).then((res) => {
//     console.log(res);
// })

//callback hell
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });
// getData(2);
// getData(3);


//promises
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve(123);
//     reject("Some error occured")
// })

// function getData(dataId, getnextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", dataId);
//             resolve("Success")
//             if (getnextData) {
//                 getnextData();
//             }
//         }, 5000);
//     })
// }

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         // resolve("Success");
//         reject("Error")
//     })
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log("Promise fulfilled", res)
// })

// promise.catch((err) => {
//     console.log("Error occured", err)
// })

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data 1")
//             resolve("Success")
//         }, 4000)
//     })
// }
// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data 2")
//             resolve("Success")
//         }, 4000)
//     })
// }
// console.log("Fetching data 1")
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("Fetching data 2");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res);
//     })
// })

// console.log("Fetching data 2")
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// })

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather data")
//             resolve(200);
//         }, 2000);
//     });
// }

// // await api();

// async function getWeatherData() {
//     await api();
//     await api();
// }
// async function hello() {
//     console.log("Hello");
// }




// Основы асинхронности

// синхронный код

// Асинхронный код
//
// setTimeout(() => {
//     console.log(1)
// }, 500)
//
// setTimeout(() => {
//     console.log(2)
// }, 0)
//
// console.log(3)

// const interval = setInterval(() => {
//     console.log("OK")
// }, 1000)
//
// setInterval(() => {
//     clearInterval(interval)
// }, 5000)

// const button = document.querySelector('.button');
//
// button.onclick = () => {
//     setTimeout(() => {
//         console.log(1)
//     }, 1000)
// }


// Event Loop - цикл событий

//Chrome --> V8 --> EventLoop
// FireFox --> Quantum --> EventLoop

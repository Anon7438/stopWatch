const body = document.body;
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const p = document.querySelector("p");

let stop;
let num = 0;
function startWatch(){
    stop = setInterval(()=>{
        p.innerHTML = `${num}`;
        num++;
    },1000);
}
function stopWatch(){
    
    clearInterval(stop);
    
}
    
function resetWatch(){
    num = 0;
    clearInterval(stop);
    p.innerHTML = `${num}`;
}
    


btn1.addEventListener("click", startWatch)
btn2.addEventListener("click", stopWatch)
btn3.addEventListener("click", resetWatch)









































// const body = document.body;
// const btn1 = document.querySelector(".btn1");

// function colorChange() {
//     if (btn1.textContent === "Start Magic") {
//        const stop = setInterval(() => {
//             const red = Math.floor(Math.random() * 126);
//             const green = Math.floor(Math.random() * 126);
//             const blue = Math.floor(Math.random() * 126);
//             const rgb = `rgb(${red},${green},${blue})`;
//             body.style.backgroundColor = rgb;
//             // p.textContent = `Value = ${rgb}`
//             return stop;
//         }, 1000);
//         btn1.textContent = "Stop Magic";
//     }
//     else {
//         // clearInterval(stop);
//         btn1.textContent = "Start Magic";
//         // body.style.backgroundColor = "white";
//         setInterval(() => {
//             body.style.backgroundColor = "white";
//         });
//     }
// }
// btn1.addEventListener("click", colorChange);

// body = document.body;
// const p = document.querySelector("p")
// function start(){
//     setInterval(() => {
//                     const red = Math.floor(Math.random() * 126);
//                     const green = Math.floor(Math.random() * 126);
//                     const blue = Math.floor(Math.random() * 126);
//                     const rgb = `rgb(${red},${green},${blue})`;
//                     body.style.backgroundColor = rgb;
//                     p.textContent = `Value = ${rgb}`
                    
//                 }, 1000);
// }
// function stop(){


//                     body.style.backgroundColor = "white";
//                     // stop(start());
//                     // p.textContent = `Value = ${}`
//                     // return stop;
              

// }
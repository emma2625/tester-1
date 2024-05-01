// const now = new Date();

// let year = now.getFullYear();
// let month = now.getMonth() + 1;
// let day = now.getDay(); // Day of the week
// let dayMonth = now.getDate(); // Day of the month

// let hr =  now.getHours();
// let min =  now.getMinutes();
// let sec =  now.getSeconds();
// let milliseconds =  now.getMilliseconds();

// console.log(now);
// console.log(year, month, day, dayMonth, hr, min, sec, milliseconds);

// // TIMESTAMP - milliseconds from Jan 1 1970 till Date

// const timestamp = now.getTime();

// console.log(timestamp);

// // 984569453000

// let date  = new Date(984569453000);

// console.log(date);

// `setTimeout(()=> {
//     alert("Buy two mangoes for #10");
// }, 5000);`
// let num = 1;

// const mangoes = setInterval(() => {
//   console.log("Buy two mangoes for #10 Time:" + num++);

//   if (num > 3) {
//     clearInterval(mangoes)
//   }
// }, 1000);

// alert("Hello World");

const button = document.querySelector("#btn");
const clockDisplay = document.querySelector("#display");

// button.addEventListener('');
let min = 0;
let sec = 0;
let runningTimer;
button.addEventListener("click", () => {
  if (button.textContent === 'Start') {
    
    runningTimer = setInterval(() => {
      sec++;
  
      if (sec > 59) {
        min++;
        sec = 0;
      }
  
     
  
      clockDisplay.innerHTML = `
          <span>${min < 10 ? '0' + min : min}</span>
          <span>:</span>
          <span>${sec < 10 ? '0' + sec : sec }</span>
      `;
    }, 20);
  
    button.textContent = "Stop";
  }else{
    clearInterval(runningTimer);
    button.textContent = "Start";
  }
});




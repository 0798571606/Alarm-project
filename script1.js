// const setAlarmBtn = document.querySelector("button");
// const selectMenu = document.querySelectorAll("select");
// const content = document.querySelector(".content");
// const timeBox = document.querySelector(".time");
// const ringtone = new Audio("./alarm2.m4a");

// let option,
//   alarmTime,
//   alarmState = "noset";

// for (let i = 23; i >= 0; i--) {
//   i = i < 10 ? "0" + i : i;
//   option = `<option value="${i}">${i}</option>`;
//   selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
// }
// for (let i = 59; i >= 0; i--) {
//   i = i < 10 ? "0" + i : i;
//   option = `<option value="${i}">${i}</option>`;
//   selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
// }

// setInterval(() => {
//   let date = new Date();
//   let h = date.getHours();
//   let m = date.getMinutes();
//   let s = date.getSeconds();

//   h = h < 10 ? "0" + h : h;
//   m = m < 10 ? "0" + m : m;
//   s = s < 10 ? "0" + s : s;

//   timeBox.textContent = `${h}:${m}:${s}`;

//   if (alarmTime == `${h}:${m}`) {
//     ringtone.play();
//     ringtone.loop = true;
//   }
// }, 1000);

// setAlarmBtn.addEventListener("click", () => {
//   alarmTime = `${selectMenu[0].value}:${selectMenu[1].value}`;
//   if (alarmTime.includes("Hour") || alarmTime.includes("Minute")) {
//     return alert("لطفا زمان هشدار را مشخص کنید!");
//   }
//   checkState(alarmState);
// });

// function checkState(state) {
//   if (state == "noset") {
//     content.classList.add("disable");
//     setAlarmBtn.textContent = "Clear Alarm";
//     alarmState = 'set'
//   } else {
//     content.classList.remove("disable");
//     setAlarmBtn.textContent = "Set Alarm";
//     ringtone.pause();
//     alarmTime = "";
//     alarmState = "noset";
//   }
// }
// const newDate = new Date(2024,5,23,4,30,23)
// const newDate1 = new Date('jun 24 2024 7:40:34')

// console.log(newDate);
// console.log(newDate1);

// const date = new Date();

// const result = newDate.setHours(20,40,40)
// const result = newDate.toString()
// console.log(result);
// console.log(newDate);
// let m = Math;
// m = m.round(2.4)
// m = m.ceil(2.1)
// m = m.floor(2.9)
// m = m.trunc(2.9)
// m = m.pow(2,3)
// m = m.sqrt(36)
// m = m.abs(-36)
// m = m.sin(90 * Math.PI/180);
// m = m.max(1,2,3,4,5)
// m = m.min(1,2,3,4,5)
// m = Math.trunc(Math.random() * 10)
// console.log(m)
// const myJson = {
//   users: [
//     { userName: "ali", email: "ali@gmail.com" },
//     { userName: "hamid", email: "hamid@gmail.com" },
//     { userName: "yasser", email: "yasser@gmail.com" },
//   ],
// };

// let test = JSON.stringify({
//   test: false,
//   name: "mohammad",
// });

// console.log(test);
// const array = [1, 2, 3, 4, 5, 6];

// const result = array.filter((number) => {
//   if (number % 2 == 0) {
//     return number;
//   }
// });

// console.log(result);
// const array = [1, 2, 3, 4, 5];

// const reducer = (accumulator, currentValue) => accumulator - currentValue;

// const result = array.reduce(reducer, 10);

// console.log(result);
// const array = [1,2,3,4,5]

// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// const result = array.reduce(reducer);

// console.log(result)

// const array = [1,2,3,4,5]

// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// const result = array.reduce(reducer);

// console.log(result)
// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   birthYear() {
//     let date = new Date();
//     let year = date.getFullYear();
//     let result = year - this.age;
//     console.log(result);
//   }
// }

// let student1 = new Student("Hamid", 20);
// student1.birthYear();

// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   birthYear() {
//     let date = new Date();
//     let year = date.getFullYear();
//     let result = year - this.age;
//     console.log(result);
//   }
// }

// let student1 = new Student("hamid", 20);
// student1.birthYear();



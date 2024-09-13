// "use strict";          
const selectMenu = document.querySelectorAll("select");
const timeBox = document.querySelector(".time");
const setAlarmBtn = document.querySelector("button");
const content = document.querySelector(".content");

let alarmTime,
  option,
  alarmState = "noSet";
const ringtone = new Audio("./alarm2.m4a");

for (let i = 23; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  timeBox.innerHTML = `${h}:${m}:${s}`;
  
  if (alarmTime == `${h}:${m}`) {
    ringtone.play();
    ringtone.loop = true;
  }
}, 1000);

setAlarmBtn.addEventListener("click", () => {
  alarmTime = `${selectMenu[0].value}:${selectMenu[1].value}`;
  if (alarmTime.includes("Hour") || alarmTime.includes("Minutes")) {
    return alert("زمان هشدار را به درستی مشخص کنید!");
  }
  checkState(alarmState);
});

function checkState(state) {
  if (state == "noSet") {
    content.classList.add("disable");
    setAlarmBtn.textContent = "Clear Alarm";
    alarmState = "set";
  } else {
    content.classList.remove("disable");
    setAlarmBtn.textContent = "Set Alarm";
    alarmTime = "";
    ringtone.pause();
    alarmState = "noSet";
  }
}

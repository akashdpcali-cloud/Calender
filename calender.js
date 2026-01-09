let date=document.querySelector(".date");
let day=document.querySelector(".day");
let month=document.querySelector(".month");
let year=document.querySelector(".year");
let today;


const alldays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const allmonths=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function update(){
  today= new Date();
  
  if(today.getDate()<10){
    date.innerText= "0"+today.getDate();
  }else{
    date.innerText= today.getDate();
  }

  day.innerText= alldays[today.getDay()];
  month.innerText= allmonths[today.getMonth()];
  year.innerText= today.getFullYear();
}
update();
setInterval(update, 60*1000);

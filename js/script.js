const now = new Date()
// console.log(now);
let month = now.getMonth
let year = now.getFullYear

const previous = document.querySelector(".prev")
const next = document.querySelector(".next")
const month_year = document.querySelector(".calendar__information")

const elements = [...document.querySelector(".calendar__el")]
console.log(elements);
const listOfMonth = {
    0:"January",
    1:"February",
    2:"March",
    3:"April",
    4:"May",
    5:"June",
    6:"July",
    7:"August",
    8:"September",
    9:"October",
    10:"November",
    11:"December"
}

previous.addEventListener("click", function(){
    if(month===0){
        month = 11
        year--
    }else{
        month--
    }
})

next.addEventListener("click", function(){
    if(month===11){
        month = 0
        year++
    }else{
        month++
    }
})


function render(listOfMonth, year){
    const firstDay = new Date(listOfMonth+1, year, 0).getDate()
    console.log(firstDay);
}

render(month, year);
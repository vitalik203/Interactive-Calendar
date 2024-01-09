const now = new Date()
let month = now.getMonth()
let year = now.getFullYear()
const previous = document.querySelector(".prev")
const next = document.querySelector(".next")
const month_year = document.querySelector(".calendar__information")
// let data = now.getDate()
// console.log(data);
const elements = [...document.querySelectorAll(".calendar__el")]
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
    render(month, year)
})

next.addEventListener("click", function(){
    if(month===11){
        month = 0
        year++
    }else{
        month++
    }
    render(month, year)
})


function render(monthIndex, year){
    const numDaysInMonth = new Date(year, monthIndex+1, 0).getDate()
    const firstDate = new Date(year, monthIndex)
    const firstDay = new Date(firstDate).getDay()
    month_year.innerText = `${year} \ ${listOfMonth[monthIndex]}`
    elements.forEach((element, index)=>{
        const dateNumber = (index+1)-firstDay;
        if(dateNumber>0&&dateNumber<=numDaysInMonth){
            element.innerText = dateNumber
        }else{
            element.innerText = " "
        }
        if(now.getFullYear()===year && now.getMonth()===monthIndex && now.getDate()===dateNumber){
            element.classList.add("today")
        }else{
            element.classList.remove("today")
        }
    })
}

render(month, year);
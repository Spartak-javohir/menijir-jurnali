const formElement = document.querySelector("#form")
const addStudentInput = document.querySelector(".add__popul__input")
const addButton = document.querySelector("#add")
const egaelem = document.querySelector('#ageInput')
const selectKursElem = document.querySelector("#selectKursElem")
const selectManbaElem = document.querySelector("#selectManbaElem")
const itemElemenActive = document.querySelector('.item__element_active')

addButton.addEventListener("click", async event => {
    event.preventDefault()
   let response = await fetch("/uform",      {
    headers: {"Content-Type": "application/json",},
       method: "POST",

       body: JSON.stringify({
        name: addStudentInput.value,
        age: egaelem.value, 
        kurs: selectKursElem.value,
        manba: selectManbaElem.value
       })
   })
});



window.addEventListener("DomContentLoaded", e=>{


    students()

})


 async function students(){
     let respon = await fetch("/manager",{
         method: "GET",
     });
     respon = await respon.json()
     renderStudents(respon.udata);
}

function renderStudents(arr){
    for (let i of arr){
        const theadElem = document.createElement('thead')
        const trElem = document.createElement('tr')
        const tbodyElem = document.createElement('thead')
        const tdElem = document.createElement('thead')

    }
}
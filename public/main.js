const formElement = document.querySelector("#form")
const addStudentInput = document.querySelector(".add__popul__input")
const addButton = document.querySelector("#add")
const egaelem = document.querySelector('#ageInput')
const selectKursElem = document.querySelector("#selectKursElem")
const selectManbaElem = document.querySelector("#selectManbaElem")
const itemElemenActive = document.querySelector('.item__element_active')
const tableElem = document.querySelector('.table')

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
        const trElem1 = document.createElement('tr')
        const tbodyElem = document.createElement('thead')
        const tdElem = document.createElement('thead')
        const tdElem1 = document.createElement('thead')
        const tdElem2 = document.createElement('thead')
        const tdElem3 = document.createElement('thead')
        const tdElem4 = document.createElement('thead')
        const thElem = document.createElement('thead')
        const thElem1 = document.createElement('thead')
        const thElem2 = document.createElement('thead')
        const thElem3 = document.createElement('thead')
        const thElem4 = document.createElement('thead')
        const buttonDeleteElem = document.createElement('button')


        theadElem.appendChild(trElem)
        tbodyElem.appendChild(trElem1)
        trElem.appendChild(thElem)
        trElem.appendChild(thElem1)
        trElem.appendChild(thElem2)
        trElem.appendChild(thElem3)
        trElem.appendChild(thElem4)
        trElem1.appendChild(tdElem)
        trElem1.appendChild(tdElem1)
        trElem1.appendChild(tdElem2)
        trElem1.appendChild(tdElem3)
        trElem1.appendChild(tdElem4)

        thElem.textContent = 'Ism'
        thElem1.textContent = 'Yoshi'
        thElem2.textContent = 'Kurs nomi'
        thElem3.textContent = 'Manda'
        thElem4.textContent = 'Action'

        tdElem.textContent = i.name
        tdElem1.textContent = i.ega
        tdElem2.textContent = i.kurs
        tdElem3.textContent = i.manba
        tdElem4.appendChild(buttonDeleteElem)
        buttonDeleteElem.textContent = 'delete'

        tableElem.appendChild(theadElem)
        tableElem.appendChild(tbodyElem)

    }
}
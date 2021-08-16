const formElement = document.querySelector("#form")
const addStudentInput = document.querySelector(".add__popul__input")
const addButton = document.querySelector("#add")
const egaelem = document.querySelector('#ageInput')
const selectKursElem = document.querySelector("#selectKursElem")
const selectManbaElem = document.querySelector("#selectManbaElem")
const itemElemenActive = document.querySelector('.item__element_active')
const tbodyElem = document.querySelector('.tbody')

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
   response = await response.json()
   students()
});



window.addEventListener("DOMContentLoaded", async e=>{ 

    students()
    kurslar()


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

        const trElem = document.createElement('tr')
        const tdElem = document.createElement('td')
        const tdElem1 = document.createElement('td')
        const tdElem2 = document.createElement('td')
        const tdElem3 = document.createElement('td')
        const tdElem4 = document.createElement('td')
        const tdElem5 = document.createElement('td')
        const buttonDeleteElem = document.createElement('button')

         
        tdElem.textContent = i.name
        tdElem1.textContent = i.age
        tdElem2.textContent = i.kurs
        tdElem3.textContent = i.manba
        tdElem5.textContent = i.id
        
        trElem.appendChild(tdElem5)
        trElem.appendChild(tdElem)
        trElem.appendChild(tdElem1)
        trElem.appendChild(tdElem2)
        trElem.appendChild(tdElem3) 
        trElem.appendChild(tdElem4)
        buttonDeleteElem.textContent = 'delete'
       
        tdElem4.appendChild(buttonDeleteElem)      
        tbodyElem.appendChild(trElem)

        addStudentInput.value = ""
        egaelem.value = ""


        buttonDeleteElem.addEventListener('click', async event=>{
            
        })
    }
}



// kurslar bolimi
const addKursInputElem = document.querySelector("#kursInputElem")
const kaddBtnElem = document.querySelector("#kaddBtnElem")
const kform = document.querySelector("#kform")



kform.addEventListener("submit", async event => {
    event.preventDefault()
   let kresponse = await fetch("/kform",      {
    headers: {"Content-Type": "application/json",},
    method: "POST",

    body: JSON.stringify({
        name: addKursInputElem.value,
  
    })
   })
   kresponse = await kresponse.json()
   kurslar()


   
});

async function kurslar(){
    let krespon = await fetch("/kurslar",{
        method: "GET",
    });
    krespon = await krespon.json()
 
    renderkurs(krespon.kdata);
    
}

function renderkurs(arr){
    selectKursElem.innerHTML = ""
    for (let i of arr){
        
        const optionElem = document.createElement('option')
        const delbtnElm = document.createElement('button')
        optionElem.appendChild(delbtnElm)
        optionElem.textContent= i.name
        selectKursElem.appendChild(optionElem)
        addKursInputElem.value = ""
    }
}


// manbalar bolimi
const mform = document.querySelector("#mform")
const minput = document.querySelector("#minput")

mform.addEventListener("submit", async event => {
    event.preventDefault()
   let mresponse = await fetch("/mform",      {
    headers: {"Content-Type": "application/json",},
    method: "POST",

    body: JSON.stringify({
        name: minput.value,
  
    })
   })
   mresponse = await mresponse.json()
   manbalar()


   
});

async function manbalar(){
    let mrespon = await fetch("/manbalar",{
        method: "GET",
    });
    mrespon = await mrespon.json()
    rendermanba(mrespon.mdata);
    
}

function rendermanba(arr){
    selectManbaElem.innerHTML = ""
    for (let i of arr){
        
        const moptionElem = document.createElement('option')
        const mdelbtnElm = document.createElement('button')
        moptionElem.appendChild(mdelbtnElm)
        moptionElem.textContent= i.name
        selectManbaElem.appendChild(moptionElem)
        minput.value = ""
    }
}
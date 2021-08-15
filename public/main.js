const Uquvdatabase = require("../moduls/uquvdatabase")

window.addEventListener("DOMContentLoaded", event=>{
    uquvchiadd()
})

async function uquvchiadd(){
    let response = await fetch("/add-popul", {
        method: "GET",
    })
    response = await response.json()

    console.log(response);
}

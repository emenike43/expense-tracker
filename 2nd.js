const con = document.getElementById("con")
const add = document.getElementById("add")
const inc = document.getElementById("inc")
const exp = document.getElementById("exp")
const last = document.getElementById("last")
const amo = document.getElementById("amo")
const desc =document.getElementById("desc")
const drop = document.getElementById("drop")
const no  = document.getElementById("no")
const can = document.getElementById("can")
const addi  = document.getElementById("add-bal")
const overlay = document.getElementById("overlay")
const bal = document.getElementById("bal")
const ball = document.getElementById("ball")
const opt = document.getElementById("opt")
const tinc = document.getElementById("tol-inc")
const texp = document.getElementById("tol-exp")
let show = false
let another = false
let sym = "+"
let symm = "+"
let hell = "fa fa-plus bg-[#E1F5EE] text-[#0F6E56]"
 let color = 'text-[#0F6E56]'

let active = "income"

function check(){
    if(drop.querySelectorAll("div").length=== 0){
        no.style.display ="block"
    }
    else{
        no.style.display ="none"
    }
}
opt.onchange = () =>{
    const symbols = opt.value
    const number = ball.textContent.replace(/[^0-9.]/g, "")

    ball.textContent = `${symbols}${number}`

}

add.onclick = () => {
    show = !show

    con.style.display = show? "block" : "none"
    overlay.style.display = show? "block"  : ""

    document.body.style.overflow = show ? "hidden" : "auto"
    
}
 can.onclick = () => {
   show = !show

    con.style.display = "none" 
    overlay.style.display = "none"  
    document.body.style.overflow = show ? "none" : "auto"
   }


addi.onclick = () => {
     show = !show

     document.body.style.overflow = show ? "auto" : "auto"
if(bal.value === ""){
    alert("Enter A Valid Amount")
    return

     
}
const symbols = opt.value

  const existing = parseFloat(ball.textContent.replace(/[^0-9.]/g, "").replace(".00", "")) || 0
  const newAmount = parseFloat(bal.value)
  const total = existing + newAmount
  ball.textContent = `${symbols}${total}.00`

con.style.display = "none" 
 overlay.style.display = "none"  

 bal.value = ""
}



inc.onclick = () => {
     hell = "fa fa-plus bg-[#E1F5EE] text-[#0F6E56]"
    symm ="+"
    color = 'text-[#0F6E56]'
    active = 'income'
  // make INC active
  inc.style.color = "white"
  inc.style.backgroundColor = "#1D9E75"
  inc.style.fontWeight = "bold"
  last.style.backgroundColor = "#1D9E75"
  last.textContent ="Add Income"

  


  // reset EXP
  exp.style.color = "#888"
  exp.style.backgroundColor = "black"
  exp.style.fontWeight = "normal"
}
exp.onclick = () => {
     hell = "fa fa-minus bg-[#FAECE7] text-[#993C1D]"
     symm ="-"
    color = 'text-[#D85A30]'
    active = "expense"
  // make EXP active
  exp.style.color = "white"
  exp.style.backgroundColor = "#D85A30"
  exp.style.fontWeight = "bold"
   last.style.backgroundColor = "#D85A30"
   last.textContent ="Add Expense"

  // reset INC
  inc.style.color = "#888"
  inc.style.backgroundColor = "black"
  inc.style.fontWeight = "normal"
}


last.onclick = () => {
     if(desc.value.trim() === "")
  {
    alert("enter a description")
    return

   }
   
if (amo.value === ""){
    alert("enter a valid amount")
    return
}
else{
    console.log
}


    const now = document.createElement("div")

    const sym = opt.value
      const amount = parseFloat(amo.value)
  const currentBalance = parseFloat(ball.textContent.replace(/[^0-9.]/g, "")) || 0
     
if (active === "expense" && amount > currentBalance) {
    alert("Insufficient balance! You don't have enough money 💸")
    return
  }

        if (active === "income") {

    const existing = parseFloat(ball.textContent.replace(/[^0-9.]/g, "")) || 0
     const newAmount = parseFloat(amo.value)
    tinc.textContent = `${sym}${existing + newAmount}.00`
     ball.textContent = `${sym}${existing + newAmount}.00`

  } else {
    const existing = parseFloat(ball.textContent.replace(/[^0-9.]/g, "")) || 0
    const newAmount = parseFloat(amo.value)
    texp.textContent = `${sym}${ newAmount}.00`
    ball.textContent = `${sym}${existing - newAmount}.00`
  }
       
       
       

       

    now.innerHTML = ` <div class="flex justify-between mb-2">
                     <div class="flex gap-3">
                          <i class=" ${hell} !text-[10px] p-3 h-9 w-9 rounded-[40px] text-center "></i>
                          <div>
                            <h class="text-white capitalize font-semibold">${desc.value}</h1>
                            <h2 class="text-[#bbb] text-[13px]">${active}</h2>
                           </div>
                      </div>
                       <div>
                         <h1 class="${color}">${symm}${sym}${amo.value}</h1>
                       </div>`

  
    document.getElementById("drop").appendChild(now)
    

    amo.value = ""
    desc.value =""
    check()
}


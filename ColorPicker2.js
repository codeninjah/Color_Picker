console.log("Test4")

// ÖVNINGARNA HITTAR MAN HÄR:
// https://www.ithsdistans.se/mod/folder/view.php?id=16759


 // BRA FÖR ATT TESTA SIG FRAM, ALLT FUNKAR, DET ÄR BARA BODY SOM INTE ÄNDRAR FÄRG UTAN LADDAS MED BRUNT (SISTA KNAPPEN)
 /*
let btns = document.getElementsByTagName("button")
let back = document.body.style
let j = 0;
console.log(btns.length) // 10 element med tag "button"

for (let i = 0; i < btns.length; i++) { // x => 10
    j = btns[i]
    btns[i].addEventListener('click', function(){
    back.backgroundColor = j.className
    console.log("Clicked!!")
  })
}
*/



//ÖVNING 1 FUNKAR PERFEKT MED FÖLJANDE KOD :D

/*
let btns = document.getElementsByTagName("button")
let back = document.body.style

for(let currentElement of btns) {
    currentElement.addEventListener('click', function(){
        back.backgroundColor = currentElement.className 
    })
}
*/



 //ÖVNING 2  - WORKS, TOGHETER WITH COLORS.JS, AND BOTH LINKED TO IN THE HTML FILE
 //JUST TREMOVE THE COMMENTS

 /*
 let input = document.querySelector('input')

 input.addEventListener('keydown', event => {
   if (event.key === 'Enter') {
     if (lowerCase.includes(input.value.toLowerCase())) {
       document.body.style.backgroundColor = input.value
     } else {
       alert('Color does not exist')
     }
   }
 })
 */
 


 






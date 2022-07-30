const subbtn = document.getElementById("q4");
        subbtn.addEventListener("click", prtSub);
        function prtSub() {
           alert("Query Submitted");
        }

let cont=document.getElementById("divcont");


cont.addEventListener("mouseover",()=>{
   document.getElementById("navbr").classList.add("disno");

})

cont.addEventListener("mouseleave",()=>{

   document.getElementById("navbr").classList.remove("disno");   
})

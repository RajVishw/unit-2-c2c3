document.querySelector("form").addEventListener("submit",myFun);
function myFun(event){
    event.preventDefault()
    let name=document.querySelector("#name").value;
    
    let id=document.querySelector("#employeeID").value;
   
    let dp=document.querySelector("#department").value;
    
    let exp=document.querySelector("#exp").value;

    let mail=document.querySelector("#email").value;
    
    let mbl=document.querySelector("#mbl").value;
    
    var tr=document.createElement("tr");

    var td1=document.createElement("td");
    td1.innerText=name;

   var td2=document.createElement("td");
   td2.innerText=id;

   var td3=document.createElement("td");
   td3.innerText=dp;

   var td4=document.createElement("td");
   td4.innerText=exp;

   var td5=document.createElement("td");
   td5.innerText=mail;

   var td6=document.createElement("td");
   td6.innerText=mbl;

   var td7=document.createElement("td");
   if(exp>5){
       td7.innerText="senior"
   }else if(exp>=2 && exp<=5){
       td7.innerText="junior"
   }else if(exp<=1){
       td7.innerText="fresher"
   }
   var td8=document.createElement("td")
   td8.innerText="delete"
   td8.style.backgroundColor="red"
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(tr);
}


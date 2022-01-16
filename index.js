const elementCount=document.getElementById("count");
let countNumber=parseInt(elementCount.innerText);
// console.log(element);
const elementButton=document.getElementById("counter-button");
elementButton.addEventListener("click",()=>{
    
    
    let newCountNumber = countNumber+1;
    
    elementCount.innerText=newCountNumber;
    countNumber=newCountNumber;
    console.log(countNumber);
    if(newCountNumber>100){
        elementCount.innerText=0;
        countNumber=0;
    }
   
})


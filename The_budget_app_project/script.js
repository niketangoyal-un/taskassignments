let add=document.getElementById("add");
let amount=document.getElementById("amount");
let type=document.getElementById("type");
let index=1;
add.addEventListener('click',()=>{
    let total=Number(document.getElementById("total").textContent);
    let ls=JSON.parse(localStorage.getItem("data")) || [];
let tablebody=document.getElementById("tablebody");
let tablebodyHTML=tablebody.innerHTML;
if(amount.value>0 && type.value=="salary"){
total+=Number(amount.value);

}else if(amount.value>0){
    total-=Number(amount.value);
}
if(amount.value>0){
    if(ls==[]){
        localStorage.setItem("data",JSON.stringify({amount:amount.value,type:type.value}));
    }else{
        ls.push({amount:amount.value,type:type.value});
        localStorage.setItem("data",JSON.stringify(ls));
    }
    tablebodyHTML=tablebodyHTML+` <tr class="border-b hover:bg-gray-100 transition">
    <td class="px-4 py-3">${index++}</td>
    <td class="px-4 py-3">${amount.value}</td>
    <td class="px-4 py-3">${type.value}</td>
    <td class="px-4 py-3 text-center">
    <button class="bg-green-500 cursor-pointer text-white px-3 py-1 rounded hover:bg-green-600" onclick=deleted(${index-1})>
    Delete
    </button>
    
    </td>
    </tr>`
    tablebody.innerHTML=tablebodyHTML
    amount.value=""
    document.getElementById("total").textContent=total;
}
})

document.addEventListener("DOMContentLoaded", () => {
    let ls=JSON.parse(localStorage.getItem("data")) || [];
    if(ls!=[]){
        let tablebody=document.getElementById("tablebody");
let s="";
let n=0;
ls.forEach((element,index) => {
    if(element.type=="salary"){
        n+=Number(element.amount);
    }else{
        n-=Number(element.amount);
    }
    s+=` <tr class="border-b hover:bg-gray-100 transition">
        <td class="px-4 py-3">${index+1}</td>
        <td class="px-4 py-3">${element.amount}</td>
        <td class="px-4 py-3">${element.type}</td>
        <td class="px-4 py-3 text-center">
          <button class="bg-green-500 cursor-pointer text-white px-3 py-1 rounded hover:bg-green-600" onclick="deleted(${index+1})" >
            Delete
          </button>
          
        </td>
      </tr>`
      index=index+1;
});

tablebody.innerHTML=s;
document.getElementById("total").textContent=n;

    }
});
function deleted(i){
    console.log(i)
    let ls=JSON.parse(localStorage.getItem("data")) ;
    ls=ls.filter((element,index)=>Number(index+1)!==Number(i)
    
    );
    console.log(ls)
    localStorage.setItem("data",JSON.stringify(ls));
window.location.reload();

}
function edit(){

}
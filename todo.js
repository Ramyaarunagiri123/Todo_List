const inputbox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function addTask(){
    if(inputbox.value ===''){
        alert("You must write anything");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listContainer.appendChild(li);
       let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    inputbox.value="";
    saveDate();
}
listContainer.addEventListener("click",e=>{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveDate();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDate();
}
},false);
function saveDate(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
   listContainer.innerHTML=localStorage.getItem("data");

}
showTask();
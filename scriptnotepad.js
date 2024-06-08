const allnotes=document.querySelector('.content-section');
const createbtn=document.querySelector('.btn');
let notes=document.querySelectorAll('input-box');

function shownotes(){
    allnotes.innerHTML=localStorage.getItem("notes");
}
shownotes();
function updatestorage(){
    localStorage.setItem("notes",allnotes.innerHTML);
}
createbtn.addEventListener('click',()=>{
    let inputbox=document.createElement("p");
    let img=document.createElement("img");
    inputbox.className="input-box";
    inputbox.setAttribute('contenteditable','true');
    img.src="icon-delete-19.jpg";
    allnotes.appendChild(inputbox).appendChild(img);
})
allnotes.addEventListener('click',(e)=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
    }
    if(e.target.tagName==="P"){
        notes=document.querySelectorAll('.input-box');
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updatestorage();
            }
        })
    }
})
document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
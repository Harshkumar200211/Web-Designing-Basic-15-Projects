const form=document.getElementById("form"), input=document.getElementById("task"), list=document.getElementById("list");
let tasks=JSON.parse(localStorage.getItem("todo-tasks")||"[]");
function save(){localStorage.setItem("todo-tasks",JSON.stringify(tasks));render();}
function render(){
  list.innerHTML="";
  tasks.forEach(task=>{
    const li=document.createElement("li"); if(task.done)li.classList.add("done");
    const check=document.createElement("input");check.type="checkbox";check.checked=task.done;
    check.setAttribute("aria-label","Mark task complete");
    check.addEventListener("change",()=>{task.done=check.checked;save();});
    const text=document.createElement("span");text.textContent=task.text;
    const del=document.createElement("button");del.className="delete";del.textContent="Delete";
    del.addEventListener("click",()=>{tasks=tasks.filter(t=>t.id!==task.id);save();});
    li.append(check,text,del);list.append(li);
  });
  document.getElementById("empty").hidden=tasks.length>0;
  document.getElementById("count").textContent=tasks.filter(t=>!t.done).length+" remaining";
}
form.addEventListener("submit",e=>{e.preventDefault();const text=input.value.trim();if(!text)return;tasks.push({id:Date.now(),text,done:false});input.value="";save();});
document.getElementById("clearDone").addEventListener("click",()=>{tasks=tasks.filter(t=>!t.done);save();});
render();
const form=document.getElementById("form");
const ids=["name","email","password","confirm"];
function showError(id,message){document.getElementById(id+"Error").textContent=message;document.getElementById(id).setAttribute("aria-invalid",String(Boolean(message)));}
form.addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const password=document.getElementById("password").value;
  const confirm=document.getElementById("confirm").value;
  const errors={
    name:name.length<2?"Enter at least 2 characters.":"",
    email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)?"":"Enter a valid email.",
    password:password.length>=8?"":"Use at least 8 characters.",
    confirm:confirm===password&&confirm?"":"Passwords do not match."
  };
  ids.forEach(id=>showError(id,errors[id]));
  document.getElementById("success").textContent=Object.values(errors).every(x=>!x)?"Form validated successfully! (Demo only)":"";
});
  // Validar Formulario
  const $submit = document.getElementById("submit"),
        $username = document.getElementById("username"),
        $password = document.getElementById("password"),
        $visible = document.getElementById("visible");
    
document.addEventListener("change", (e)=>{
if(e.target === $visible){
if($visible.checked === false) $password.type = "password";
else $password.type = "text";
}
});


document.addEventListener("click", (e)=>{
    if(e.target === $submit){
        if($password.value !== "" && $username.value !== ""){
            e.preventDefault();
            window.location.href = '../templates/productos.html'
         
        }
    }
})

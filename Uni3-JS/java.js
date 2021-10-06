
function validarFormulario() {
    usuario = document.getElementById("usuario");
    // de usuario.value buscar que al menos haya un @
    //!-->negar

        console.log(usuario.value.includes("@"));
    if(!usuario.value.includes("@")){
        alert("Tiene que contener un arroba");
        return false;
    }

    password = document.getElementById("password");
    if (password.value.length == 0) {
        alert("Error: No se ingreso la password");
        return false;
    }

    return true;
}














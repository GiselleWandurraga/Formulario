const datos = [];

function registrar() {

let registro={
nombre: document.getElementById("nombre").value,
apellidos: document.getElementById("apellidos").value,
tipo_documento: document.getElementById("tip_doc").value,
documento: document.getElementById("documento").value,
email: document.getElementById("email").value,
genero: document.querySelector('input[name="genero"]').value,
f_nacimiento: document.getElementById("fecha_n").value,

}
datos.push(registro)

document.getElementById("nombre").value = '';
document.getElementById("apellidos").value = '';
document.getElementById("tip_doc").value = 'TI';
document.getElementById("documento").value = '';
document.getElementById("fecha_n").value = '';
document.querySelector('input[name="genero"]').checked = false;
document.getElementById("email").value = '';

}

// alert("información guardada")
console.log(datos)

function validar() {
    if (document.getElementById("nombre").value == "") {
        document.getElementById("alert").textContent = "El campo nombre está vacío"
        setTimeout(() => {
            document.getElementById("alert").textContent = ""
        }, 3000);
    } else if (document.getElementById("apellidos").value == "") {
        document.getElementById("alert").textContent = "El campo apellido está vacío"
        setTimeout(() => {
            document.getElementById("alert").textContent = ""
        }, 3000);

        
    } else {
        guardar()
    }
}
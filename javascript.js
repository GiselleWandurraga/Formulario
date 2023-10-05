const datos = [];

function registrar() {

    let registro = {
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

console.log(datos)
function showAlert() {
    document.getElementById('alert').style.display = 'block';
}

function closeAlert() {
    document.getElementById('alert').style.display = 'none';
    }
function validar() {
    let verificadorc = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (document.getElementById("nombre").value == "") {
        document.getElementById("alert-content").textContent = "El campo nombre está vacío"
        showAlert()
    } else if (document.getElementById("apellidos").value == "") {
        document.getElementById("alert-content").textContent = "El campo apellido está vacío"
        showAlert()}
    else if (document.getElementById("tip_doc").value == "Seleccione una opcion") {
        document.getElementById("alert-content").textContent = "Debe seleccionar un tipo de documento"
        showAlert()
    }
    else if (document.getElementById("documento").value.length < 10) {
        document.getElementById("alert-content").textContent = "Ingrese un documento válido de 10 digitos"
        showAlert()
    
    }
    
    else if (!document.querySelector('input[name="genero"]:checked')) {
        document.getElementById("alert-content").textContent = "Seleccione un género"
        showAlert()

    }
    else if (document.getElementById("cel").value.length < 10) {
        document.getElementById("alert-content").textContent = "Ingrese un teléfono válido"
        showAlert()
    }
    else if (!verificadorc.test(document.getElementById("email").value)) {
        document.getElementById("alert-content").textContent = "Ingrese un correo"
        showAlert()

    }
    else if ((new Date().getFullYear() - new Date(document.getElementById("fecha_n").value).getFullYear()) < 18) {
        document.getElementById("alert-content").textContent = "Debe ser mayor de edad para continuar con el registro"
        showAlert()

    }

    else {
        registrar()
    }
}
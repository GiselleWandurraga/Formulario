const datos = [];
let op = null;
let indice = null;

function registrar() {


  let registro = {
    nombre: document.getElementById("nombre").value,
    apellidos: document.getElementById("apellidos").value,
    tipo_documento: document.getElementById("tip_doc").value,
    documento: document.getElementById("documento").value,
    email: document.getElementById("email").value,
    telefono: document.getElementById("cel").value,
    genero: document.querySelector('input[name="genero"]:checked').value,
    f_nacimiento: document.getElementById("fecha_n").value,

  }
  if (op === true) {
    datos[indice] = registro;
  } else {
    datos.push(registro)

  }

  document.getElementById("nombre").value = '';
  document.getElementById("apellidos").value = '';
  document.getElementById("tip_doc").selectedIndex = 0;
  document.getElementById("documento").value = '';
  document.getElementById("fecha_n").value = '';
  document.querySelector('input[name="genero"]:checked').checked = false;
  document.getElementById("email").value = '';
  document.getElementById("cel").value = '';
}

console.log(datos)
function showAlert() {
  document.getElementById('alert').style.display = 'block';
}

function closeAlert() {
  document.getElementById('alert').style.display = 'none';
}
function validar() {
  let verificadorc = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (document.getElementById("nombre").value == "") {
    document.getElementById("alert-content").textContent = "El campo nombre está vacío"
    showAlert()
  } else if (document.getElementById("apellidos").value == "") {
    document.getElementById("alert-content").textContent = "El campo apellido está vacío"
    showAlert()
  }
  else if (document.getElementById("tip_doc").value == "Seleccione una opcion") {
    document.getElementById("alert-content").textContent = "Debe seleccionar un tipo de documento"
    showAlert()
  }
  else if (document.getElementById("documento").value == "") {
    document.getElementById("alert-content").textContent = "El campo documento esta vacío"
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
  else if (document.getElementById("cel").value == "") {
    document.getElementById("alert-content").textContent = "El campo teléfono está vacío "
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
    document.getElementById("tabla").innerHTML = ""
    digitar_tabla()
    digitar_card()

    op = false
  }
}

function digitar_tabla() {
  let frag = document.createDocumentFragment()

  datos.forEach((item, index) => {
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")
    let td8 = document.createElement("td")
    let td9 = document.createElement("td")

    let editar = document.createElement("button")
    let eliminar = document.createElement("button")
    editar.textContent = "📝"
    editar.addEventListener("click", () => {
      edita(item, index)
    })
    eliminar.textContent = "❌"
    eliminar.addEventListener("click", () => {
      eliminarRegistro(index)
    })
    td1.textContent = item.nombre
    td2.textContent = item.apellidos
    td3.textContent = item.tipo_documento
    td4.textContent = item.documento
    td5.textContent = item.telefono
    td6.textContent = item.email
    td7.textContent = item.genero
    td8.textContent = item.f_nacimiento

    td9.appendChild(editar)
    td9.appendChild(eliminar)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    tr.appendChild(td7)
    tr.appendChild(td8)
    tr.appendChild(td9)
    frag.appendChild(tr)
    document.getElementById("tabla").appendChild(frag)
  })
}

function edita(r, i) {
  op = true
  indice = i
  console.log(r);
  document.getElementById("nombre").value = r.nombre
  document.getElementById("apellidos").value = r.apellidos
  document.getElementById("email").value = r.email
  document.getElementById("tip_doc").value = r.tipo_documento
  document.getElementById("documento").value = r.documento
  document.getElementById("cel").value = r.telefono
  if (r.genero === "Femenino") {
    document.querySelector('input[name="genero"][value="Femenino"]').checked = true;
  } else if (r.genero === "Masculino") {
    document.querySelector('input[name="genero"][value="Masculino"]').checked = true;
  }

  document.getElementById("fecha_n").value = r.f_nacimiento
}

function eliminarRegistro(index) {
  datos.splice(index, 1)
  document.getElementById("tabla").innerHTML = ""
  digitar_tabla()
}
//  -----------------------------------------------

function digitar_card() {
  let frag = document.createDocumentFragment()

  datos.forEach((item, index) => {
    let crd = document.createElement("crd")
    let crd2 = document.createElement("card")
    let crd3 = document.createElement("card")
    let crd1 = document.createElement("card")
    let crd4 = document.createElement("card")
    let crd5 = document.createElement("card")
    let crd6 = document.createElement("card")
    let crd7 = document.createElement("card")
    let crd8 = document.createElement("card")
    let crd9 = document.createElement("card")

    let editar = document.createElement("button")
    let eliminar = document.createElement("button")
    editar.textContent = "📝"
    editar.addEventListener("click", () => {
      edita(item, index)
    })
    eliminar.textContent = "❌"
    eliminar.addEventListener("click", () => {
      eliminarRegistro(index)
    })
    crd1.textContent = item.nombre
    crd2.textContent = item.apellidos
    crd3.textContent = item.tipo_documento
    crd4.textContent = item.documento
    crd5.textContent = item.telefono
    crd6.textContent = item.email
    crd7.textContent = item.genero
    crd8.textCont = item.f_nacimiento

    crd9.appendChild(editar)
    crd9.appendChild(eliminar)
    crd.appendChild(crd1)
    crd.appendChild(crd2)
    crd.appendChild(crd3)
    crd.appendChild(crd4)
    crd.appendChild(crd5)
    crd.appendChild(crd6)
    crd.appendChild(crd7)
    crd.appendChild(crd8)
    crd.appendChild(crd9)
    frag.appendChild(crd)
    document.getElementById("cont_cards").appendChild(frag)
  })
}

function edita(r, i) {
  op = true
  indice = i
  console.log(r);
  document.getElementById("nombre").value = r.nombre
  document.getElementById("apellidos").value = r.apellidos
  document.getElementById("email").value = r.email
  document.getElementById("tip_doc").value = r.tipo_documento
  document.getElementById("documento").value = r.documento
  document.getElementById("cel").value = r.telefono
  if (r.genero === "Femenino") {
    document.querySelector('input[name="genero"][value="Femenino"]').checked = true;
  } else if (r.genero === "Masculino") {
    document.querySelector('input[name="genero"][value="Masculino"]').checked = true;
  }

  document.getElementById("fecha_n").value = r.f_nacimiento
}

function eliminarRegistro(index) {
  datos.splice(index, 1)
  document.getElementById("tabla").innerHTML = ""
  digitar_tabla()
}
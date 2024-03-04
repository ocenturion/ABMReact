import { Form } from "./components/Form";
import { Tabla } from "./components/Tabla";
import './App.css'
import { useEffect, useState } from "react";
import { ModalEliminar } from "./components/ModalEliminar";
import { Toast } from "./components/Toast";
import { ModalModificar } from "./components/ModalModificar";

function App() {

  let usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
  const [usuarios,setUsuarios] = useState(usuariosGuardados);
  useEffect(()=>{
    localStorage.setItem('usuarios',JSON.stringify(usuarios))
  },[usuarios]);

  function crearUsuario(nombre,apellido,edad) {
    setUsuarios([...usuarios,{
      id: usuarios.length + 1,
      nombre,
      apellido,
      edad
    }])
    document.getElementById('nombre').focus()

    document.getElementById("msgToast").innerHTML = "Usuario agregado";
    document.getElementById("myToast").setAttribute("class", "toast align-items-center text-bg-primary border-0")
    const toastLiveExample = document.getElementById('myToast')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()

  }

  function deleteUsuario(idUsuario){
    console.log(idUsuario)
    navigator.vibrate(10)
    setUsuarios(usuarios.filter(u => u.id != idUsuario))
    var myModalEl = document.getElementById('modalEliminar')
    bootstrap.Modal.getInstance(myModalEl).hide()

    document.getElementById("msgToast").innerHTML = "Usuario eliminado correctamente";
    document.getElementById("myToast").setAttribute("class", "toast align-items-center text-bg-success border-0")
    const toastLiveExample = document.getElementById('myToast')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()

  }

  function mostrarModalEliminar(idUsuario) {
    console.log(idUsuario);
    let miModal = new bootstrap.Modal(document.getElementById("modalEliminar"))
    document.getElementById('idEliminar').value = idUsuario
    miModal.show()
  }

  function mostrarModalModificar(idUsuario) {
    console.log(idUsuario);
    let miModal = new bootstrap.Modal(document.getElementById("modalModificar"))
    document.getElementById('idModificar').value = idUsuario
    miModal.show()
  }

  function modificarUsuario() {

    var myModalEl = document.getElementById('modalModificar')
    bootstrap.Modal.getInstance(myModalEl).hide()
    
  }

  return (
    <>
      <Form fCrearUsuario={crearUsuario}/>
      <Tabla lista={usuarios} fMostrarModalEliminar={mostrarModalEliminar} fMostrarModalModificar={mostrarModalModificar} />
      <ModalEliminar deleteUsuario={deleteUsuario}/>
      <ModalModificar fModificarUsuario={modificarUsuario}/>
      <Toast />
    </>
  )
}

export default App

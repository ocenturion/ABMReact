import { Form } from "./components/Form";
import { Tabla } from "./components/Tabla";
import './App.css'
import { useEffect, useState } from "react";

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
  }

  function deleteUsuario(idUsuario){
    console.log(idUsuario)
    setUsuarios(usuarios.filter(u => u.id != idUsuario))
  }

  return (
    <>
      <Form fCrearUsuario={crearUsuario}/>
      <Tabla lista={usuarios} deleteUsuario={deleteUsuario}/>
    </>
  )
}

export default App

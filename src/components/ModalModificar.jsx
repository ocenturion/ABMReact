
import { useState } from "react";

export function ModalModificar({modificarUsuario, usuarioParam}) {

    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [edad,setEdad] = useState("")

    console.log(usuarioParam);

    function modificarUsuario() {
        
    }

  return <div className="modal" id="modalModificar">
  <div className="modal-dialog">
      <div className="modal-content">
          <div className="modal-header">
              <h5 className="modal-title">Modificar Usuario</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <input id="idModificar" type="hidden" value="0" />
          <div className="modal-body">
            <div className="my-3 text-start">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" className="form-control" id="nombre" onChange={(e)=> setNombre(e.target.value)} value={nombre}/>
            </div>
            <div className="my-3 text-start">
            <label htmlFor="apellido">Apellido:</label>
                <input type="text" className="form-control" id="apellido" onChange={(e)=> setApellido(e.target.value)} value={apellido}/>
            </div>
            <div className="my-3 text-start">
            <label htmlFor="edad">Edad:</label>
                <input type="text" className="form-control" id="edad" onChange={(e)=> setEdad(e.target.value)} value={edad}/>
            </div>            
          </div>
          <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-success" onClick={()=>{modificarUsuario(document.getElementById('idModificar').value)}}>Modificar</button>
          </div>
      </div>
  </div>
</div>
}


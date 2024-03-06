
import { useState, useEffect } from "react";

export function ModalModificar({fModificarUsuario, usuarioParam}) {

    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [edad,setEdad] = useState("")
    
    useEffect(() => {
        if (usuarioParam) {
          setNombre(usuarioParam.nombre || "");
          setApellido(usuarioParam.apellido || "");
          setEdad(usuarioParam.edad || "");
        }
    }, [usuarioParam]);

    function modificarUsuario(id, nombre, apellido, edad) {
        console.log(id, nombre, apellido, edad);
        fModificarUsuario(id, nombre, apellido, edad);        
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
              <button type="button" className="btn btn-success" onClick={()=>{modificarUsuario(usuarioParam.id, nombre, apellido, edad)}}>Modificar</button>
          </div>
      </div>
  </div>
</div>
}


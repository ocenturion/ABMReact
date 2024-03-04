
export function ModalModificar({modificarUsuario}) {
  return <div className="modal" id="modalModificar">
  <div className="modal-dialog">
      <div className="modal-content">
          <div className="modal-header">
              <h5 className="modal-title">Modificar Usuario</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <input id="idModificar" type="hidden" value="0" />
          <div className="modal-body">
              <p>Dentro del modal modificar</p>
          </div>
          <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-danger" onClick={()=>{modificarUsuario(document.getElementById('idModificar').value)}}>Modificar</button>
          </div>
      </div>
  </div>
</div>
}


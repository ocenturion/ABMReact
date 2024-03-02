export function ModalEliminar({deleteUsuario}) {

    return <div className="modal" id="modalEliminar">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Eliminar Usuario</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <input id="idEliminar" type="hidden" value="0" />
                <div className="modal-body">
                    <p>Esta seguro que desea eliminar este usuario?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" className="btn btn-danger" onClick={()=>{deleteUsuario(document.getElementById('idEliminar').value)}}>Eliminar</button>
                </div>
            </div>
        </div>
    </div>
    
}
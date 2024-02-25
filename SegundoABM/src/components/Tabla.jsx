export function Tabla({lista,deleteUsuario}) {
    return <div>
        <table className="table table-striped table-primary table-hover table-bordered border-primary">
            <thead className="table-dark">
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Edad</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="tbody">
            {lista.map((usuario,index)=>{
                return <tr key={index}>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.apellido}</td>
                    <td>{usuario.edad}</td>
                    <td>
                        <a data-toggle="tooltip" title="Modificar"><i className="bi bi-pencil text-success"></i></a>
                        <a data-toggle="tooltip" title="Eliminar" onClick={()=>{deleteUsuario(usuario.id)}}><i className="bi bi-trash text-danger"></i></a>
                    </td>
                </tr>
            })}
            </tbody>
        </table>
    </div>
}
import { useState } from "react"

export function Form({fCrearUsuario}) {
    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [edad,setEdad] = useState("")

    function AgregarUsuario(e) {
        e.preventDefault()
        fCrearUsuario(nombre,apellido,edad)
        setNombre('')
        setApellido('')
        setEdad('')
    }

    return <form onSubmit={AgregarUsuario}>
        <div className="my-3 text-start">
            <label className="text-white" htmlFor="nombre">Nombre:</label>
            <input type="text" className="form-control" id="nombre" onChange={(e)=> setNombre(e.target.value)} value={nombre}/>
        </div>
        <div className="my-3 text-start">
        <label className="text-white" htmlFor="apellido">Apellido:</label>
            <input type="text" className="form-control" id="apellido" onChange={(e)=> setApellido(e.target.value)} value={apellido}/>
        </div>
        <div className="my-3 text-start">
        <label className="text-white" htmlFor="edad">Edad:</label>
            <input type="text" className="form-control" id="edad" onChange={(e)=> setEdad(e.target.value)} value={edad}/>
        </div>
        <div className="my-3">
            <button className="btn btn-primary mb-3">Agregar</button>
        </div>
    </form>
}
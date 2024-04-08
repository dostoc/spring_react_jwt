import Axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



export default function AgregarEmpleado() {
    

    // revisar recomendaciones de react-router - uso redirect
    const navegacion = useNavigate();

    const[empleado, setEmpleado] = useState(
        {
            nombre:"",
            departamento:"",
            salario:""
        }
    )

    const{nombre, departamento, salario} = empleado

    const onInputChange = (e) => {
        //spread operator ... (expandir los atributos de obj empleado)
        setEmpleado({...empleado, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const urlBase ="http://localhost:8080/rh-app/empleados";
        await Axios.post(urlBase, empleado);
        //redirigimos a la pagina de inicio
        navegacion('/');

    }

    return (
        <div className='container'>
            <div className='container' style={{ margin: "30px 0 0 0" }}>
                <h3>Agregar Empleado</h3>
            </div>

            <form onSubmit = {(e) => onSubmit(e)} >
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name='nombre'required={true}
                    value = {nombre} onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="departamento" className="form-label">Departamento</label>
                    <input type="text" className="form-control" id="departamento" name='departamento'
                    value = {departamento} onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="salario" className="form-label">salario</label>
                    <input type="number" step="any" className="form-control" id="salario" name='salario'
                    value = {salario} onChange={(e) => onInputChange(e)}
                    />
                </div>

                <div className='text-center'>
                    <button type="submit" className="btn btn-waring btn-sm me-3">Submit</button>
                    <a href='/' className='btn btn-danger btn-sm'>Regresar</a>
                </div>
                
            </form>

        </div>
    )
}

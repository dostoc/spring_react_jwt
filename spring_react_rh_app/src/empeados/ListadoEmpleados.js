import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

export default function ListadoEmpleados() {

    

    const urlBase = "http://localhost:8080/rh-app/empleados";

    const[empleados, setEmpleados] = useState([]);

    useEffect(() => {
        cargarEmpleados();
    }, []);

    const cargarEmpleados = async () => {
        const resultado = await axios.get(urlBase);
        console.log("Resultado de cargar empleados");
        console.log(resultado.data);
        setEmpleados(resultado.data);
    }


    return (
        <div className="container">


            <div className="container text-center" style={{ margin: "30px" }}>
                <h3>Sistema de recursos de empleados</h3>
            </div>
            <table className="table table-stripted table table-hover aling-middle">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Departamento</th>
                        <th scope="col">Sueldo</th>
                        <th scope="col">Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // iteramos arreglo de empleados
                        empleados.map((empleado, indice) => (
                    <tr key={indice}>
                        <th scope="row">{empleado.idEmpleado}</th>
                        <td>{empleado.nombre}</td>
                        <td>{empleado.departamento}</td>
                        <td>
                            <NumericFormat value={empleado.salario}
                            displayType={'text'}
                            thousandSeparator=',' prefix={'$'}
                            decimalScale={2} fixedDecimalScale/>
                        </td>
                        <td className='text-center'>
                            <Link to={`/editar/{empleado.idEmpleado}`}
                            className='btn btn-warning btn-sm me-3'>Editar</Link>
                            
                        </td>
                    </tr>
                    ))
                    }
                </tbody>
            </table>

        </div>
    )
}

package com.jonadv.rh.controlador;

import com.jonadv.rh.modelo.Empleado;
import com.jonadv.rh.servicios.IEmpleadoServicio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

// http://localhost:8080/rh-app/  contexto de la aplicacion
// peticiones de react :3000

@RequestMapping("rh-app")
@CrossOrigin(value = "http://localhost:3000")

public class EmpleadoControlador {


    private static final Logger logger =
            LoggerFactory.getLogger(EmpleadoControlador.class);

    @Autowired
    public IEmpleadoServicio empleadoServicio;

    // http://localhost:8080/rh-app/empleados
    @GetMapping("/empleados")
    public List<Empleado> obtenerEmpledos(){
        var empleados = empleadoServicio.listarEmpleados();
        empleados.forEach((empleado -> logger.info(empleado.toString())));
        return empleados;
    }

    @PostMapping("/empleados")
    public Empleado agregarEmpleado(@RequestBody Empleado empleado){
        logger.info("Empleado a agregar:" + empleado);
        return empleadoServicio.guardarEmpleado(empleado);
    }


}

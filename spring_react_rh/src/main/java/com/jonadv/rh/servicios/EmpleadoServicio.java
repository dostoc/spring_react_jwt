package com.jonadv.rh.servicios;


import com.jonadv.rh.modelo.Empleado;
import com.jonadv.rh.repocitorio.EmpleadoRepocitorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpleadoServicio implements IEmpleadoServicio {

    @Autowired
    private EmpleadoRepocitorio empleadoRepocitorio;

    @Override
    public List<Empleado> listarEmpleados() {
        return empleadoRepocitorio.findAll();
    }

    @Override
    public Empleado buscarEmpleadoPorId(Integer idEmpleado) {
        // como esto regresa un optional se le indica que si no encuentra registro que regrese un null
        Empleado empleado = empleadoRepocitorio.findById(idEmpleado).orElse(null);
        return empleado;
    }

    @Override
    public Empleado guardarEmpleado(Empleado empleado) {
        return empleadoRepocitorio.save(empleado);
    }

    @Override
    public void eliminarEmpleado(Empleado empleado) {
        empleadoRepocitorio.delete(empleado);
    }
}

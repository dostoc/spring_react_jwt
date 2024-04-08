package com.jonadv.rh.servicios;

import com.jonadv.rh.modelo.Empleado;

import java.util.List;

public interface IEmpleadoServicio {

    public List<Empleado> listarEmpleados();

    public Empleado buscarEmpleadoPorId(Integer idEmpleado);

    public Empleado guardarEmpleado(Empleado empleado);

    public void eliminarEmpleado(Empleado empleado);



}

package com.jonadv.rh.repocitorio;

import com.jonadv.rh.modelo.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmpleadoRepocitorio extends JpaRepository<Empleado, Integer> {
}

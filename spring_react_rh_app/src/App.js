import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleados from "./empeados/ListadoEmpleados";
import Navegacion from "./plantilla/Navegacion";
import AgregarEmpleado from "./empeados/AgregarEmpleado";
import EditarEmpleado from "./empeados/EditarEmpleado";

function App() {
  

  return (
    <div className="container text-center">
      <BrowserRouter>
        <Navegacion/>
        <Routes>
          <Route exact path='/' element={<ListadoEmpleados/>}/>
          <Route exact path='/agregar' element={<AgregarEmpleado/>}/>
          <Route exact path='/editar/:id' element={<EditarEmpleado/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;

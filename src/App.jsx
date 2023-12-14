import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ListaTareas from './componentes/ListaTareas/listaTareas';
import FormularioTarea from './componentes/FormularioTarea/FormularioTarea';


function App() {
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    return tareasGuardadas;
  });

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]);
  };

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const marcarTerminada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].estado = true;
    setTareas(nuevasTareas);
  };

  return (
    <>
      <div className='container d-flex flex-column align-items-center'>
        <h1>Task APP</h1>
        <ListaTareas tareas={tareas} eliminarTarea={eliminarTarea} marcarTerminada={marcarTerminada} />
        <FormularioTarea agregarTarea={agregarTarea} />
      </div>
    </>
  );
}

export default App;

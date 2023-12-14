import React, { useState } from "react";

function FormularioTarea({ agregarTarea }) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaTarea = {
      nombre,
      descripcion,
      estado: false, 
    };

    agregarTarea(nuevaTarea);

    setNombre('');
    setDescripcion('');
  };

  return (
    <>
    <div className="w-100 bg-primary-subtle p-3 rounded">
    <h2 className="w-100">Crear tarea:</h2>
    <form className="w-100 d-flex flex-column mb-5" onSubmit={handleSubmit}>
      <div className="d-flex flex-column w-100 mb-2">
        <label htmlFor="nombre">Nombre de la tarea:</label>
        <input required placeholder="Aqui va el nombre de la tarea..." type="text" name="nombre" id="nombre" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>
      <div className="d-flex flex-column w-100 mb-3">
        <label htmlFor="descripcion">Descripcion de la tarea:</label>
        <textarea placeholder="una descripcion, es opcional..." className="form-control resize-none" name="descripcion" id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
      </div>
      <button className="btn btn-primary" type="submit">Crear tarea</button>
    </form>
    </div>
    </>
  );
}

export default FormularioTarea;
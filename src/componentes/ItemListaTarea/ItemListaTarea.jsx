import React from "react";
import './ItemListaTarea.css';
function ItemListaTarea({ nombre, descripcion, estado, index, eliminarTarea, marcarTerminada }) {
  return (
    <div className='d-flex flex-column flex-lg-row w-100 justify-content-between align-items-lg-center bg-primary-subtle p-2 rounded mb-2 overflow-hidden'>
      <div className='d-flex flex-column ctn-datos justify-content-center align-items-start'>
        <h4 className="m-0 text-truncate mw-90">{nombre}</h4>
        <p className='mb-0 text-truncate mw-90 overflow-hidden descripcion'>{descripcion}</p>
      </div>
      <div >
        <span className={`badge ${estado ? "bg-success" : "bg-warning"} me-2`}>{estado ? 'Terminado' : 'Pendiente'}</span>
        {!estado && <button className='btn btn-success me-2' onClick={() => marcarTerminada(index)}>Terminada</button>}
        <button className='btn btn-danger' onClick={() => { eliminarTarea(index) }}>Eliminar</button>
      </div>
    </div>
  );
}

export default ItemListaTarea;

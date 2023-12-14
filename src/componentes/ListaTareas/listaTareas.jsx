import React from "react";
import ItemListaTarea from "../ItemListaTarea/ItemListaTarea";
import './listaTareas.css';
function ListaTareas({ tareas, eliminarTarea, marcarTerminada }) {
    return (
        <div className=" w-100 d-flex flex-column align-items-start justify-content-center mb-3">
            <h2 className="">Mis tareas:</h2>
            <div className="ctn-tareas">
                {tareas.length === 0 ? (
                    <p className="w-100 text-center">Sin tareas registradas...</p>
                ) : (
                    tareas.map((tarea, index) => (
                        <ItemListaTarea
                            key={index}
                            index={index}
                            {...tarea}
                            eliminarTarea={eliminarTarea}
                            marcarTerminada={marcarTerminada}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default ListaTareas;
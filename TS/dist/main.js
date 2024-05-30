//Importar la clase Tarea desde task.ts
import { Tarea } from "./task.js";
//Obtener referencias a los elementos del DOM
var tareaForm = document.getElementById('task-form');
var tareaInput = document.getElementById('task-input');
var tareaList = document.getElementById('task-list');
//Crear array para almacenar las tareas
var tareas = [];
//Funcion para agregar una nueva tarea
function addTask(descripcion) {
    //Crear una nueva instancia de la clase Tarea
    var nuevaTarea = new Tarea(descripcion);
    //Agregar la tarea al array de tareas
    tareas.push(nuevaTarea);
    //Actualizar la lista de tareas en el DOM
    renderTareas();
}
//Funcion para renderizar la lista de tareas en el DOM
function renderTareas() {
    //Limpiar la lista de tareas en el DOM
    tareaList.innerHTML = '';
    //Iterar sobre todas las tareas
    tareas.forEach(function (tarea) {
        var li = document.createElement('li');
        li.textContent = tarea.descripcion;
        //Botón para eliminar tarea
        var eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = "Eliminar Tarea";
        eliminarBtn.classList.add('eliminar-btn');
        eliminarBtn.addEventListener('click', function () {
            eliminarTarea(tarea);
        });
        //Agregar clase completado si la tarea esta completa
        if (tarea.completado) {
            li.classList.add('completada');
        }
        //Agregar un evento clic para marcar un tarea completada
        li.addEventListener('click', function () {
            tarea.tareaCompletada();
            renderTareas();
        });
        li.appendChild(eliminarBtn);
        tareaList.appendChild(li);
    });
}
/* Funcion para eliminar una tarea */
function eliminarTarea(tareaEliminar) {
    tareas = tareas.filter(function (tarea) { return tarea !== tareaEliminar; });
    renderTareas();
}
//Agregar un evento de envio al formulario para agregar nuevas tareas
tareaForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var descripcion = tareaInput.value.trim();
    if (descripcion !== '') {
        addTask(descripcion);
        tareaInput.value = "";
    }
});
//Renderizar la lista de tareas al cargar la pagina
renderTareas();

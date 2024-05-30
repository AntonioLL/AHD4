//Definir la clase Task
var Tarea = /** @class */ (function () {
    //Contructor de la clase Tarea
    function Tarea(descripcion) {
        this.descripcion = descripcion;
        this.completado = false;
    }
    //Metodo para marcar la tarea como completada
    Tarea.prototype.tareaCompletada = function () {
        this.completado = !this.completado;
    };
    return Tarea;
}());
export { Tarea };

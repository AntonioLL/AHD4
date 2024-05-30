# Gestor de Tareas

Este proyecto es un simple gestor de tareas desarrollado en Javascript, diseñado para permitir a los usuarios agregar, completar y eliminar tareas.

## Estructura del proyecto

El proyecto está organizado de la siguiente manera:

- `index.hmtl`: Contiene la estrucutra básica de la página web con el formulario para agregar tareas y la lista de tareas.
- `style.css`: Archivo de estilos para dar formato a la página.
- `src/`
    - `task.ts`: Clase JavaScript para representar una tarea.
    - `main.ts `: Código principal JavaScript que maneja la lógica de la apllicación.

## Uso

Una vez que el proyecto este funcionando en el navegador, el usuario puede:

- Agregar nuevas tareas utuilizando el formulario proporcionado
- Marcar las tareas como completadas haciendo clic sobre la tarea correspondiente.
- Eliminar tareas haciendo clic en el botón de eliminar junto a cada tarea.

# Configuracion de TypeScript
El archivo  `tsconfig.json` es utilizado para configurar el compilador de TypeScript. Aqui estan las principales opciones de configuracion.

- `"target": "ES5"` : Indica que el codigio TypeScript se compilara a JavaScript compatible con ES5. Asegura una mayor compatibilidad con navegadores y entornos antiguos.
- `"module": "ES6"` : Indica que se utilizaran modulos de ES6 en el codigo TypeScript. Esto permite utilizar las caracteristicas de importacion/exportacion de ES6 en tu codigo
- `"outDir": "./dist"` : Especifica el directorio de salida para los archivos compilados.
- `"strict": "true"` : Habilitar todas las opciones estrictas del compilador de TypeScript para mejorar la seguridad y la calidad del codigo.
- `"include": "["src/**/*.ts"]"` : Especifica que archivos TypeScript deben ser incluidos en la compilacion.
# Prueba React OpenBank

Este proyecto simula un wizard de generación de contraseñas.

## Tecnologías

El proyecto ha sido realizado en ReactJS, utilizando el lenguaje Typescript y la librería Redux para control de estado.

Incluye un sistema de traducciones basado en `react-i18next`, con los idiomas español (por defecto) e inglés. El lenguaje se establece a partir del idioma del navegador.

Todos los componentes son componentes funcionales, utilizando _hooks_ cuando sean necesarios.

### Estilos

Las hojas de estilos están basadas en el framework [Tailwind CSS](https://tailwindcss.com/). Se escogió este framework por la facilidad para extraer componentes, sus filosofías _utility first_ y _mobile first_ y la familiaridad del autor con el mismo.

## Lanzar el proyecto

Esta aplicación ha sido probada en Windows, bajo el sistema WSL2 con **Node v12.18.3** y **npm v6.14.8**.

Para iniciar la aplicación, lanzar desde la línea de comandos y en la carpeta raíz

`npm start`

Esto abrirá la aplicación en modo desarrollo. Acceder a [http://localhost:3000](http://localhost:3000) para visualizarla en el navegador.

## Editar las hojas de estilos

Para editar los estilos o crear nuevos componentes, después de modificado el archivo `/src/styles/tailwind.css` se debe lanzar el script de generación de Tailwind:

`npm run build:css`

## Tests

Los tests de esta aplicación han sido realizados con Jest y React Testing Library. Las test suites se encuentran en la carpeta `/src/__tests__`.

Para lanzar los tests ejecutar el comando

`npm test`

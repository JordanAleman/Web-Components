# Configuración de Web Components con Storybook y Webpack

Esta guía te llevará a través de los pasos necesarios para configurar un proyecto de Web Components utilizando Storybook para la documentación y Webpack para la construcción del proyecto.

## Requisitos Previos

Asegúrate de tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/get-npm) instalados en tu sistema. Puedes verificar si están instalados ejecutando:

```bash
node -v
npm -v
```

# 1. Crear el Proyecto

Primero, crea un nuevo directorio para tu proyecto y navega a él:

```bash
mkdir my-web-component
cd my-web-component
```

Inicializa un nuevo proyecto Node.js:

```bash
npm init -y
```

<br>

# 2. Instalar Storybook

Instala Storybook para Web Components:

```bash
npm install --save @storybook/web-components
```

Inicializa Storybook en tu proyecto. Para esta instalación escogemos Webpack 5 cuando pregunta:

```bash
npx sb init --type web_components
```
Esto creará una configuración básica de Storybook en tu proyecto.

<br>

# 3. Instalar Webpack

## Guía de Instalación y Configuración

### Tabla de Contenidos
- [3.1. Instalación de Webpack](#1-instalación-de-webpack)
- [3.2. Descripción de Paquetes](#2-descripción-de-paquetes)

## 3.1. Instalación de Webpack

Instala Webpack y el servidor de desarrollo de Webpack:

```bash
npm install --save-dev webpack webpack-cli webpack-dev-server
```

## 3.2. Descripción de Paquetes

### webpack
- **Descripción**: Es el núcleo de la herramienta de empaquetado. Se encarga de tomar tus módulos y recursos y empaquetarlos en uno o más archivos de salida.
- **Uso**: Siempre es necesario para cualquier proyecto que utilice Webpack.

### webpack-cli
- **Descripción**: Es la interfaz de línea de comandos para Webpack. Permite ejecutar Webpack desde la línea de comandos y le proporciona comandos para empaquetar tu proyecto.
- **Uso**: Es necesario si deseas usar Webpack desde la línea de comandos (por ejemplo, para construir tu proyecto).

### webpack-dev-server
- **Descripción**: Proporciona un servidor de desarrollo con características como recarga en caliente (hot-reloading) y una vista previa en el navegador de los cambios en tiempo real.
- **Uso**: Es útil durante el desarrollo para servir tu aplicación y proporcionar una experiencia de desarrollo más fluida.

<br>

# 4. Configuración de Webpack

Crea un archivo de configuración de Webpack en la raíz de tu proyecto llamado `webpack.config.js`:

```javascript
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './stories/Components/index.js',  // Punto de entrada principal de tu aplicación
  output: {
    filename: 'bundle.js',  // Archivo resultante de la minificación
    path: path.resolve(__dirname, 'dist'),  // Carpeta de salida
  },
  mode: 'production',  // Modo de producción para minificar
};
```
Este archivo configura Webpack para empaquetar tu código en un archivo bundle.js en la carpeta dist.

<br>

# 5. Configuración de Storybook

Storybook ya debería estar configurado, pero puedes ajustar la configuración según tus necesidades. Los archivos de configuración se encuentran en la carpeta `.storybook`.

Puedes modificar el archivo `main.js` en esa carpeta para incluir cualquier configuración adicional que necesites.

<br>

# 6. Scripts en `package.json`

Agrega los siguientes scripts a tu `package.json` para ejecutar Webpack y Storybook:

```json
"scripts": {
  "build": "webpack",
  "start": "webpack serve",
  "storybook": "start-storybook -p 6006",
  "build-storybook": "build-storybook"
}
```

<br>

# 7. Crear Estructura de Archivos

Crea las siguientes carpetas y archivos para organizar tu proyecto:

```bash
mkdir stories
mkdir dist
mkdir stories/Components
touch stories/Components/index.js
touch stories/Components/my-component.js
```
Puedes colocar tus Web Components en stories/Components/my-component.js y tu punto de entrada principal en stories/Components/index.js.

<br>

# 8. Ejecutar el Proyecto

- Para iniciar el servidor de desarrollo de Webpack:

  ```bash
  npm start
  ```
- Para iniciar Storybook:

  ```bash
  npm run storybook
  ```
- Para construir el proyecto para producción:

  ```bash
  npm run build
  ```
- Para construir la documentación de Storybook para producción:

  ```bash
  npm run build-storybook
  ```

  
### Notas Adicionales

1. **Comando `npm start`**:
   - El comando `npm start` se asocia normalmente con `webpack serve`, que inicia el servidor de desarrollo con características de recarga en caliente.

2. **Comando `npm run build`**:
   - El comando `npm run build` ejecuta Webpack para empaquetar tu proyecto para producción. Esto generalmente incluye minificación y optimización del código.

3. **Comando `npm run build-storybook`**:
   - Este comando construye una versión estática de la documentación de Storybook, que puedes desplegar en un servidor o utilizar para la documentación estática.

<br><br>

# Conclusión

¡Tu entorno de desarrollo está listo! Ahora puedes comenzar a desarrollar tus Web Components y documentarlos utilizando Storybook.

Si encuentras algún problema o necesitas más información, consulta la documentación oficial de [Storybook](https://storybook.js.org/docs) y [Webpack](https://webpack.js.org/concepts/).
  
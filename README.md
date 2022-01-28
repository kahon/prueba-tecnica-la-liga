# **Prueba técnica React de LaLiga**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Versión de Node: 12.16.1 o superior
Versión de NPM: 6.13.4 o superiror
Compatibilidad: ES6 Navegadores evergreen (Chrome, Firefox, Edge, Safari)

## **Instrucciones**

- [Instrucciones](src/docs/laliga-prueba-tecnica-instrucciones.md)

## **Entorno de desarrollo local**

### `npm install`

Para instalación de dependencias

### `npm start`

Entorno de desarrollo

## **Memoria**

### **Preparando entorno de desarrollo**

Al hacer el `npm install` me he encontrado con 13 vulnerabilidades altas y una critica. Y tras ejecutar el comando `npm audit fix` sigue teniendo las mismas vulnerabilidades.

#### **Solucionar vulnerabilidades**

- He ejecutado `npm audit fix --force` y sigue sin solucionarse.
- Ejecuto `npm update` para comprobar si al actualizar los paquetes se solucionan las vulnerabilidades. Pero siguen sin solucionarse las vulnerabilidades.
  > Como es un proyecto de prueba vamos a considerar este paso como un paso que no es crítico. Si estuviesemos en un proyecto que se desarrolla para un entorno de producción habría que analizar mejor las versiones de los paquetes y comprobar donde se encuentran las vulnerabilidades y como podría afertar estas al proyecto. Y así también como podemos resolver estas.

#### **Acciones en la preparación**

- He eliminado todos los carets de las versiones del `package.json` para evitar que cualquier update de algún paquete pueda romper el funcionamiento de la app.
- Al ejecutar `npm start` he obtenido el siguiente error de compilación:
  Failed to compile.

```
C:/Users/Fer/Downloads/prueba-tecnica-front-v3/prueba-tecnica-front-v3/node_modules/pretty-format/build/index.d.ts
TypeScript error in C:/Users/Fer/Downloads/prueba-tecnica-front-v3/prueba-tecnica-front-v3/node_modules/pretty-format/build/index.d.ts(7,13):
'=' expected.  TS1005

    5 |  * LICENSE file in the root directory of this source tree.
    6 |  */
    7 | import type { NewPlugin, Options, OptionsReceived } from './types';
    |             ^
    8 | export type { Colors, CompareKeys, Config, Options, OptionsReceived, OldPlugin, NewPlugin, Plugin, Plugins, PrettyFormatOptions, Printer, Refs, Theme, } from './types';
    9 | export declare const DEFAULT_OPTIONS: Options;
    10 | /**
```

> Este error se produce porque el proyecto está usando el paquete **3.7.2** de `typescript`, pero el paquete `pretty-format` utiliza una sintaxis nueva de typescript que está disponible a partir del paquete **3.8** para arriba.

> ERROR SOLUCIONADO instalando el paquete **3.9.10** de `typescript`.

#### **Paquetes instalados**

##### **En aplicación**

- `typescript 3.9.10`: instalado para arreglar un bug del proyecto
- `styled-components`: instalado por requisito del proyecto.

##### **En desarrollo**

- `redux-devtools-extension`: para poder hacer debugging del estado de redux
- `@types/jest`: aunque estaba instalado en la aplicación (no en dependencias de desarrollo), no me detectaba el autocompletado en vscode. Así que lo he instalado en dependencia de desarrollo y ya me autocompleta el código. Siendo una librería de test, pienso que tiene más sentido que esté en las dependencias de desarrollo.

#### **Estructuración del proyecto**

He reestructurado el proyecto creando las carpetas `src/components` y `src/containers`.

- Dentro de la carpeta `components` he creado una carpeta para cada componente. En esta carpeta se encuentra el estilo del componente y el componente dentro del fichero `index.tsx`. Además he incluido una carpeta `tests` donde se incluyen los test unitarios de el componente específico.
- Dentro de la carpeta `containers` van los componentes que son páginas. Y se estructura también en carpetas por cada 'container'. Siendo la estructura similar a la descrita para los componentes.

Para una mejor comprensión del código y facilidad en el uso de las importaciones, he configurado el parámetro `baseUrl` en el `tsconfig.json`. De este modo las importaciones de los componentes se hacen todas relativas a la carpeta `./src/` evitando importaciones del estilo `../../`.

#### **Creación del Interfaz**

Los estilos los estoy creando todos con styled-components. Solo me gustaría comentar que he añadido lo que sería una configuración global de los estilos en el `index.html` en la etiqueta `<style>` del `<head>`.

```
      * {
        margin: 0;
        padding: 0;
      }
```

De este modo evito que hayan padding automáticos o márgenes automáticos que desajusten tanto la vista en escritorio como en móvil. Y todos los márgenes y paddings son ordenados desde cada elemento de forma manual.

#### **Servicios para la API**

He creado una carpeta de services y dentro una carpeta API.

- userAPI: contiene todas las funciones para hacer las llamadas al login y a la Api de usuarios. Definida interfaz UserLogin para hacer las llamadas a la API. Y también tiene la función asíncrona getUsers que trae a los usuarios de la API de forma paginada.

## **Funcionalides requeridas**

### **Login**

He realizado una vista para poder introducir el usuario y la contraseña. El botón "Iniciar Sesión" activa la acción ACTIONS.API.LOGIN.REQUEST que hace la petición a la API del login a través de la función `usersAPI.login(user:UserLogin)`.

Si el resultado es satisfactorio se ejecuta la acción `ACTIONS.API.LOGIN.RECEIVED_TOKEN.` Esta acción almacena en el `store` el token, en la variable `state.token`. Y además almacena en el `localStorage` del servidor el token.

Si el resultado es error, se ejecuta la acción `ACTIONS.API.ERROR`. Esta almacen el error en la variable `state.error`.

Si existe un `error` distinto al `''` se ejecutará un modal de error durante varios segundos. Componente `ErrorMessage`.

> si se introduce una contraseña distinta a la indicada el login también es success, pero esto es cosa del servidor que acepta cualquier contraseña para el usuario indicado.

> Cuando arranca la aplicación se ejecuta la acción `ACTIONS.API.LOGIN.RECOVER_TOKEN` la cual accede al `localStorage` y si existe un token lo almacena en el estado.

### **Listado**

Una vez el Login es correcto, a través del Componente creado `CondicionalRoute` detectamos si existe un token y la routa se redirecciona a `/users`.

Una vez entramos desde el `useEffect` del componente `UserListPage` comprobamos si hay datos ya cargados en el store. Si no hay, se hace la primera llamada a la API a través de la acción `ACTIONS.API.USERS.GET_USERS` de la página 1. Esta acción ejecuta la función `usersAPI.getUsers(page:number)` que trae los datos con el interfaz `GetUserResponse` con los datos (test creado).

La información de la petición se guarda en `state.users`. Este estado se muestra en el componente `UserListPage` accediendo a los valores del estado.

Si hay un error en la petición, entonces se llama a la acción `ACTIONS.API.ERROR`. Esta almacena el error en la variable `state.error`.

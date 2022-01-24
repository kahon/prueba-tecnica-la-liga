# Prueba técnica React de LaLiga
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Versión de Node: 12.16.1 o superior
Versión de NPM: 6.13.4 o superiror
Compatibilidad: ES6 Navegadores evergreen (Chrome, Firefox, Edge, Safari)

## Instrucciones
- [Instrucciones](src/docs/laliga-prueba-tecnica-instrucciones.md)

## Entorno de desarrollo local

### `npm install`
Para instalación de dependencias

### `npm start`
Entorno de desarrollo

## Memoria

## Preparando entorno de desarrollo
Al hacer el `npm install` me he encontrado con 13 vulnerabilidades altas y una critica. Y tras ejecutar el comando `npm audit fix` sigue teniendo las mismas vulnerabilidades.

### Solucionar vulnerabilidades
- He ejecutado `npm audit fix --force` y sigue sin solucionarse.
- Ejecuto `npm update` para comprobar si al actualizar los paquetes se solucionan las vulnerabilidades. Pero siguen sin solucionarse las vulnerabilidades.
> Como es un proyecto de prueba vamos a considerar este paso como un paso que no es crítico. Si estuviesemos en un proyecto que se desarrolla para un entorno de producción habría que analizar mejor las versiones de los paquetes y comprobar donde se encuentran las vulnerabilidades y como podría afertar estas al proyecto. Y así también como podemos resolver estas.

### Acciones en la preparación
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

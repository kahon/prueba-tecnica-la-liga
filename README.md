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
- [x] He ejecutado `npm audit fix --force` y sigue sin solucionarse.
- [x] Ejecuto `npm update` para comprobar si al actualizar los paquetes se solucionan las vulnerabilidades. Pero siguen sin solucionarse las vulnerabilidades.
> Como es un proyecto de prueba vamos a considerar este paso como un paso que no es crítico. Si estuviesemos en un proyecto que se desarrolla para un entorno de producción habría que analizar mejor las versiones de los paquetes y comprobar donde se encuentran las vulnerabilidades y como podría afertar estas al proyecto. Y así también como podemos resolver estas.


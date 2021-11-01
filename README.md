# Huron Games
## Huron Games es un e-commerce para la venta del juego de mesa de Among Us y merchandising.

## Contiene

- Registro y login de usuarios: los campos son validados al realizar el registro
- Filtro por categorías: tomando las categorías de la base de datos se generan filtros de productos
- Carrito: cuenta vista completa de los items del carrito, su total, y la opción de sacar un producto del carrito
- Vistas de listas de productos: vista general de productos con foto y detalles mínimos
- Vista de detalles: vista con todos los detalles del producto y la opción de agregar una cantidad del mismo
- Control de stock: revisa que los usuarios no puedan agregar más items al carrito de los que hay disponibles, y revisa el stock real al momento de generar la compra

## Instalación

1. Forkeá y cloná el repositorio
2. Parado en la raíz del proyecto corré el comando

```bash
  npm install
```
3. Estará disponible en http://localhost:3000

## Dependencias
- Bootstrap para dar formato a la aplicación.
- React Router Dom para la navegación
- FireBase para persistencia de datos
- CryptoJS para encriptar y desencriptar las contraseñas de usuarios - https://www.npmjs.com/package/crypto-js
- dateformat para dar formato a las fechas - https://www.npmjs.com/package/dateformat

## Huron Games en funcionamiento
![Huron Games en funcionamiento](https://github.com/juanmagelay/amongus-react/blob/main/huronFuncionamiento.gif)

## Autor
[@juanmagelay](https://www.github.com/juanmagelay)

2021 - Curso de React en CoderHouse


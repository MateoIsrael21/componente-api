# Componente-01-usuario_espe

Este es un componente web reutilizable desarrollado en Stencil para renderizar datos desde una API REST en una tabla. El componente toma como entrada una URL que apunta a la API REST y muestra los datos en una tabla bien estructurada y estilizada.

## Características

- **Propiedad de Entrada (prop):** 
  - `apiUrl`: El componente recibe una propiedad `apiUrl` que contiene la URL de la API REST.
  - La API debe proporcionar datos en formato JSON, que el componente consumirá para llenar la tabla.
  
- **Estructura de Datos:** 
  - La API debe devolver un array de objetos JSON, donde cada objeto representará una fila en la tabla.
  - Ejemplo de estructura de datos devuelta por la API:
    ```json
    [
      { "id": 1, "nombre": "Producto A", "precio": 10.99, "imagen": "url_imagen", "stock": 20 },
      { "id": 2, "nombre": "Producto B", "precio": 15.99, "imagen": "url_imagen", "stock": 35 }
    ]
    ```

- **Renderización de la Tabla:**
  - El componente renderiza una tabla con encabezado (`thead`) y cuerpo (`tbody`).
  - Las columnas mostradas son: `ID`, `Nombre`, `Precio`, `Imagen`, y `Stock`.

- **Manejo de Errores:**
  - El componente maneja errores en la obtención de datos de la API, mostrando un mensaje adecuado en caso de falla.

- **Estilo y Diseño:**
  - La tabla está diseñada para ser legible y visualmente atractiva.
  - Se utilizan CSS Grid o Flexbox para un diseño responsive.

## Ejemplo de Uso

Para utilizar este componente, simplemente inclúyelo en tu proyecto y pasa la URL de la API REST como propiedad:

```html
<my-table api-url="https://api.example.com/products"></my-table>

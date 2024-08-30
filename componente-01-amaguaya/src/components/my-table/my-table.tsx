import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'my-table',
  styleUrl: 'my-table.css',
  shadow: true,
})
export class MyTable {
  @Prop() apiUrl: string;
  @State() data: any[] = [];
  @State() error: string;

  // Método que se ejecuta cuando el componente se monta
  componentWillLoad() {
    this.fetchData();
  }

  // Método para obtener los datos de la API
  async fetchData() {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error('Error al obtener los datos de la API');
      }
      this.data = await response.json();
    } catch (error) {
      this.error = error.message;
    }
  }

  render() {
    if (this.error) {
      return <p>{this.error}</p>;
    }

    if (this.data.length === 0) {
      return <p>Cargando datos...</p>;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {this.data.map(item => (
            <tr>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.precio}</td>
              <td><img src={item.imagen} alt={item.nombre} width="50" /></td>
              <td>{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

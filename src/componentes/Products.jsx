import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Products() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ customId: "", name: "", price: "", category: "" });
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://back-p43y.onrender.com/api/products", { withCredentials: true });
      setProducts(response.data);
    } catch (error) {
      Swal.fire("Error", "Error al cargar los productos", "error");
      console.error("Error al obtener los productos:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingProduct) {
      setEditingProduct({ ...editingProduct, [name]: value });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProduct) {
        await axios.put(
          `https://back-p43y.onrender.com/api/products/${editingProduct.customId}`,
          editingProduct,
          { withCredentials: true }
        );
        Swal.fire("Éxito", "Producto actualizado correctamente", "success");
      } else {
        await axios.post("https://back-p43y.onrender.com/api/products", newProduct, { withCredentials: true });
        Swal.fire("Éxito", "Producto creado correctamente", "success");
      }
      setNewProduct({ customId: "", name: "", price: "", category: "" });
      setEditingProduct(null);
      fetchProducts();
    } catch (error) {
      Swal.fire("Error", "Error al guardar el producto", "error");
      console.error("Error en handleSubmit:", error);
    }
  };

  const startEditing = (product) => {
    setEditingProduct(product);
    setNewProduct({ customId: "", name: "", price: "", category: "" });
  };

  const cancelEditing = () => {
    setEditingProduct(null);
    setNewProduct({ customId: "", name: "", price: "", category: "" });
  };

  const deleteProduct = async (customId) => {
    try {
      const result = await Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás revertir esta acción",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar",
      });

      if (result.isConfirmed) {
        await axios.delete(`https://back-p43y.onrender.com/api/products/${customId}`, { withCredentials: true });
        Swal.fire("Eliminado", "El producto ha sido eliminado", "success");
        fetchProducts();
      }
    } catch (error) {
      Swal.fire("Error", "Error al eliminar el producto", "error");
      console.error("Error en deleteProduct:", error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-3">{editingProduct ? "Editar Producto" : "Añadir Nuevo Producto"}</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="row g-3">
            <div className="col-md-6">
              <input type="text" name="customId" className="form-control" placeholder="Custom ID" value={editingProduct ? editingProduct.customId : newProduct.customId} onChange={handleInputChange} disabled={editingProduct} />
            </div>
            <div className="col-md-6">
              <input type="text" name="name" className="form-control" placeholder="Nombre" value={editingProduct ? editingProduct.name : newProduct.name} onChange={handleInputChange} />
            </div>
            <div className="col-md-6">
              <input type="number" name="price" className="form-control" placeholder="Precio" value={editingProduct ? editingProduct.price : newProduct.price} onChange={handleInputChange} />
            </div>
            <div className="col-md-6">
              <input type="text" name="category" className="form-control" placeholder="Categoría" value={editingProduct ? editingProduct.category : newProduct.category} onChange={handleInputChange} />
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <button type="submit" className="btn btn-primary">{editingProduct ? "Actualizar" : "Añadir"} Producto</button>
            {editingProduct && (
              <button type="button" className="btn btn-secondary" onClick={cancelEditing}>Cancelar</button>
            )}
          </div>
        </form>

        <h2 className="text-center mb-3">Lista de Productos</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover text-center">
            <thead className="table-dark">
              <tr>
                <th>Custom ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Categoría</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.customId}>
                  <td>{product.customId}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>
                    <button onClick={() => startEditing(product)} className="btn btn-warning btn-sm me-2">
                      <i className="bi bi-pencil"></i> Editar
                    </button>
                    <button onClick={() => deleteProduct(product.customId)} className="btn btn-danger btn-sm">
                      <i className="bi bi-trash"></i> Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Products;

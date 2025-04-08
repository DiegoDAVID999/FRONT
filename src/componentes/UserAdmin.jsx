"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import { useAuth } from "../contexts/AuthContext"

function UserAdmin() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [newUser, setNewUser] = useState({ username: "", password: "", role: "vendedor" })
  const { userRole } = useAuth()

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await axios.get("/api/users")
      setUsers(response.data)
    } catch (error) {
      console.error("Error al obtener usuarios:", error)
      Swal.fire("Error", "No se pudieron cargar los usuarios", "error")
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewUser({ ...newUser, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("/api/auth/register", newUser)
      Swal.fire("Éxito", "Usuario creado correctamente", "success")
      setNewUser({ username: "", password: "", role: "vendedor" })
      fetchUsers()
    } catch (error) {
      console.error("Error al crear usuario:", error)
      Swal.fire("Error", "No se pudo crear el usuario", "error")
    }
  }

  const handleRoleChange = async (username, newRole) => {
    try {
      await axios.put(`/api/auth/role/${username}`, { role: newRole })
      Swal.fire("Éxito", "Rol actualizado correctamente", "success")
      fetchUsers()
    } catch (error) {
      console.error("Error al actualizar rol:", error)
      Swal.fire("Error", "No se pudo actualizar el rol", "error")
    }
  }

  const handleDeleteUser = async (username) => {
    try {
      const result = await Swal.fire({
        title: "¿Estás seguro?",
        text: `¿Deseas eliminar al usuario ${username}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      })

      if (result.isConfirmed) {
        await axios.delete(`/api/users/${username}`)
        Swal.fire("Eliminado", "Usuario eliminado correctamente", "success")
        fetchUsers()
      }
    } catch (error) {
      console.error("Error al eliminar usuario:", error)
      Swal.fire("Error", "No se pudo eliminar el usuario", "error")
    }
  }

  // Si el usuario no es admin, no debería poder acceder a esta página
  if (userRole !== "admin") {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">
          <h4 className="alert-heading">Acceso denegado</h4>
          <p>No tienes permisos para acceder a esta página.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Administración de Usuarios</h2>

      <div className="card mb-4">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Crear Nuevo Usuario</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label">Nombre de Usuario</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={newUser.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={newUser.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Rol</label>
                <select className="form-select" name="role" value={newUser.role} onChange={handleInputChange}>
                  <option value="vendedor">Vendedor</option>
                  <option value="admin">Administrador</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Crear Usuario
            </button>
          </form>
        </div>
      </div>

      <div className="card">
        <div className="card-header bg-secondary text-white">
          <h5 className="mb-0">Lista de Usuarios</h5>
        </div>
        <div className="card-body">
          {loading ? (
            <div className="text-center my-3">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Usuario</th>
                    <th>Rol</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id || user.username}>
                      <td>{user.username}</td>
                      <td>
                        <span className={`badge ${user.role === "admin" ? "bg-danger" : "bg-success"}`}>
                          {user.role === "admin" ? "Administrador" : "Vendedor"}
                        </span>
                      </td>
                      <td>
                        <div className="btn-group">
                          <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() =>
                              handleRoleChange(user.username, user.role === "admin" ? "vendedor" : "admin")
                            }
                          >
                            Cambiar a {user.role === "admin" ? "Vendedor" : "Admin"}
                          </button>
                          <button
                            className="btn btn-sm btn-outline-danger ms-2"
                            onClick={() => handleDeleteUser(user.username)}
                          >
                            Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserAdmin


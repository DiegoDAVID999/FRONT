"use client"

import { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import axios from "axios"

function RoleDebugger() {
  const { userRole, username, logout } = useAuth()
  const [storedRole, setStoredRole] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const role = localStorage.getItem("userRole")
    setStoredRole(role || "No definido")
  }, [])

  const handleFixRole = async () => {
    try {
      setLoading(true)
      setMessage("Verificando usuario en la base de datos...")

      // Obtener información del usuario actual desde el backend
      const response = await axios.get("/api/auth/me")

      if (response.data && response.data.role) {
        const correctRole = response.data.role

        // Actualizar el localStorage con el rol correcto
        localStorage.setItem("userRole", correctRole)
        setStoredRole(correctRole)

        setMessage(
          `Rol corregido a: ${correctRole}. Por favor, cierra sesión y vuelve a iniciar para aplicar los cambios.`,
        )
      } else {
        setMessage("No se pudo obtener el rol del usuario desde el servidor.")
      }
    } catch (error) {
      console.error("Error al corregir el rol:", error)
      setMessage("Error al corregir el rol. Intenta cerrar sesión y volver a iniciar.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card mt-4">
      <div className="card-header bg-warning">
        <h5 className="mb-0">Depurador de Roles</h5>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <p>
            <strong>Usuario actual:</strong> {username}
          </p>
          <p>
            <strong>Rol en contexto:</strong> {userRole}
          </p>
          <p>
            <strong>Rol en localStorage:</strong> {storedRole}
          </p>
        </div>

        {message && <div className="alert alert-info mb-3">{message}</div>}

        <div className="d-flex gap-2">
          <button className="btn btn-warning" onClick={handleFixRole} disabled={loading}>
            {loading ? "Corrigiendo..." : "Corregir Rol"}
          </button>

          <button className="btn btn-danger" onClick={logout}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  )
}

export default RoleDebugger


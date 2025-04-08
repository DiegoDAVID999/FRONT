// // "use client"

// // import { Navigate } from "react-router-dom"
// // import { useAuth } from "../contexts/AuthContext"

// // function ProtectedRoute({ children, requiredRole }) {
// //   const { isAuthenticated, hasAccess } = useAuth()

// //   if (!isAuthenticated) {
// //     // Si el usuario no está autenticado, redirigir al login
// //     return <Navigate to="/login" replace />
// //   }

// //   if (requiredRole && !hasAccess(requiredRole)) {
// //     // Si se requiere un rol específico y el usuario no tiene acceso, redirigir al dashboard
// //     return <Navigate to="/dashboard" replace />
// //   }

// //   // Si el usuario está autenticado y tiene el rol requerido, mostrar el componente
// //   return children
// // }

// // export default ProtectedRoute

// "use client"

// import { Navigate } from "react-router-dom"
// import { useAuth } from "../contexts/AuthContext"

// function ProtectedRoute({ children, requiredRole }) {
//   const { isAuthenticated, hasAccess } = useAuth()

//   // Si el usuario no está autenticado, redirigir al login
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />
//   }

//   // Si se requiere un rol específico y el usuario no tiene acceso, redirigir al dashboard
//   if (requiredRole && !hasAccess(requiredRole)) {
//     return <Navigate to="/dashboard" replace />
//   }

//   // Si el usuario está autenticado y tiene el rol requerido, mostrar el componente
//   return children
// }

// export default ProtectedRoute

"use client"

import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

function ProtectedRoute({ children, requiredRole }) {
  const { isAuthenticated, userRole, hasAccess } = useAuth()

  console.log("ProtectedRoute - Verificando acceso:", {
    isAuthenticated,
    userRole,
    requiredRole,
    hasAccess: hasAccess(requiredRole),
  })

  // Si el usuario no está autenticado, redirigir al login
  if (!isAuthenticated) {
    console.log("Usuario no autenticado, redirigiendo a login")
    return <Navigate to="/login" replace />
  }

  // Si se requiere un rol específico y el usuario no tiene acceso, redirigir al dashboard
  if (requiredRole && !hasAccess(requiredRole)) {
    console.log(`Acceso denegado: se requiere rol '${requiredRole}', usuario tiene rol '${userRole}'`)
    return <Navigate to="/dashboard" replace />
  }

  // Si el usuario está autenticado y tiene el rol requerido, mostrar el componente
  console.log("Acceso permitido")
  return children
}

export default ProtectedRoute


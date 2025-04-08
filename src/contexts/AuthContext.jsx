

// // // // import { createContext, useState, useContext, useEffect } from "react"

// // // // const AuthContext = createContext(null)

// // // // export const AuthProvider = ({ children }) => {
// // // //   const [isAuthenticated, setIsAuthenticated] = useState(false)

// // // //   useEffect(() => {
// // // //     const token = localStorage.getItem("token")
// // // //     setIsAuthenticated(!!token)
// // // //   }, [])

// // // //   const login = (token) => {
// // // //     localStorage.setItem("token", token)
// // // //     setIsAuthenticated(true)
// // // //   }

// // // //   const logout = () => {
// // // //     localStorage.removeItem("token")
// // // //     setIsAuthenticated(false)
// // // //   }

// // // //   return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
// // // // }

// // // // export const useAuth = () => useContext(AuthContext)

// // // "use client"

// // // import { createContext, useState, useContext, useEffect } from "react"
// // // import { useNavigate } from "react-router-dom"

// // // const AuthContext = createContext(null)

// // // export const AuthProvider = ({ children }) => {
// // //   const [isAuthenticated, setIsAuthenticated] = useState(false)
// // //   const [userRole, setUserRole] = useState(null)
// // //   const [username, setUsername] = useState(null)
// // //   const navigate = useNavigate()

// // //   useEffect(() => {
// // //     const token = localStorage.getItem("token")
// // //     const storedRole = localStorage.getItem("userRole")
// // //     const storedUsername = localStorage.getItem("username")

// // //     if (token) {
// // //       setIsAuthenticated(true)
// // //       setUserRole(storedRole)
// // //       setUsername(storedUsername)
// // //     }
// // //   }, [])

// // //   const login = (token, userData) => {
// // //     localStorage.setItem("token", token)
// // //     localStorage.setItem("userRole", userData.role)
// // //     localStorage.setItem("username", userData.username)

// // //     setIsAuthenticated(true)
// // //     setUserRole(userData.role)
// // //     setUsername(userData.username)
// // //   }

// // //   const logout = () => {
// // //     localStorage.removeItem("token")
// // //     localStorage.removeItem("userRole")
// // //     localStorage.removeItem("username")

// // //     setIsAuthenticated(false)
// // //     setUserRole(null)
// // //     setUsername(null)

// // //     navigate("/login")
// // //   }

// // //   // Función para verificar si el usuario tiene permiso para acceder a una ruta
// // //   const hasAccess = (requiredRole) => {
// // //     if (!requiredRole) return isAuthenticated
// // //     if (userRole === "admin") return true // Admin tiene acceso a todo
// // //     return userRole === requiredRole
// // //   }

// // //   return (
// // //     <AuthContext.Provider
// // //       value={{
// // //         isAuthenticated,
// // //         userRole,
// // //         username,
// // //         login,
// // //         logout,
// // //         hasAccess,
// // //       }}
// // //     >
// // //       {children}
// // //     </AuthContext.Provider>
// // //   )
// // // }

// // // export const useAuth = () => useContext(AuthContext)

// // "use client"

// // import { createContext, useState, useContext, useEffect } from "react"
// // import { useNavigate } from "react-router-dom"

// // const AuthContext = createContext(null)

// // export const AuthProvider = ({ children }) => {
// //   const [isAuthenticated, setIsAuthenticated] = useState(false)
// //   const [userRole, setUserRole] = useState(null)
// //   const [username, setUsername] = useState(null)
// //   const navigate = useNavigate()

// //   useEffect(() => {
// //     const token = localStorage.getItem("token")
// //     const storedRole = localStorage.getItem("userRole")
// //     const storedUsername = localStorage.getItem("username")

// //     if (token) {
// //       setIsAuthenticated(true)
// //       setUserRole(storedRole)
// //       setUsername(storedUsername)
// //     } else {
// //       // Si no hay token, redirigir al login
// //       navigate("/login")
// //     }
// //   }, [navigate])

// //   const login = (token, userData) => {
// //     localStorage.setItem("token", token)
// //     localStorage.setItem("userRole", userData.role)
// //     localStorage.setItem("username", userData.username)

// //     setIsAuthenticated(true)
// //     setUserRole(userData.role)
// //     setUsername(userData.username)
// //   }

// //   const logout = () => {
// //     localStorage.removeItem("token")
// //     localStorage.removeItem("userRole")
// //     localStorage.removeItem("username")

// //     setIsAuthenticated(false)
// //     setUserRole(null)
// //     setUsername(null)

// //     navigate("/login")
// //   }

// //   // Función para verificar si el usuario tiene permiso para acceder a una ruta
// //   const hasAccess = (requiredRole) => {
// //     if (!requiredRole) return isAuthenticated
// //     if (userRole === "admin") return true // Admin tiene acceso a todo
// //     return userRole === requiredRole
// //   }

// //   return (
// //     <AuthContext.Provider
// //       value={{
// //         isAuthenticated,
// //         userRole,
// //         username,
// //         login,
// //         logout,
// //         hasAccess,
// //       }}
// //     >
// //       {children}
// //     </AuthContext.Provider>
// //   )
// // }

// // export const useAuth = () => useContext(AuthContext)

// "use client"

// import { createContext, useState, useContext, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// // import jwt_decode from "jwt-decode" // Si tienes esta dependencia, si no, puedes usar otra forma de decodificar
// import { jwtDecode } from "jwt-decode";

// const AuthContext = createContext(null)

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const [userRole, setUserRole] = useState(null)
//   const [username, setUsername] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const navigate = useNavigate()

//   useEffect(() => {
//     const checkAuth = () => {
//       const token = localStorage.getItem("token")

//       if (!token) {
//         setIsAuthenticated(false)
//         setUserRole(null)
//         setUsername(null)
//         setLoading(false)
//         return
//       }

//       try {
//         // Intentar decodificar el token para verificar si ha expirado
//         // Si no tienes jwt_decode, puedes omitir esta verificación
//         const decoded = jwtDecode(token)
//         const currentTime = Date.now() / 1000

//         if (decoded.exp < currentTime) {
//           // Token expirado
//           console.log("Token expirado, cerrando sesión")
//           logout()
//           return
//         }

//         // Token válido, cargar datos del usuario
//         const storedRole = localStorage.getItem("userRole")
//         const storedUsername = localStorage.getItem("username")

//         console.log("Datos recuperados del localStorage:", {
//           username: storedUsername,
//           role: storedRole,
//         })

//         setIsAuthenticated(true)
//         setUserRole(storedRole)
//         setUsername(storedUsername)
//       } catch (error) {
//         console.error("Error al verificar el token:", error)
//         logout()
//       } finally {
//         setLoading(false)
//       }
//     }

//     checkAuth()
//   }, [navigate])

//   const login = (token, userData) => {
//     if (!userData || !userData.role) {
//       console.error("Datos de usuario incompletos:", userData)
//       return
//     }

//     console.log("Guardando datos de usuario:", userData)

//     localStorage.setItem("token", token)
//     localStorage.setItem("userRole", userData.role)
//     localStorage.setItem("username", userData.username)

//     setIsAuthenticated(true)
//     setUserRole(userData.role)
//     setUsername(userData.username)
//   }

//   const logout = () => {
//     localStorage.removeItem("token")
//     localStorage.removeItem("userRole")
//     localStorage.removeItem("username")

//     setIsAuthenticated(false)
//     setUserRole(null)
//     setUsername(null)

//     navigate("/login")
//   }

//   // Función para verificar si el usuario tiene permiso para acceder a una ruta
//   const hasAccess = (requiredRole) => {
//     if (!requiredRole) return isAuthenticated
//     if (userRole === "admin") return true // Admin tiene acceso a todo
//     return userRole === requiredRole
//   }

//   if (loading) {
//     return (
//       <div className="d-flex justify-content-center align-items-center min-vh-100">
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Cargando...</span>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         isAuthenticated,
//         userRole,
//         username,
//         login,
//         logout,
//         hasAccess,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = () => useContext(AuthContext)

"use client"

import { createContext, useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
// import jwtdecode from "jwt-decode" // Si tienes esta dependencia, si no, puedes usar otra forma de decodificar

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userRole, setUserRole] = useState(null)
  const [username, setUsername] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token")

      if (!token) {
        setIsAuthenticated(false)
        setUserRole(null)
        setUsername(null)
        setLoading(false)
        return
      }

      try {
        // Intentar decodificar el token para verificar si ha expirado
        // Si no tienes jwt_decode, puedes omitir esta verificación
        const decoded = jwtDecode(token)
        const currentTime = Date.now() / 1000

        if (decoded.exp < currentTime) {
          // Token expirado
          console.log("Token expirado, cerrando sesión")
          logout()
          return
        }

        // Token válido, cargar datos del usuario
        const storedRole = localStorage.getItem("userRole")
        const storedUsername = localStorage.getItem("username")

        console.log("Datos recuperados del localStorage:", {
          username: storedUsername,
          role: storedRole,
        })

        setIsAuthenticated(true)
        setUserRole(storedRole)
        setUsername(storedUsername)
      } catch (error) {
        console.error("Error al verificar el token:", error)
        logout()
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [navigate])

  const login = (token, userData) => {
    if (!userData || !userData.role) {
      console.error("Datos de usuario incompletos:", userData)
      return
    }

    console.log("Guardando datos de usuario:", userData)

    localStorage.setItem("token", token)
    localStorage.setItem("userRole", userData.role)
    localStorage.setItem("username", userData.username)

    setIsAuthenticated(true)
    setUserRole(userData.role)
    setUsername(userData.username)
  }

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userRole")
    localStorage.removeItem("username")

    setIsAuthenticated(false)
    setUserRole(null)
    setUsername(null)

    navigate("/login")
  }

  // Función para verificar si el usuario tiene permiso para acceder a una ruta
  const hasAccess = (requiredRole) => {
    console.log("Verificando acceso:", { userRole, requiredRole })

    // Si no se requiere un rol específico, solo verificar autenticación
    if (!requiredRole) return isAuthenticated

    // Si el usuario es admin, tiene acceso a todo
    if (userRole === "admin") {
      console.log("Usuario es admin, acceso concedido")
      return true
    }

    // Para otros roles, verificar si coincide con el rol requerido
    const hasRole = userRole === requiredRole
    console.log(`Usuario es ${userRole}, acceso ${hasRole ? "concedido" : "denegado"}`)
    return hasRole
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    )
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userRole,
        username,
        login,
        logout,
        hasAccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)


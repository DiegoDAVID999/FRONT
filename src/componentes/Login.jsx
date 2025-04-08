// // // import { useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import axios from "axios";
// // // import { useAuth } from "../contexts/AuthContext";
// // // import Swal from "sweetalert2";
// // // import moccap from "../assets/images/moccap.jpg";

// // // function Login() {
// // //   const [username, setUsername] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const navigate = useNavigate();
// // //   const { login } = useAuth();

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const response = await axios.post("/api/auth/login", { username, password });
// // //       login(response.data.token);
// // //       navigate("/dashboard");
// // //     } catch (error) {
// // //       console.error("Error al iniciar sesión:", error);
// // //       Swal.fire("Error", "Error al iniciar sesión. Por favor, intente de nuevo.", "error");
// // //     }
// // //   };

// // //   return (
// // //     <div
// // //       className="d-flex justify-content-center align-items-center min-vh-100 p-3"
// // //       style={{
// // //         backgroundImage: "url('https://wallpapers.com/images/featured/cafeteria-02x9a49rdcr5c18i.jpg')",
// // //         backgroundSize: "cover",
// // //         backgroundPosition: "center",
// // //       }}
// // //     >
// // //       <div className="card p-4 shadow-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "10px", maxWidth: "400px", width: "100%" }}>
// // //         <div className="card-body text-center">
// // //           <img src={moccap} alt="Logo Empresa" style={{ width: "80px", height: "auto", marginBottom: "20px" }} />
// // //           <h3 className="mb-3">Iniciar Sesión</h3>
// // //           <form onSubmit={handleSubmit}>
// // //             <div className="mb-3">
// // //               <label className="form-label">Usuario</label>
// // //               <input
// // //                 type="text"
// // //                 className="form-control"
// // //                 placeholder="Usuario"
// // //                 value={username}
// // //                 onChange={(e) => setUsername(e.target.value)}
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="mb-3">
// // //               <label className="form-label">Contraseña</label>
// // //               <input
// // //                 type="password"
// // //                 className="form-control"
// // //                 placeholder="Contraseña"
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //                 required
// // //               />
// // //             </div>
// // //             <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Login;

// // "use client"

// // import { useState } from "react"
// // import { useNavigate } from "react-router-dom"
// // import axios from "axios"
// // import { useAuth } from "../contexts/AuthContext"
// // import Swal from "sweetalert2"
// // import moccap from "../assets/images/moccap.jpg"

// // function Login() {
// //   const [username, setUsername] = useState("")
// //   const [password, setPassword] = useState("")
// //   const [loading, setLoading] = useState(false)
// //   const navigate = useNavigate()
// //   const { login } = useAuth()

// //   const handleSubmit = async (e) => {
// //     e.preventDefault()
// //     setLoading(true)
// //     try {
// //       const response = await axios.post("http://localhost:5002/api/auth/login", { username, password })

// //       // Ahora el login recibe tanto el token como los datos del usuario
// //       login(response.data.token, response.data.user)

// //       navigate("/dashboard")
// //     } catch (error) {
// //       console.error("Error al iniciar sesión:", error)
// //       Swal.fire("Error", "Error al iniciar sesión. Por favor, intente de nuevo.", "error")
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   return (
// //     <div
// //       className="d-flex justify-content-center align-items-center min-vh-100 p-3"
// //       style={{
// //         backgroundImage: "url('https://wallpapers.com/images/featured/cafeteria-02x9a49rdcr5c18i.jpg')",
// //         backgroundSize: "cover",
// //         backgroundPosition: "center",
// //       }}
// //     >
// //       <div
// //         className="card p-4 shadow-lg"
// //         style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "10px", maxWidth: "400px", width: "100%" }}
// //       >
// //         <div className="card-body text-center">
// //           <img
// //             src={moccap || "/placeholder.svg"}
// //             alt="Logo Empresa"
// //             style={{ width: "80px", height: "auto", marginBottom: "20px" }}
// //           />
// //           <h3 className="mb-3">Iniciar Sesión</h3>
// //           <form onSubmit={handleSubmit}>
// //             <div className="mb-3">
// //               <label className="form-label">Usuario</label>
// //               <input
// //                 type="text"
// //                 className="form-control"
// //                 placeholder="Usuario"
// //                 value={username}
// //                 onChange={(e) => setUsername(e.target.value)}
// //                 required
// //               />
// //             </div>
// //             <div className="mb-3">
// //               <label className="form-label">Contraseña</label>
// //               <input
// //                 type="password"
// //                 className="form-control"
// //                 placeholder="Contraseña"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 required
// //               />
// //             </div>
// //             <button type="submit" className="btn btn-primary w-100" disabled={loading}>
// //               {loading ? (
// //                 <span>
// //                   <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
// //                   Iniciando sesión...
// //                 </span>
// //               ) : (
// //                 "Iniciar Sesión"
// //               )}
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Login

// "use client"

// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import axios from "axios"
// import { useAuth } from "../contexts/AuthContext"
// import Swal from "sweetalert2"
// import moccap from "../assets/images/moccap.jpg"

// function Login() {
//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")
//   const [loading, setLoading] = useState(false)
//   const navigate = useNavigate()
//   const { login } = useAuth()

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setLoading(true)
//     try {
//       const response = await axios.post("/api/auth/login", { username, password })

//       console.log("Respuesta del servidor:", response.data)

//       // Verificar que la respuesta contenga el token y la información del usuario
//       if (!response.data.token || !response.data.user) {
//         throw new Error("Respuesta del servidor incompleta")
//       }

//       // Verificar que la información del usuario contenga el rol
//       if (!response.data.user.role) {
//         console.warn("La respuesta no contiene el rol del usuario, usando 'vendedor' por defecto")
//         response.data.user.role = "vendedor"
//       }

//       // Ahora el login recibe tanto el token como los datos del usuario
//       login(response.data.token, response.data.user)

//       Swal.fire({
//         icon: "success",
//         title: "¡Bienvenido!",
//         text: `Has iniciado sesión como ${response.data.user.role === "admin" ? "administrador" : "vendedor"}`,
//         timer: 2000,
//         showConfirmButton: false,
//       })

//       navigate("/dashboard")
//     } catch (error) {
//       console.error("Error al iniciar sesión:", error)
//       Swal.fire("Error", "Error al iniciar sesión. Por favor, intente de nuevo.", "error")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div
//       className="d-flex justify-content-center align-items-center min-vh-100 p-3"
//       style={{
//         backgroundImage: "url('https://wallpapers.com/images/featured/cafeteria-02x9a49rdcr5c18i.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div
//         className="card p-4 shadow-lg"
//         style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "10px", maxWidth: "400px", width: "100%" }}
//       >
//         <div className="card-body text-center">
//           <img
//             src={moccap || "/placeholder.svg"}
//             alt="Logo Empresa"
//             style={{ width: "80px", height: "auto", marginBottom: "20px" }}
//           />
//           <h3 className="mb-3">Iniciar Sesión</h3>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label className="form-label">Usuario</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Usuario"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Contraseña</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Contraseña"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit" className="btn btn-primary w-100" disabled={loading}>
//               {loading ? (
//                 <span>
//                   <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                   Iniciando sesión...
//                 </span>
//               ) : (
//                 "Iniciar Sesión"
//               )}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login

"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useAuth } from "../contexts/AuthContext"
import Swal from "sweetalert2"
import moccap from "../assets/images/moccap.jpg"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await axios.post("/api/auth/login", { username, password })

      console.log("Respuesta del servidor:", response.data)

      // Verificar que la respuesta contenga el token y la información del usuario
      if (!response.data.token || !response.data.user) {
        throw new Error("Respuesta del servidor incompleta")
      }

      // Verificar que la información del usuario contenga el rol
      if (!response.data.user.role) {
        console.warn("La respuesta no contiene el rol del usuario, usando 'vendedor' por defecto")
        response.data.user.role = "vendedor"
      }

      console.log("Guardando datos de usuario:", {
        username: response.data.user.username,
        role: response.data.user.role,
      })

      // Guardar el rol directamente en localStorage para verificación
      localStorage.setItem("userRole", response.data.user.role)

      // Ahora el login recibe tanto el token como los datos del usuario
      login(response.data.token, response.data.user)

      Swal.fire({
        icon: "success",
        title: "¡Bienvenido!",
        text: `Has iniciado sesión como ${response.data.user.role === "admin" ? "administrador" : "vendedor"}`,
        timer: 2000,
        showConfirmButton: false,
      })

      navigate("/dashboard")
    } catch (error) {
      console.error("Error al iniciar sesión:", error)
      Swal.fire("Error", "Error al iniciar sesión. Por favor, intente de nuevo.", "error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100 p-3"
      style={{
        backgroundImage: "url('https://wallpapers.com/images/featured/cafeteria-02x9a49rdcr5c18i.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "10px", maxWidth: "400px", width: "100%" }}
      >
        <div className="card-body text-center">
          <img
            src={moccap || "/placeholder.svg"}
            alt="Logo Empresa"
            style={{ width: "80px", height: "auto", marginBottom: "20px" }}
          />
          <h3 className="mb-3">Iniciar Sesión</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Usuario</label>
              <input
                type="text"
                className="form-control"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? (
                <span>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Iniciando sesión...
                </span>
              ) : (
                "Iniciar Sesión"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login





// import { Link } from "react-router-dom";

// function Dashboard() {
//   return (
//     <div 
//       style={{ 
//         backgroundImage: "url('https://wallpapers.com/images/featured/cafeteria-02x9a49rdcr5c18i.jpg')", 
//         backgroundSize: 'cover', 
//         backgroundPosition: 'center', 
//         minHeight: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 0,
//         margin: 0
//       }}
//     >
//       <div className="container">
//         <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//           <div className="col">
//             <Link to="/products" className="card p-4 shadow-sm text-decoration-none">
//               <div className="card-body">
//                 <h5 className="card-title">Gestionar Productos</h5>
//                 <p className="card-text">Añadir, editar o eliminar productos del inventario.</p>
//               </div>
//             </Link>
//           </div>
//           <div className="col">
//             <Link to="/sales" className="card p-4 shadow-sm text-decoration-none">
//               <div className="card-body">
//                 <h5 className="card-title">Realizar Venta</h5>
//                 <p className="card-text">Registrar una nueva venta de productos.</p>
//               </div>
//             </Link>
//           </div>
//           <div className="col">
//             <Link to="/reports" className="card p-4 shadow-sm text-decoration-none">
//               <div className="card-body">
//                 <h5 className="card-title">Ver Reportes</h5>
//                 <p className="card-text">Consultar reportes de ventas e ingresos.</p>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
"use client"

import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

function Dashboard() {
  const { userRole, username } = useAuth()
  const isAdmin = userRole === "admin"

  return (
    <div
      style={{
        backgroundImage: "url('https://wallpapers.com/images/featured/cafeteria-02x9a49rdcr5c18i.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        margin: 0,
      }}
    >
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <div className="card bg-dark text-white p-4">
              <h2 className="mb-3">Bienvenido, {username}</h2>
              <p className="lead">
                {isAdmin
                  ? "Tienes acceso completo al sistema como administrador."
                  : "Tienes acceso al módulo de ventas como vendedor."}
              </p>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {/* Mostrar tarjeta de Productos solo para administradores */}
          {isAdmin && (
            <div className="col">
              <Link to="/products" className="card p-4 shadow-sm text-decoration-none">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="bi bi-box-seam me-2"></i>
                    Gestionar Productos
                  </h5>
                  <p className="card-text">Añadir, editar o eliminar productos del inventario.</p>
                </div>
              </Link>
            </div>
          )}

          {/* Ventas visible para todos los usuarios */}
          <div className="col">
            <Link to="/sales" className="card p-4 shadow-sm text-decoration-none">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-cart-check me-2"></i>
                  Realizar Venta
                </h5>
                <p className="card-text">Registrar una nueva venta de productos.</p>
              </div>
            </Link>
          </div>

          {/* Reportes solo visible para administradores */}
          {isAdmin && (
            <div className="col">
              <Link to="/reports" className="card p-4 shadow-sm text-decoration-none">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="bi bi-graph-up me-2"></i>
                    Ver Reportes
                  </h5>
                  <p className="card-text">Consultar reportes de ventas e ingresos.</p>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard


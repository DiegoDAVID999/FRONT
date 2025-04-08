
// // // // import { Routes, Route, Navigate } from "react-router-dom"
// // // // import { AuthProvider, useAuth } from "./contexts/AuthContext"
// // // // import Layout from "./componentes/Layout"
// // // // import Login from "./componentes/Login"
// // // // import Dashboard from "./componentes/Dashboard"
// // // // import Products from "./componentes/Products"
// // // // import Sales from "./componentes/Sales"
// // // // import Reports from "./componentes/Reports"


// // // // const ProtectedRoute = ({ children }) => {
// // // //   const { isAuthenticated } = useAuth()
// // // //   return isAuthenticated ? <Layout>{children}</Layout> : <Navigate to="/" replace />
// // // // }

// // // // function AppContent() {
// // // //   const { isAuthenticated } = useAuth()

// // // //   return (
// // // //     <Routes>
// // // //       <Route path="/" element={!isAuthenticated ? <Login/> : <Navigate to="/dashboard" replace />} />
// // // //       <Route
// // // //         path="/dashboard"
// // // //         element={
// // // //           <ProtectedRoute>
// // // //             <Dashboard/>
// // // //           </ProtectedRoute>
// // // //         }
// // // //       />
// // // //       <Route
// // // //         path="/products"
// // // //         element={
// // // //           <ProtectedRoute>
// // // //             <Products/>
// // // //           </ProtectedRoute>
// // // //         }
// // // //       />
// // // //       <Route
// // // //         path="/sales"
// // // //         element={
// // // //           <ProtectedRoute>
// // // //             <Sales/>
// // // //           </ProtectedRoute>
// // // //         }
// // // //       />
// // // //       <Route
// // // //         path="/reports"
// // // //         element={
// // // //           <ProtectedRoute>
// // // //             <Reports/>
// // // //           </ProtectedRoute>
// // // //         }
// // // //       />
// // // //     </Routes>
// // // //   )
// // // // }

// // // // function App() {
// // // //   return (
// // // //     <AuthProvider>
// // // //       <AppContent />
// // // //     </AuthProvider>
// // // //   )
// // // // }

// // // // export default App

// // // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // // import { AuthProvider } from "./contexts/AuthContext";
// // // import Login from "./componentes/Login";
// // // import Dashboard from "./componentes/Dashboard";
// // // import Products from "./componentes/Products";
// // // import Sales from "./componentes/Sales";
// // // import Reports from "./componentes/Reports";
// // // import Layout from "./componentes/Layout";
// // // import ProtectedRoute from "./componentes/ProtectedRoute";

// // // function App() {
// // //   return (
// // //     <Router>
// // //       <AuthProvider>
// // //         <Routes>
// // //           <Route path="/login" element={<Login />} />
          
// // //           <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
// // //           <Route path="/dashboard" element={
// // //             <ProtectedRoute>
// // //               <Layout>
// // //                 <Dashboard />
// // //               </Layout>
// // //             </ProtectedRoute>
// // //           } />
          
// // //           <Route path="/products" element={
// // //             <ProtectedRoute requiredRole="admin">
// // //               <Layout>
// // //                 <Products />
// // //               </Layout>
// // //             </ProtectedRoute>
// // //           } />
          
// // //           <Route path="/sales" element={
// // //             <ProtectedRoute>
// // //               <Layout>
// // //                 <Sales />
// // //               </Layout>
// // //             </ProtectedRoute>
// // //           } />
          
// // //           <Route path="/reports" element={
// // //             <ProtectedRoute requiredRole="admin">
// // //               <Layout>
// // //                 <Reports />
// // //               </Layout>
// // //             </ProtectedRoute>
// // //           } />
          
// // //           <Route path="*" element={<Navigate to="/dashboard" replace />} />
// // //         </Routes>
// // //       </AuthProvider>
// // //     </Router>
// // //   );
// // // }

// // // export default App;

// // import { Routes, Route, Navigate } from "react-router-dom"
// // import { AuthProvider } from "./contexts/AuthContext"
// // import Login from "./componentes/Login"
// // import Dashboard from "./componentes/Dashboard"
// // import Products from "./componentes/Products"
// // import Sales from "./componentes/Sales"
// // import Reports from "./componentes/Reports"
// // import Layout from "./componentes/Layout"
// // import ProtectedRoute from "./componentes/ProtectedRoute"

// // function App() {
// //   return (
// //     <AuthProvider>
// //       <Routes>
// //         <Route path="/login" element={<Login />} />

// //         <Route path="/" element={<Navigate to="/dashboard" replace />} />

// //         <Route
// //           path="/dashboard"
// //           element={
// //             <ProtectedRoute>
// //               <Layout>
// //                 <Dashboard />
// //               </Layout>
// //             </ProtectedRoute>
// //           }
// //         />

// //         <Route
// //           path="/products"
// //           element={
// //             <ProtectedRoute requiredRole="admin">
// //               <Layout>
// //                 <Products />
// //               </Layout>
// //             </ProtectedRoute>
// //           }
// //         />

// //         <Route
// //           path="/sales"
// //           element={
// //             <ProtectedRoute>
// //               <Layout>
// //                 <Sales />
// //               </Layout>
// //             </ProtectedRoute>
// //           }
// //         />

// //         <Route
// //           path="/reports"
// //           element={
// //             <ProtectedRoute requiredRole="admin">
// //               <Layout>
// //                 <Reports />
// //               </Layout>
// //             </ProtectedRoute>
// //           }
// //         />

// //         <Route path="*" element={<Navigate to="/dashboard" replace />} />
// //       </Routes>
// //     </AuthProvider>
// //   )
// // }

// // export default App

// import { Routes, Route, Navigate } from "react-router-dom"
// import { AuthProvider } from "./contexts/AuthContext"
// import Login from "./componentes/Login"
// import Dashboard from "./componentes/Dashboard"
// import Products from "./componentes/Products"
// import Sales from "./componentes/Sales"
// import Reports from "./componentes/Reports"
// import UserAdmin from "./componentes/UserAdmin"
// import Layout from "./componentes/Layout"
// import ProtectedRoute from "./componentes/ProtectedRoute"

// function App() {
//   return (
//     <AuthProvider>
//       <Routes>
//         <Route path="/login" element={<Login />} />

//         <Route path="/" element={<Navigate to="/dashboard" replace />} />

//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Layout>
//                 <Dashboard />
//               </Layout>
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/products"
//           element={
//             <ProtectedRoute requiredRole="admin">
//               <Layout>
//                 <Products />
//               </Layout>
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/sales"
//           element={
//             <ProtectedRoute>
//               <Layout>
//                 <Sales />
//               </Layout>
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/reports"
//           element={
//             <ProtectedRoute requiredRole="admin">
//               <Layout>
//                 <Reports />
//               </Layout>
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/users"
//           element={
//             <ProtectedRoute requiredRole="admin">
//               <Layout>
//                 <UserAdmin />
//               </Layout>
//             </ProtectedRoute>
//           }
//         />

//         <Route path="*" element={<Navigate to="/dashboard" replace />} />
//       </Routes>
//     </AuthProvider>
//   )
// }

// export default App

import { Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import Login from "./componentes/Login"
import Dashboard from "./componentes/Dashboard"
import Products from "./componentes/Products"
import Sales from "./componentes/Sales"
import Reports from "./componentes/Reports"
import UserAdmin from "./componentes/UserAdmin"
import Layout from "./componentes/Layout"
import ProtectedRoute from "./componentes/ProtectedRoute"

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/products"
          element={
            <ProtectedRoute requiredRole="admin">
              <Layout>
                <Products />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/sales"
          element={
            <ProtectedRoute>
              <Layout>
                <Sales />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute requiredRole="admin">
              <Layout>
                <Reports />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/users"
          element={
            <ProtectedRoute requiredRole="admin">
              <Layout>
                <UserAdmin />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </AuthProvider>
  )
}

export default App


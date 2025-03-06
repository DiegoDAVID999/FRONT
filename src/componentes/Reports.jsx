

// "use client"

// import { useState, useEffect } from "react"
// import axios from "axios"
// import Swal from "sweetalert2"

// function Reports() {
//   const [dailyReport, setDailyReport] = useState(null)
//   const [weeklyReport, setWeeklyReport] = useState(null)
//   const [monthlyReport, setMonthlyReport] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     fetchReports()
//   }, [])

//   const fetchReports = async () => {
//     setLoading(true);
//     setError(null);
  
//     try {
//       const [dailyRes, weeklyRes] = await Promise.all([
//         axios.get("https://back-p43y.onrender.com/api/reports/daily", { withCredentials: true }),
//         axios.get("https://back-p43y.onrender.com/api/reports/weekly", { withCredentials: true }),
//         axios.get("https://back-p43y.onrender.com/api/reports/monthly"),
//       ]);
  
//       setDailyReport(dailyRes.data);
//       setWeeklyReport(weeklyRes.data);
//       setMonthlyReport(monthlyRes.data)
//     } catch (error) {
//       console.error("Error fetching reports:", error);
//       setError("Error al cargar los reportes. Por favor, intente de nuevo más tarde.");
//       Swal.fire("Error", "No se pudieron cargar los reportes", "error");
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(
//       amount,
//     )
//   }

//   const deleteReport = async (type) => {
//     Swal.fire({
//       title: "¿Estás seguro?",
//       text: "Esta acción eliminará el reporte seleccionado de la base de datos.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Sí, eliminar",
//       cancelButtonText: "Cancelar",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           await axios.delete(`https://back-p43y.onrender.com/api/reports/${type}`, {
//             withCredentials: true,
//           });
  
//           if (type === "daily") setDailyReport(null);
//           if (type === "weekly") setWeeklyReport(null);
//           if (type === "monthly") setMonthlyReport(null)

//           Swal.fire("Eliminado", "El reporte ha sido eliminado de la base de datos.", "success");
//         } catch (error) {
//           console.error("Error deleting report:", error);
//           Swal.fire("Error", "No se pudo eliminar el reporte. Por favor, intente de nuevo.", "error");
//         }
//       }
//     });
//   };
  

//   const DailyReportTable = ({ title, report, onDelete }) => {
//     if (!report) return null

//     return (
//       <div className="mb-4">
//         <div className="d-flex justify-content-between align-items-center">
//           <h3 className="fw-bold">{title}</h3>
//           <button className="btn btn-danger btn-sm" onClick={onDelete}>
//             Eliminar
//           </button>
//         </div>
//         <h4 className="text-white mb-3">Fecha: {report.date}</h4>
//         <div className="table-responsive">
//           <table className="table table-bordered text-center align-middle">
//             <thead className="table-secondary text-dark">
//               <tr>
//                 <th className="text-nowrap">Custom ID</th>
//                 <th className="text-nowrap">Producto</th>
//                 <th className="text-nowrap text-end">Cantidad</th>
//                 <th className="text-nowrap text-end">Precio Unitario</th>
//                 <th className="text-nowrap text-end">Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {report.productsSold.map((product) => (
//                 <tr key={product.customId}>
//                   <td className="text-nowrap">{product.customId}</td>
//                   <td className="text-nowrap text-start">{product.name}</td>
//                   <td className="text-nowrap text-end">{product.quantity}</td>
//                   <td className="text-nowrap text-end">{formatCurrency(product.price)}</td>
//                   <td className="text-nowrap text-end">{formatCurrency(product.total)}</td>
//                 </tr>
//               ))}
//             </tbody>
//             <tfoot>
//               <tr className="table-secondary fw-bold">
//                 <td colSpan="4" className="text-end">
//                   Total
//                 </td>
//                 <td className="text-end">{formatCurrency(report.totalRevenue)}</td>
//               </tr>
//             </tfoot>
//           </table>
//         </div>
//       </div>
//     )
//   }

//   const WeeklyReportTable = ({ title, report, onDelete }) => {
//     if (!report) return null

//     const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

//     return (
//       <div className="mb-4">
//         <div className="d-flex justify-content-between align-items-center">
//           <h3 className="fw-bold">{title}</h3>
//           <button className="btn btn-danger btn-sm" onClick={onDelete}>
//             Eliminar
//           </button>
//         </div>
//         <h4 className="text-white mb-3">
//           Semana: {report.startDate} - {report.endDate}
//         </h4>
//         <div className="table-responsive">
//           <table className="table table-bordered text-center align-middle">
//             <thead className="table-secondary text-dark">
//               <tr>
//                 <th className="text-nowrap">Día de la Semana</th>
//                 <th className="text-nowrap text-end">Total Ventas</th>
//               </tr>
//             </thead>
//             <tbody>
//               {report.dailyTotals.map((day) => (
//                 <tr key={day.dayOfWeek}>
//                   <td className="text-nowrap text-start">{daysOfWeek[day.dayOfWeek]}</td>
//                   <td className="text-nowrap text-end">{formatCurrency(day.total)}</td>
//                 </tr>
//               ))}
//             </tbody>
//             <tfoot>
//               <tr className="table-secondary fw-bold">
//                 <td className="text-end">Total Semanal</td>
//                 <td className="text-end">{formatCurrency(report.totalRevenue)}</td>
//                 <td className="text-end">{report.totalSales}</td>
//               </tr>
//             </tfoot>
//           </table>
//         </div>
//       </div>
//     )
//   }

//   if (loading) {
//     return <div className="text-center">Cargando reportes...</div>
//   }

//   if (error) {
//     return <div className="alert alert-danger">{error}</div>
//   }

//   return (
//     <div className="container">
//       <h2 className="mb-4">Reportes de Ventas</h2>
//       <DailyReportTable title="Reporte Diario" report={dailyReport} onDelete={() => deleteReport("daily")} />
//       <WeeklyReportTable title="Reporte Semanal" report={weeklyReport} onDelete={() => deleteReport("weekly")} />
//     </div>
//   )
// }

// export default Reports

// "use client"

// import { useState, useEffect } from "react"
// import axios from "axios"
// import Swal from "sweetalert2"

// function Reports() {
//   const [dailyReport, setDailyReport] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     fetchDailyReport()
//   }, [])

//   const fetchDailyReport = async () => {
//     setLoading(true)
//     setError(null)
//     try {
//       const response = await axios.get("https://back-p43y.onrender.com/api/reports/daily")
//       setDailyReport(response.data)
//     } catch (error) {
//       console.error("Error fetching daily report:", error)
//       setError("Error al cargar el reporte diario. Por favor, intente de nuevo más tarde.")
//       Swal.fire("Error", "No se pudo cargar el reporte diario", "error")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(
//       amount,
//     )
//   }

//   const deleteDailyReport = async () => {
//     Swal.fire({
//       title: "¿Estás seguro?",
//       text: "Esta acción eliminará el reporte diario de la base de datos.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Sí, eliminar",
//       cancelButtonText: "Cancelar",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           await axios.delete("https://back-p43y.onrender.com/api/reports/daily")
//           setDailyReport(null)
//           Swal.fire("Eliminado", "El reporte ha sido eliminado de la base de datos.", "success")
//         } catch (error) {
//           console.error("Error deleting daily report:", error)
//           Swal.fire("Error", "No se pudo eliminar el reporte. Por favor, intente de nuevo.", "error")
//         }
//       }
//     })
//   }

//   if (loading) {
//     return <div className="text-center">Cargando reporte diario...</div>
//   }

//   if (error) {
//     return <div className="alert alert-danger">{error}</div>
//   }

//   return (
//     <div className="container">
//       {dailyReport ? (
//         <div className="mb-4">
//           <div className="d-flex justify-content-between align-items-center">
//             <h3 className="fw-bold">Reporte Diario</h3>
//             <button className="btn btn-danger btn-sm" onClick={deleteDailyReport}>
//               Eliminar
//             </button>
//           </div>
//           <h4 className="text-white mb-3">Fecha: {dailyReport.date}</h4>
//           <div className="table-responsive">
//             <table className="table table-bordered text-center align-middle">
//               <thead className="table-secondary text-dark">
//                 <tr>
//                   <th>Custom ID</th>
//                   <th>Producto</th>
//                   <th className="text-end">Cantidad</th>
//                   <th className="text-end">Precio Unitario</th>
//                   <th className="text-end">Total</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {dailyReport.productsSold.map((product) => (
//                   <tr key={product.customId}>
//                     <td>{product.customId}</td>
//                     <td className="text-start">{product.name}</td>
//                     <td className="text-end">{product.quantity}</td>
//                     <td className="text-end">{formatCurrency(product.price)}</td>
//                     <td className="text-end">{formatCurrency(product.total)}</td>
//                   </tr>
//                 ))}
//               </tbody>
//               <tfoot>
//                 <tr className="table-secondary fw-bold">
//                   <td colSpan="4" className="text-end">Total</td>
//                   <td className="text-end">{formatCurrency(dailyReport.totalRevenue)}</td>
//                 </tr>
//               </tfoot>
//             </table>
//           </div>
//         </div>
//       ) : (
//         <div className="alert alert-warning">No hay reporte diario disponible.</div>
//       )}
//     </div>
//   )
// }

// export default Reports
// "use client"

// import { useState, useEffect } from "react"
// import axios from "axios"
// import Swal from "sweetalert2"

// function Reports() {
//   const [dailyReport, setDailyReport] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     fetchDailyReport()
//   }, [])

//   const fetchDailyReport = async () => {
//     setLoading(true)
//     setError(null)
//     try {
//       const response = await axios.get("https://back-p43y.onrender.com/api/reports/daily")
//       console.log("Reporte diario:", response.data) // 👀 Verifica que la API envía los datos correctamente
//       setDailyReport(response.data)
//     } catch (error) {
//       console.error("Error fetching daily report:", error)
//       setError("Error al cargar el reporte diario. Por favor, intente de nuevo más tarde.")
//       Swal.fire("Error", "No se pudo cargar el reporte diario", "error")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(amount)
//   }

//   const deleteDailyReport = async () => {
//     Swal.fire({
//       title: "¿Estás seguro?",
//       text: "Esta acción eliminará el reporte diario de la base de datos.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Sí, eliminar",
//       cancelButtonText: "Cancelar",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           await axios.delete("https://back-p43y.onrender.com/api/reports/daily")
//           setDailyReport(null)
//           Swal.fire("Eliminado", "El reporte ha sido eliminado de la base de datos.", "success")
//         } catch (error) {
//           console.error("Error deleting daily report:", error)
//           Swal.fire("Error", "No se pudo eliminar el reporte. Por favor, intente de nuevo.", "error")
//         }
//       }
//     })
//   }

//   if (loading) {
//     return <div className="text-center">Cargando reporte diario...</div>
//   }

//   if (error) {
//     return <div className="alert alert-danger">{error}</div>
//   }

//   return (
//     <div className="container">
//       {dailyReport ? (
//         <div className="mb-4">
//           <div className="d-flex justify-content-between align-items-center">
//             <h3 className="fw-bold">Reporte Diario</h3>
//             <button className="btn btn-danger btn-sm" onClick={deleteDailyReport}>
//               Eliminar
//             </button>
//           </div>
//           <h4 className="text-white mb-3">Fecha: {dailyReport.date}</h4>
//           <div className="table-responsive">
//             <table className="table table-bordered text-center align-middle">
//               <thead className="table-secondary text-dark">
//                 <tr>
//                   <th>Custom ID</th>
//                   <th>Producto</th>
//                   <th className="text-end">Cantidad</th>
//                   <th className="text-end">Precio Unitario</th>
//                   <th className="text-end">Total</th>
//                   <th className="text-end">Método de Pago</th> {/* Nueva columna */}
//                 </tr>
//               </thead>
//               <tbody>
//                 {dailyReport.productsSold.map((product) => {
//                   // 🔍 Encontrar la venta asociada a este producto
//                   const sale = dailyReport.sales.find((sale) =>
//                     sale.products.some((p) => p.customId === product.customId)
//                   )
//                   return (
//                     <tr key={product.customId}>
//                       <td>{product.customId}</td>
//                       <td className="text-start">{product.name}</td>
//                       <td className="text-end">{product.quantity}</td>
//                       <td className="text-end">{formatCurrency(product.price)}</td>
//                       <td className="text-end">{formatCurrency(product.total)}</td>
//                       <td className="text-end">{sale ? sale.paymentMethod : "N/A"}</td> {/* Mostrar método de pago */}
//                     </tr>
//                   )
//                 })}
//               </tbody>
//               <tfoot>
//                 <tr className="table-secondary fw-bold">
//                   <td colSpan="4" className="text-end">Total</td>
//                   <td className="text-end">{formatCurrency(dailyReport.totalRevenue)}</td>
//                   <td></td>
//                 </tr>
//               </tfoot>
//             </table>
//           </div>
//         </div>
//       ) : (
//         <div className="alert alert-warning">No hay reporte diario disponible.</div>
//       )}
//     </div>
//   )
// }

// export default Reports
// "use client"

// import { useState, useEffect } from "react"
// import axios from "axios"
// import Swal from "sweetalert2"

// function Reports() {
//   const [dailyReport, setDailyReport] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     fetchDailyReport()
//   }, [])

//   const fetchDailyReport = async () => {
//     setLoading(true)
//     setError(null)
//     try {
//       const response = await axios.get("https://back-p43y.onrender.com/api/reports/daily")
//       console.log("Reporte diario:", response.data) // 👀 Verifica que la API envía los datos correctamente
//       setDailyReport(response.data)
//     } catch (error) {
//       console.error("Error fetching daily report:", error)
//       setError("Error al cargar el reporte diario. Por favor, intente de nuevo más tarde.")
//       Swal.fire("Error", "No se pudo cargar el reporte diario", "error")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(amount)
//   }

//   const deleteDailyReport = async () => {
//     Swal.fire({
//       title: "¿Estás seguro?",
//       text: "Esta acción eliminará el reporte diario de la base de datos.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Sí, eliminar",
//       cancelButtonText: "Cancelar",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           await axios.delete("https://back-p43y.onrender.com/api/reports/daily")
//           setDailyReport(null)
//           Swal.fire("Eliminado", "El reporte ha sido eliminado de la base de datos.", "success")
//         } catch (error) {
//           console.error("Error deleting daily report:", error)
//           Swal.fire("Error", "No se pudo eliminar el reporte. Por favor, intente de nuevo.", "error")
//         }
//       }
//     })
//   }

//   if (loading) {
//     return <div className="text-center">Cargando reporte diario...</div>
//   }

//   if (error) {
//     return <div className="alert alert-danger">{error}</div>
//   }

//   return (
//     <div className="container">
//       {dailyReport ? (
//         <div className="mb-4">
//           <div className="d-flex justify-content-between align-items-center">
//             <h3 className="fw-bold">Reporte Diario</h3>
//             <button className="btn btn-danger btn-sm" onClick={deleteDailyReport}>
//               Eliminar
//             </button>
//           </div>
//           <h4 className="text-white mb-3">Fecha: {dailyReport.date}</h4>
//           <div className="table-responsive">
//             <table className="table table-bordered text-center align-middle">
//               <thead className="table-secondary text-dark">
//                 <tr>
//                   <th>Fecha y Hora</th>
//                   <th>Custom ID</th>
//                   <th>Producto</th>
//                   <th className="text-end">Cantidad</th>
//                   <th className="text-end">Precio Unitario</th>
//                   <th className="text-end">Total</th>
//                   <th className="text-end">Método de Pago</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {dailyReport.sales.map((sale) =>
//                   sale.products.map((product) => (
//                     <tr key={`${sale._id}-${product.customId}`}>
//                       <td>{sale.dateBogota}</td> {/* Muestra la fecha y hora de la venta */}
//                       <td>{product.customId}</td>
//                       <td className="text-start">{product.name}</td>
//                       <td className="text-end">{product.quantity}</td>
//                       <td className="text-end">{formatCurrency(product.price)}</td>
//                       <td className="text-end">{formatCurrency(product.price * product.quantity)}</td>
//                       <td className="text-end">{sale.paymentMethod}</td> {/* Método de pago individual */}
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//               <tfoot>
//                 <tr className="table-secondary fw-bold">
//                   <td colSpan="5" className="text-end">Total</td>
//                   <td className="text-end">{formatCurrency(dailyReport.totalRevenue)}</td>
//                   <td></td>
//                 </tr>
//               </tfoot>
//             </table>
//           </div>
//         </div>
//       ) : (
//         <div className="alert alert-warning">No hay reporte diario disponible.</div>
//       )}
//     </div>
//   )
// }

// export default Reports
"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import Swal from "sweetalert2"

function Reports() {
  const [dailyReport, setDailyReport] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchDailyReport()
  }, [])

  const fetchDailyReport = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await axios.get("https://back-p43y.onrender.com/api/reports/daily")
      console.log("Reporte diario:", response.data)
      setDailyReport(response.data)
    } catch (error) {
      console.error("Error fetching daily report:", error)
      setError("Error al cargar el reporte diario. Por favor, intente de nuevo más tarde.")
      Swal.fire("Error", "No se pudo cargar el reporte diario", "error")
    } finally {
      setLoading(false)
    }
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(amount)
  }

  const deleteDailyReport = async () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará el reporte diario de la base de datos.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete("https://back-p43y.onrender.com/api/reports/daily")
          setDailyReport(null)
          Swal.fire("Eliminado", "El reporte ha sido eliminado de la base de datos.", "success")
        } catch (error) {
          console.error("Error deleting daily report:", error)
          Swal.fire("Error", "No se pudo eliminar el reporte. Por favor, intente de nuevo.", "error")
        }
      }
    })
  }

  // Calcular totales por método de pago
  const paymentTotals = dailyReport
    ? dailyReport.sales.reduce(
        (totals, sale) => {
          const totalSale = sale.products.reduce((sum, product) => sum + product.price * product.quantity, 0)
          if (sale.paymentMethod === "Efectivo") {
            totals.cash += totalSale
          } else if (sale.paymentMethod === "Tarjeta") {
            totals.card += totalSale
          } else if (sale.paymentMethod === "Transferencia") {
            totals.transfer += totalSale
          }
          return totals
        },
        { cash: 0, card: 0, transfer: 0 }
      )
    : { cash: 0, card: 0, transfer: 0 }

  if (loading) {
    return <div className="text-center">Cargando reporte diario...</div>
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>
  }

  return (
    <div className="container">
      {dailyReport ? (
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="fw-bold">Reporte Diario</h3>
            
          </div>
          <h4 className="text-white mb-3">Fecha: {dailyReport.date}</h4>

          {/* Tabla de ventas */}
          <div className="table-responsive">
            <table className="table table-bordered text-center align-middle">
              <thead className="table-secondary text-dark">
                <tr>
                  <th>Fecha y Hora</th>
                  <th>Custom ID</th>
                  <th>Producto</th>
                  <th className="text-end">Cantidad</th>
                  <th className="text-end">Precio Unitario</th>
                  <th className="text-end">Total</th>
                  <th className="text-end">Método de Pago</th>
                </tr>
              </thead>
              <tbody>
                {dailyReport.sales.map((sale) =>
                  sale.products.map((product) => (
                    <tr key={`${sale._id}-${product.customId}`}>
                      <td>{sale.dateBogota}</td>
                      <td>{product.customId}</td>
                      <td className="text-start">{product.name}</td>
                      <td className="text-end">{product.quantity}</td>
                      <td className="text-end">{formatCurrency(product.price)}</td>
                      <td className="text-end">{formatCurrency(product.price * product.quantity)}</td>
                      <td className="text-end">{sale.paymentMethod}</td>
                    </tr>
                  ))
                )}
              </tbody>
              <tfoot>
                <tr className="table-secondary fw-bold">
                  <td colSpan="5" className="text-end">Total</td>
                  <td className="text-end">{formatCurrency(dailyReport.totalRevenue)}</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Nueva tabla de totales por método de pago */}
          <h4 className="fw-bold mt-4">Total por Método de Pago</h4>
          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <thead className="table-secondary fw-bold">
                <tr>
                  <th>Método de Pago</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Efectivo</td>
                  <td>{formatCurrency(paymentTotals.cash)}</td>
                </tr>
                <tr>
                  <td>Tarjeta</td>
                  <td>{formatCurrency(paymentTotals.card)}</td>
                </tr>
                <tr>
                  <td>Transferencia</td>
                  <td>{formatCurrency(paymentTotals.transfer)}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="table-secondary fw-bold">
                  <td>Total General</td>
                  <td>{formatCurrency(dailyReport.totalRevenue)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      ) : (
        <div className="alert alert-warning">No hay reporte diario disponible.</div>
      )}
    </div>
  )
}

export default Reports

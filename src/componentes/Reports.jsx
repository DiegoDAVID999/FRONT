

// // // "use client"

// // // import { useState, useEffect } from "react"
// // // import axios from "axios"
// // // import Swal from "sweetalert2"

// // // function Reports() {
// // //   const [dailyReport, setDailyReport] = useState(null)
// // //   const [weeklyReport, setWeeklyReport] = useState(null)
// // //   const [monthlyReport, setMonthlyReport] = useState(null)
// // //   const [loading, setLoading] = useState(true)
// // //   const [error, setError] = useState(null)

// // //   useEffect(() => {
// // //     fetchReports()
// // //   }, [])

// // //   const fetchReports = async () => {
// // //     setLoading(true);
// // //     setError(null);
  
// // //     try {
// // //       const [dailyRes, weeklyRes] = await Promise.all([
// // //         axios.get("https://back-p43y.onrender.com/api/reports/daily", { withCredentials: true }),
// // //         axios.get("https://back-p43y.onrender.com/api/reports/weekly", { withCredentials: true }),
// // //         axios.get("https://back-p43y.onrender.com/api/reports/monthly"),
// // //       ]);
  
// // //       setDailyReport(dailyRes.data);
// // //       setWeeklyReport(weeklyRes.data);
// // //       setMonthlyReport(monthlyRes.data)
// // //     } catch (error) {
// // //       console.error("Error fetching reports:", error);
// // //       setError("Error al cargar los reportes. Por favor, intente de nuevo más tarde.");
// // //       Swal.fire("Error", "No se pudieron cargar los reportes", "error");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };
  

// // //   const formatCurrency = (amount) => {
// // //     return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(
// // //       amount,
// // //     )
// // //   }

// // //   const deleteReport = async (type) => {
// // //     Swal.fire({
// // //       title: "¿Estás seguro?",
// // //       text: "Esta acción eliminará el reporte seleccionado de la base de datos.",
// // //       icon: "warning",
// // //       showCancelButton: true,
// // //       confirmButtonText: "Sí, eliminar",
// // //       cancelButtonText: "Cancelar",
// // //     }).then(async (result) => {
// // //       if (result.isConfirmed) {
// // //         try {
// // //           await axios.delete(`https://back-p43y.onrender.com/api/reports/${type}`, {
// // //             withCredentials: true,
// // //           });
  
// // //           if (type === "daily") setDailyReport(null);
// // //           if (type === "weekly") setWeeklyReport(null);
// // //           if (type === "monthly") setMonthlyReport(null)

// // //           Swal.fire("Eliminado", "El reporte ha sido eliminado de la base de datos.", "success");
// // //         } catch (error) {
// // //           console.error("Error deleting report:", error);
// // //           Swal.fire("Error", "No se pudo eliminar el reporte. Por favor, intente de nuevo.", "error");
// // //         }
// // //       }
// // //     });
// // //   };
  

// // //   const DailyReportTable = ({ title, report, onDelete }) => {
// // //     if (!report) return null

// // //     return (
// // //       <div className="mb-4">
// // //         <div className="d-flex justify-content-between align-items-center">
// // //           <h3 className="fw-bold">{title}</h3>
// // //           <button className="btn btn-danger btn-sm" onClick={onDelete}>
// // //             Eliminar
// // //           </button>
// // //         </div>
// // //         <h4 className="text-white mb-3">Fecha: {report.date}</h4>
// // //         <div className="table-responsive">
// // //           <table className="table table-bordered text-center align-middle">
// // //             <thead className="table-secondary text-dark">
// // //               <tr>
// // //                 <th className="text-nowrap">Custom ID</th>
// // //                 <th className="text-nowrap">Producto</th>
// // //                 <th className="text-nowrap text-end">Cantidad</th>
// // //                 <th className="text-nowrap text-end">Precio Unitario</th>
// // //                 <th className="text-nowrap text-end">Total</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {report.productsSold.map((product) => (
// // //                 <tr key={product.customId}>
// // //                   <td className="text-nowrap">{product.customId}</td>
// // //                   <td className="text-nowrap text-start">{product.name}</td>
// // //                   <td className="text-nowrap text-end">{product.quantity}</td>
// // //                   <td className="text-nowrap text-end">{formatCurrency(product.price)}</td>
// // //                   <td className="text-nowrap text-end">{formatCurrency(product.total)}</td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //             <tfoot>
// // //               <tr className="table-secondary fw-bold">
// // //                 <td colSpan="4" className="text-end">
// // //                   Total
// // //                 </td>
// // //                 <td className="text-end">{formatCurrency(report.totalRevenue)}</td>
// // //               </tr>
// // //             </tfoot>
// // //           </table>
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   const WeeklyReportTable = ({ title, report, onDelete }) => {
// // //     if (!report) return null

// // //     const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

// // //     return (
// // //       <div className="mb-4">
// // //         <div className="d-flex justify-content-between align-items-center">
// // //           <h3 className="fw-bold">{title}</h3>
// // //           <button className="btn btn-danger btn-sm" onClick={onDelete}>
// // //             Eliminar
// // //           </button>
// // //         </div>
// // //         <h4 className="text-white mb-3">
// // //           Semana: {report.startDate} - {report.endDate}
// // //         </h4>
// // //         <div className="table-responsive">
// // //           <table className="table table-bordered text-center align-middle">
// // //             <thead className="table-secondary text-dark">
// // //               <tr>
// // //                 <th className="text-nowrap">Día de la Semana</th>
// // //                 <th className="text-nowrap text-end">Total Ventas</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {report.dailyTotals.map((day) => (
// // //                 <tr key={day.dayOfWeek}>
// // //                   <td className="text-nowrap text-start">{daysOfWeek[day.dayOfWeek]}</td>
// // //                   <td className="text-nowrap text-end">{formatCurrency(day.total)}</td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //             <tfoot>
// // //               <tr className="table-secondary fw-bold">
// // //                 <td className="text-end">Total Semanal</td>
// // //                 <td className="text-end">{formatCurrency(report.totalRevenue)}</td>
// // //                 <td className="text-end">{report.totalSales}</td>
// // //               </tr>
// // //             </tfoot>
// // //           </table>
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   if (loading) {
// // //     return <div className="text-center">Cargando reportes...</div>
// // //   }

// // //   if (error) {
// // //     return <div className="alert alert-danger">{error}</div>
// // //   }

// // //   return (
// // //     <div className="container">
// // //       <h2 className="mb-4">Reportes de Ventas</h2>
// // //       <DailyReportTable title="Reporte Diario" report={dailyReport} onDelete={() => deleteReport("daily")} />
// // //       <WeeklyReportTable title="Reporte Semanal" report={weeklyReport} onDelete={() => deleteReport("weekly")} />
// // //     </div>
// // //   )
// // // }

// // // export default Reports

// // // "use client"

// // // import { useState, useEffect } from "react"
// // // import axios from "axios"
// // // import Swal from "sweetalert2"

// // // function Reports() {
// // //   const [dailyReport, setDailyReport] = useState(null)
// // //   const [loading, setLoading] = useState(true)
// // //   const [error, setError] = useState(null)

// // //   useEffect(() => {
// // //     fetchDailyReport()
// // //   }, [])

// // //   const fetchDailyReport = async () => {
// // //     setLoading(true)
// // //     setError(null)
// // //     try {
// // //       const response = await axios.get("https://back-p43y.onrender.com/api/reports/daily")
// // //       setDailyReport(response.data)
// // //     } catch (error) {
// // //       console.error("Error fetching daily report:", error)
// // //       setError("Error al cargar el reporte diario. Por favor, intente de nuevo más tarde.")
// // //       Swal.fire("Error", "No se pudo cargar el reporte diario", "error")
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   const formatCurrency = (amount) => {
// // //     return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(
// // //       amount,
// // //     )
// // //   }

// // //   const deleteDailyReport = async () => {
// // //     Swal.fire({
// // //       title: "¿Estás seguro?",
// // //       text: "Esta acción eliminará el reporte diario de la base de datos.",
// // //       icon: "warning",
// // //       showCancelButton: true,
// // //       confirmButtonText: "Sí, eliminar",
// // //       cancelButtonText: "Cancelar",
// // //     }).then(async (result) => {
// // //       if (result.isConfirmed) {
// // //         try {
// // //           await axios.delete("https://back-p43y.onrender.com/api/reports/daily")
// // //           setDailyReport(null)
// // //           Swal.fire("Eliminado", "El reporte ha sido eliminado de la base de datos.", "success")
// // //         } catch (error) {
// // //           console.error("Error deleting daily report:", error)
// // //           Swal.fire("Error", "No se pudo eliminar el reporte. Por favor, intente de nuevo.", "error")
// // //         }
// // //       }
// // //     })
// // //   }

// // //   if (loading) {
// // //     return <div className="text-center">Cargando reporte diario...</div>
// // //   }

// // //   if (error) {
// // //     return <div className="alert alert-danger">{error}</div>
// // //   }

// // //   return (
// // //     <div className="container">
// // //       {dailyReport ? (
// // //         <div className="mb-4">
// // //           <div className="d-flex justify-content-between align-items-center">
// // //             <h3 className="fw-bold">Reporte Diario</h3>
// // //             <button className="btn btn-danger btn-sm" onClick={deleteDailyReport}>
// // //               Eliminar
// // //             </button>
// // //           </div>
// // //           <h4 className="text-white mb-3">Fecha: {dailyReport.date}</h4>
// // //           <div className="table-responsive">
// // //             <table className="table table-bordered text-center align-middle">
// // //               <thead className="table-secondary text-dark">
// // //                 <tr>
// // //                   <th>Custom ID</th>
// // //                   <th>Producto</th>
// // //                   <th className="text-end">Cantidad</th>
// // //                   <th className="text-end">Precio Unitario</th>
// // //                   <th className="text-end">Total</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {dailyReport.productsSold.map((product) => (
// // //                   <tr key={product.customId}>
// // //                     <td>{product.customId}</td>
// // //                     <td className="text-start">{product.name}</td>
// // //                     <td className="text-end">{product.quantity}</td>
// // //                     <td className="text-end">{formatCurrency(product.price)}</td>
// // //                     <td className="text-end">{formatCurrency(product.total)}</td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //               <tfoot>
// // //                 <tr className="table-secondary fw-bold">
// // //                   <td colSpan="4" className="text-end">Total</td>
// // //                   <td className="text-end">{formatCurrency(dailyReport.totalRevenue)}</td>
// // //                 </tr>
// // //               </tfoot>
// // //             </table>
// // //           </div>
// // //         </div>
// // //       ) : (
// // //         <div className="alert alert-warning">No hay reporte diario disponible.</div>
// // //       )}
// // //     </div>
// // //   )
// // // }

// // // export default Reports
// // // "use client"

// // // import { useState, useEffect } from "react"
// // // import axios from "axios"
// // // import Swal from "sweetalert2"

// // // function Reports() {
// // //   const [dailyReport, setDailyReport] = useState(null)
// // //   const [loading, setLoading] = useState(true)
// // //   const [error, setError] = useState(null)

// // //   useEffect(() => {
// // //     fetchDailyReport()
// // //   }, [])

// // //   const fetchDailyReport = async () => {
// // //     setLoading(true)
// // //     setError(null)
// // //     try {
// // //       const response = await axios.get("https://back-p43y.onrender.com/api/reports/daily")
// // //       console.log("Reporte diario:", response.data) // 👀 Verifica que la API envía los datos correctamente
// // //       setDailyReport(response.data)
// // //     } catch (error) {
// // //       console.error("Error fetching daily report:", error)
// // //       setError("Error al cargar el reporte diario. Por favor, intente de nuevo más tarde.")
// // //       Swal.fire("Error", "No se pudo cargar el reporte diario", "error")
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   const formatCurrency = (amount) => {
// // //     return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(amount)
// // //   }

// // //   const deleteDailyReport = async () => {
// // //     Swal.fire({
// // //       title: "¿Estás seguro?",
// // //       text: "Esta acción eliminará el reporte diario de la base de datos.",
// // //       icon: "warning",
// // //       showCancelButton: true,
// // //       confirmButtonText: "Sí, eliminar",
// // //       cancelButtonText: "Cancelar",
// // //     }).then(async (result) => {
// // //       if (result.isConfirmed) {
// // //         try {
// // //           await axios.delete("https://back-p43y.onrender.com/api/reports/daily")
// // //           setDailyReport(null)
// // //           Swal.fire("Eliminado", "El reporte ha sido eliminado de la base de datos.", "success")
// // //         } catch (error) {
// // //           console.error("Error deleting daily report:", error)
// // //           Swal.fire("Error", "No se pudo eliminar el reporte. Por favor, intente de nuevo.", "error")
// // //         }
// // //       }
// // //     })
// // //   }

// // //   if (loading) {
// // //     return <div className="text-center">Cargando reporte diario...</div>
// // //   }

// // //   if (error) {
// // //     return <div className="alert alert-danger">{error}</div>
// // //   }

// // //   return (
// // //     <div className="container">
// // //       {dailyReport ? (
// // //         <div className="mb-4">
// // //           <div className="d-flex justify-content-between align-items-center">
// // //             <h3 className="fw-bold">Reporte Diario</h3>
// // //             <button className="btn btn-danger btn-sm" onClick={deleteDailyReport}>
// // //               Eliminar
// // //             </button>
// // //           </div>
// // //           <h4 className="text-white mb-3">Fecha: {dailyReport.date}</h4>
// // //           <div className="table-responsive">
// // //             <table className="table table-bordered text-center align-middle">
// // //               <thead className="table-secondary text-dark">
// // //                 <tr>
// // //                   <th>Custom ID</th>
// // //                   <th>Producto</th>
// // //                   <th className="text-end">Cantidad</th>
// // //                   <th className="text-end">Precio Unitario</th>
// // //                   <th className="text-end">Total</th>
// // //                   <th className="text-end">Método de Pago</th> {/* Nueva columna */}
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {dailyReport.productsSold.map((product) => {
// // //                   // 🔍 Encontrar la venta asociada a este producto
// // //                   const sale = dailyReport.sales.find((sale) =>
// // //                     sale.products.some((p) => p.customId === product.customId)
// // //                   )
// // //                   return (
// // //                     <tr key={product.customId}>
// // //                       <td>{product.customId}</td>
// // //                       <td className="text-start">{product.name}</td>
// // //                       <td className="text-end">{product.quantity}</td>
// // //                       <td className="text-end">{formatCurrency(product.price)}</td>
// // //                       <td className="text-end">{formatCurrency(product.total)}</td>
// // //                       <td className="text-end">{sale ? sale.paymentMethod : "N/A"}</td> {/* Mostrar método de pago */}
// // //                     </tr>
// // //                   )
// // //                 })}
// // //               </tbody>
// // //               <tfoot>
// // //                 <tr className="table-secondary fw-bold">
// // //                   <td colSpan="4" className="text-end">Total</td>
// // //                   <td className="text-end">{formatCurrency(dailyReport.totalRevenue)}</td>
// // //                   <td></td>
// // //                 </tr>
// // //               </tfoot>
// // //             </table>
// // //           </div>
// // //         </div>
// // //       ) : (
// // //         <div className="alert alert-warning">No hay reporte diario disponible.</div>
// // //       )}
// // //     </div>
// // //   )
// // // }

// // // export default Reports
// // // "use client"

// // // import { useState, useEffect } from "react"
// // // import axios from "axios"
// // // import Swal from "sweetalert2"

// // // function Reports() {
// // //   const [dailyReport, setDailyReport] = useState(null)
// // //   const [loading, setLoading] = useState(true)
// // //   const [error, setError] = useState(null)

// // //   useEffect(() => {
// // //     fetchDailyReport()
// // //   }, [])

// // //   const fetchDailyReport = async () => {
// // //     setLoading(true)
// // //     setError(null)
// // //     try {
// // //       const response = await axios.get("https://back-p43y.onrender.com/api/reports/daily")
// // //       console.log("Reporte diario:", response.data) // 👀 Verifica que la API envía los datos correctamente
// // //       setDailyReport(response.data)
// // //     } catch (error) {
// // //       console.error("Error fetching daily report:", error)
// // //       setError("Error al cargar el reporte diario. Por favor, intente de nuevo más tarde.")
// // //       Swal.fire("Error", "No se pudo cargar el reporte diario", "error")
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   const formatCurrency = (amount) => {
// // //     return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(amount)
// // //   }

// // //   const deleteDailyReport = async () => {
// // //     Swal.fire({
// // //       title: "¿Estás seguro?",
// // //       text: "Esta acción eliminará el reporte diario de la base de datos.",
// // //       icon: "warning",
// // //       showCancelButton: true,
// // //       confirmButtonText: "Sí, eliminar",
// // //       cancelButtonText: "Cancelar",
// // //     }).then(async (result) => {
// // //       if (result.isConfirmed) {
// // //         try {
// // //           await axios.delete("https://back-p43y.onrender.com/api/reports/daily")
// // //           setDailyReport(null)
// // //           Swal.fire("Eliminado", "El reporte ha sido eliminado de la base de datos.", "success")
// // //         } catch (error) {
// // //           console.error("Error deleting daily report:", error)
// // //           Swal.fire("Error", "No se pudo eliminar el reporte. Por favor, intente de nuevo.", "error")
// // //         }
// // //       }
// // //     })
// // //   }

// // //   if (loading) {
// // //     return <div className="text-center">Cargando reporte diario...</div>
// // //   }

// // //   if (error) {
// // //     return <div className="alert alert-danger">{error}</div>
// // //   }

// // //   return (
// // //     <div className="container">
// // //       {dailyReport ? (
// // //         <div className="mb-4">
// // //           <div className="d-flex justify-content-between align-items-center">
// // //             <h3 className="fw-bold">Reporte Diario</h3>
// // //             <button className="btn btn-danger btn-sm" onClick={deleteDailyReport}>
// // //               Eliminar
// // //             </button>
// // //           </div>
// // //           <h4 className="text-white mb-3">Fecha: {dailyReport.date}</h4>
// // //           <div className="table-responsive">
// // //             <table className="table table-bordered text-center align-middle">
// // //               <thead className="table-secondary text-dark">
// // //                 <tr>
// // //                   <th>Fecha y Hora</th>
// // //                   <th>Custom ID</th>
// // //                   <th>Producto</th>
// // //                   <th className="text-end">Cantidad</th>
// // //                   <th className="text-end">Precio Unitario</th>
// // //                   <th className="text-end">Total</th>
// // //                   <th className="text-end">Método de Pago</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {dailyReport.sales.map((sale) =>
// // //                   sale.products.map((product) => (
// // //                     <tr key={`${sale._id}-${product.customId}`}>
// // //                       <td>{sale.dateBogota}</td> {/* Muestra la fecha y hora de la venta */}
// // //                       <td>{product.customId}</td>
// // //                       <td className="text-start">{product.name}</td>
// // //                       <td className="text-end">{product.quantity}</td>
// // //                       <td className="text-end">{formatCurrency(product.price)}</td>
// // //                       <td className="text-end">{formatCurrency(product.price * product.quantity)}</td>
// // //                       <td className="text-end">{sale.paymentMethod}</td> {/* Método de pago individual */}
// // //                     </tr>
// // //                   ))
// // //                 )}
// // //               </tbody>
// // //               <tfoot>
// // //                 <tr className="table-secondary fw-bold">
// // //                   <td colSpan="5" className="text-end">Total</td>
// // //                   <td className="text-end">{formatCurrency(dailyReport.totalRevenue)}</td>
// // //                   <td></td>
// // //                 </tr>
// // //               </tfoot>
// // //             </table>
// // //           </div>
// // //         </div>
// // //       ) : (
// // //         <div className="alert alert-warning">No hay reporte diario disponible.</div>
// // //       )}
// // //     </div>
// // //   )
// // // }

// // // export default Reports
// // // "use client"

// // // import { useState, useEffect } from "react"
// // // import axios from "axios"
// // // import Swal from "sweetalert2"

// // // function Reports() {
// // //   const [dailyReport, setDailyReport] = useState(null)
// // //   const [loading, setLoading] = useState(true)
// // //   const [error, setError] = useState(null)

// // //   useEffect(() => {
// // //     fetchDailyReport()
// // //   }, [])

// // //   const fetchDailyReport = async () => {
// // //     setLoading(true)
// // //     setError(null)
// // //     try {
// // //       const response = await axios.get("https://back-p43y.onrender.com/api/reports/daily")
// // //       console.log("Reporte diario:", response.data)
// // //       setDailyReport(response.data)
// // //     } catch (error) {
// // //       console.error("Error fetching daily report:", error)
// // //       setError("Error al cargar el reporte diario. Por favor, intente de nuevo más tarde.")
// // //       Swal.fire("Error", "No se pudo cargar el reporte diario", "error")
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   const formatCurrency = (amount) => {
// // //     return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(amount)
// // //   }

// // //   const deleteDailyReport = async () => {
// // //     Swal.fire({
// // //       title: "¿Estás seguro?",
// // //       text: "Esta acción eliminará el reporte diario de la base de datos.",
// // //       icon: "warning",
// // //       showCancelButton: true,
// // //       confirmButtonText: "Sí, eliminar",
// // //       cancelButtonText: "Cancelar",
// // //     }).then(async (result) => {
// // //       if (result.isConfirmed) {
// // //         try {
// // //           await axios.delete("https://back-p43y.onrender.com/api/reports/daily")
// // //           setDailyReport(null)
// // //           Swal.fire("Eliminado", "El reporte ha sido eliminado de la base de datos.", "success")
// // //         } catch (error) {
// // //           console.error("Error deleting daily report:", error)
// // //           Swal.fire("Error", "No se pudo eliminar el reporte. Por favor, intente de nuevo.", "error")
// // //         }
// // //       }
// // //     })
// // //   }

// // //   // Calcular totales por método de pago
// // //   const paymentTotals = dailyReport
// // //     ? dailyReport.sales.reduce(
// // //         (totals, sale) => {
// // //           const totalSale = sale.products.reduce((sum, product) => sum + product.price * product.quantity, 0)
// // //           if (sale.paymentMethod === "Efectivo") {
// // //             totals.cash += totalSale
// // //           } else if (sale.paymentMethod === "Tarjeta") {
// // //             totals.card += totalSale
// // //           } else if (sale.paymentMethod === "Transferencia") {
// // //             totals.transfer += totalSale
// // //           }
// // //           return totals
// // //         },
// // //         { cash: 0, card: 0, transfer: 0 }
// // //       )
// // //     : { cash: 0, card: 0, transfer: 0 }

// // //   if (loading) {
// // //     return <div className="text-center">Cargando reporte diario...</div>
// // //   }

// // //   if (error) {
// // //     return <div className="alert alert-danger">{error}</div>
// // //   }

  

// // //   return (
// // //     <div className="container">
// // //       {dailyReport ? (
// // //         <div className="mb-4">
// // //           <div className="d-flex justify-content-between align-items-center">
// // //             <h3 className="fw-bold">Reporte Diario</h3>
// // //           </div>
// // //           <h4 className="text-white mb-3">Fecha: {dailyReport.date}</h4>

// // //           {/* Tabla de ventas */}
// // //           <div className="table-responsive">
// // //             <table className="table table-bordered text-center align-middle">
// // //               <thead className="table-secondary text-dark">
// // //                 <tr>
// // //                   <th>Fecha y Hora</th>
// // //                   <th>Custom ID</th>
// // //                   <th>Producto</th>
// // //                   <th className="text-end">Cantidad</th>
// // //                   <th className="text-end">Precio Unitario</th>
// // //                   <th className="text-end">Total</th>
// // //                   <th className="text-end">Método de Pago</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {dailyReport.sales.map((sale) =>
// // //                   sale.products.map((product) => (
// // //                     <tr key={`${sale._id}-${product.customId}`}>
// // //                       <td>{sale.dateBogota}</td>
// // //                       <td>{product.customId}</td>
// // //                       <td className="text-start">{product.name}</td>
// // //                       <td className="text-end">{product.quantity}</td>
// // //                       <td className="text-end">{formatCurrency(product.price)}</td>
// // //                       <td className="text-end">{formatCurrency(product.price * product.quantity)}</td>
// // //                       <td className="text-end">{sale.paymentMethod}</td>
// // //                     </tr>
// // //                   ))
// // //                 )}
// // //               </tbody>
// // //               <tfoot>
// // //                 <tr className="table-secondary fw-bold">
// // //                   <td colSpan="5" className="text-end">Total</td>
// // //                   <td className="text-end">{formatCurrency(dailyReport.totalRevenue)}</td>
// // //                   <td></td>
// // //                 </tr>
// // //               </tfoot>
// // //             </table>
// // //           </div>

// // //           {/* Nueva tabla de totales por método de pago */}
// // //           <h4 className="fw-bold mt-4">Total por Método de Pago</h4>
// // //           <div className="table-responsive">
// // //             <table className="table table-bordered text-center">
// // //               <thead className="table-secondary fw-bold">
// // //                 <tr>
// // //                   <th>Método de Pago</th>
// // //                   <th>Total</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 <tr>
// // //                   <td>Efectivo</td>
// // //                   <td>{formatCurrency(paymentTotals.cash)}</td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td>Tarjeta</td>
// // //                   <td>{formatCurrency(paymentTotals.card)}</td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td>Transferencia</td>
// // //                   <td>{formatCurrency(paymentTotals.transfer)}</td>
// // //                 </tr>
// // //               </tbody>
// // //               <tfoot>
// // //                 <tr className="table-secondary fw-bold">
// // //                   <td>Total General</td>
// // //                   <td>{formatCurrency(dailyReport.totalRevenue)}</td>
// // //                 </tr>
// // //               </tfoot>
// // //             </table>
// // //           </div>
// // //         </div>
// // //       ) : (
// // //         <div className="alert alert-warning">No hay reporte diario disponible.</div>
// // //       )}
      
// // //     </div>
// // //   )
// // // }

// // // export default Reports
// // "use client"

// // import { useState, useEffect } from "react"
// // import axios from "axios"
// // import Swal from "sweetalert2"
// // import moment from "moment"
// // import "moment/locale/es"

// // function Reports() {
// //   const [activeTab, setActiveTab] = useState("daily")
// //   const [dailyReport, setDailyReport] = useState(null)
// //   const [monthlyReport, setMonthlyReport] = useState(null)
// //   const [loading, setLoading] = useState(true)
// //   const [error, setError] = useState(null)

// //   // Configurar moment para usar español
// //   moment.locale("es")

// //   useEffect(() => {
// //     if (activeTab === "daily") {
// //       fetchDailyReport()
// //     } else if (activeTab === "monthly") {
// //       fetchMonthlyReport()
// //     }
// //   }, [activeTab])

// //   const fetchDailyReport = async () => {
// //     setLoading(true)
// //     setError(null)
// //     try {
// //       const response = await axios.get("https://back-p43y.onrender.com/api/reports/daily")
// //       console.log("Reporte diario:", response.data)
// //       setDailyReport(response.data)
// //     } catch (error) {
// //       console.error("Error fetching daily report:", error)
// //       setError("Error al cargar el reporte diario. Por favor, intente de nuevo más tarde.")
// //       Swal.fire("Error", "No se pudo cargar el reporte diario", "error")
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   const fetchMonthlyReport = async () => {
// //     setLoading(true)
// //     setError(null)
// //     try {
// //       const response = await axios.get("https://back-p43y.onrender.com/api/reports/monthly")
// //       console.log("Reporte mensual (estructura completa):", response)
// //       console.log("Reporte mensual (datos):", response.data)

// //       // Si el reporte está vacío (no hay ventas en el mes), inicializamos con un array vacío
// //       if (response.data && !response.data.report) {
// //         response.data.report = []
// //       }

// //       setMonthlyReport(response.data)
// //     } catch (error) {
// //       console.error("Error fetching monthly report:", error)
// //       setError("Error al cargar el reporte mensual. Por favor, intente de nuevo más tarde.")
// //       Swal.fire("Error", "No se pudo cargar el reporte mensual", "error")
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   const formatCurrency = (amount) => {
// //     return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(
// //       amount || 0,
// //     )
// //   }

// //   const formatDate = (dateString) => {
// //     return moment(dateString).format("DD/MM/YYYY")
// //   }

// //   const formatDateTime = (dateString) => {
// //     return moment(dateString).format("DD/MM/YYYY HH:mm:ss")
// //   }

// //   // Calcular totales por método de pago para el reporte diario
// //   const paymentTotals =
// //     dailyReport && dailyReport.sales
// //       ? dailyReport.sales.reduce(
// //           (totals, sale) => {
// //             const totalSale = sale.products.reduce((sum, product) => sum + product.price * product.quantity, 0)
// //             if (sale.paymentMethod === "Efectivo") {
// //               totals.cash += totalSale
// //             } else if (sale.paymentMethod === "Tarjeta") {
// //               totals.card += totalSale
// //             } else if (sale.paymentMethod === "Transferencia") {
// //               totals.transfer += totalSale
// //             }
// //             return totals
// //           },
// //           { cash: 0, card: 0, transfer: 0 },
// //         )
// //       : { cash: 0, card: 0, transfer: 0 }

// //   // Calcular totales para el reporte mensual
// //   const monthlyTotals =
// //     monthlyReport && monthlyReport.report && monthlyReport.report.length > 0
// //       ? monthlyReport.report.reduce(
// //           (totals, day) => {
// //             totals.totalSales += day.totalSales || 0
// //             totals.totalRevenue += day.totalRevenue || 0
// //             totals.totalProductsSold += day.totalProductsSold || 0
// //             return totals
// //           },
// //           { totalSales: 0, totalRevenue: 0, totalProductsSold: 0 },
// //         )
// //       : { totalSales: 0, totalRevenue: 0, totalProductsSold: 0 }

// //   if (loading) {
// //     return (
// //       <div className="container">
// //         <div className="text-center my-5">
// //           <div className="spinner-border text-primary" role="status">
// //             <span className="visually-hidden">Cargando...</span>
// //           </div>
// //           <p className="mt-3">Cargando reporte...</p>
// //         </div>
// //       </div>
// //     )
// //   }

// //   if (error) {
// //     return (
// //       <div className="container">
// //         <div className="alert alert-danger">{error}</div>
// //       </div>
// //     )
// //   }

// //   // Verificar si hay datos en el reporte mensual
// //   const hasMonthlyData =
// //     monthlyReport && monthlyReport.report && Array.isArray(monthlyReport.report) && monthlyReport.report.length > 0

// //   return (
// //     <div className="container">
// //       {/* Pestañas de navegación */}
// //       <ul className="nav nav-tabs mb-4">
// //         <li className="nav-item">
// //           <button className={`nav-link ${activeTab === "daily" ? "active" : ""}`} onClick={() => setActiveTab("daily")}>
// //             <i className="bi bi-calendar-day me-2"></i>
// //             Reporte Diario
// //           </button>
// //         </li>
// //         <li className="nav-item">
// //           <button
// //             className={`nav-link ${activeTab === "monthly" ? "active" : ""}`}
// //             onClick={() => setActiveTab("monthly")}
// //           >
// //             <i className="bi bi-calendar-month me-2"></i>
// //             Reporte Mensual
// //           </button>
// //         </li>
// //       </ul>

// //       {/* Reporte Diario */}
// //       {activeTab === "daily" && dailyReport ? (
// //         <div className="mb-4">
// //           <div className="d-flex justify-content-between align-items-center">
// //             <h3 className="fw-bold">Reporte Diario</h3>
// //             <button className="btn btn-outline-primary" onClick={() => window.print()}>
// //               <i className="bi bi-printer me-2"></i>
// //               Imprimir
// //             </button>
// //           </div>
// //           <h4 className="mb-3">Fecha: {dailyReport.date}</h4>

// //           <div className="row mb-4">
// //             <div className="col-md-4">
// //               <div className="card bg-primary text-white">
// //                 <div className="card-body text-center">
// //                   <h5 className="card-title">Total Ventas</h5>
// //                   <h2 className="card-text">{dailyReport.totalSales}</h2>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="col-md-4">
// //               <div className="card bg-success text-white">
// //                 <div className="card-body text-center">
// //                   <h5 className="card-title">Ingresos Totales</h5>
// //                   <h2 className="card-text">{formatCurrency(dailyReport.totalRevenue)}</h2>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="col-md-4">
// //               <div className="card bg-info text-white">
// //                 <div className="card-body text-center">
// //                   <h5 className="card-title">Productos Vendidos</h5>
// //                   <h2 className="card-text">
// //                     {dailyReport.productsSold.reduce((sum, product) => sum + product.quantity, 0)}
// //                   </h2>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Tabla de ventas */}
// //           <h4 className="fw-bold mt-4">Detalle de Ventas</h4>
// //           <div className="table-responsive">
// //             <table className="table table-bordered table-striped text-center align-middle">
// //               <thead className="table-secondary text-dark">
// //                 <tr>
// //                   <th>Fecha y Hora</th>
// //                   <th>Custom ID</th>
// //                   <th>Producto</th>
// //                   <th className="text-end">Cantidad</th>
// //                   <th className="text-end">Precio Unitario</th>
// //                   <th className="text-end">Total</th>
// //                   <th className="text-end">Método de Pago</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {dailyReport.sales.map((sale) =>
// //                   sale.products.map((product) => (
// //                     <tr key={`${sale._id}-${product.customId}`}>
// //                       <td>{sale.dateBogota}</td>
// //                       <td>{product.customId}</td>
// //                       <td className="text-start">{product.name}</td>
// //                       <td className="text-end">{product.quantity}</td>
// //                       <td className="text-end">{formatCurrency(product.price)}</td>
// //                       <td className="text-end">{formatCurrency(product.price * product.quantity)}</td>
// //                       <td className="text-end">
// //                         <span
// //                           className={`badge ${
// //                             sale.paymentMethod === "Efectivo"
// //                               ? "bg-success"
// //                               : sale.paymentMethod === "Tarjeta"
// //                                 ? "bg-warning"
// //                                 : "bg-info"
// //                           }`}
// //                         >
// //                           {sale.paymentMethod}
// //                         </span>
// //                       </td>
// //                     </tr>
// //                   )),
// //                 )}
// //               </tbody>
// //               <tfoot>
// //                 <tr className="table-secondary fw-bold">
// //                   <td colSpan="5" className="text-end">
// //                     Total
// //                   </td>
// //                   <td className="text-end">{formatCurrency(dailyReport.totalRevenue)}</td>
// //                   <td></td>
// //                 </tr>
// //               </tfoot>
// //             </table>
// //           </div>

// //           {/* Nueva tabla de totales por método de pago */}
// //           <h4 className="fw-bold mt-4">Total por Método de Pago</h4>
// //           <div className="table-responsive">
// //             <table className="table table-bordered text-center">
// //               <thead className="table-secondary fw-bold">
// //                 <tr>
// //                   <th>Método de Pago</th>
// //                   <th>Total</th>
// //                   <th>Porcentaje</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 <tr>
// //                   <td>
// //                     <span className="badge bg-success me-2">*</span>
// //                     Efectivo
// //                   </td>
// //                   <td>{formatCurrency(paymentTotals.cash)}</td>
// //                   <td>
// //                     {dailyReport.totalRevenue > 0
// //                       ? `${Math.round((paymentTotals.cash / dailyReport.totalRevenue) * 100)}%`
// //                       : "0%"}
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>
// //                     <span className="badge bg-warning me-2">*</span>
// //                     Tarjeta
// //                   </td>
// //                   <td>{formatCurrency(paymentTotals.card)}</td>
// //                   <td>
// //                     {dailyReport.totalRevenue > 0
// //                       ? `${Math.round((paymentTotals.card / dailyReport.totalRevenue) * 100)}%`
// //                       : "0%"}
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>
// //                     <span className="badge bg-info me-2">*</span>
// //                     Transferencia
// //                   </td>
// //                   <td>{formatCurrency(paymentTotals.transfer)}</td>
// //                   <td>
// //                     {dailyReport.totalRevenue > 0
// //                       ? `${Math.round((paymentTotals.transfer / dailyReport.totalRevenue) * 100)}%`
// //                       : "0%"}
// //                   </td>
// //                 </tr>
// //               </tbody>
// //               <tfoot>
// //                 <tr className="table-secondary fw-bold">
// //                   <td>Total General</td>
// //                   <td>{formatCurrency(dailyReport.totalRevenue)}</td>
// //                   <td>100%</td>
// //                 </tr>
// //               </tfoot>
// //             </table>
// //           </div>
// //         </div>
// //       ) : (
// //         activeTab === "daily" && <div className="alert alert-warning">No hay reporte diario disponible.</div>
// //       )}

// //       {/* Reporte Mensual */}
// //       {activeTab === "monthly" && hasMonthlyData ? (
// //         <div className="mb-4">
// //           <div className="d-flex justify-content-between align-items-center">
// //             <h3 className="fw-bold">Reporte Mensual</h3>
// //             <button className="btn btn-outline-primary" onClick={() => window.print()}>
// //               <i className="bi bi-printer me-2"></i>
// //               Imprimir
// //             </button>
// //           </div>
// //           <h4 className="mb-3">
// //             Período: {formatDate(monthlyReport.startDate)} - {formatDate(monthlyReport.endDate)}
// //           </h4>

// //           <div className="row mb-4">
// //             <div className="col-md-4">
// //               <div className="card bg-primary text-white">
// //                 <div className="card-body text-center">
// //                   <h5 className="card-title">Total Ventas</h5>
// //                   <h2 className="card-text">{monthlyTotals.totalSales}</h2>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="col-md-4">
// //               <div className="card bg-success text-white">
// //                 <div className="card-body text-center">
// //                   <h5 className="card-title">Ingresos Totales</h5>
// //                   <h2 className="card-text">{formatCurrency(monthlyTotals.totalRevenue)}</h2>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="col-md-4">
// //               <div className="card bg-info text-white">
// //                 <div className="card-body text-center">
// //                   <h5 className="card-title">Productos Vendidos</h5>
// //                   <h2 className="card-text">{monthlyTotals.totalProductsSold}</h2>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Tabla de ventas por día */}
// //           <h4 className="fw-bold mt-4">Ventas por Día</h4>
// //           <div className="table-responsive">
// //             <table className="table table-bordered table-striped text-center align-middle">
// //               <thead className="table-secondary text-dark">
// //                 <tr>
// //                   <th>Fecha</th>
// //                   <th className="text-end">Ventas</th>
// //                   <th className="text-end">Productos Vendidos</th>
// //                   <th className="text-end">Ingresos</th>
// //                   <th className="text-end">% del Total</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {monthlyReport.report.map((day) => (
// //                   <tr key={day.date}>
// //                     <td>{formatDate(day.date)}</td>
// //                     <td className="text-end">{day.totalSales}</td>
// //                     <td className="text-end">{day.totalProductsSold}</td>
// //                     <td className="text-end">{formatCurrency(day.totalRevenue)}</td>
// //                     <td className="text-end">
// //                       {monthlyTotals.totalRevenue > 0
// //                         ? `${Math.round((day.totalRevenue / monthlyTotals.totalRevenue) * 100)}%`
// //                         : "0%"}
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //               <tfoot>
// //                 <tr className="table-secondary fw-bold">
// //                   <td>Total</td>
// //                   <td className="text-end">{monthlyTotals.totalSales}</td>
// //                   <td className="text-end">{monthlyTotals.totalProductsSold}</td>
// //                   <td className="text-end">{formatCurrency(monthlyTotals.totalRevenue)}</td>
// //                   <td className="text-end">100%</td>
// //                 </tr>
// //               </tfoot>
// //             </table>
// //           </div>

// //           {/* Gráfico de barras simple con CSS */}
// //           <h4 className="fw-bold mt-4">Distribución de Ventas por Día</h4>
// //           <div className="mb-4">
// //             {monthlyReport.report.map((day) => {
// //               const percentage =
// //                 monthlyTotals.totalRevenue > 0 ? (day.totalRevenue / monthlyTotals.totalRevenue) * 100 : 0

// //               return (
// //                 <div key={day.date} className="mb-3">
// //                   <div className="d-flex justify-content-between mb-1">
// //                     <span>{formatDate(day.date)}</span>
// //                     <span>{formatCurrency(day.totalRevenue)}</span>
// //                   </div>
// //                   <div className="progress" style={{ height: "25px" }}>
// //                     <div
// //                       className="progress-bar bg-success"
// //                       role="progressbar"
// //                       style={{ width: `${percentage}%` }}
// //                       aria-valuenow={percentage}
// //                       aria-valuemin="0"
// //                       aria-valuemax="100"
// //                     >
// //                       {Math.round(percentage)}%
// //                     </div>
// //                   </div>
// //                 </div>
// //               )
// //             })}
// //           </div>

// //           {/* Estadísticas adicionales */}
// //           <div className="row mt-4">
// //             <div className="col-md-6">
// //               <div className="card">
// //                 <div className="card-header bg-primary text-white">
// //                   <h5 className="mb-0">Promedio de Ventas</h5>
// //                 </div>
// //                 <div className="card-body">
// //                   <table className="table table-borderless">
// //                     <tbody>
// //                       <tr>
// //                         <td>Promedio de ventas por día:</td>
// //                         <td className="text-end fw-bold">
// //                           {monthlyReport.report.length > 0
// //                             ? (monthlyTotals.totalSales / monthlyReport.report.length).toFixed(2)
// //                             : "0"}
// //                         </td>
// //                       </tr>
// //                       <tr>
// //                         <td>Promedio de ingresos por día:</td>
// //                         <td className="text-end fw-bold">
// //                           {monthlyReport.report.length > 0
// //                             ? formatCurrency(monthlyTotals.totalRevenue / monthlyReport.report.length)
// //                             : formatCurrency(0)}
// //                         </td>
// //                       </tr>
// //                       <tr>
// //                         <td>Promedio de productos por venta:</td>
// //                         <td className="text-end fw-bold">
// //                           {monthlyTotals.totalSales > 0
// //                             ? (monthlyTotals.totalProductsSold / monthlyTotals.totalSales).toFixed(2)
// //                             : "0"}
// //                         </td>
// //                       </tr>
// //                     </tbody>
// //                   </table>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="col-md-6">
// //               <div className="card">
// //                 <div className="card-header bg-success text-white">
// //                   <h5 className="mb-0">Mejores Días</h5>
// //                 </div>
// //                 <div className="card-body">
// //                   {monthlyReport.report.length > 0 ? (
// //                     <>
// //                       <p>
// //                         <strong>Día con más ventas:</strong>{" "}
// //                         {formatDate(
// //                           monthlyReport.report.reduce(
// //                             (max, day) => (day.totalSales > max.totalSales ? day : max),
// //                             monthlyReport.report[0],
// //                           ).date,
// //                         )}{" "}
// //                         (
// //                         {
// //                           monthlyReport.report.reduce(
// //                             (max, day) => (day.totalSales > max.totalSales ? day : max),
// //                             monthlyReport.report[0],
// //                           ).totalSales
// //                         }{" "}
// //                         ventas)
// //                       </p>
// //                       <p>
// //                         <strong>Día con más ingresos:</strong>{" "}
// //                         {formatDate(
// //                           monthlyReport.report.reduce(
// //                             (max, day) => (day.totalRevenue > max.totalRevenue ? day : max),
// //                             monthlyReport.report[0],
// //                           ).date,
// //                         )}{" "}
// //                         (
// //                         {formatCurrency(
// //                           monthlyReport.report.reduce(
// //                             (max, day) => (day.totalRevenue > max.totalRevenue ? day : max),
// //                             monthlyReport.report[0],
// //                           ).totalRevenue,
// //                         )}
// //                         )
// //                       </p>
// //                     </>
// //                   ) : (
// //                     <p>No hay datos suficientes</p>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       ) : (
// //         activeTab === "monthly" && (
// //           <div className="alert alert-warning">
// //             <div className="d-flex align-items-center">
// //               <i className="bi bi-exclamation-triangle-fill fs-3 me-3"></i>
// //               <div>
// //                 <h4 className="alert-heading">No hay reporte mensual disponible</h4>
// //                 <p className="mb-0">
// //                   No se encontraron ventas para el mes actual. Intente realizar algunas ventas y vuelva a consultar el
// //                   reporte.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         )
// //       )}
// //     </div>
// //   )
// // }

// // export default Reports

// "use client"

// import { useState, useEffect } from "react"
// import axios from "axios"
// import Swal from "sweetalert2"
// import moment from "moment"
// import "moment/locale/es"

// function Reports() {
//   const [activeTab, setActiveTab] = useState("daily")
//   const [dailyReport, setDailyReport] = useState(null)
//   const [monthlyData, setMonthlyData] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   // Configurar moment para usar español
//   moment.locale("es")

//   useEffect(() => {
//     if (activeTab === "daily") {
//       fetchDailyReport()
//     } else if (activeTab === "monthly") {
//       fetchMonthlyReport()
//     }
//   }, [activeTab])

//   const fetchDailyReport = async () => {
//     setLoading(true)
//     setError(null)
//     try {
//       const response = await axios.get("https://back-p43y.onrender.com/api/reports/daily")
//       console.log("Reporte diario:", response.data)
//       setDailyReport(response.data)
//     } catch (error) {
//       console.error("Error fetching daily report:", error)
//       setError("Error al cargar el reporte diario. Por favor, intente de nuevo más tarde.")
//       Swal.fire("Error", "No se pudo cargar el reporte diario", "error")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const fetchMonthlyReport = async () => {
//     setLoading(true)
//     setError(null)
//     try {
//       // Usar la URL que funciona (puede ser la de producción o localhost según tu entorno)
//       const response = await axios.get("http://localhost:5009/api/reports/monthly")
//       console.log("Reporte mensual (estructura completa):", response)
//       console.log("Reporte mensual (datos):", response.data)

//       // Guardar los datos directamente como vienen de la API
//       setMonthlyData(response.data)
//     } catch (error) {
//       console.error("Error fetching monthly report:", error)
//       setError("Error al cargar el reporte mensual. Por favor, intente de nuevo más tarde.")
//       Swal.fire("Error", "No se pudo cargar el reporte mensual", "error")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(
//       amount || 0,
//     )
//   }

//   const formatDate = (dateString) => {
//     return moment(dateString).format("DD/MM/YYYY")
//   }

//   const formatDateTime = (dateString) => {
//     return moment(dateString).format("DD/MM/YYYY HH:mm:ss")
//   }

//   // Calcular totales por método de pago para el reporte diario
//   const paymentTotals =
//     dailyReport && dailyReport.sales
//       ? dailyReport.sales.reduce(
//           (totals, sale) => {
//             const totalSale = sale.products.reduce((sum, product) => sum + product.price * product.quantity, 0)
//             if (sale.paymentMethod === "Efectivo") {
//               totals.cash += totalSale
//             } else if (sale.paymentMethod === "Tarjeta") {
//               totals.card += totalSale
//             } else if (sale.paymentMethod === "Transferencia") {
//               totals.transfer += totalSale
//             }
//             return totals
//           },
//           { cash: 0, card: 0, transfer: 0 },
//         )
//       : { cash: 0, card: 0, transfer: 0 }

//   if (loading) {
//     return (
//       <div className="container">
//         <div className="text-center my-5">
//           <div className="spinner-border text-primary" role="status">
//             <span className="visually-hidden">Cargando...</span>
//           </div>
//           <p className="mt-3">Cargando reporte...</p>
//         </div>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="container">
//         <div className="alert alert-danger">{error}</div>
//       </div>
//     )
//   }

//   // Verificar si hay datos en el reporte mensual
//   const hasMonthlyData =
//     monthlyData &&
//     monthlyData.dailyReports &&
//     Array.isArray(monthlyData.dailyReports) &&
//     monthlyData.dailyReports.length > 0

//   return (
//     <div className="container">
//       {/* Pestañas de navegación */}
//       <ul className="nav nav-tabs mb-4">
//         <li className="nav-item">
//           <button className={`nav-link ${activeTab === "daily" ? "active" : ""}`} onClick={() => setActiveTab("daily")}>
//             <i className="bi bi-calendar-day me-2"></i>
//             Reporte Diario
//           </button>
//         </li>
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === "monthly" ? "active" : ""}`}
//             onClick={() => setActiveTab("monthly")}
//           >
//             <i className="bi bi-calendar-month me-2"></i>
//             Reporte Mensual
//           </button>
//         </li>
//       </ul>

//       {/* Reporte Diario */}
//       {activeTab === "daily" && dailyReport ? (
//         <div className="mb-4">
//           <div className="d-flex justify-content-between align-items-center">
//             <h3 className="fw-bold">Reporte Diario</h3>
//             <button className="btn btn-outline-primary" onClick={() => window.print()}>
//               <i className="bi bi-printer me-2"></i>
//               Imprimir
//             </button>
//           </div>
//           <h4 className="mb-3">Fecha: {dailyReport.date}</h4>

//           <div className="row mb-4">
//             <div className="col-md-4">
//               <div className="card bg-primary text-white">
//                 <div className="card-body text-center">
//                   <h5 className="card-title">Total Ventas</h5>
//                   <h2 className="card-text">{dailyReport.totalSales}</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card bg-success text-white">
//                 <div className="card-body text-center">
//                   <h5 className="card-title">Ingresos Totales</h5>
//                   <h2 className="card-text">{formatCurrency(dailyReport.totalRevenue)}</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card bg-info text-white">
//                 <div className="card-body text-center">
//                   <h5 className="card-title">Productos Vendidos</h5>
//                   <h2 className="card-text">
//                     {dailyReport.productsSold.reduce((sum, product) => sum + product.quantity, 0)}
//                   </h2>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Tabla de ventas */}
//           <h4 className="fw-bold mt-4">Detalle de Ventas</h4>
//           <div className="table-responsive">
//             <table className="table table-bordered table-striped text-center align-middle">
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
//                       <td>{sale.dateBogota}</td>
//                       <td>{product.customId}</td>
//                       <td className="text-start">{product.name}</td>
//                       <td className="text-end">{product.quantity}</td>
//                       <td className="text-end">{formatCurrency(product.price)}</td>
//                       <td className="text-end">{formatCurrency(product.price * product.quantity)}</td>
//                       <td className="text-end">
//                         <span
//                           className={`badge ${
//                             sale.paymentMethod === "Efectivo"
//                               ? "bg-success"
//                               : sale.paymentMethod === "Tarjeta"
//                                 ? "bg-warning"
//                                 : "bg-info"
//                           }`}
//                         >
//                           {sale.paymentMethod}
//                         </span>
//                       </td>
//                     </tr>
//                   )),
//                 )}
//               </tbody>
//               <tfoot>
//                 <tr className="table-secondary fw-bold">
//                   <td colSpan="5" className="text-end">
//                     Total
//                   </td>
//                   <td className="text-end">{formatCurrency(dailyReport.totalRevenue)}</td>
//                   <td></td>
//                 </tr>
//               </tfoot>
//             </table>
//           </div>

//           {/* Nueva tabla de totales por método de pago */}
//           <h4 className="fw-bold mt-4">Total por Método de Pago</h4>
//           <div className="table-responsive">
//             <table className="table table-bordered text-center">
//               <thead className="table-secondary fw-bold">
//                 <tr>
//                   <th>Método de Pago</th>
//                   <th>Total</th>
//                   <th>Porcentaje</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>
//                     <span className="badge bg-success me-2">*</span>
//                     Efectivo
//                   </td>
//                   <td>{formatCurrency(paymentTotals.cash)}</td>
//                   <td>
//                     {dailyReport.totalRevenue > 0
//                       ? `${Math.round((paymentTotals.cash / dailyReport.totalRevenue) * 100)}%`
//                       : "0%"}
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <span className="badge bg-warning me-2">*</span>
//                     Tarjeta
//                   </td>
//                   <td>{formatCurrency(paymentTotals.card)}</td>
//                   <td>
//                     {dailyReport.totalRevenue > 0
//                       ? `${Math.round((paymentTotals.card / dailyReport.totalRevenue) * 100)}%`
//                       : "0%"}
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <span className="badge bg-info me-2">*</span>
//                     Transferencia
//                   </td>
//                   <td>{formatCurrency(paymentTotals.transfer)}</td>
//                   <td>
//                     {dailyReport.totalRevenue > 0
//                       ? `${Math.round((paymentTotals.transfer / dailyReport.totalRevenue) * 100)}%`
//                       : "0%"}
//                   </td>
//                 </tr>
//               </tbody>
//               <tfoot>
//                 <tr className="table-secondary fw-bold">
//                   <td>Total General</td>
//                   <td>{formatCurrency(dailyReport.totalRevenue)}</td>
//                   <td>100%</td>
//                 </tr>
//               </tfoot>
//             </table>
//           </div>
//         </div>
//       ) : (
//         activeTab === "daily" && <div className="alert alert-warning">No hay reporte diario disponible.</div>
//       )}

//       {/* Reporte Mensual - NUEVA IMPLEMENTACIÓN */}
//       {activeTab === "monthly" && hasMonthlyData ? (
//         <div className="mb-4">
//           <div className="d-flex justify-content-between align-items-center">
//             <h3 className="fw-bold">Reporte Mensual: {monthlyData.month}</h3>
//             <button className="btn btn-outline-primary" onClick={() => window.print()}>
//               <i className="bi bi-printer me-2"></i>
//               Imprimir
//             </button>
//           </div>
//           <h4 className="mb-3">
//             Período: {formatDate(monthlyData.dailyReports[0].date)} -{" "}
//             {formatDate(monthlyData.dailyReports[monthlyData.dailyReports.length - 1].date)}
//           </h4>

//           <div className="row mb-4">
//             <div className="col-md-4">
//               <div className="card bg-primary text-white">
//                 <div className="card-body text-center">
//                   <h5 className="card-title">Total Ventas</h5>
//                   <h2 className="card-text">{monthlyData.totalSales}</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card bg-success text-white">
//                 <div className="card-body text-center">
//                   <h5 className="card-title">Ingresos Totales</h5>
//                   <h2 className="card-text">{formatCurrency(monthlyData.totalRevenue)}</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card bg-info text-white">
//                 <div className="card-body text-center">
//                   <h5 className="card-title">Productos Vendidos</h5>
//                   <h2 className="card-text">
//                     {monthlyData.dailyReports.reduce((total, day) => {
//                       return (
//                         total +
//                         Object.values(day.productsSold || {}).reduce((sum, product) => sum + product.quantity, 0)
//                       )
//                     }, 0)}
//                   </h2>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Tabla de ventas por día */}
//           <h4 className="fw-bold mt-4">Ventas por Día</h4>
//           <div className="table-responsive">
//             <table className="table table-bordered table-striped text-center align-middle">
//               <thead className="table-secondary text-dark">
//                 <tr>
//                   <th>Fecha</th>
//                   <th className="text-end">Ventas</th>
//                   <th className="text-end">Productos Vendidos</th>
//                   <th className="text-end">Ingresos</th>
//                   <th className="text-end">% del Total</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {monthlyData.dailyReports.map((day) => {
//                   const productsCount = Object.values(day.productsSold || {}).reduce(
//                     (sum, product) => sum + product.quantity,
//                     0,
//                   )

//                   return (
//                     <tr key={day.date}>
//                       <td>{formatDate(day.date)}</td>
//                       <td className="text-end">{day.totalSales}</td>
//                       <td className="text-end">{productsCount}</td>
//                       <td className="text-end">{formatCurrency(day.totalRevenue)}</td>
//                       <td className="text-end">
//                         {monthlyData.totalRevenue > 0
//                           ? `${Math.round((day.totalRevenue / monthlyData.totalRevenue) * 100)}%`
//                           : "0%"}
//                       </td>
//                     </tr>
//                   )
//                 })}
//               </tbody>
//               <tfoot>
//                 <tr className="table-secondary fw-bold">
//                   <td>Total</td>
//                   <td className="text-end">{monthlyData.totalSales}</td>
//                   <td className="text-end">
//                     {monthlyData.dailyReports.reduce((total, day) => {
//                       return (
//                         total +
//                         Object.values(day.productsSold || {}).reduce((sum, product) => sum + product.quantity, 0)
//                       )
//                     }, 0)}
//                   </td>
//                   <td className="text-end">{formatCurrency(monthlyData.totalRevenue)}</td>
//                   <td className="text-end">100%</td>
//                 </tr>
//               </tfoot>
//             </table>
//           </div>

//           {/* Gráfico de barras simple con CSS */}
//           <h4 className="fw-bold mt-4">Distribución de Ventas por Día</h4>
//           <div className="mb-4">
//             {monthlyData.dailyReports.map((day) => {
//               const percentage = monthlyData.totalRevenue > 0 ? (day.totalRevenue / monthlyData.totalRevenue) * 100 : 0

//               return (
//                 <div key={day.date} className="mb-3">
//                   <div className="d-flex justify-content-between mb-1">
//                     <span>{formatDate(day.date)}</span>
//                     <span>{formatCurrency(day.totalRevenue)}</span>
//                   </div>
//                   <div className="progress" style={{ height: "25px" }}>
//                     <div
//                       className="progress-bar bg-success"
//                       role="progressbar"
//                       style={{ width: `${percentage}%` }}
//                       aria-valuenow={percentage}
//                       aria-valuemin="0"
//                       aria-valuemax="100"
//                     >
//                       {Math.round(percentage)}%
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>

//           {/* Estadísticas adicionales */}
//           <div className="row mt-4">
//             <div className="col-md-6">
//               <div className="card">
//                 <div className="card-header bg-primary text-white">
//                   <h5 className="mb-0">Promedio de Ventas</h5>
//                 </div>
//                 <div className="card-body">
//                   <table className="table table-borderless">
//                     <tbody>
//                       <tr>
//                         <td>Promedio de ventas por día:</td>
//                         <td className="text-end fw-bold">
//                           {monthlyData.dailyReports.length > 0
//                             ? (monthlyData.totalSales / monthlyData.dailyReports.length).toFixed(2)
//                             : "0"}
//                         </td>
//                       </tr>
//                       <tr>
//                         <td>Promedio de ingresos por día:</td>
//                         <td className="text-end fw-bold">
//                           {monthlyData.dailyReports.length > 0
//                             ? formatCurrency(monthlyData.totalRevenue / monthlyData.dailyReports.length)
//                             : formatCurrency(0)}
//                         </td>
//                       </tr>
//                       <tr>
//                         <td>Promedio de productos por venta:</td>
//                         <td className="text-end fw-bold">
//                           {monthlyData.totalSales > 0
//                             ? (
//                                 monthlyData.dailyReports.reduce((total, day) => {
//                                   return (
//                                     total +
//                                     Object.values(day.productsSold || {}).reduce(
//                                       (sum, product) => sum + product.quantity,
//                                       0,
//                                     )
//                                   )
//                                 }, 0) / monthlyData.totalSales
//                               ).toFixed(2)
//                             : "0"}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="card">
//                 <div className="card-header bg-success text-white">
//                   <h5 className="mb-0">Mejores Días</h5>
//                 </div>
//                 <div className="card-body">
//                   {monthlyData.dailyReports.length > 0 ? (
//                     <>
//                       <p>
//                         <strong>Día con más ventas:</strong>{" "}
//                         {formatDate(
//                           monthlyData.dailyReports.reduce(
//                             (max, day) => (day.totalSales > max.totalSales ? day : max),
//                             monthlyData.dailyReports[0],
//                           ).date,
//                         )}{" "}
//                         (
//                         {
//                           monthlyData.dailyReports.reduce(
//                             (max, day) => (day.totalSales > max.totalSales ? day : max),
//                             monthlyData.dailyReports[0],
//                           ).totalSales
//                         }{" "}
//                         ventas)
//                       </p>
//                       <p>
//                         <strong>Día con más ingresos:</strong>{" "}
//                         {formatDate(
//                           monthlyData.dailyReports.reduce(
//                             (max, day) => (day.totalRevenue > max.totalRevenue ? day : max),
//                             monthlyData.dailyReports[0],
//                           ).date,
//                         )}{" "}
//                         (
//                         {formatCurrency(
//                           monthlyData.dailyReports.reduce(
//                             (max, day) => (day.totalRevenue > max.totalRevenue ? day : max),
//                             monthlyData.dailyReports[0],
//                           ).totalRevenue,
//                         )}
//                         )
//                       </p>
//                     </>
//                   ) : (
//                     <p>No hay datos suficientes</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         activeTab === "monthly" && (
//           <div className="alert alert-warning">
//             <div className="d-flex align-items-center">
//               <i className="bi bi-exclamation-triangle-fill fs-3 me-3"></i>
//               <div>
//                 <h4 className="alert-heading">No hay reporte mensual disponible</h4>
//                 <p className="mb-0">
//                   No se encontraron ventas para el mes actual. Intente realizar algunas ventas y vuelva a consultar el
//                   reporte.
//                 </p>
//               </div>
//             </div>
//           </div>
//         )
//       )}
//     </div>
//   )
// }

// export default Reports

"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import moment from "moment"
import "moment/locale/es"

function Reports() {
  const [activeTab, setActiveTab] = useState("daily")
  const [dailyReport, setDailyReport] = useState(null)
  const [monthlyData, setMonthlyData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Configurar moment para usar español
  moment.locale("es")

  useEffect(() => {
    if (activeTab === "daily") {
      fetchDailyReport()
    } else if (activeTab === "monthly") {
      fetchMonthlyReport()
    }
  }, [activeTab])

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

  const fetchMonthlyReport = async () => {
    setLoading(true)
    setError(null)
    try {
      // Usar la URL que funciona (puede ser la de producción o localhost según tu entorno)
      const response = await axios.get("https://back-p43y.onrender.com/api/reports/monthly")
      console.log("Reporte mensual (estructura completa):", response)
      console.log("Reporte mensual (datos):", response.data)

      // Guardar los datos directamente como vienen de la API
      setMonthlyData(response.data)
    } catch (error) {
      console.error("Error fetching monthly report:", error)
      setError("Error al cargar el reporte mensual. Por favor, intente de nuevo más tarde.")
      Swal.fire("Error", "No se pudo cargar el reporte mensual", "error")
    } finally {
      setLoading(false)
    }
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(
      amount || 0,
    )
  }

  const formatDate = (dateString) => {
    return moment(dateString).format("DD/MM/YYYY")
  }

  const formatDateTime = (dateString) => {
    return moment(dateString).format("DD/MM/YYYY HH:mm:ss")
  }

  // Calcular totales por método de pago para el reporte diario
  const paymentTotals =
    dailyReport && dailyReport.sales
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
          { cash: 0, card: 0, transfer: 0 },
        )
      : { cash: 0, card: 0, transfer: 0 }

  if (loading) {
    return (
      <div className="container">
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-3">Cargando reporte...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container">
        <div className="alert alert-danger">{error}</div>
      </div>
    )
  }

  // Verificar si hay datos en el reporte mensual
  const hasMonthlyData =
    monthlyData &&
    monthlyData.dailyReports &&
    Array.isArray(monthlyData.dailyReports) &&
    monthlyData.dailyReports.length > 0

  return (
    <div className="container">
      {/* Pestañas de navegación */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button className={`nav-link ${activeTab === "daily" ? "active" : ""}`} onClick={() => setActiveTab("daily")}>
            <i className="bi bi-calendar-day me-2"></i>
            Reporte Diario
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "monthly" ? "active" : ""}`}
            onClick={() => setActiveTab("monthly")}
          >
            <i className="bi bi-calendar-month me-2"></i>
            Reporte Mensual
          </button>
        </li>
      </ul>

      {/* Reporte Diario */}
      {activeTab === "daily" && dailyReport ? (
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="fw-bold">Reporte Diario</h3>
            <button className="btn btn-outline-primary" onClick={() => window.print()}>
              <i className="bi bi-printer me-2"></i>
              Imprimir
            </button>
          </div>
          <h4 className="mb-3">Fecha: {dailyReport.date}</h4>

          <div className="row mb-4">
            <div className="col-md-4">
              <div className="card bg-primary text-white">
                <div className="card-body text-center">
                  <h5 className="card-title">Total Ventas</h5>
                  <h2 className="card-text">{dailyReport.totalSales}</h2>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-success text-white">
                <div className="card-body text-center">
                  <h5 className="card-title">Ingresos Totales</h5>
                  <h2 className="card-text">{formatCurrency(dailyReport.totalRevenue)}</h2>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-info text-white">
                <div className="card-body text-center">
                  <h5 className="card-title">Productos Vendidos</h5>
                  <h2 className="card-text">
                    {dailyReport.productsSold.reduce((sum, product) => sum + product.quantity, 0)}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Tabla de ventas */}
          <h4 className="fw-bold mt-4">Detalle de Ventas</h4>
          <div className="table-responsive">
            <table className="table table-bordered table-striped text-center align-middle">
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
                      <td className="text-end">
                        <span
                          className={`badge ${
                            sale.paymentMethod === "Efectivo"
                              ? "bg-success"
                              : sale.paymentMethod === "Tarjeta"
                                ? "bg-warning"
                                : "bg-info"
                          }`}
                        >
                          {sale.paymentMethod}
                        </span>
                      </td>
                    </tr>
                  )),
                )}
              </tbody>
              <tfoot>
                <tr className="table-secondary fw-bold">
                  <td colSpan="5" className="text-end">
                    Total
                  </td>
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
                  <th>Porcentaje</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="badge bg-success me-2">*</span>
                    Efectivo
                  </td>
                  <td>{formatCurrency(paymentTotals.cash)}</td>
                  <td>
                    {dailyReport.totalRevenue > 0
                      ? `${Math.round((paymentTotals.cash / dailyReport.totalRevenue) * 100)}%`
                      : "0%"}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="badge bg-warning me-2">*</span>
                    Tarjeta
                  </td>
                  <td>{formatCurrency(paymentTotals.card)}</td>
                  <td>
                    {dailyReport.totalRevenue > 0
                      ? `${Math.round((paymentTotals.card / dailyReport.totalRevenue) * 100)}%`
                      : "0%"}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="badge bg-info me-2">*</span>
                    Transferencia
                  </td>
                  <td>{formatCurrency(paymentTotals.transfer)}</td>
                  <td>
                    {dailyReport.totalRevenue > 0
                      ? `${Math.round((paymentTotals.transfer / dailyReport.totalRevenue) * 100)}%`
                      : "0%"}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="table-secondary fw-bold">
                  <td>Total General</td>
                  <td>{formatCurrency(dailyReport.totalRevenue)}</td>
                  <td>100%</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      ) : (
        activeTab === "daily" && <div className="alert alert-warning">No hay reporte diario disponible.</div>
      )}

      {/* Reporte Mensual - NUEVA IMPLEMENTACIÓN */}
      {activeTab === "monthly" && hasMonthlyData ? (
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="fw-bold">Reporte Mensual: {monthlyData.month}</h3>
            <button className="btn btn-outline-primary" onClick={() => window.print()}>
              <i className="bi bi-printer me-2"></i>
              Imprimir
            </button>
          </div>
          <h4 className="mb-3">
            Período: {formatDate(monthlyData.dailyReports[0].date)} -{" "}
            {formatDate(monthlyData.dailyReports[monthlyData.dailyReports.length - 1].date)}
          </h4>

          <div className="row mb-4">
            <div className="col-md-4">
              <div className="card bg-primary text-white">
                <div className="card-body text-center">
                  <h5 className="card-title">Total Ventas</h5>
                  <h2 className="card-text">{monthlyData.totalSales}</h2>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-success text-white">
                <div className="card-body text-center">
                  <h5 className="card-title">Ingresos Totales</h5>
                  <h2 className="card-text">{formatCurrency(monthlyData.totalRevenue)}</h2>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-info text-white">
                <div className="card-body text-center">
                  <h5 className="card-title">Productos Vendidos</h5>
                  <h2 className="card-text">
                    {monthlyData.dailyReports.reduce((total, day) => {
                      return (
                        total +
                        Object.values(day.productsSold || {}).reduce((sum, product) => sum + product.quantity, 0)
                      )
                    }, 0)}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Tabla de ventas por día */}
          <h4 className="fw-bold mt-4">Ventas por Día</h4>
          <div className="table-responsive">
            <table className="table table-bordered table-striped text-center align-middle">
              <thead className="table-secondary text-dark">
                <tr>
                  <th>Fecha</th>
                  <th className="text-end">Ventas</th>
                  <th className="text-end">Productos Vendidos</th>
                  <th className="text-end">Ingresos</th>
                  <th className="text-end">% del Total</th>
                </tr>
              </thead>
              <tbody>
                {monthlyData.dailyReports.map((day) => {
                  const productsCount = Object.values(day.productsSold || {}).reduce(
                    (sum, product) => sum + product.quantity,
                    0,
                  )

                  return (
                    <tr key={day.date}>
                      <td>{formatDate(day.date)}</td>
                      <td className="text-end">{day.totalSales}</td>
                      <td className="text-end">{productsCount}</td>
                      <td className="text-end">{formatCurrency(day.totalRevenue)}</td>
                      <td className="text-end">
                        {monthlyData.totalRevenue > 0
                          ? `${Math.round((day.totalRevenue / monthlyData.totalRevenue) * 100)}%`
                          : "0%"}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
              <tfoot>
                <tr className="table-secondary fw-bold">
                  <td>Total</td>
                  <td className="text-end">{monthlyData.totalSales}</td>
                  <td className="text-end">
                    {monthlyData.dailyReports.reduce((total, day) => {
                      return (
                        total +
                        Object.values(day.productsSold || {}).reduce((sum, product) => sum + product.quantity, 0)
                      )
                    }, 0)}
                  </td>
                  <td className="text-end">{formatCurrency(monthlyData.totalRevenue)}</td>
                  <td className="text-end">100%</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Gráfico de barras simple con CSS */}
          <h4 className="fw-bold mt-4">Distribución de Ventas por Día</h4>
          <div className="mb-4">
            {monthlyData.dailyReports.map((day) => {
              const percentage = monthlyData.totalRevenue > 0 ? (day.totalRevenue / monthlyData.totalRevenue) * 100 : 0

              return (
                <div key={day.date} className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>{formatDate(day.date)}</span>
                    <span>{formatCurrency(day.totalRevenue)}</span>
                  </div>
                  <div className="progress" style={{ height: "25px" }}>
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                      aria-valuenow={percentage}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {Math.round(percentage)}%
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Estadísticas adicionales */}
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header bg-primary text-white">
                  <h5 className="mb-0">Promedio de Ventas</h5>
                </div>
                <div className="card-body">
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <td>Promedio de ventas por día:</td>
                        <td className="text-end fw-bold">
                          {monthlyData.dailyReports.length > 0
                            ? (monthlyData.totalSales / monthlyData.dailyReports.length).toFixed(2)
                            : "0"}
                        </td>
                      </tr>
                      <tr>
                        <td>Promedio de ingresos por día:</td>
                        <td className="text-end fw-bold">
                          {monthlyData.dailyReports.length > 0
                            ? formatCurrency(monthlyData.totalRevenue / monthlyData.dailyReports.length)
                            : formatCurrency(0)}
                        </td>
                      </tr>
                      <tr>
                        <td>Promedio de productos por venta:</td>
                        <td className="text-end fw-bold">
                          {monthlyData.totalSales > 0
                            ? (
                                monthlyData.dailyReports.reduce((total, day) => {
                                  return (
                                    total +
                                    Object.values(day.productsSold || {}).reduce(
                                      (sum, product) => sum + product.quantity,
                                      0,
                                    )
                                  )
                                }, 0) / monthlyData.totalSales
                              ).toFixed(2)
                            : "0"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header bg-success text-white">
                  <h5 className="mb-0">Mejores Días</h5>
                </div>
                <div className="card-body">
                  {monthlyData.dailyReports.length > 0 ? (
                    <>
                      <p>
                        <strong>Día con más ventas:</strong>{" "}
                        {formatDate(
                          monthlyData.dailyReports.reduce(
                            (max, day) => (day.totalSales > max.totalSales ? day : max),
                            monthlyData.dailyReports[0],
                          ).date,
                        )}{" "}
                        (
                        {
                          monthlyData.dailyReports.reduce(
                            (max, day) => (day.totalSales > max.totalSales ? day : max),
                            monthlyData.dailyReports[0],
                          ).totalSales
                        }{" "}
                        ventas)
                      </p>
                      <p>
                        <strong>Día con más ingresos:</strong>{" "}
                        {formatDate(
                          monthlyData.dailyReports.reduce(
                            (max, day) => (day.totalRevenue > max.totalRevenue ? day : max),
                            monthlyData.dailyReports[0],
                          ).date,
                        )}{" "}
                        (
                        {formatCurrency(
                          monthlyData.dailyReports.reduce(
                            (max, day) => (day.totalRevenue > max.totalRevenue ? day : max),
                            monthlyData.dailyReports[0],
                          ).totalRevenue,
                        )}
                        )
                      </p>
                    </>
                  ) : (
                    <p>No hay datos suficientes</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        activeTab === "monthly" && (
          <div className="alert alert-warning">
            <div className="d-flex align-items-center">
              <i className="bi bi-exclamation-triangle-fill fs-3 me-3"></i>
              <div>
                <h4 className="alert-heading">No hay reporte mensual disponible</h4>
                <p className="mb-0">
                  No se encontraron ventas para el mes actual. Intente realizar algunas ventas y vuelva a consultar el
                  reporte.
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default Reports


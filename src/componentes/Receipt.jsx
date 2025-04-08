
// export default Receipt;
function Receipt({ sale }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(
      amount,
    )
  }

  // Verificar que sale y sus propiedades existan
  if (!sale) return null

  // Verificar en la consola qué datos están llegando
  console.log("Datos de venta en Receipt:", sale)

  return (
    <div className="receipt-container print-only">
      <h2 className="receipt-title">Moccap.Café</h2>
      <p className="receipt-subtitle">Recibo de Venta</p>
      <div className="receipt-details">
        <p>Fecha: {new Date(sale.date).toLocaleString()}</p>
        <p>Número de venta: {sale._id}</p>
        {/* Asegurarse de que el método de pago se muestre con alta visibilidad */}
        <p style={{ fontWeight: "bold", fontSize: "10px" }}>
          Método de Pago: {sale.paymentMethod || "No especificado"}
        </p>
      </div>
      <table className="receipt-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cant.</th>
            <th className="text-right">Precio</th>
            <th className="text-right">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {sale.products.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td className="text-right">{formatCurrency(item.price)}</td>
              <td className="text-right">{formatCurrency(item.quantity * item.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="receipt-total">
        <p>Total: {formatCurrency(sale.total)}</p>
      </div>
      {/* Repetir el método de pago al final del recibo para mayor visibilidad */}
      
    </div>
  )
}

export default Receipt

  
function Cart({ cart }) {

  return (
    <div style={{ padding: "40px" }}>

      <h1 style={{ fontSize: "28px", marginBottom: "30px" }}>
        Your Cart 🛒
      </h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={{
            display: "flex",
            gap: "20px",
            marginBottom: "20px",
            borderBottom: "1px solid #ddd",
            paddingBottom: "20px"
          }}>

            {/* IMAGE */}
            <img 
              src={item.image} 
              style={{ width: "120px", borderRadius: "8px" }} 
            />

            {/* DETAILS */}
            <div>
              <h2>{item.name}</h2>
              <p>₹{item.price}</p>
            </div>

          </div>
        ))
      )}

    </div>
  );
}

export default Cart;
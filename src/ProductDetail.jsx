import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Vitamin B12 + NMF 03% Face Toner",
    price: 399,
    image: "/m1.avif",
    desc: "This soothing toner blends Vitamin B12 with hydrating humectants to deeply replenish the skin. Its lightweight, fast-absorbing formula features amino acids, Natural Moisturising Factors, Hyaluronic Acid, Trehalose, and Betaine to boost moisture and prevent water loss. With added Panthenol, it calms, nourishes, and leaves skin balanced and hydrated."

  }
];

function ProductDetail({ cart, setCart }) {
  const { id } = useParams();

  const product = products.find(p => p.id === Number(id));

  return (
    <div style={{ padding: "40px" }}>

      <div style={{ display: "flex", gap: "60px" , marginLeft:"90px" }}>

        {/* LEFT IMAGE */}
        <div>
          <img 
            src={product.image} 
            style={{ width: "500px", borderRadius: "10px" }} 
          />
        </div>

        {/* RIGHT DETAILS */}
        <div style={{ maxWidth: "500px", marginTop:"130px" }}>

          <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
            {product.name}
          </h1>

          <p style={{ color: "gray", marginBottom: "20px" }}>
            {product.desc}
          </p>

          <h1 style={{ marginBottom: "32px" }}>
            ₹{product.price}
          </h1>

          {/* QUANTITY */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>

          {/* ADD TO CART */}
        <button 
  onClick={() => {
    setCart([...cart, product]);
    console.log("Added:", product);
  }}
  style={{
    background: "black",
    color: "white",
    padding: "12px 40px",
    width: "100%",
    position: "relative",
    zIndex: 10
  }}
>
  ADD TO CART
</button>
<button> Buy Now </button>
        </div>

      </div>

    </div>
  );
}

export default ProductDetail;
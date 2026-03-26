import "./Shop.css"; 

function Shop() {
  return (
    <>
      <h1 className="shop-title">Collections</h1>

      <div className="shop-container" >
        <div className="shop-item">
          <img src="/shop1.avif" alt="" />
          <p>Bath & Body</p>
        </div>

        <div className="shop-item">
          <img src="/shop2.avif" alt="" />
          <p>Skin</p>
        </div>

        <div className="shop-item">
          <img src="/shop3.avif" alt="" />
          <p>Hair</p>
        </div>

        <div className="shop-item">
          <img src="/shop4.avif" alt="" />
          <p>Lip</p>
        </div>

        <div className="shop-item">
          <img src="/shop5.avif" alt="" />
          <p>Best Sellers</p>
        </div>

        <div className="shop-item">
          <img src="/shop6.avif" alt="" />
          <p>New Launches</p>
        </div>

        <div className="shop-item">
          <img src="/shop7.avif" alt="" />
          <p>All Products</p>
        </div>
      </div>
    </>
  );
}

export default Shop;
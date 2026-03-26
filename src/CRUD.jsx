// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function CRUD() {

//   const [products, setProducts] = useState([]);
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");

//   // 🔹 READ (data fetch)
//   const getProducts = () => {
//     axios.get("http://127.0.0.1:8000/api/products/")
//       .then((res) => {
//         setProducts(res.data);
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   // 🔹 CREATE (add product)
//   const addProduct = () => {
//     axios.post("http://127.0.0.1:8000/api/products/", {
//       name: name,
//       price: price,
//     })
//     .then(() => {
//       getProducts(); // refresh list
//       setName("");
//       setPrice("");
//     });
//   };

//   // 🔹 DELETE
//   const deleteProduct = (id) => {
//     axios.delete(`http://127.0.0.1:8000/api/products/${id}/`)
//       .then(() => {
//         getProducts();
//       });
//   };

//   return (
//     <div className="p-10">

//       <h1 className="text-3xl mb-5">Django + React CRUD</h1>

//       {/* FORM */}
//       <input
//         type="text"
//         placeholder="Product Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         className="border p-2 mr-2"
//       />

//       <input
//         type="number"
//         placeholder="Price"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//         className="border p-2 mr-2"
//       />

//       <button
//         onClick={addProduct}
//         className="bg-black text-white px-4 py-2"
//       >
//         Add Product
//       </button>

//       {/* LIST */}
//       <div className="mt-10">
//         {products.map((p) => (
//           <div key={p.id} className="flex justify-between border p-3 mb-2">

//             <div>
//               <p>{p.name}</p>
//               <p>₹{p.price}</p>
//             </div>

//             <button
//               onClick={() => deleteProduct(p.id)}
//               className="bg-red-500 text-white px-3 py-1"
//             >
//               Delete
//             </button>

//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }

// export default CRUD;

import React, { useEffect, useState } from "react";
import axios from "axios";

function CRUD() {

  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 🔹 READ
  const getProducts = () => {
    axios.get("http://127.0.0.1:8000/api/products/")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  // 🔹 CREATE
  const addProduct = () => {
    axios.post("http://127.0.0.1:8000/api/products/", {
      name: name,
      price: price,
    })
    .then(() => {
      getProducts();
      setName("");
      setPrice("");
    });
  };

  // 🔹 DELETE
  const deleteProduct = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/products/${id}/`)
      .then(() => {
        getProducts();
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white shadow-xl rounded-2xl w-[600px]">

        <h1 className="text-3xl font-semibold text-center mb-6" style={{margin:"19px"}}>
          Product Manager
        </h1>

        {/* FORM */}
        <div className="flex gap-2 mb-5" style={{margin:"30px"}}>
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-black" style={{padding:"12px"}}
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border rounded-lg p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          onClick={addProduct}
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition" style={{padding:"5px"}}
        >
          Add Product
        </button>

        {/* LIST */}
        <div className="mt-8 space-y-3 max-h-[300px] overflow-y-auto">

          {products.map((p) => (
            <div
              key={p.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition"
            >

              <div>
                <p className="font-medium">{p.name}</p>
                <p className="text-gray-500 text-sm">₹{p.price}</p>
              </div>

              <button
                onClick={() => deleteProduct(p.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default CRUD;
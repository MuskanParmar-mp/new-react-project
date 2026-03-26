import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import TiltedCard from "./TiltedCard";

function BabyCare() {

  const [openIndex, setOpenIndex] = useState(null);

  return (
    
    <div className="min-h-screen">
    
          {/* Heading */}
          <h1 className="text-4xl font-semibold text-center" style={{marginTop:"30px"}}>Baby Care</h1>
          <p className="text-center text-gray-500 mb-10" style={{marginTop:"30px"}}>
            A curated range of pediatrician-approved baby care products formulated with the most sensitive skin in mind. Our hypoallergenic and dermatologically-tested line<br/> gently cleanses, soothes, protects, and nourishes your little ones

          </p>
    
          <div className="flex gap-1">
    
            {/* LEFT SIDEBAR */}
            <div className="w-1/4" style={{marginLeft:"80px", marginTop:"60px"}}>
    
              <p style={{marginBottom:"11px", fontSize:"17px" , fontWeight:"bold"}}>Sort by:</p>
              <select className="border p-15 mb-6" style={{padding:"6px", width:"160px" , marginBottom:"60px"}}>
                <option>Featured</option>
                <option>Best Selling </option>
                <option>Price, low to high </option>
                <option>Date, old to new</option>
                <option>Date, new  to old</option>
               
              </select>
    
              <h3 style={{marginBottom:"11px", fontSize:"17px" , fontWeight:"bold"}}>Category</h3>
              <ul className=" text-gray-900 space-y-1" style={{marginBottom:"77px"}}>
                <li style={{marginBottom:"8px"}}>Baby (4)</li>
               
              </ul>
    
              <h3 style={{marginBottom:"11px", fontSize:"17px" , fontWeight:"bold"}}>Step</h3>
              <ul className="mb-6 text-gray-900 space-y-1" style={{marginBottom:"77px"}}>
                <li style={{marginBottom:"8px"}}>Cleanse (9)</li>
                <li style={{marginBottom:"8px"}}>Treat (4)</li>
                <li style={{marginBottom:"8px"}}>Nourish (27)</li>
                <li style={{marginBottom:"8px"}}>Moisturize (10)</li>
                
              </ul>
    
              <h3 style={{marginBottom:"11px", fontSize:"17px" , fontWeight:"bold"}}>Type of Product</h3>
              <ul className="text-gray-900 space-y-1" style={{marginBottom:"77px"}}>
                <li style={{marginBottom:"8px"}}>Body Lotion (5)</li>
                <li style={{marginBottom:"8px"}}>Body Wash (4)</li>
                <li style={{marginBottom:"8px"}}>Body Oil (4)</li>
              </ul>
    
            </div>
    
            {/* RIGHT SIDE */}
            <div className="w-3/4">
    
              
    
              {/* ✅ ONLY ONE GRID */}
              <div className="grid grid-cols-3 gap-10">
    
                {/* PRODUCT 1 */}
                <div>
                  <TiltedCard
                    imageSrc="/b1.avif"
                    containerHeight="580px"
                    containerWidth="250px"
                    imageHeight="480px"
                    imageWidth="360px"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                  />
                  <div style={{marginLeft:"-43px", marginTop:"-110px"}}> 
                  <h2  className=" text-black mt-10 text-" style={{marginTop:"80px", fontSize:"20px" , marginBottom:"10px" }}>
                    Ceramide & Vitamin B5 Delicate<br/> Cleanser
                  </h2>
    
                  <p className="text-gray-500 text-sm " style={{marginBottom:"18px",}}>
                    Gentle formula that cleanses without  drying

                  </p>
    
                  <div  className="icon" style={{display:"flex" , gap:"5px", marginBottom:"12px" , fontSize:"15px"}} >
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                  </div>
    
                  
                  <p>₹566 <span className="line-through text-gray-400 " >₹599</span></p>
    
                  <button
                    onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                    className="bg-black text-white  " style={{padding:"6px", width:"340px" , marginTop:"23px"}}
                  >
                    Add To Cart
                  </button>
    
                  {openIndex === 0 && (
                    <div className="border mt-2">
                      <p className="p-2 hover:bg-gray-200 cursor-pointer">50g</p>
                      <p className="p-2 hover:bg-gray-200 cursor-pointer">100g</p>
                    </div>
                  )}
    
                  </div>
                </div>
    
                {/* PRODUCT 2 */}
                {/* <div className="bg-white p-4">
                  <img src="/bs2.avif" className="w-full h-64 object-cover mb-4" />
                  <p>SPF 50 Sunscreen</p>
                  <p className="text-gray-500 text-sm">Sun protection</p>
                  <p>★★★★☆</p>
                  <p>₹359 <span className="line-through text-gray-400">₹399</span></p>
                  <button className="w-full bg-black text-white py-2 mt-2">Select Size</button>
                </div> */}
    
                
                <div>
                  <TiltedCard
                    imageSrc="/b2.avif"
                    containerHeight="580px"
                    containerWidth="250px"
                    imageHeight="480px"
                    imageWidth="360px"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                  />
                  <div style={{marginLeft:"-43px", marginTop:"-110px"}}> 
                  <h2  className=" text-black mt-10 text-" style={{marginTop:"80px", fontSize:"20px" , marginBottom:"10px" }}>
                   Ceramide & Squalane Nourishing <br/>Lotion
                  </h2>
    
                  <p className="text-gray-500 text-sm " style={{marginBottom:"18px",}}>
                   Deeply nourishes, keeps skin soft
                  </p>
    
                  <div  className="icon" style={{display:"flex" , gap:"5px", marginBottom:"12px" , fontSize:"15px"}} >
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                  </div>
    
                  <p>₹859 <span className="line-through text-gray-400">₹899</span></p>
    
                  <button
                    onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                    className="bg-black text-white  " style={{padding:"6px", width:"340px" , marginTop:"23px"}}
                  >
                   Add To Cart
                  </button>
    
                  {openIndex === 0 && (
                    <div className="border mt-2">
                      <p className="p-2 hover:bg-gray-200 cursor-pointer">50g</p>
                      <p className="p-2 hover:bg-gray-200 cursor-pointer">100g</p>
                    </div>
                  )}
    
                  </div>
                </div>
    
                {/* PRODUCT 3 */}
              
    
                
                <div>
                  <TiltedCard
                    imageSrc="/b3.avif"
                    containerHeight="610px"
                    containerWidth="250px"
                    imageHeight="480px"
                    imageWidth="360px"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                  />
                  <div style={{marginLeft:"-43px", marginTop:"-110px"}}> 
                  <h2  className=" text-black mt-10 text-" style={{marginTop:"80px", fontSize:"20px" , marginBottom:"10px" }}>
                    Zinc Oxide + B5 Healing Ointment
                  </h2>
    
                  <p className="text-gray-500 text-sm " style={{marginBottom:"18px",}}>
                   Prevents skin irritation & diaper rash
                  </p>
    
                  <div  className="icon" style={{display:"flex" , gap:"5px", marginBottom:"12px" , fontSize:"15px"}} >
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                  </div>
    
                  
                  <p>₹379 <span className="line-through text-gray-400">₹399</span></p>
    
                  <button
                    onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                    className="bg-black text-white  " style={{padding:"6px", width:"340px" , marginTop:"23px"}}
                  >
                    Add To Cart
                  </button>
    
                  {openIndex === 0 && (
                    <div className="border mt-2">
                      <p className="p-2 hover:bg-gray-200 cursor-pointer">50g</p>
                      <p className="p-2 hover:bg-gray-200 cursor-pointer">100g</p>
                    </div>
                  )}
    
                  </div>
                </div>
    
    
                
                {/* PRODUCT 4 */}
    
              <div>
                  <TiltedCard
                    imageSrc="/b4.avif"
                    containerHeight="580px"
                    containerWidth="250px"
                    imageHeight="480px"
                    imageWidth="360px"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                  />
                  <div style={{marginLeft:"-43px", marginTop:"-110px" , marginBottom:"20px"}}> 
                  <h2  className=" text-black mt-10 text-" style={{marginTop:"80px", fontSize:"20px" , marginBottom:"10px" }}>
                    Provitamin D3 Massage Oil
                  </h2>
    
                  <p className="text-gray-500 text-sm " style={{marginBottom:"18px",}}>
                    Nourishes & soothes baby's delicate skin
                  </p>
    
                  <div  className="icon" style={{display:"flex" , gap:"5px", marginBottom:"12px" , fontSize:"15px"}} >
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                  </div>
    
                  
                  <p>₹569 <span className="line-through text-gray-400">₹599</span></p>
    
                  <button
                    onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                    className="bg-black text-white  " style={{padding:"6px", width:"340px" , marginTop:"23px"}}
                  >
                   Add To cart
                  </button>
    
                  {openIndex === 0 && (
                    <div className="border mt-2">
                      <p className="p-2 hover:bg-gray-200 cursor-pointer">50g</p>
                      <p className="p-2 hover:bg-gray-200 cursor-pointer">100g</p>
                    </div>
                  )}
    
                  </div>
                </div>  
    
    
              
    
    
                
    
              </div>
    
            </div>
    
          </div>
    
        </div>
  );
}

export default BabyCare;
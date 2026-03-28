
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import TiltedCard from "./TiltedCard";
import React, { useEffect, useState } from "react";
import axios from "axios";

function BestSellers() {

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen">

      {/* Heading */}
      <h1 className="text-4xl font-semibold text-center" style={{marginTop:"30px"}}>Best Sellers</h1>
      <p className="text-center text-gray-500 mb-10" style={{marginTop:"30px"}}>
        Top Selling products on Minimalist 
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
             <option>Price, high  to low</option>
           
          </select>

          <h3 style={{marginBottom:"11px", fontSize:"17px" , fontWeight:"bold"}}>Category</h3>
          <ul className=" text-gray-900 space-y-1" style={{marginBottom:"77px"}}>
            <li style={{marginBottom:"8px"}}>Skin (49)</li>
            <li style={{marginBottom:"8px"}}>Hair (12)</li>
            <li style={{marginBottom:"8px"}}>Body (7)</li>
            <li style={{marginBottom:"8px"}}>Eye (1)</li>
            <li style={{marginBottom:"8px"}}>Baby (4)</li>
          </ul>

          <h3 style={{marginBottom:"11px", fontSize:"17px" , fontWeight:"bold"}}>Step</h3>
          <ul className="mb-6 text-gray-900 space-y-1" style={{marginBottom:"77px"}}>
            <li style={{marginBottom:"8px"}}>Cleanse (9)</li>
            <li style={{marginBottom:"8px"}}>Tone (4)</li>
            <li style={{marginBottom:"8px"}}>Treat (27)</li>
            <li style={{marginBottom:"8px"}}>Moisturize (10)</li>
            <li style={{marginBottom:"8px"}}>SPF (7)</li>
          </ul>

          <h3 style={{marginBottom:"11px", fontSize:"17px" , fontWeight:"bold"}}>Type of Product</h3>
          <ul className="text-gray-900 space-y-1" style={{marginBottom:"77px"}}>
            <li style={{marginBottom:"8px"}}>Cleanser (5)</li>
            <li style={{marginBottom:"8px"}}>Toner (4)</li>
            <li style={{marginBottom:"8px"}}>Moisturizer (6)</li>
            <li style={{marginBottom:"8px"}}>SPF (6)</li>
            <li style={{marginBottom:"8px"}}>Serum (19)</li>
          </ul>

        </div>

        {/* RIGHT SIDE */}
        <div className="w-3/4" style={{marginBottom:"20px"}} >

          

          {/* ✅ ONLY ONE GRID */}
          <div className="grid grid-cols-3 gap-10">

            {/* PRODUCT 1 */}
            <div>
              <TiltedCard
                imageSrc="/pro1.avif"
                containerHeight="580px"
                containerWidth="250px"
                imageHeight="480px"
                imageWidth="360px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
              />
              <div style={{marginLeft:"-43px", marginTop:"-110px"}}> 
              <h2  className=" text-black mt-10 text-" style={{marginTop:"80px", fontSize:"20px" , marginBottom:"10px" }}>
                Salicylic Acid + LHA 2% Cleanser
              </h2>

              <p className="text-gray-500 text-sm " style={{marginBottom:"18px",}}>
                Acne, Breakouts & Oiliness
              </p>

              <div  className="icon" style={{display:"flex" , gap:"5px", marginBottom:"12px" , fontSize:"15px"}} >
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
              </div>

              
              <p>₹284 <span className="line-through text-gray-400 " >₹350</span></p>

              <button
                onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                className="bg-black text-white  " style={{padding:"6px", width:"340px" , marginTop:"23px"}}
              >
                Select Size
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
                imageSrc="/bs2.avif"
                containerHeight="580px"
                containerWidth="250px"
                imageHeight="480px"
                imageWidth="360px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
              />
              <div style={{marginLeft:"-43px", marginTop:"-110px"}}> 
              <h2  className=" text-black mt-10 text-" style={{marginTop:"80px", fontSize:"20px" , marginBottom:"10px" }}>
                SPF 50 Sunscreen
              </h2>

              <p className="text-gray-500 text-sm " style={{marginBottom:"18px",}}>
                Sun protection
              </p>

              <div  className="icon" style={{display:"flex" , gap:"5px", marginBottom:"12px" , fontSize:"15px"}} >
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
              </div>

              <p>₹359 <span className="line-through text-gray-400">₹399</span></p>

              <button
                onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                className="bg-black text-white  " style={{padding:"6px", width:"340px" , marginTop:"23px"}}
              >
                Select Size
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
            {/* <div className="bg-white p-4">
              <img src="/bs3.avif" className="w-full h-64 object-cover mb-4" />
              <p>Salicylic Acid 2% Face Serum</p>
              <p className="text-gray-500 text-sm">Acne, Oily Skin</p>
              <p>★★★★☆</p>
              <p>₹494 <span className="line-through text-gray-400">₹549</span></p>
              <button className="w-full bg-black text-white py-2 mt-2">Select Size</button>
            </div> */}

            
            <div>
              <TiltedCard
                imageSrc="/bs3.avif"
                containerHeight="580px"
                containerWidth="250px"
                imageHeight="480px"
                imageWidth="360px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
              />
              <div style={{marginLeft:"-43px", marginTop:"-110px"}}> 
              <h2  className=" text-black mt-10 text-" style={{marginTop:"80px", fontSize:"20px" , marginBottom:"10px" }}>
                Salicylic Acid 2% Face Serum
              </h2>

              <p className="text-gray-500 text-sm " style={{marginBottom:"18px",}}>
                Acne, Oily Skin
              </p>

              <div  className="icon" style={{display:"flex" , gap:"5px", marginBottom:"12px" , fontSize:"15px"}} >
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
              </div>

              
              <p>₹494 <span className="line-through text-gray-400">₹549</span></p>

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
                imageSrc="/bs4.avif"
                containerHeight="580px"
                containerWidth="250px"
                imageHeight="480px"
                imageWidth="360px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
              />
              <div style={{marginLeft:"-43px", marginTop:"-110px"}}> 
              <h2  className=" text-black mt-10 text-" style={{marginTop:"80px", fontSize:"20px" , marginBottom:"10px" }}>
                Vitamin C 10% Face Serum
              </h2>

              <p className="text-gray-500 text-sm " style={{marginBottom:"18px",}}>
                Dullness, Spots & Loss of Elasticity
              </p>

              <div  className="icon" style={{display:"flex" , gap:"5px", marginBottom:"12px" , fontSize:"15px"}} >
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
              </div>

              
              <p>₹269 <span className="line-through text-gray-400">₹299</span></p>

              <button
                onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                className="bg-black text-white  " style={{padding:"6px", width:"340px" , marginTop:"23px"}}
              >
                Select Size
              </button>

              {openIndex === 0 && (
                <div className="border mt-2">
                  <p className="p-2 hover:bg-gray-200 cursor-pointer">50g</p>
                  <p className="p-2 hover:bg-gray-200 cursor-pointer">100g</p>
                </div>
              )}

              </div>
            </div>  


          {/* PRODUCT 5 */}

          <div>
              <TiltedCard
                imageSrc="/bs5.avif"
                containerHeight="580px"
                containerWidth="250px"
                imageHeight="480px"
                imageWidth="360px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
              />
              <div style={{marginLeft:"-43px", marginTop:"-110px"}}> 
              <h2  className=" text-black mt-10 text-" style={{marginTop:"80px", fontSize:"20px" , marginBottom:"10px" }}>
                Niacinamide 10% Face Serum
              </h2>

              <p className="text-gray-500 text-sm " style={{marginBottom:"18px",}}>
                Acne Marks, Acne Prone & Oily Skin
              </p>

              <div  className="icon" style={{display:"flex" , gap:"5px", marginBottom:"12px" , fontSize:"15px"}} >
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
              </div>

              
              <p>₹539 <span className="line-through text-gray-400">₹599</span></p>

              <button
                onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                className="bg-black text-white  " style={{padding:"6px", width:"340px" , marginTop:"23px"}}
              >
                Select Size 
              </button>

              {openIndex === 0 && (
                <div className="border mt-2">
                  <p className="p-2 hover:bg-gray-200 cursor-pointer">50g</p>
                  <p className="p-2 hover:bg-gray-200 cursor-pointer">100g</p>
                </div>
              )}

              </div>
            </div>

          {/* PRODUCT 6*/}

          <div>
              <TiltedCard
                imageSrc="/bs6.avif"
                containerHeight="580px"
                containerWidth="250px"
                imageHeight="480px"
                imageWidth="360px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
              />
              <div style={{marginLeft:"-43px", marginTop:"-110px"}}> 
              <h2  className=" text-black mt-10 text-" style={{marginTop:"80px", fontSize:"20px" , marginBottom:"10px" }}>
                Vitamin B5 10% Moisturizer
              </h2>

              <p className="text-gray-500 text-sm " style={{marginBottom:"18px",}}>
                Damaged Barrier, Oily & Dehydrated
              </p>

              <div  className="icon" style={{display:"flex" , gap:"5px", marginBottom:"12px" , fontSize:"15px"}} >
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
              </div>

              
              <p>₹315 <span className="line-through text-gray-400">₹349</span></p>

              <button
                onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                className="bg-black text-white  " style={{padding:"6px", width:"340px" , marginTop:"23px"}}
              >
                  Select Size 
              </button>

              {openIndex === 0 && (
                <div className="border mt-2">
                  <p className="p-2 hover:bg-gray-200 cursor-pointer">50g</p>
                  <p className="p-2 hover:bg-gray-200 cursor-pointer">100g</p>
                </div>
              )}

              </div>
            </div>

          {/* PRODUCT 7 */}

          <div>
              <TiltedCard
                imageSrc="/bs7.png"
                containerHeight="580px"
                containerWidth="250px"
                imageHeight="480px"
                imageWidth="360px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
              />
              <div style={{marginLeft:"-43px", marginTop:"-110px"}}> 
              <h2  className=" text-black mt-10 text-" style={{marginTop:"80px", fontSize:"20px" , marginBottom:"10px" }}>
                Alpha Arbutin 2% Face Serum
              </h2>

              <p className="text-gray-500 text-sm " style={{marginBottom:"18px",}}>
                Hyperpigmentation, Tanning & Sunspot
              </p>

              <div  className="icon" style={{display:"flex" , gap:"5px", marginBottom:"12px" , fontSize:"15px"}} >
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
              </div>

              
              <p>₹494 <span className="line-through text-gray-400">₹549</span></p>

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


          {/* PRODUCT 8 */}

          <div>
              <TiltedCard
                imageSrc="/bs8.png"
                containerHeight="580px"
                containerWidth="250px"
                imageHeight="480px"
                imageWidth="360px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
              />
              <div style={{marginLeft:"-43px", marginTop:"-110px"}}> 
              <h2  className=" text-black mt-10 text-" style={{marginTop:"80px", fontSize:"20px" , marginBottom:"10px" }}>
               Niacinamide 5% Face Serum
              </h2>

              <p className="text-gray-500 text-sm " style={{marginBottom:"18px",}}>
               Acne Marks, Irritated & Damaged Skin
              </p>

              <div  className="icon" style={{display:"flex" , gap:"5px", marginBottom:"12px" , fontSize:"15px"}} >
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
              </div>

              
              <p>₹539 <span className="line-through text-gray-400">₹599</span></p>

              <button
                onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                className="bg-black text-white  " style={{padding:"6px", width:"340px" , marginTop:"23px"}}
              >
                Select Size
              </button>

              {openIndex === 0 && (
                <div className="border mt-2">
                  <p className="p-2 hover:bg-gray-200 cursor-pointer">50g</p>
                  <p className="p-2 hover:bg-gray-200 cursor-pointer">100g</p>
                </div>
              )}

              </div>
            </div>

          {/* PRODUCT 9 */}

          <div>
              <TiltedCard
                imageSrc="/bs9.png"
                containerHeight="580px"
                containerWidth="250px"
                imageHeight="480px"
                imageWidth="360px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
              />
              <div style={{marginLeft:"-43px", marginTop:"-110px"}}> 
              <h2  className=" text-black mt-10 text-" style={{marginTop:"80px", fontSize:"20px" , marginBottom:"10px" }}>
                Sepicalm 3% Moisturizer
              </h2>

              <p className="text-gray-500 text-sm " style={{marginBottom:"18px",}}>
                Redness, Sensitive & Irritated Skin
              </p>

              <div  className="icon" style={{display:"flex" , gap:"5px", marginBottom:"12px" , fontSize:"15px"}} >
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
              </div>

              
              <p>₹394 <span className="line-through text-gray-400">₹449</span></p>

              <button
                onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                className="bg-black text-white  " style={{padding:"6px", width:"340px" , marginTop:"23px"}}
              >
                Select Size
              </button>

              {openIndex === 0 && (
                <div className="border mt-2">
                  <p className="p-2 hover:bg-gray-200 cursor-pointer">50g</p>
                  <p className="p-2 hover:bg-gray-200 cursor-pointer">100g</p>
                </div>
              )}

              </div>
            </div>

          {/* PRODUCT 10 */}

          <div>
              <TiltedCard
                imageSrc="/bs10.jpg"
                containerHeight="580px"
                containerWidth="250px"
                imageHeight="480px"
                imageWidth="360px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
              />
              <div style={{marginLeft:"-43px", marginTop:"-110px"}}> 
              <h2  className=" text-black mt-10 text-" style={{marginTop:"80px", fontSize:"20px" , marginBottom:"10px" }}>
                Polyhydroxy Acid (PHA) 3% Face Toner
              </h2>

              <p className="text-gray-500 text-sm " style={{marginBottom:"18px",}}>
                Enlarged Pores & Dehydrated Skin
              </p>

              <div  className="icon" style={{display:"flex" , gap:"5px", marginBottom:"12px" , fontSize:"15px"}} >
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
              </div>

              
              <p>₹350 <span className="line-through text-gray-400">₹399</span></p>

              <button
                onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                className="bg-black text-white  " style={{padding:"6px", width:"340px" , marginTop:"23px"}}
              >
                Select Size
              </button>

              {openIndex === 0 && (
                <div className="border mt-2">
                  <p className="p-2 hover:bg-gray-200 cursor-pointer">50g</p>
                  <p className="p-2 hover:bg-gray-200 cursor-pointer">100g</p>
                </div>
              )}

              </div>
            </div>

          {/* PRODUCT 11 */}


          <div>
              <TiltedCard
                imageSrc="/bs11.jpg"
                containerHeight="580px"
                containerWidth="250px"
                imageHeight="480px"
                imageWidth="360px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
              />
              <div style={{marginLeft:"-43px", marginTop:"-110px"}}> 
              <h2  className=" text-black mt-10 text-" style={{marginTop:"80px", fontSize:"20px" , marginBottom:"10px" }}>
                Hair Growth Actives 18% Hair Serum
              </h2>

              <p className="text-gray-500 text-sm " style={{marginBottom:"18px",}}>
               Capixyl, Redensyl & Procapil for Hairfall
              </p>

              <div  className="icon" style={{display:"flex" , gap:"5px", marginBottom:"12px" , fontSize:"15px"}} >
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
              </div>

              
              <p>₹719 <span className="line-through text-gray-400">₹799</span></p>

              <button
                onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                className="bg-black text-white  " style={{padding:"6px", width:"340px" , marginTop:"23px"}}
              >
                Select Size
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

export default BestSellers;
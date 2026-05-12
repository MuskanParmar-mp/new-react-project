import LightRays from './LightRays';
import TiltedCard from './TiltedCard';
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import AnnouncementBar from "./AnnouncementBar";

function Home() {

  const [openIndex, setOpenIndex] = useState(null);
  
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

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
  
  return (
    <div>

      {/* HERO SECTION */}
       <div style={{ width: '100%', height: '500px', position: 'relative' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="white"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
          
      />

         <div
        className="flex justify-center items-center gap-40 px-10 "
        style={{ padding: "25px",position:"absolute",top:"0", left:"90px" }}
      >

      
        <div style={{ gap: "19px" }}>
          <h1 className="text-4xl font-semibold" style={{ marginBottom: "19px"  ,}}>
            Vitamin B12 + NMF 03%
          </h1>

          <h2 className="text-2xl mb-4" style={{ marginBottom: "24px" }}>
            Face Toner
          </h2>

          <p className="text-gray-700" style={{ marginBottom: "11px" , fontSize:"16px"}}>
            Restore balance to your skin barrier  with our <br/>calming & hydrating toner.
          </p>

          <p style={{ marginBottom: "28px" }}>
            SOOTHE. HYDRATE. BALANCE.
          </p>

          <button onClick={() => navigate("/product/1")}  className="bg-black text-white" style={{padding:"10px", marginLeft:"28px" , paddingLeft:"20px"}} >
             Select Size
          </button>

          
        </div>

        <div >
          <img
            src="/front.png"
            className="w-[760px]"
            style={{ height: "450px" ,}}



             
          />
        </div>
      </div>
     </div> 

    
    {/* <TiltedCard
      imageSrc="/pro1.avif"
      altText="Kendrick Lamar - GNX Album Cover"
      captionText="Kendrick Lamar - GNX"
      containerHeight="300px"
      containerWidth="300px"
      imageHeight="300px"
      imageWidth="300px"
      rotateAmplitude={12}
      scaleOnHover={1.05}
      showMobileWarning={false}
      showTooltip
      displayOverlayContent
      overlayContent={
    <p className="tilted-card-demo-text">
      Kendrick Lamar - GNX
    </p>
  }
/> */}
    

      

      {/* BEST SELLERS SECTION */}
      <div className=" w-330" style={{marginLeft:"85px", height:"800px"}}>

        <h1 className="text-3xl font-medium " style={{marginLeft:"9px" , marginTop:"9px", marginBottom:"34px"}}>
          Our Best Sellers
        </h1>

        <div className="grid grid-cols-4 gap-10">

          {/* Product 1 */}
          <div className='ml-6'>

               <TiltedCard
                   imageSrc="/pro1.avif"
                   
                   containerHeight="400px"
                   containerWidth="300px"
                   imageHeight="450px"
                   imageWidth="310px"
                   rotateAmplitude={12}
                   scaleOnHover={1.05}
                   showMobileWarning={false}
                   showTooltip
                   displayOverlayContent
  
                />
            {/* <img src="/pro1.avif" className="bg-gray-200 p-20" style={{marginBottom:"25px"}} /> */}
            <h2 className=" text-black mt-10 font-medium " style={{marginTop:"80px",}}>
              Salicylic Acid + LHA 2% Cleanser
            </h2>
            <p className="text-gray-500 text-sm" style={{marginBottom:"18px",}}>
              Acne, Breakouts & Oiliness
            </p>
          <div className="icon" style={{display:"flex" , gap:"5px", marginBottom:"12px" , fontSize:"15px"}}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
           </div>
            <p className="text-sm mt-1" style={{marginBottom:"29px",fontSize:"16px"}}>On Sale from ₹284</p>
            {/* <button
            
              onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
              className="bg-black text-white w-full " style={{padding:"6px"}}
            >
              Select Size
            </button> */}
            <button onClick={() => navigate("/product/2")} className="bg-black text-white w-full " style={{padding:"6px"}}> Shop Now</button>
            
            {openIndex === 0 && (
              <div className="border mt-2">
                <p className="p-2 hover:bg-gray-200 cursor-pointer">50ml</p>
                <p className="p-2 hover:bg-gray-200 cursor-pointer">100ml/</p>
              </div>
            )}
          </div>

          {/* Product 2 */}
          <div>

          <TiltedCard
                   imageSrc="/pro2.avif"
                   
                   containerHeight="400px"
                   containerWidth="300px"
                   imageHeight="450px"
                   imageWidth="310px"
                   rotateAmplitude={12}
                   scaleOnHover={1.05}
                   showMobileWarning={false}
                   showTooltip
                   displayOverlayContent
  
                />  
            {/* <img src="/pro2.avif" className="bg-gray-200 p-10" style={{marginBottom:"25px"}} /> */}
            <h2 className="mt-4 font-medium" style={{marginTop:"80px",}}>
              SPF 50 Sunscreen
            </h2>
            <p className="text-gray-500 text-sm" style={{marginBottom:"18px",}}>
              Sun protection, UV exposure
            </p>

            <div className="icon" style={{display:"flex" , gap:"5px", marginBottom:"12px" , fontSize:"15px"}}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
           </div> 
            <p className="text-sm mt-1" style={{marginBottom:"29px",fontSize:"16px"}}>On Sale from ₹379</p>

           <button onClick={() => navigate("/product/3")} className="bg-black text-white w-full " style={{padding:"6px"}}> Shop Now</button>
            
            {openIndex === 1 && (
              <div className="border mt-2">
                <p className="p-2 hover:bg-gray-200 cursor-pointer">50ml</p>
                <p className="p-2 hover:bg-gray-200 cursor-pointer">100ml</p>
              </div>
            )}
          </div>

          {/* Product 3 */}
          <div>

          <TiltedCard
                   imageSrc="/pro3.avif"
                   
                   containerHeight="400px"
                   containerWidth="300px"
                   imageHeight="450px"
                   imageWidth="310px"
                   rotateAmplitude={12}
                   scaleOnHover={1.05}
                   showMobileWarning={false}
                   showTooltip
                   displayOverlayContent
  
                />    
            {/* <img src="/pro3.avif" className="bg-gray-200 p-10"  style={{marginBottom:"25px"}}/> */}
            <h2 className="mt-4 font-medium"style={{marginTop:"80px",}}>
              Salicylic Acid 2% Face Serum
            </h2>
            <p className="text-gray-500 text-sm" style={{marginBottom:"18px",}}>
              Acne, Oily Skin
            </p>

            <div className="icon" style={{display:"flex" , gap:"5px", marginBottom:"12px" , fontSize:"15px"}}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
           </div>

            <p className="text-sm mt-1" style={{marginBottom:"29px",fontSize:"16px"}}>On Sale from ₹237</p>
          <button
              
              onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
              className="bg-black text-white w-full " style={{padding:"6px"}}
            >
              Select  Size
            </button>
            
            {openIndex === 2 && (
              <div className="border mt-2">
                <p className="p-2 hover:bg-gray-200 cursor-pointer">50ml</p>
                <p className="p-2 hover:bg-gray-200 cursor-pointer">100ml</p>
              </div>
            )}
          </div>

          {/* Product 4 */}
          <div>

          <TiltedCard
                   imageSrc="/pro4.avif"
                   
                   containerHeight="400px"
                   containerWidth="300px"
                   imageHeight="450px"
                   imageWidth="310px"
                   rotateAmplitude={12}
                   scaleOnHover={1.05}
                   showMobileWarning={false}
                   showTooltip
                   displayOverlayContent
  
                />    
            {/* <img src="/pro4.avif" className="bg-gray-200 p-10"  style={{marginBottom:"25px"}} /> */}
            <h2 className="mt-4 font-medium" style={{marginTop:"80px",}}>
              Vitamin C 10% Face Serum
            </h2>
            <p className="text-gray-500 text-sm"  style={{marginBottom:"18px",}}>
              Dullness, Spots
            </p>

            <div className="icon" style={{display:"flex" , gap:"5px", marginBottom:"12px" , fontSize:"15px"}}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
           </div>
           
            <p className="text- mt-1" style={{marginBottom:"29px", fontSize:"16px"}}>On Sale from ₹284</p>
            <button
              
              onClick={() => setOpenIndex(openIndex === 3 ? null : 3)}
              className="bg-black text-white w-full " style={{padding:"6px"}}
            >
              Select Size
            </button>
            
            {openIndex === 3 && (
              <div className="border mt-2">
                <p className="p-2 hover:bg-gray-200 cursor-pointer">50ml</p>
                <p className="p-2 hover:bg-gray-200 cursor-pointer">100ml</p>
              </div>
            )}
          </div>

        </div>
      </div>


    {/* YOUR PRODUCTS SECTION */}
<div style={{ margin: "50px" , width:"1200px",height:"90px"}}>

  <h1 className="text-3xl font-semibold mb-6">
    Your  Products
  </h1>

  <div className="grid grid-cols-4 gap-6" >

    {products.map((p) => (
      <div key={p.id} className="border p-4 rounded-lg">

        <img
          src="/pro1.avif"
          style={{ height: "200px", width: "100%", objectFit: "cover" ,width:"1200px",height:"380px"  }}
        />

        <h2 className="mt-3 font-medium">
          {p.name}
        </h2>

        <p className="text-gray-500">
          ₹{p.price}
        </p>

      </div>
    ))}

  </div>

</div>

      {/* BUILD YOUR OWN BUNDLE */}
      <div className="flex justify-center items-center  "
        style={{ padding: "20px", marginTop:"340px" , marginLeft:"170px" , marginBottom:"50px"}}>

        <div >
          <h1 className="text-5xl font-semibold mb-4" style={{ marginBottom: "19px",lineHeight:"63px" }}>
            Build Your <br /> Own Bundle!
          </h1>
         

          <p className="text-gray-600 mb-6 text-1xl" style={{ marginBottom: "26px", }}>
            Make your very own custom kit <br /> based on your  skin & concern.
          </p>

          <hr className="w-20" style={{marginBottom:"24px"}} />

          <h2 className="text-3xl mb-6"  style={{ marginBottom: "19px" }}>
            Buy 3 Get 10% OFF
          </h2>

          <button className="bg-black text-white px-6 py-2" style={{ padding: "9px" ,paddingLeft:"15px" ,paddingRight:"15px" }}>
            Shop Now
          </button>
        </div>

        <div className=" flex justify-end">
          <img src="/bun2.jpg" className="w-[790px]" alt="bundle" style={{ height: "410px" , marginRight:"120px" }} />
        </div>
      </div>

      {/* SKIN INSIGHTS */}
      <div className="flex items-center  bg-[#dad7d7] "  style={{marginBottom:"74px", marginTop:"40px" , height:"630px"}} >

      <div className="w-1/2 flex  "  >
          <img src="/pig3.jpg" className="w-[550px]" alt="bundle"  style={{marginLeft:"150px" , height:"500px"}} />
        </div>


        <div className="w-1/2">
          <h1 className="text-5xl font-semibold " style={{marginBottom:"20px", marginTop:"43px"}}>
            skinInsights
          </h1>

          <p className="text-gray-600 mb-6"  style={{marginBottom:"25px"}}>
            Know Your Skin Health, Using AI
          </p>

          <p className="text-2xl " style={{marginBottom:"29px", marginTop:"10px"}}>
            Discoveres persionlized care, identify <br/>concerns, and build a tailor routine.
            Take the first step <br/>to healthier skin today.
          </p>

          <button   className="bg-black text-white px-6 py-2" style={{ padding: "8px" , paddingLeft:"15px" ,paddingRight:"15px"}}>
            Try Now
          </button>
        </div>

        
      </div>

      {/* SHOP BY CATEGORY */}
      <div className="text-3xl font-medium "  style={{margin:"33px"}}>

        <h2 className="text-3xl font-semibold "style={{marginLeft:"29px" , marginTop:"9px", marginBottom:"44px"}} >
          Shop by Category
        </h2>

        <div className="grid grid-cols-4 gap-5" style={{ marginRight:"32px", gap:"1px"}}>

          <div className="relative">
            <img src="/ski.webp" className="w-full h-[250px] object-cover"style={{height:"220px" , width:"290px"}} />
            <h3 className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">
              Skin Care
            </h3>
            <p className="text-center " style={{fontSize:"17px" , fontFamily:"sans-serif", margin:"26px"}}>Skin</p>
          </div>

          <div className="relative">
            <img src="/hai.avif" className="w-full h-[250px] object-cover" style={{height:"220px" , width:"290px"}}/>
            <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
              Hair Care
            </h3>
            <p className="text-center mt-3"style={{fontSize:"17px" , fontFamily:"sans-serif", margin:"26px"}}>Hair</p>
          </div>

          <div className="relative">
            <img src="/bod.avif" className="w-full h-[250px] object-cover" style={{height:"220px" , width:"290px"}} />
            <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
              Body Care
            </h3>
            <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
              Body Care
            </h3>
            <p className="text-center mt-3" style={{fontSize:"17px" , fontFamily:"sans-serif", margin:"26px"}}>Bath & Body</p>
          </div>

          <div className="relative">
            <img src="/li.webp" className="w-full h-[250px] object-cover" style={{height:"220px" , width:"290px"}}/>
            <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
              Lip Care
            </h3>
            <p className="text-center mt-3"  style={{fontSize:"17px" , fontFamily:"sans-serif", margin:"26px"}}>Lip</p>
          </div>

        </div>
      </div>


            {/* SHOP BY CONCERN */}
      <div className="text-3xl font-medium "  style={{margin:"39px"}}>

        <h2 className="text-3xl font-semibold "style={{marginLeft:"29px" , marginTop:"9px", marginBottom:"44px"}} >
          Shop by Concern
        </h2>

        <div className="grid grid-cols-4 gap-7" style={{marginLeft:"32px", marginRight:"32px", gap:"2px"}}>

          <div className="relative">
            {/* <img src="/1.avif" className="w-7xl h-[250px] object-cover" style={{height:"220px" , width:"290px"}}/> */}
             <img
        src="/1.avif"
        className="w-7xl h-[250px] object-cover"
        style={{ height: "220px", width: "290px", cursor: "pointer" }}
        onClick={() => navigate("/Uneventone")}
      />
            <p className="text-center " style={{fontSize:"17px" , fontFamily:"sans-serif", margin:"26px"}}>Uneven Tone</p>
          </div>

          <div className="relative">
            <img src="/2.avif" className="w-full h-[250px] object-cover" style={{height:"220px" , width:"290px"}} onClick={() => navigate("/Acne")}/>
            
            <p className="text-center mt-3"style={{fontSize:"17px" , fontFamily:"sans-serif", margin:"26px"}}>Acne Control</p>
          </div>

          <div className="relative">
            <img src="/3.avif" className="w-full h-[250px] object-cover" style={{height:"220px" , width:"290px"}}   onClick={() => navigate("/Oiliness")}/>
            
            <p className="text-center mt-3" style={{fontSize:"17px" , fontFamily:"sans-serif", margin:"26px"}}>Oiliness</p>
          </div>

          <div className="relative">
            <img src="/4.avif" className="w-full h-[250px] object-cover" style={{height:"220px" , width:"290px"}} onClick={() => navigate("/Oiliness")}/>
            
            <p className="text-center mt-3"  style={{fontSize:"17px" , fontFamily:"sans-serif", margin:"26px"}}>Wrinkles</p>
          </div>

        </div>
      </div>


    {/* FEATURES SECTION */}
<div className="bg-[#fdfdfd] " style={{height:"500px"}}>

  {/* HEADING */}
  <h1 className="text-center text-3xl md:text-4xl font-semibold " style={{marginTop:"80px" , marginBottom:"30px"}}>
    The future of personal care is here
  </h1>

  <p className="text-center text-gray-600     " style={{   textAlign:"center" , fontSize:"semibold" , marginBottom:"100px"}}>
    Embrace Minimalist, where each element is chosen for its scientific merit.
  </p>
  

  {/* 4 ITEMS */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-9 text-center" style={{marginRight:"140px"}}>

    {/* ITEM 1 */}
    <div>
      <img src="/icon.webp" style={{width:"70px" , marginLeft:"200px" , marginBottom:"30px"}}/>
      <h3 className="font-medium text-lg" style={{marginLeft:"159px" , marginBottom:"15px"}}>Transparency</h3>
      <p className="text-gray-500 text-sm mt-2" style={{marginLeft:"150px"}}>
        Full disclosure of ingredients used & their concentration
      </p>
    </div>

    {/* ITEM 2 */}
    <div>
      <img src="/icon2.avif" style={{width:"70px" , marginLeft:"200px" , marginBottom:"30px"}} />
      <h3 className="font-medium text-lg"style={{marginLeft:"159px" , marginBottom:"15px"}}>Efficacy</h3>
      <p className="text-gray-500 text-sm mt-2"style={{marginLeft:"150px"}}>
        Formulations developed in our in-house laboratories
      </p>
    </div>

    {/* ITEM 3 */}
    <div>
      <img src="/icon3.webp" style={{width:"70px" , marginLeft:"200px" , marginBottom:"30px"}} />
      <h3 className="font-medium text-lg" style={{marginLeft:"159px" , marginBottom:"15px"}}>Affordable</h3>
      <p className="text-gray-500 text-sm mt-2"  style={{marginLeft:"150px"}}>
        Skincare, accessible to all
      </p>
    </div>

    {/* ITEM 4 */}
    <div>
      <img src="/icon4.avif"  style={{width:"70px" , marginLeft:"200px" , marginBottom:"30px"}}/>
      <h3 className="font-medium text-lg"  style={{marginLeft:"159px" , marginBottom:"15px"}}>Only the best</h3>
      <p className="text-gray-500 text-sm mt-2"   style={{marginLeft:"150px"}}>
        Ingredients sourced from across the world
      </p>
    </div> 

  </div>
</div>  


  {/* TRUST + APP SECTION */}
<div className="flex justify-center gap-8 px-20 py-16 bg-gray-100">

  {/* LEFT CARD */}
  <div className="bg-[#e9e6e3] w-[550px]">

    <img 
      src="/last.avif"   // 👈 apni image daalna
      className="w-full h-[400px] object-cover"
      alt="trust"
    />

    <div className="text-center py-10">
      <h2 className="text-2xl font-medium mb-2">
        Minimalist Trust Circle
      </h2>

      <p className="text-gray-500 text-sm mb-6">
        Earn & redeem MCash on every purchase product
      </p>

      <button className="border border-black px-6 py-2 hover:bg-black hover:text-white transition">
        Show more
      </button>
    </div>
  </div>

  {/* RIGHT CARD */}
  <div className=" w-[550px]">

    <img 
      src="/last2.avif"   
      className="w-full h-[400px] object-cover"
      alt="app"
    />

    <div className="text-center py-10">
      <h2 className="text-2xl font-medium mb-2">
        Download Our App Now
      </h2>

      <p className="text-gray-500 text-sm mb-6">
        Get App Exclusive Discounts & Offers 
      </p>

      <button className="border border-black px-6 py-2 hover:bg-black hover:text-white transition">
        Show more
      </button>
    </div>
  </div>

</div>
  <AnnouncementBar />
    </div>
  
  );
}

export default Home;
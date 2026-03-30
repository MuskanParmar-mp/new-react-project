import { Link, Outlet } from "react-router-dom";
import logo from "./assets/logo.webp";
import "./Layout.css";
import { IoSearch, } from "react-icons/io5";

import { FaRegStar } from "react-icons/fa6";
import { CgShoppingCart } from "react-icons/cg";
import AnnouncementBar from "./AnnouncementBar";


function Layout({ cart }){
  return(
    <>
    <AnnouncementBar />
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="nav-left">
          <ul>
            <Link to="/shop"> <li>Shop</li> </Link>
            <Link to="/bestseller"> <li>Best Seller</li> </Link>
            <Link to="/bodycare"> <li>Body Care</li> </Link>
            <Link to="/babycare"> <li>Baby Care</li> </Link>
            <Link to="/haircare"> <li>Hair Care</li> </Link>
            <li>Track Order</li>
          </ul>


          <div className="icons"> 
          <FaRegStar />
          <IoSearch />
          <Link to="/cart">
            <CgShoppingCart size={22} />
          </Link>
          
          </div>

          <div className="nav-right">
            <Link to="/login">
              <button>Login</button>
            </Link>

            <Link to="/sign">
              <button>Signup</button>
            </Link>
          </div>


          


        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
  <div className="footer-container">

    <div className="footer-column">
      <h4>Company Overview</h4>
      <ul>
        <li>About Us</li>
        <li>Our Values</li>
        <li>Privacy Notice</li>
        <li>Terms & Conditions</li>
        <li>Disclaimer</li>
        <li>Corporate Information</li>
        <li>Media Outreach</li>
        <li>Distributor Queries</li>
        <li>Grievance Redressal</li>
      </ul>
    </div>

    <div className="footer-column">
      <h4>Quick Links</h4>
      <ul>
        <li>Knowledge</li>
        <li>FAQs</li>
        <li>Shipping Policy</li>
        <li>Return & Refund Policy</li>
        <li>Payment Policy</li>
        <li>Track Order</li>
        <li>Help Center</li>
        <li>Download App</li>
      </ul>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 YourBrand. All rights reserved.</p>
  </div>
</footer>

    </>
  )
}

export default Layout;

import React, { useContext, useState } from 'react'
import './Navbar.css'
import shooper from '../Assets/shooper-logo.png'
// import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
 
export default function Navbar() {
    const [menu,setMenu]= useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={shooper} alt="" />
        <p>
          <span>S</span>
          <span>H</span>
    <span>O</span>
    <span>P</span>
    <span>P</span>
    <span>E</span>
    <span>R</span></p>
      </div>

      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:'none'}} to='/'>menu</Link>  { menu === "shop"? <hr/>:<></>} </li>
        
        <li onClick={()=>{setMenu("Men")}}>
          <Link style={{textDecoration:'none'}} to="/mens">Men</Link>{menu === "Men"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Womens")}}> <Link style={{textDecoration:'none'}} to="/womens">Women</Link>{menu === "Womens"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Kids")}}> <Link style={{textDecoration:'none'}} to="/kids">Kids</Link>{menu === "Kids"? <hr/>:<></>}</li>
      </ul>

      <div className="nav-login-cart">
       <Link style={{textDecoration:'none'}} to="/login"> <button>Login</button></Link>
        <Link style={{textDecoration:'none'}} to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

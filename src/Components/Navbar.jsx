import React from "react";
import { FiMenu } from "react-icons/fi";
import logo from "../assests/hose.png";
import { HiOutlineUser } from "react-icons/hi";
import NavBin from'./NavBin';
import {Link} from "react-router-dom";
import Login from "./login/Login";
import Signup from "./Signup/Signup";
import {AiOutlineHeart} from 'react-icons/ai'
import {AiTwotoneHeart} from 'react-icons/ai'
import  { RiSearchLine } from 'react-icons/ri'

const Navbar =() =>{
    const buttons =[
    {title:"Acceuil"},
    {title:"Services"},
    {title:"About"},
    {title:"contacter",border :"border"}] 
    
 return(
    <div className=" ">
    <div className="flex items-center bg-white justify-between   px-4    ">
        {/* left menu */}
        <div className="lg:hidden flex items-center ">
            <FiMenu  className="w-7 h-7"/>
        </div>
        {/* logo */}
        <div className="shrink-0 relative">
        <div className="-my-[0.7rem] ">
           <Link to="/"> <img src={logo} className="w-32 " /></Link>
        </div>
       
        </div>
         {/* links */}
      
        <div className="hidden lg:flex  ">
            <ul className="flex space-x-4  py-3 ">

                {buttons.map((button)=><NavBin title={button.title}/>)} 
      
           
            </ul>
        </div>
        
   
          <div className=" w-10 h-10 bg-[#e20112] rounded-full text-white flex items-center justify-center lg:hidden " >
           <HiOutlineUser className="text-[30px] " />
          </div>
           

          <div className="hidden items-center lg:flex  ">
            {" "}
            <div className="" > 
            <div className='  text-[30px] cursor-pointer ' title="Favoris">
                <AiOutlineHeart />
               
            </div>
            </div>
            <div className="menu-baro">
          <div className=" bg-[#e20112] py-[6px] text-white rounded-full px-4 ml-6 flex items-center " > 
          Connexion
          <div class="sub-menu">
          <ul>
            <li><Link className="link" to="Inscription">Inscription</Link></li>
            <li><Link  className="link" to="Connexion"> Connexion</Link></li>
            <li>Mettre mon logement</li>
          </ul>
          </div>
          </div>
</div>
       
    </div>
    </div>
    </div>
 );
}
export default Navbar;
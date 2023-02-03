import React from "react";
import { FiMenu } from "react-icons/fi";
import logo from "../../assests/hose.png";
import { HiOutlineUser } from "react-icons/hi";
import NavBin from'./NavBin';
import {Link} from "react-router-dom";
import "./nav.css"
import img from "../../assests/profilepic.webp"
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import {FaRegCommentDots,FaClinicMedical} from 'react-icons/fa'

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
        
           

            <div className="menu-baro">
              
          <ul className="list"> 
             <li className="icon w-32" title="Messagerie"> <FaRegCommentDots/></li>
              <li className="icon w-32" title="Poster announce"><FaClinicMedical/></li>
              <div className="hidden items-center lg:flex  ">
            {" "}
            <div className="showup">
          <div className=" bg-[#e20112]  rounded-full flex items-center " > 
          <img src={img} alt="" className="avatar"/>
          <div class="sub-menu">
          <ul>
            <li className="a"><Link  className="link" to="Connexion"> Paramètre</Link></li>
            <li className="a"><Link  className="link" to="Connexion"> Mes announces</Link></li>
            <li className="a"><Link  className="link" to="Connexion"> déconnecter</Link></li>
           
            
          </ul>
          </div>
          </div>
          </div>
          </div></ul>
</div>
       
    
    </div>
    </div>
 );
}
export default Navbar;
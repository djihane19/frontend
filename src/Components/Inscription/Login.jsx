import {Link} from "react-router-dom";
import Google from "../../assests/google.png"
import logo from "../../assests/hose.png";
import "./inscript.css"
const Login =() =>{
    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
      };
    
    return( 
        
        <>
      <div >
      <div className="-my-[0.7rem] ">
         <Link to="/"> <img src={logo} className="w-32 " /></Link>
      </div>
      </div>
    
        <div className="login">
            <h2 className="loginTitle">Choisir votre Méthode d'Inscription</h2>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google"  onClick={google}>
                        <img src={Google} alt="" className="icon" />Google
                    </div>
                </div>
                <div className="center">
                   <div className="line" />
                   <div className="or">Ou</div>
                </div>
                <div className="right">
                    <input type="text" placeholder="nom d'utilisateur" />
                    <input type="password" placeholder="Password" />
                    <button className="submit">Connexion</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Login;
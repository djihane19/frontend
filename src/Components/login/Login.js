import React from "react";




import "./Login.css";

const Login= () => {
    return (<div class="page">
        <div className="cover">
        
            <h1>CONNEXION</h1><hr/><br/>
            
               <div className="alt-login">
               
               
               <button className="blue" title="FACEBOOK"/>
               <button className="RED" title="GOOGLE"/>

                <button className="green" title="INSCRIPTION"
                   
                />
               
              
       </div>
       
       
       <p className="text"><div class="d"><hr/>Ou<hr/></div></p>
            
            <input  type="text" placeholder="Nom d'utilisateur" required />
            <input type="password" placeholder="Mot de passe" required/> 
            <h6><a href="#" class="l">Mot de passe oublié ?</a></h6>

            <div className="login-btn" >SE CONNECTER</div>

          

           


            
            
        </div></div>
    )
} 


export default Login

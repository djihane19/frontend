import React from "react";



import "./Signup.css"

const Signup= () => {

   
    return (
        <div class="page">
        <div className="cover">
            <h1>INSCRIPTION</h1>
            <input type="text" placeholder="Nom d'utilisateur" required/>
            <input type="password" placeholder="Mot de passe" required/>
            <input type="password" placeholder="Confirmer" required/>
            <input type="email" placeholder="E-Mail" required/>

            <div className="login-btn" >Sign up</div>

            <p className="text"><div class="d"><hr/>Ou<hr/></div></p>

            
            <div className="alt-login">
               
               <button className="green" title="RETOUR"
                 
               />
               <button className="blue" title="FACEBOOK"/>
               <button className="RED" title="GOOGLE"/>  
               
            </div>

            <p><a href="#" class="l">Vous avez déja un compte ?</a></p>
         
        </div></div>
    )
}

export default Signup
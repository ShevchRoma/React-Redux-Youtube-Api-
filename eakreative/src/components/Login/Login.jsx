import React from 'react';
import  './login.scss';
import googleIcon from './img/Google_icon-icons.com_75707.png';
import facebookIcon from './img/3721668-facebook-flat_108056.png';
import {NavLink} from 'react-router-dom';



const Login = () => {
    return (
        <div className="login">
            <div className="container">
            <div className="login-body">
               <div className="login-body-facebook">
                  <NavLink to="chanelllist" className="login-body-facebook__button">
                     <img src={facebookIcon} alt=""/> Login with Facebook
                  </NavLink>
               </div>
               <div class="login-body-google">
                  <NavLink to="/chanelllist" className="login-body-google__button">
                      <img src={googleIcon} alt="" />Sign with Google
                  </NavLink>
               </div>
               </div>
                
            </div>
        </div>
    )
}

export default Login;

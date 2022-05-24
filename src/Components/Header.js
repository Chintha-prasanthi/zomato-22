import React from 'react';
import '../Styles/header.css';
import {withRouter} from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '30%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'antiquewhite',
        border: '1px solid brown',
        width: '35%',
        height: '40%',
        padding:'38px'
    },
};


class Header extends React.Component{

   constructor(){
       super();
       this.state = {
           isLoginModalIsOpen: false,
           isLoggedIn: false,
           loggedInUser: undefined,
          
       }
   }



    handleNavigate = () =>
    {

        this.props.history.push('/');
    }
    handleLogin = () =>
    {
         this.setState({ isLoginModalIsOpen: true });
         

    }
    responseGoogle = (response) => 
    {

        this.setState({ loggedInUser : response.profileObj.name, isLoggedIn: true, isLoginModalIsOpen: false });
     
    }
    handleLogout = () =>
    {

            this.setState({ isLoggedIn: false, loggedInUser: undefined});

    }
    
   

       


   render()
   {

      const {isLoginModalIsOpen, isLoggedIn, loggedInUser, } = this.state;

       return(
        <div className="header">

               <div className="header-logo" onClick={this.handleNavigate}>
                       <b> e! </b>
               </div>

         { isLoggedIn ? <div className="login-user">
                               <div className="login">{loggedInUser}</div>
                               <div className="signup" onClick={this.handleLogout}>Logout</div>
                        </div> :
         
                     <div className="login-user">

                          <div className="login" onClick={this.handleLogin}> Login</div>

                           <a href="./Accountcreate.html">
                           <input type="button" className="signup" value="Create an account"/> 
                           </a>

                     </div>             
                       }
    
                    <Modal
                    isOpen={isLoginModalIsOpen} 
                    style={customStyles}
                     >
                      <div>
                    
                        <div className="logfont"> Login with</div>
                         <span><GoogleLogin
                             clientId="789968270931-dncdpepr36a396mp1m39khm2ilbs2fqp.apps.googleusercontent.com"
                             buttonText=" Continue with Google "
                             onSuccess={this.responseGoogle}
                             onFailure={this.responseGoogle}
                             cookiePolicy={'single_host_origin'}
                          /></span>                              
                      </div>
                     

                  </Modal> 


        </div>
       )
    
} 

}
    



export default withRouter(Header);
import './register.css';
import { Link } from 'react-router-dom';

function Register(){
    return(
        <>
        <div className="container2">
            <div className="registerdiv">
                <form className="myform1">
                   <h1 className="registertext">Register</h1>

                   <input 
                   className="name" 
                   type="text" 
                   name="username" 
                   placeholder="name"
                   required/>

                   <input 
                   className="phone" 
                   type="tel" 
                   name="phone" 
                   placeholder="phone number"
                   required/>

                   <input 
                   className="email1" 
                   type="email" 
                   name="email" 
                   placeholder="email"
                   required/>

                   <input 
                   className="birthdate" 
                   type="date" 
                   name="bwd" 
                   required/>

                   <input 
                   className="password1" 
                   type="password" 
                   name="password" 
                   placeholder="password"
                   required/>

                   <button className="registerbtn">Register</button>
                   <p className="alreadyhaveacc">already have an account?<a href="/login"><span className="alreadyhaveacctoggle">login</span></a></p>
                </form>
            </div>
        </div>
        </>
    )
}
export default Register;
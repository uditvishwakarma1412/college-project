import './login.css';

function Login(){
    return(
        <>
        <div className="container1">
            <div className="logindiv">
                <form className="myform">
                   <h1 className="logintext">Login</h1>
                   <input 
                   className="username" type="text" 
                   name="username" placeholder="username"
                   required/>
                   <input 
                   className="email" 
                   type="email" 
                   name="email" 
                   placeholder="email"
                   required/>
                   <input 
                   className="password" 
                   type="password" 
                   name="password" 
                   placeholder="password"
                   required/>
                   <button className="loginbtn">Login</button>
                   <p className="newusertext">don't have an account? <a href="register"><span className="newusertexttoggle">Register</span></a></p>
                </form>
            </div>
        </div>
        </>
    )
}
export default Login;
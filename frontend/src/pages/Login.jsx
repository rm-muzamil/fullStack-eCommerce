import React, { useState } from 'react';
import { Outlet,Link } from 'react-router-dom';
function Login() {
  const [islogin, setIslogin] = useState(true);

  return (
    <div>
      <img className='goinge' src="https://thumbs.dreamstime.com/b/empty-shopping-cart-water-sunset-light-351202708.jpg?w=768" alt="" />
     
 
    {islogin ?<>
    <div className='login'>
<h3>Logo Here</h3>
        <p>Welcome back!!!</p>
        <h3>Login</h3>
 <input className='sub' type="text" placeholder='Email' /> <br />
        <input className='sub' type="text" placeholder='Passwords' /> <br />
        <button className='submitt'>Login</button>
        <a className='rigs' href="#" onClick={()=>setIslogin(false)}>Registration</a>

        
    </div>
    
    </>: <>
    <div className='login'>
    <h2>Logo Here</h2>
        <p>Welcome back!!!</p>
        <h2>Rigestration</h2>

 <input className='sub' type="text" placeholder='Nam' /> <br />
 <input className='sub' type="text" placeholder='Email' /> <br />
        <input className='sub' type="text" placeholder='Passwords' /> <br />
        <button className='submitt'>Login</button>
        <a className='rigs' href="#" onClick={()=>setIslogin(true)}>Login</a>
    </div>
    </>}


    <nav className='buttom2'>
  <Link to="/Home">Home</Link>
<Link to="/Dashboard">Dashboard</Link>
<Link to="/Login">Login</Link>
<Link to="/Cart">Cart</Link>
<Link to="/About">About</Link>
</nav>
    </div>
  );
}

export default Login;












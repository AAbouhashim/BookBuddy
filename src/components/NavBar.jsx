import { Link } from "react-router-dom"

const NavBar = () => {
  
  
  return(  
    <>
    
    <Link to ="/"><h1>Book Buddy</h1></Link>
    <Link to="/login"><button>Log In</button></Link>
    <Link to="/register"><button>Register</button></Link>
    </>
  )
}

export default NavBar;
import { useState } from "react";
import { fetchLogin } from "../api/api";
const LogIn = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] =useState("");
  const [token, setToken] =useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await fetchLogin(email, password); 
      if (result && result.token) {
        setToken(result.token);
        setMessage(`Login successful!`);
      } else {
        setMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

    const handleLogout = () => {
    setToken(null);
    setEmail("");
    setPassword("");
    setMessage("Logged out successfully");
  };


  return(
    <>
      {token ? (
        <>
        <p>{message}</p>
        <button onClick={handleLogout}>Log Out</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Log in
            <input 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>

            <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          </label>
          <button type="submit">Submit</button>
          <p>{message}</p>
        </form>
      )}
  </>
  )
}

export default LogIn;
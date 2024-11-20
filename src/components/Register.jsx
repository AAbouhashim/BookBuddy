import { useState } from "react";
import { fetchRegister } from "../api/api";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await fetchRegister(firstname, lastname, email, password);
      if (result.token) {
        setToken(result.token);
        setMessage(`Welcome, ${result.user.firstname}! Registration successful.`);
      } else {
        setMessage(result.error || "Registration failed.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      {token ? (
        <>
          <p>{message}</p>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <input
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>
          <p>{message}</p>
        </form>
      )}
    </div>
  );
};

export default Register;
import { useState, useContext } from "react";
import userContext from "../context/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // fetching the method from userContext
  const { setUser } = useContext(userContext);

  const HandleSubmit = (e) => {
    e.preventDefault();
    
    // passing the values to the context api
    setUser({ userName, password, email });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />{" "}
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={HandleSubmit}>submit</button>
    </div>
  );
}

export default Login;

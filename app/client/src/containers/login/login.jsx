import "./login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useRef } from "react";

export const Login = () => {
  const getUsername = useRef("");
  const getPassword = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <main className="container">
        <form onSubmit={handleSubmit}>
          <h1>Night Syslog</h1>
          <div className="input-Fields">
            <input type="text" placeholder="Login" ref={getUsername} />
            <FaUser className="icon" />
          </div>

          <div className="input-Fields">
            <input type="password" placeholder="Password" ref={getPassword}/>
            <FaLock className="icon" />
          </div>

          <div>
            <button>Login</button>
          </div>
        </form>
      </main>
    </div>
  );
};

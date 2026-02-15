import { useState } from "react";
import { api } from "../api";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  return (
    <div className="page">
      <main className="page-content">
        <div className="form-card auth-card">
          <form className="form" onSubmit={handleSubmit}>
            <h1>Register</h1>

            <input
              type="text"
              name="username"
              placeholder="Enter username"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
            />

            <button type="submit" className="formButton">
              Register
            </button>

            <p className="auth-switch">
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Register;

import { useState } from "react";
import { api } from "../api";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");

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
    setError("");

    if (!inputs.username || !inputs.email || !inputs.password) {
      setError("All fields are required");
      return;
    }

    try {
      await api.post("/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError("Registration failed. Email may already exist.");
    }
  };

  return (
    <div className="page">
      <main className="page-content">
        <div className="form-card auth-card">
          <form className="form" onSubmit={handleSubmit}>
            <h1>Register</h1>

            {error && <div className="form-error">{error}</div>}

            <input
              type="text"
              name="username"
              placeholder="Enter username..."
              value={inputs.username}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter email..."
              value={inputs.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Enter password..."
              value={inputs.password}
              onChange={handleChange}
              required
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

import { useState } from "react";
import { api } from "../api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/auth/login", inputs);
      login(res.data.token);
      navigate("/books");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <main className="page-content">
        <div className="form-card auth-card">
          <form className="form" onSubmit={handleSubmit}>
            <h1>Login</h1>

            {error && <div className="form-error">{error}</div>}

            <input
              type="email"
              name="email"
              placeholder="Enter your email..."
              value={inputs.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Enter your password..."
              value={inputs.password}
              onChange={handleChange}
              required
            />

            <button type="submit" className="formButton" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="auth-switch">
              Don't have an account? <Link to="/register">Register here</Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function RegisterPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

  function handleChange(e) {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear field error as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setErrors({});
    setGeneralError("");
    setSuccess(null);
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setGeneralError("Registration failed.");
        }
        return;
      }

      setSuccess("Account created successfully!");
      setForm({
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
      });

    } catch (err) {
      setGeneralError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Create account</h1>

        <form className="auth-form" onSubmit={handleSubmit}>
          {generalError && (
            <div className="error-banner">{generalError}</div>
          )}

          <input name="username" placeholder="Username" value={form.username} onChange={handleChange} />
          {errors.username && <p className="error-text">{errors.username}</p>}

          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <input name="firstName" placeholder="First name" value={form.firstName} onChange={handleChange} />
          {errors.firstName && <p className="error-text">{errors.firstName}</p>}

          <input name="lastName" placeholder="Last name" value={form.lastName} onChange={handleChange} />
          {errors.lastName && <p className="error-text">{errors.lastName}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Registering…" : "Register"}
          </button>

          <p className="auth-switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>

        {success && <div className="auth-success">{success}</div>}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario y la autenticación
    if (!/^\d{8}$/.test(number)) {
      alert("Ingrese su numero de DNI");
      return;
    }

    console.log("Email:", number);
    console.log("Password:", password);

    // Simulación de autenticación
    if (number === "70600763" && password === "1234") {
      navigate("/catalogo");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="bg-secondary">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center mb-4">Login</h5>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mt-3">
                    <label htmlFor="number">Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="number"
                      placeholder="Enter 8-digit number"
                      // maxLength="8"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="gap-2 mt-3">
                    <button type="submit" className="btn btn-primary btn-block">
                      Submit
                    </button>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

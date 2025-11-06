import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";
import Input from "../components/Input";
import Headphoneslogo from "../assets/icons/Headphoneslogo.png";

function LoginPageView() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();




  const handleLogin = () => {
    console.log("Login button clicked!");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleSignInNav = () => {
    navigate('/');
  }

  const size = 54;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <img
        src={Headphoneslogo}
        alt="Headphones logo"
        className="w-80 mb-6"
      />

      <h1 className="text-4xl font-bold mb-8">Create Your Account</h1>

      {/* User Email */}
      <div className="mb-4">
        <Input
          type="email"
          label="Email"
          placeholder="user@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          color={{ PRIMARY: "#111111" }}
        />
      </div>

      {/* Phone */}
      <div className="mb-2">
        <Input
          type="text"
          label="Phone"
          placeholder="(123) 456-7890"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          color={{ PRIMARY: "#111111" }}
        />
      </div>

      {/* Username */}
      <div className="mb-2">
        <Input
          type="text"
          label="Username"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          color={{ PRIMARY: "#111111" }}
        />
      </div>

      {/* Password */}
      <div className="mb-8">
        <Input
          type="password"
          label="Password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          color={{ PRIMARY: "#111111" }}
        />
      </div>

      <ButtonComponent
        size="large"
        label="Sign Up"
        onClick={handleLogin}
      />

      <p className="mt-2 text-gray-400 text-sm">
        Don’t have an account?{" "}
        <span 
          className="text-[#7C4DFF] hover:text-[#956EFF] hover:cursor-pointer"
          onClick={handleSignInNav}
        >
          Sign In
        </span>
      </p>
    </div>
  );
}

export default LoginPageView;

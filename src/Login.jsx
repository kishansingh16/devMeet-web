import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });

      if (res.data.success) {
        alert("Login successful");
        // TODO: navigate("/profile") if you want
      } else {
        alert(res.data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong while logging in");
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center pt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
      <div className="bg-gradient-to-br from-indigo-700/20 via-purple-700/20 to-pink-700/20 backdrop-blur-xl w-full max-w-md p-8 rounded-2xl shadow-2xl border border-purple-600/30 hover:border-pink-500/50 transition-all duration-300">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          Login
        </h2>
        <p className="text-neutral-300 text-center mb-8">
          Please enter your credentials to login.
        </p>

        <form className="flex flex-col gap-6" onSubmit={handleLogin}>
          <label className="form-control w-full">
            <span className="label-text text-neutral-200 mb-1">Email-ID</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input w-full bg-neutral-900 border border-purple-700/40 text-white rounded-xl focus:border-pink-500 focus:ring focus:ring-pink-500/30 transition-all duration-300"
              required
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text text-neutral-200 mb-1">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="input w-full bg-neutral-900 border border-purple-700/40 text-white rounded-xl focus:border-pink-500 focus:ring focus:ring-pink-500/30 transition-all duration-300"
              required
            />
          </label>

          <button
            type="submit"
            className="btn w-full mt-2 bg-gradient-to-r from-indigo-500 to-pink-500 border-none text-white font-semibold rounded-xl shadow-md hover:shadow-pink-500/40 hover:scale-[1.03] transition-all duration-300"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

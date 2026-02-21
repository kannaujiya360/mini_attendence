import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

 
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const temp = [];
    for (let i = 0; i < 60; i++) {
      temp.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.4 + 0.2,
      });
    }
    setParticles(temp);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => {
          let newX = p.x + p.speedX;
          let newY = p.y + p.speedY;
          if (newX > window.innerWidth) newX = 0;
          if (newX < 0) newX = window.innerWidth;
          if (newY > window.innerHeight) newY = 0;
          if (newY < 0) newY = window.innerHeight;
          return { ...p, x: newX, y: newY };
        })
      );
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white px-4 sm:px-6 lg:px-8">

      
      <div className="absolute inset-0 animate-gradient bg-[linear-gradient(135deg,#e0f2fe,#f5f3ff,#fce7f3,#e0f7fa)] bg-[length:400%_400%] opacity-95"></div>

     
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute bg-blue-400 rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            filter: "blur(2px)",
          }}
        />
      ))}

    
      <div className="relative z-30 flex flex-col md:flex-row w-full max-w-5xl bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-2xl overflow-hidden">

       
        <div className="w-full md:w-1/2 relative h-64 md:h-auto">
          <img
            src="/img1.avif"
            alt="Login Visual"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

  
        <div className="w-full md:w-1/2 px-6 sm:px-10 py-10 flex flex-col justify-center relative">

          
          <div className="text-center mb-6 md:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-400 text-transparent bg-clip-text animate-pulse">
              A Simple Attendance & Task System
            </h1>
            
          </div>

       
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Welcome Back 
            </h2>
            <p className="text-gray-500 mt-1 text-sm sm:text-base">
              Login to continue to your dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 sm:p-4 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:shadow-md transition"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 sm:p-4 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:shadow-md transition"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />

            <button className="w-full py-3 sm:py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-400 hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-300/50 transition duration-300">
              Login to Dashboard
            </button>
          </form>

          <p className="mt-4 sm:mt-6 text-center text-sm sm:text-base text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-blue-600 hover:text-blue-700 transition"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>

      
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            animation: gradient 15s ease infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Login;
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 px-4 sm:px-6 lg:px-8">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 via-purple-200 to-pink-200 animate-backgroundShift opacity-80"></div>

      {/* Floating 3D Shapes */}
      <div className="absolute top-[-120px] left-[-120px] w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-purple-400 rounded-full blur-3xl opacity-30 animate-floating"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-pink-400 rounded-full blur-3xl opacity-30 animate-floating animation-delay-2000"></div>
      <div className="absolute top-1/3 right-[-80px] w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] bg-blue-300 rounded-full blur-2xl opacity-20 animate-floating animation-delay-1000"></div>

      {/* Split Layout */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl">

        {/* Left Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <img
            src="/img3.webp"
            alt="Register Visual"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        {/* Right 3D Frosted Glass Card */}
        <div className="w-full md:w-1/2 px-6 sm:px-12 py-10 sm:py-14 bg-white/70 backdrop-blur-3xl border border-white/30 transform hover:scale-105 transition-transform duration-500 flex flex-col justify-center">

          {/* Heading */}
          <div className="text-center mb-6 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Register Now
            </h1>
            <p className="text-gray-700 mt-2 text-sm sm:text-base md:text-lg font-semibold tracking-wide">
              Build your Smart Attendance + Task Dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 sm:p-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 transition"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 sm:p-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400 transition"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 sm:p-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-400 transition"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />

            <button className="w-full py-3 sm:py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-400/30 transition duration-300">
              Create Account
            </button>
          </form>

          {/* Footer */}
          <p className="mt-4 sm:mt-6 text-center text-sm sm:text-base text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-blue-600 hover:text-purple-600 transition"
            >
              Login
            </Link>
          </p>
        </div>
      </div>

     
      <style>
        {`
          @keyframes backgroundShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-backgroundShift {
            background-size: 400% 400%;
            animation: backgroundShift 20s ease infinite;
          }

          @keyframes floating {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px) translateX(10px); }
          }
          .animate-floating {
            animation: floating 8s ease-in-out infinite;
          }
          .animation-delay-1000 { animation-delay: 1s; }
          .animation-delay-2000 { animation-delay: 2s; }
        `}
      </style>
    </div>
  );
};

export default Register;
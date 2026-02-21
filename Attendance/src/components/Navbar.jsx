import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-indigo-700 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

       
        <div className="text-white text-2xl md:text-3xl font-bold tracking-wide select-none">
          MiniATS
        </div>

      
        <button
          onClick={handleLogout}
          className="bg-white text-indigo-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition duration-300 shadow-sm"
        >
          Logout
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
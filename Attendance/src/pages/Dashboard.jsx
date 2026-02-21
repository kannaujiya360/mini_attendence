import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AttendanceButton from "../components/AttendanceButton";
import TaskCard from "../components/TaskCard";
import { createTask, getTasks } from "../api/task.api";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", dueDate: "" });

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    await createTask(form);
    setForm({ title: "", description: "", dueDate: "" });
    fetchTasks();
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      
      
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-purple-300 rounded-full blur-3xl opacity-30 animate-floating"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-pink-300 rounded-full blur-3xl opacity-30 animate-floating animation-delay-1500"></div>

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12 relative z-10">

        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse">
            Smart Attendance Dashboard
          </h1>
          <p className="mt-3 text-gray-600 text-lg md:text-xl font-medium">
            Track. Manage. Stay Productive 
          </p>
        </div>

      
        <div className="bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 p-8 hover:scale-105 transition-transform duration-300">
          <AttendanceButton />
        </div>

        {/* Task Form */}
        <div className="bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 p-8 hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Create New Task
          </h2>

          <form onSubmit={handleCreateTask} className="grid md:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Task Title"
              value={form.title}
              className="p-4 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Task Description"
              value={form.description}
              className="p-4 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
            <input
              type="date"
              value={form.dueDate}
              className="p-4 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
            />

            <button className="md:col-span-3 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-105 hover:shadow-xl transition duration-300">
              Add Task
            </button>
          </form>
        </div>

      
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Your Tasks
          </h2>

          {tasks.length === 0 ? (
            <div className="bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 p-16 text-center">
              <p className="text-gray-400 text-lg md:text-xl">
                No tasks yet. Start by creating one! 
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tasks.map((task) => (
                <TaskCard key={task._id} task={task} refreshTasks={fetchTasks} />
              ))}
            </div>
          )}
        </div>
      </div>

      
      <style>
        {`
          @keyframes floating {
            0%,100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-20px) translateX(10px); }
          }
          .animate-floating { animation: floating 8s ease-in-out infinite; }
          .animation-delay-1500 { animation-delay: 1.5s; }
        `}
      </style>
    </div>
  );
};

export default Dashboard;
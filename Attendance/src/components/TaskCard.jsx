import { updateTask, deleteTask } from "../api/task.api";

const TaskCard = ({ task, refreshTasks }) => {
  const handleToggleStatus = async () => {
    await updateTask(task._id, {
      status: task.status === "pending" ? "completed" : "pending",
    });
    refreshTasks();
  };

  const handleDelete = async () => {
    await deleteTask(task._id);
    refreshTasks();
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 hover:shadow-md transition duration-200">
      
      
      <div className="flex justify-between items-center mb-2">
        <h3 className={`text-lg font-semibold ${
          task.status === 'completed' ? 'line-through text-gray-400' : 'text-gray-800'
        }`}>
          {task.title}
        </h3>

        <span className={`px-2 py-1 text-xs rounded font-medium ${
          task.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {task.status}
        </span>
      </div>

      {/* Description */}
      {task.description && (
        <p className="text-gray-600 text-sm mb-2">
          {task.description}
        </p>
      )}

      {/* Due Date */}
      {task.dueDate && (
        <p className="text-gray-500 text-xs mb-4">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </p>
      )}

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button
          onClick={handleToggleStatus}
          className={`flex-1 py-2 rounded-md text-white font-medium transition-colors ${
            task.status === 'completed' ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          {task.status === 'completed' ? 'Mark Pending' : 'Mark Complete'}
        </button>

        <button
          onClick={handleDelete}
          className="flex-1 py-2 rounded-md bg-red-500 text-white font-medium hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
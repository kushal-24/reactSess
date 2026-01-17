import { useState } from "react";
import { Trash2, Plus } from "lucide-react";

function Todo() {


  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Header */}
          <div className="bg-linear-to-r from-blue-500 to-purple-600 px-8 py-6">
            <h1 className="text-3xl font-bold text-white">My Tasks</h1>
            <p className="text-blue-100 mt-1">
              Keep track of your daily goals
            </p>
          </div>

          <div className="p-8">
            {/* Add Todo */}
            <form className="mb-8">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Add a new task..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-linear-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition flex items-center gap-2">
                  <Plus size={20} />
                  Add
                </button>
              </div>
            </form>

            {/* Todo List */}
            <div className="space-y-3">
              {/* {todos.length === 0 ? (
                <div className="text-center py-12 text-gray-400 text-lg">
                  No tasks yet. Add one to get started!
                </div>
              ) : (
                todos.map((todo) => (
                  <div
                    key={todo.id}
                    className="group flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition hover:shadow-md">
                    <span className="flex-1 text-lg text-gray-700">
                      {todo.title}
                    </span>

                    <button
                      className="text-red-500 hover:text-red-600 transition hover:scale-110">
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))
              )} */}
            </div>

            {/* Footer */}
            {/* {todos.length > 0 && (
              <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-600">
                {todos.length} task{todos.length > 1 ? "s" : ""} total
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
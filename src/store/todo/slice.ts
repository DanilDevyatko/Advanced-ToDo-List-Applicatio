import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoState {
  tasks: Task[];
  filter: "all" | "active" | "completed";
}

const initialState: TodoState = {
  tasks: [],
  filter: "all",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      };
      state.tasks.push(newTask);
    },

    addTasksLocalStorage: (state) => {
      const storedTasks = localStorage.getItem("todos");
      if (storedTasks) {
        try {
          const parsedTasks = JSON.parse(storedTasks);
          state.tasks = Array.isArray(parsedTasks) ? parsedTasks : [];
        } catch (e) {
          console.error("Error parsing localStorage data:", e);
          state.tasks = [];
        }
      } else {
        state.tasks = [];
      }
    },

    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((task) => task.id === action.payload);

      if (task) {
        task.completed = !task.completed;
      }
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    setFilter: (
      state,
      action: PayloadAction<"all" | "active" | "completed">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addTask,
  toggleTask,
  removeTask,
  setFilter,
  addTasksLocalStorage,
} = todoSlice.actions;
export default todoSlice.reducer;

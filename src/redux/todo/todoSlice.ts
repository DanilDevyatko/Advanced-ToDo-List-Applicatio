import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoState {
  tasks: Task[];
  filter: "all" | "active" | "completed";
}

const initialState: TodoState = {
  tasks: [
    {
      id: 1,
      title: "First Taks",
      completed: false,
    },
    {
      id: 2,
      title: "Second Taks",
      completed: false,
    },
  ],
  filter: "all",
};

const todoSlice = createSlice({
  //Why name is todos if all of them are actions? And what about structure of this object?
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

    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      console.log(action);

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
      // Looks like mutation but I know it's not. I just want to know on how it works.
      state.filter = action.payload;
    },
  },
});

// What is difference between those two lines?
export const { addTask, toggleTask, removeTask, setFilter } = todoSlice.actions;
export default todoSlice.reducer;

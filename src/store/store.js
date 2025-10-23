import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice.js";

// Cấu hình Redux store
// Store này sẽ quản lý trạng thái của toàn bộ ứng dụng.
export const store = configureStore({
  reducer: {
    // Chúng ta định nghĩa một "slice" của state tên là "todos"
    // và chỉ định reducer nào sẽ quản lý nó.
    todos: todoReducer,
  },
});

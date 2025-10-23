import { createSlice } from "@reduxjs/toolkit";

// Slice này chỉ là một ví dụ đơn giản để Redux hoạt động.
// Bạn có thể thay thế nó bằng logic của riêng mình sau này.
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [], // Trạng thái ban đầu
  },
  reducers: {
    // Nơi bạn sẽ định nghĩa các actions, ví dụ: addTodo, removeTodo...
  },
});

export default todoSlice.reducer;

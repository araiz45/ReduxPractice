import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todo: [{ id: 1, text: "hello world" }]

}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todo.push(todo)
    },
    removeTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => {
        return todo.id !== action.payload;
      })
    },
    updateTodo: (state, action) => {
      state.todo = state.todo.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text
        }
      })
    }
  }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
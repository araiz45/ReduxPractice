import { useSelector, useDispatch } from 'react-redux';
import todoSlice, { removeTodo } from '../features/todo/todoSlice';
import React from 'react';
const Todo = () => {
  const todos = useSelector(state => state.todo)
  console.log(todos)
  const dispatch = useDispatch()
  return (
    <div>
      <div>Todos</div>
      {todos && todos.map((todo) => (
        <div className="card mb-3" key={todo.id}>
          {todo.text}
          <button className='btn btn-primary' onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Todo;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {
  const [inputItem, setInput] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputItem)
    if (inputItem.length !== 0) {
      dispatch(addTodo(inputItem))

    }
    setInput("");
  }
  return (
    <form onClick={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input value={inputItem} onChange={e => setInput(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default AddTodo;


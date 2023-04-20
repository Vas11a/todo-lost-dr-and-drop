import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNewTodo, addTodo } from '../redux/mainSlice';

export default function Header() {
  const {newTodo} = useSelector((state) => state.main);
  const dispatch = useDispatch()
  return (
    <div className="head ">
        <div className="input-block">
          <input type="text" value={newTodo} onChange={(e) => dispatch(setNewTodo(e.target.value))} className='input' placeholder='Add todo' />
          <div className="bth-add" onClick={() => dispatch(addTodo())}>Add</div>
        </div>
      </div>
  )
}

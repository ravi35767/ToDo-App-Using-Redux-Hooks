import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import { deleteTodo, updateTodo } from '../redux/actions';

function TodoItem({ todo }) {
    const dispatch = useDispatch();
    const [edittable, setEdittable] = useState(false);
    const [name, setName] = useState(todo.name);
    return (
        <div>
            <div className="row mx-2 align-item-center">
                <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
                <div className="col text-center">
                    {edittable ? <input type="text" className="form--control" 
    
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    /> :  <h3>{todo.name}</h3>}
                   
                </div>
                <button onClick={() => {
                    dispatch(updateTodo(
                        {
                            ...todo,
                            name: name
                        }
                    ));
                    if(edittable){
                        setName(todo.name)
                    }
                    setEdittable(!edittable)
                    }} className="btn btn-primary m-2">{edittable ? "Update" : "Edit"}</button>
                <button onClick={() => dispatch(deleteTodo(todo.id))} className="btn btn-danger m-2">Delete</button>
            </div>
        </div>
    )
}

export default TodoItem 
 
import React from 'react'
import {Todo} from "../Mycomponents/Todo.js";

export const Todos = (props) => {
    return (
        <div className="container">
            <h2 className="text-center my-4">Todos list</h2>
            
                {
                    props.todos.length===0? "No Todos to display ":
                props.todos.map((todo)=>{
                    return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                })
            }
    
        </div>

    )
}

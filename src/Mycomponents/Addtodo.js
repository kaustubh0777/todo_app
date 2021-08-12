import React from 'react'
import { useState } from 'react';

export const Addtodo = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const Submit=(e)=>{
        e.preventDefault();
        if(!title || !desc)
        {
            alert("Field cannot be blank")
        }
        else
        {
        
        props.addtodo(title,desc);
        setTitle("");
        setDesc("");
        }


    } 
    return (
        <div className="container">
            <h3 className="text-center my-3">Add Todo</h3>
            <form onSubmit={Submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Description" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-primary">Add</button>
            </form>

        </div>
    )
}

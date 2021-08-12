import React from 'react'

export const About = () => {


    return (
        <div className="text-center ">
            <h1 className="bg-dark text-light">About</h1>
            <hr />
            <p className="h3">This is an Todo App Made Using React Js and BootStrap</p>
            <hr className="rounded" />
            <h3 className="h1">Basic Features of the App</h3>
            <br />
            <ul className="h4">
                <li>Add a Todo with its Title and Description</li>
                <li>Delete it anytime </li>
                <li>Uses Local Storage for Saving the Todo</li>
            </ul>
            <hr />
        </div>
    )
}

import './App.css';
import Header from './Mycomponents/Header';
import {Todos} from './Mycomponents/Todos';
import {Footer} from './Mycomponents/Footer';
import React, { useState ,useEffect } from 'react';
import {Addtodo} from './Mycomponents/Addtodo';
import {About} from './Mycomponents/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() 
{
  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[];
  }
  else{

    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
    
  const onDelete=(todo)=>{
    console.log("Deleted",todo);

    setTodos(todos.filter((x)=>{
      return x!==todo;

    }))

    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addtodo=(title,desc)=>{
    console.log("Todo Added",title,desc);
    let sno;
    if(todos.length===0)
    {
      
      sno=1;
    }
    else
    {
    sno=todos[todos.length-1].sno+1;
    }

    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);


    if(localStorage.getItem("todos"))
    {
      localStorage.setItem("todos",JSON.stringify(todos));
    }
  }



  const [todos,setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
    
  }, [todos])
  return (
    <>
    <Router>
     <Header title="Todo App"/>

     <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
             <Addtodo addtodo={addtodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
            </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

     <Footer/>
     </Router>

     </>
    
  );
}

export default App;

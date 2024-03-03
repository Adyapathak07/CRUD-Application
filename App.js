import React from "react";
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [task,updatedtask]=useState("");
  const [description,updateddes]=useState("");
  const [data, setdata]= useState([]);
  
  var tn;
  const tname=(e)=>{

    updatedtask(e.target.value);
  }
  const tdes=(e)=>{

    updateddes(e.target.value);
  }
  const submit=(e)=>{
   
    e.preventDefault();

     tn={task:task,description:description};
    setdata([...data,tn]);
    console.log([...data,tn]);
    <div>
      <h1>task</h1>
    </div>
   
  }
  const reset=(e)=>{

    e.preventDefault();

  }
  const edit=(e)=>{

    e.preventDefault();
  }
  const del=(e)=>{

    e.preventDefault();
  }

  return (
   
    <div className="container">
      <h1>Task Manager</h1>
      <div className="box">
      
      
    </div>
   <div className='app'>
  <input type="text" className='task' id='task' value={task} onChange={tname} placeholder='TaskName'/>
   <input type='text' className='description' id='des' value={description} onChange={tdes} placeholder='Description'/>

<div className="btn-1"></div>
<button onClick={submit} >Submit</button>
<button onClick={reset} >Reset</button>
</div>


<div>
<table className='table'>
  <thead>
<tr >
  <th>Task</th>
  <th className="th-1">Description</th>
  <th className="th-2"> Actions</th>
</tr>
  </thead>
  <tbody>
    <tr className="row-2">
    <td>{task}</td>
    <td>{description}</td>
    <span><td>
    <button onClick= {edit}>Edit</button>
    <button onClick={del} >Delete</button>
      </td></span>
    </tr>

    <tr className="row-2">
    <td>Skills</td>
    <td>To upgrade hard skills</td>
    <span><td>
    <button onClick={edit} >Edit</button>
    <button onClick={del} >Delete</button>
      </td></span>
    </tr>

    <tr className="row-2">
    <td>Projects</td>
    <td>To create relevant projects according to skills</td>
    <span><td>
    <button onClick={edit} >Edit</button>
    <button onClick={del} >Delete</button>
      </td></span>
    </tr>

    <tr className="row-2">
    <td>Course</td>
    <td>To secure good grades in semester exams</td>
    <span><td>
    <button onClick={edit} >Edit</button>
    <button onClick={del} >Delete</button>
      </td></span>
    </tr>

    <tr className="row-2">
    <td>Personality</td>
    <td>To work on my personality development</td>
    <span><td>
    <button onClick={edit} >Edit</button>
    <button onClick={del} >Delete</button>
      </td></span>
    </tr>
  
  </tbody>
</table>
</div>
</div>

  );
  
  }
export default App;

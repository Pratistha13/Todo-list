import React from 'react';
import './App.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

function App() {
  const [todo, setTodo] = React.useState({desc: '', date: ''});
  const [todos, setTodos]= React.useState([]);

  const inputChanged =(event) =>{
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo =(event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const deleteTodo =(event)=>{
    event.preventDefault();
    setTodos(todos.filter((todo, index)=> index !== parseInt(event.target.id)));
  }
  
  const columns =[
    {
      Header:'Date',
      accessor:'date'
    },
    {
      Header: 'Description',
      accessor:'desc'
    },
    {
      Cell: ({index}) => <button id={index} onClick={deleteTodo}>Delete</button>,
      filterable: false,
      sortable:false,
      width:120
    }
  ]
  
  return (
    <div className="App">
      <form onSubmit = {addTodo}>
      <input type= "date" name ="date" value = {todo.date} onChange ={inputChanged}/>
        <input type= "text" name = "desc" value ={todo.description} onChange ={inputChanged}/>
        <input type ="submit" value ="Add"/>
      </form>
      <ReactTable filterable={true} data = {todos} columns ={columns} />

    
    </div>
  );
}

export default App;

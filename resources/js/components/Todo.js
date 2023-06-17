import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from "./pages/function/Todoform";
import TodoList from "./pages/function/TodoList";
import { useEffect } from 'react';
import { useState } from 'react';
import Axios from 'axios';

function Todo() {
    //表示させたいTodo listを格納する
    const[tasks,setTask] =useState([]);
    const [todo_list, setTodoList] = useState([]);
    
    useEffect(()=>{
        axios.get('/api/task/get')
        .then(response => {
            setTask(response.data);
        })
        .catch(error => {
            console.log(error);
        });
        //第二引数を空にすると、初回のみ呼び出される
     }, []);

     //tasksが所得された後に、todo_listにtasksの内容を格納する
     useEffect(() => {
        if (tasks.length > 0) {
          const updatedTodoList = tasks.map(task => task.description);
          setTodoList(updatedTodoList);
        }
      }, [tasks]);
    
     console.log(todo_list,"hogehogehoge");
    
  
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    
                    <div className="card-body">
                        { /* form */ }
                        <TodoForm />
						<TodoList items ={todo_list}/>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Todo;

if (document.getElementById('todo')) {
    ReactDOM.render(<Todo />, document.getElementById('todo'));
}

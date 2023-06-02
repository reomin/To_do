import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from "./Todoform";
import TodoList from "./TodoList";
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
    console.log("こんにちは");

    //表示させたいTodo listを格納する
    const todo_list = [
		1,
	];



    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    
                <div className="card-header">Hello world</div>
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

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from "./pages/function/Todoform";
import TodoList from "./pages/function/TodoList";
import { BrowserRouter, Route } from 'react-router-dom';

function Todo() {
    //表示させたいTodo listを格納する
    const todo_list = [
		1,
	];



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

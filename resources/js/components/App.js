import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from "./Todoform";
import TodoList from "./TodoList";

function App() {
    const todo_list = [
		"Appから",
		"TodoListにデータを",
		"正しく渡せているか確認"
	];
    const title = "これはタイトルです。";
    const text = "これは本文です";
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                <div className="card-header">ToDo App</div>
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

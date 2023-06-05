import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from "../function/Todoform";
import TodoList from "../function/TodoList";
import { BrowserRouter, Route } from 'react-router-dom';

function Login() {
    return (
        <div>
        <body>
           <section className="form animated flipInX">
               <h2>Login Page</h2>
               <p className="valid">Login Successful.</p>
               <p className="error">Incorrect Username &amp; password.</p>
               <p>Please enter Email for username</p>
               <form className="loginbox" autocomplete="off">
                 <input placeholder="Username" type="text" id="username"></input>
                 <input placeholder="Password" type="password" id="password"></input>
             <button id="submit">Login</button>
             </form>
             </section>
        </body>
    </div>
    );
}

export default Login;


if(document.getElementById("login")){
    ReactDOM.render(<Login />, document.getElementById('login'))
}
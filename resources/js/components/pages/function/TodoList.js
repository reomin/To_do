import { error } from "jquery";
import React from "react";
import Axios from "axios";

function TodoList(props){
    //Todoからusersテーブルのdiscriptionを取得している
    const todo_list = props.items;

   // 追加ボタンを押したときに起きる    
   const handleClick = async (id) => {
    try {
      await Axios.delete(`/api/task/delete/${id}`);
      location.href ="/home"
    } catch (error) {
      console.log(error);
      alert("エラーが起きました");
    }
  };


    return(
        <div className="todo-list mt-3">
             <ul>
                {
                    todo_list.map((todo, index) => {
                    return <li className="todo-item" key={index} style={{marginBottom: '20px'}}>
                            <span>{ todo.description }</span>
                        <button onClick={() => handleClick(todo.id)} style={{marginLeft: '20px'}}>削除</button>
                    </li>})

                }
            </ul>
        </div>
    );
}

export default TodoList;
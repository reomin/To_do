import React,{useState} from "react";
import Axios from "axios";
import { error } from "jquery";



function TodoForm(){
    
    //データを送るために保存する
    const [data,setData] = useState();
    
    const onChange =()=>{
        var task =document.forms.task.task.value;
        console.log(task);
    
        setData({
            task:task
        })
    }

    
    const onClick =async()=>{
        console.log("こんにちは");
        await Axios.post('/api/task',data)
        .then((res)=>{
            console.log("こんばんわ");
            setData('');
            location.href ="/"
        }).catch(error=>{
            console.log(error);
            alert("エラーが起きました");
        })
    }


    return(
        <form name="task" onChange={onChange}>
        <h2>タスクの追加</h2>
        <div className="form-group">
            <input 
                type="text" 
                className="form-control" 
                name="task" 
                autoComplete="off" />
        </div>
        
        <button onClick={onClick} className="btn btn-primary">追加</button>
    </form>
    );
}

export default TodoForm;
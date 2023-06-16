import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Linkß } from 'react-router-dom';



function Index() {
    const todo_list = [
		1,
	];



    return (
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-10 text-center'>
                                <div className ="title">
                                    <h1>This is To do app</h1>
                                </div>
                        </div>
                    </div>
                </div>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}



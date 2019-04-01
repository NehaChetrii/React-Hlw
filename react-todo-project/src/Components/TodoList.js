import React from 'react'
import {Link } from 'react-router-dom';
const TodoList =({todos,deleteTodo})=> {
    return(
        <div className="collection">
        {todos.length>0?
             (todos.map((todo => <p key={todo.id} onClick={(e)=>deleteTodo(todo.id)}
        className="collection-item">
        {todo.content}
        <Link to={'/todo/' + todo.id}>
        <a className="waves-effect waves-light btn">View</a>
        </Link>
            </p>)) 
            ):(<p>You have completed the task...</p>
            )}

        </div>
    )
}
export default TodoList
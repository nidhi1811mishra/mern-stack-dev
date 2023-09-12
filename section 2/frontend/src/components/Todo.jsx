import React, { useState } from 'react'

const Todo = () => {
const [todoList, setTodoList] = useState([]);
    const addNewTodo = (e)=>{
        // console.log(e.code);
        if (e.code==='Enter'){
           console.log(e.target.value)
           setTodoList ([...todoList, e.target.value]); 
           console.log([...todoList,e.target.value]);
           e.target.value = ''; 
        }
    }
        const deleteTodo = (index) => {
            console.log(index) ; 
            const temp =  todoList;
            temp.splice(index,1);
            setTodoList(...temp);
        }
    
  return (
    <div className='container'>
        <h1 className='text-center mt-5'>Todo Webapp</h1>
        <div className='card'>
            <div className='card-header'>
                <input type="text" className='form-control' onKeyDown={addNewTodo} />
            </div>
            <div className='card-body'>
                {todoList.map((todo,index)=>{return <div className={`d-flex justify-content-between p-3 ${index%2===0 ? 'bg-body-secondary':''}`}>
                    <h3>{index +1}{todo}</h3>
                    <button className='btn btn-danger' onclick={()=>{deleteTodo(index)}}>Delete</button>
                    </div>})}

            </div>

        </div>


    </div>
  )
}

export default Todo;
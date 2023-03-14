import React from 'react';
import { useState } from 'react';

const Todo = () => {
    const[todo,setTodo] = useState("")
    const [listdata,setlistData] = useState([])
    function addtodo(){
        // setlistData([...listdata,todo])
        // console.log(listdata)

        setlistData((listdata)=>{
            const updatelist=[...listdata,todo]
            console.log(updatelist)
            setTodo('')
            return updatelist
        })
    }

    function removetodo(i){
             const updatedListData = listdata.filter((elem, id)=>{
                return i!= id;
             })
             setlistData(updatedListData);
    }
    function RemoveAll(params) {
        setlistData([])
    }
  return (
    <>
    <div className='container'>
        <div className='header'>
            <h1>TodoList</h1></div>
        <input className='input' type='text' placeholder='Add your Todos' value={todo} onChange={(e)=>
        setTodo(e.target.value)}/>
        <button className=' button' onClick={(addtodo)}> + </button>
        </div>
     <div className='data'>
    <p className='List_heading'>Here is your data:{")"}</p>
    {listdata!=[] && listdata.map((data,i) =>{
        return (
            <>
            <p key={i}>
                
              <div className='items'>{data}</div>
              <div><button  className="btn-position" onClick={()=>removetodo (i)}>Remove(-)</button>
              </div>
              
            </p>
            </>
        )
    })}
{listdata.length>=1 && <button className='rml' onClick={RemoveAll}>Remove All</button> }

        </div>
    </>
  );
}

export default Todo;

import React,{useContext} from 'react'
import TodosContext from './Context'
import { EditOutlined,DeleteOutlined } from '@ant-design/icons';


export default function TodoList() {
 const {state,dispatch} = useContext(TodosContext);
 const title = state.todos.lenght
  ? `${state.todos.lenght} Todos`
  :" ";

  return (
   <div className="container-fluid">
    <div className="row">
     <div className='col-md-12'>
     <h2 className='text-center mr-5'>{title}</h2>
      {state.todos.map((todo)=>(
       <div 
          className="border row mx-2 m-2 align-items-center"
           key={todo.id}
           >
        <ul className="list-group" style={{color:"white"}}>
         <li className='list-group-item'
         onDoubleClick = {()=>dispatch({type:"TOGGLE_TODO",payload:todo})
        }
          style={{textDecoration:`${todo.done ? "line-through"  : "none" }`,
          backgroundColor:"lightGoldenrodYellow",
          cursor:"Pointer",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"

         }}
         >
          {todo.text}
          </li>
        </ul>
         <span className="btn btn-sm float-right"  
         onClick={()=>
         dispatch({type:"SET_CURRENT_TODO",payload:todo})}>
          <EditOutlined className='text-warning'/>
         </span>
         <span className="btn btn-sm float-right" onClick={()=>dispatch({type:"DELETE_TODO",payload:todo})}>
          <DeleteOutlined  className='text-danger'/>
         </span>
       </div>
      ))}

     </div>

    </div>
      
    </div>
  )
}

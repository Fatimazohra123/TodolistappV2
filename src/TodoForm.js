import React,{useState,useContext,useEffect} from 'react'
import{Input} from "antd";
import TodoContext from "./Context";

export default function TodoForm() {
 const[todo,setTodo] = useState("");
 const{ state:{currentTodo={},
} ,
dispatch,
} = useContext(TodoContext);
 const handleSubmit = (e)=>{
  e.preventDefault();
  if (currentTodo.text){
   dispatch({type:"UPDATE_TODO",payload:todo})
  }else{
   dispatch({type:"ADD_TODO",payload:todo});
  }
  
  setTodo("");
 };

 useEffect(()=>{
  if(currentTodo.text){
   setTodo(currentTodo.text)
  }

 },[currentTodo.id]);

  return (
   <form onSubmit={handleSubmit}>
         <div className='form-group mt-5'
         style={{
          display:"flex",
          alignItems:"center",
          justifyContent:"center",

         }}

         >
          <Input
          type="text"
          placeholder="Your tasks...."
          style={{width:"350px"}}
          onChange={e=>setTodo(e.target.value)}
          value={todo}
          />
         
    
       </div>  

   </form>
 
  )
}

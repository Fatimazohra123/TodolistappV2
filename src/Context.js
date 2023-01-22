import React from "react";

const TodosContext = React.createContext({
 todos : [
  { id:1 , text:"reading novel", done:false},
  { id:2 , text:"watching movie", done:false},
  { id:3 , text:"journaling", done:true}
 
 ],
 currentTodo:{}
});
export default TodosContext;
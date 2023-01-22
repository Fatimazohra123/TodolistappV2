import logo from './logo.svg';
import './App.css';
import TodosContext from './Context';
import todoreducer from './Reducer';
import React ,{useContext,useReducer} from "react"
import TodoList from "./TodoList"
import TodoForm from './TodoForm';


function App() {
  const initialState = useContext(TodosContext);
  const [state,dispatch] = useReducer(todoreducer,initialState)
  return (
    <div className="App">
      <TodosContext.Provider value={{state,dispatch}}>
         <TodoList/>
         <TodoForm/>
     </TodosContext.Provider> 


      
    
    </div>
  );
}

export default App;

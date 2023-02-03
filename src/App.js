import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decreasingQuantity,increasingQuantity,reset } from './actions/Action';
import "./App.css"

const App = () => {
  const dispatch=useDispatch()
  const count = useSelector(state=>state.count)
  
  const decreaseHandler = () =>{
     dispatch(decreasingQuantity())
  }
  const increaseHandler = () =>{
    dispatch(increasingQuantity())
 }
 const resetHandler = () =>{
  dispatch(reset())
}
  return (
    <>
    <div className='App'>
    <h1>{count}</h1>
    
    <button onClick={decreaseHandler}>-</button>
    <button onClick={increaseHandler}>+</button><br/>
    <button onClick={resetHandler}>Reset</button>
    </div>
    </>
  )
}

export default App
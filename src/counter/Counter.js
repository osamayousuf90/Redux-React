import React from 'react'
import { useSelector , useDispatch } from "react-redux";
import { increment , decrement , reset } from '../redux/counterSlice';


const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

  return (
       <>
       <div className="main_div">
        <h1>Counter </h1>
         <h3 className='count_number'>{count}</h3>  
         <div className="child">
         <button className='btn' onClick={() => dispatch(increment())}>+</button>
        <button className='btn' onClick={() => dispatch(decrement())}>-</button>
        <button className='btn' onClick={() => dispatch(reset())}>Reset</button>
         
         </div>
       </div>
       </>
  )
}

export default Counter
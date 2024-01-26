
// import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {incNumber,decNumber} from './actions/index.jsx'

function App() {
  const myState = useSelector((state)=>state.changeTheNumber);
  const dispatch=useDispatch();

  

  return (
    <>
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>

        <div className="quantity">
          <a className="quantity_minus" title='quantity_input' onClick={()=>dispatch(decNumber())} >
            <span>-</span>
          </a>
          
            <input name="quantity" type="text" className='quantity_input' value={myState}/>

            <a   className="quantity_plus" title='increament' onClick={()=>dispatch(incNumber())} >
            <span>+</span>
            </a>
  
        </div>
      </div>
    </>
  );
}

export default App;

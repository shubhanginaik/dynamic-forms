import React,{useState} from 'react';
import './App.css';

function App() {
  const [inputfields, setInputfields]= useState([
    {name:'',age:''}
  ])
  return (
    <div className="App">
      <form>
        {inputfields.map((input,index)=>{
          return(
        <div key={index}>
          <input
          name="name"
          placeholder="Name"

          />
          <input
          name="age"
          placeholder="Age"
          
          />
        </div>
          )
        })
        }
      </form>
    </div>
  );
}

export default App;

import React,{useState} from 'react';
import './App.css';

function App() {
  const [inputfields, setInputfields]= useState([
    {name:'',age:''}
  ]);

  const handleFormChange =(index,event)=>{
    let data=[...inputfields]
    data[index][event.target.name]=event.target.value
    setInputfields(data)
    //console.log(data)
  }
  const addFilds=(e)=>{
    e.preventDefault();
    let newField = { name:'', age:'' }
    setInputfields([...inputfields,newField])
  }
  const submit = (e) =>{
    e.preventDefault();
    console.log(inputfields);
  }
  return (
    <div className="App">
      <form onSubmit={submit}>
        {inputfields.map((input,index)=>{
          return(
        <div key={index}>
          <input
          name="name"
          placeholder="Name"
            value={input.name}
            onChange={(event)=>handleFormChange(index,event)}
          />
          <input
          name="age"
          placeholder="Age"
          value={input.age}
          onChange={(event)=>handleFormChange(index,event)}
          />
        </div>
          )
        })
        }
        <button onClick={addFilds}>Add more</button>
        <button onClick={submit}>Submit</button>
      </form>
    </div>
  );
}

export default App;

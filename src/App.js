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

  const removefields =(index)=>{
    let data=[...inputfields];
    data.splice(index,1)
    setInputfields(data);
  }
  return (
    <div className="App">
      <h1>Dynamic form</h1>
      <form onSubmit={submit}>
        {inputfields.map((input,index)=>{
          return(
        <div className="responsive" key={index}>
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
          <button onClick={(index)=>removefields(index)}>Remove</button>
        </div>
          )
        })
        }
        <button className="down" onClick={addFilds}>Add more</button>
        <button className="down" onClick={submit}>Submit</button>
      </form>
    </div>
  );
}

export default App;

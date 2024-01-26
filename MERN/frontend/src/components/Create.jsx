import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Create() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [age,setAge] = useState(0);
    // console.log(name,email,age)
    const [Error,setError] =useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        const addUser = {name,email,age}
        const response = await fetch("http://localhost:5000",{
            method:"POST",
            body:JSON.stringify(addUser),
            headers:{
                "Content-Type":"application/json"
            }
        });

        const result = await response.json();

        if(!response.ok){
            // console.log(result.error);
            setError("result.error");
        }

        if(response.ok){
            console.log(result);
            setError("");
            setName("");
            setEmail("");
            setAge(0);
            navigate("/all");

        }

    };

  return (
    <div className='container my-2'>
{/* {error && <div className='alert alert-danger'>{error} </div>} */}
    <h3>{Error}</h3>


      <h2 className='text-center'>Enter the data</h2> 

      <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" value={name} onChange={(e)=>{
        setName(e.target.value)
    }}  />
  </div>

  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" value={email} onChange={(e)=>{
        setEmail(e.target.value)
    }} />
  </div>
  <div className="mb-3">
    <label className="form-label">Age</label>
    <input type="number" className="form-control" value={age} onChange={(e)=>{
        setAge(e.target.value)
    }}  />
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");
  const { id } = useParams();  // <-- Corrected line
  const navigate = useNavigate();

  // get single user data
  const getSingleUser = async () => {
    try {
      const response = await fetch(`http://localhost:5000/${id}`);
      const result = await response.json();
      
      if (!response.ok) {
        setError(result.error);
      }

      if (response.ok) {
        setError("");
        setName(result.name);
        setEmail(result.email);
        setAge(result.age);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
    }
  };

  // send updated data
  const handleEdit = async (e) => {
    e.preventDefault();

    const updatedUser = { name, email, age };
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (!response.ok) {
      setError(result.error);
    }

    if (response.ok) {
      console.log(result);
      setError("");
      navigate("/all");
    }
  };

  useEffect(() => {
    getSingleUser();
  }, [id]); // <-- Add id as a dependency for useEffect


  return (
  <div className='container my-2'>
  {/* {error && <div className='alert alert-danger'>{error} </div>} */}
      <h3>{error}</h3>
  
  
        <h2 className='text-center'>Edit the data</h2> 
  
        <form onSubmit={handleEdit}>
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

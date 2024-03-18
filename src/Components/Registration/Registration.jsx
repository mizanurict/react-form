/** @format */

import { useState } from "react";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [isCheck, setIsCheck] = useState(false);
  
    const handleClick = (event) => {
        event.preventDefault();
        if (!isCheck) {
            return;
        }
      const user={
          Name: name,
          Email: email,
          Password: password
        }
        setIsSubmit(true);
      
  };
  return (
    <div>
          <div className="h-screen w-full flex justify-center items-center">
              
              <form className="mx-auto h-1/2 w-1/2" action="" onSubmit={ (event) => handleClick(event) }>
              <h1 className='text-center text-3xl font-semibold text-blue-800 my-4'>Registration Form</h1>
          <h1>Name</h1>
          <label className="input input-bordered flex items-center gap-2">
            <input onChange={(event) => setName(event.target.value)} type="text" className="grow" placeholder="Enter Your Name" required />
          </label>
          <h1>Email</h1>
          <label className="input input-bordered flex items-center gap-2">
            <input onChange={(event) => setEmail(event.target.value)} type="text" className="grow" placeholder=" Enter Your Email" required/>
          </label>
          <h1>Password</h1>
          <label className="input input-bordered flex items-center gap-2">
            <input onChange={(event) => setPassword(event.target.value)} type="password" className="grow" placeholder="password" required/>
                  </label>
                  <input type="checkbox" onChange={(event)=>setIsCheck(event.target.checked)} name="" id="" /> Do you agree with us?
          <p className="text-end">
            <button type="submit" className="btn btn-primary my-2">Sign Up</button>
          </p>
              </form>
              {
                  isSubmit && (<div className="fixed top-0 flex justify-center items-center bg-gray-700 w-1/2 h-screen ">
                  <div className="w-1/2 h-1/2 bg-slate-500 text-center">
                          <h1>You have filled up form successfully</h1>
                          <p>Name: { name}</p>
                          <p>Email: { email}</p>
                  </div>
              </div>)
              }
      </div>
    </div>
  );
};

export default Registration;

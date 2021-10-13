import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router";
const StudentData = () => {
  let history = useHistory();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

//   const [newValue, setNewValue] = useState([]);
    
      const handleEvent = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser({ ...user, [name]: value });
      };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:3001/users", user);
    history.push("/");
  };


  return (
    <div className="container   ">
      <div className=" w-75 border mx-auto shadow  p-5">
        <div className="text-center mb-4">
          <h1>Add Students Details</h1>
        </div>
        <form onSubmit={handleSubmit}  >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control "
              id="name"
              placeholder="Enter Name"
              name="name"
              value={user.name}
              onChange={handleEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter username"
              name="username"
              value={user.username}
              onChange={handleEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              name="email"
              value={user.email}
              onChange={handleEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Enter Mobile number"
              name="phone"
              value={user.phone}
              onChange={handleEvent}
            />
          </div>
          <div className="form-group  ">

          <button  className="btn btn-primary btn-block " >
            Add User
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentData;

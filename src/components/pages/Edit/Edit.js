import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
const Edit = () => {
  let history = useHistory();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const handleEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`,user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container   ">
      <div className=" w-75 border mx-auto shadow  p-5">
        <div className="text-center mb-4">
          <h1> Edit Students Details</h1>
        </div>
        <form onSubmit={handleSubmit}>
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
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
const Home = () => {

    const [user, setUser] = useState([]);
    useEffect(() => {
        loadUsers();
      }, []);
    
      const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/users");
        setUser(result.data.reverse());
      };
    
      const deleteUser = async id => {
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUsers();
      };




  
//   const url = "http://localhost:3001/users";

//   useEffect(() => {
//     console.log("welcome");
//     loadData();
//   }, []);


// const deleteUser = async id => {
//     await axios.delete(url/`${id}`);
//     loadData();
//   };

//   const loadData = async () => {
//     const result = await axios.get(url);

//     setUsers(result.data);
//   };
  return (
    <div className="container">
      <div className="py-4">
        <h1>Welcome To CleverGround</h1>
      </div>
      <table className="table border shadow">
        <thead className="thead-darker">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((value, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                
                <td>{value.name}</td>
                <td>{value.username}</td>
                <td>{value.email}</td>

                <td>
                  <Link className="btn btn-primary space" to={`/students/${value.id}`}>View</Link>
                  <Link
                    className="btn btn-outline-primary space"
                    to={`/students/edit/${value.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteUser(value.id)}
                    
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

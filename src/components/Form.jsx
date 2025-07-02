import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, editUser, fetchUser } from "../features/user/thunk";
import { useNavigate } from "react-router";

const Form = ({ user, setUser, editId, setEditId , updateUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    if (editId !== null) {
      setUser((prev) => ({ ...prev }));  
    }
  }, [editId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId !== null) {
      dispatch(editUser({ ...user }));
      alert("User updated successfully!");
      setEditId(null);
    } else {
      dispatch(createUser(user));
      alert("User created successfully!");
    }

    setUser({});
    navigate("/table");
  };


  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <h3>{editId ? "Edit User" : "User Registration Form"}</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} autoComplete="off">
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={user.username || ""}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter username"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email || ""}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password || ""}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter password"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={user.mobile || ""}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter mobile number"
                    maxLength="10"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <select
                    name="role"
                    value={user.role || ""}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select role</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-success px-4">
                    {editId ? "Update" : "Register"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUser } from "../features/user/thunk";
import { FaEdit, FaEye, FaEyeSlash } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router";

function Table({ updateUser }) {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);
  const [visibleIndex, setVisibleIndex] = useState(null);

   const navigate = useNavigate();

  const handleEdit = (item) => {
    updateUser(item);         
    navigate('/form');        
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card shadow-lg">
            <div className="card-header bg-success text-white text-center">
              <h4>User List</h4>
            </div>
            <div className="card-body table-responsive">
              <table className="table table-striped table-bordered align-middle">
                <thead className="table-dark text-center">
                  <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Mobile</th>
                    <th>Role</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="7" className="text-center text-info">
                        Loading Data...
                      </td>
                    </tr>
                  ) : user.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="text-center text-danger">
                        No users found.
                      </td>
                    </tr>
                  ) : (
                    user.map((item, idx) => {
                      const {
                        id,
                        username,
                        email,
                        password,
                        mobile,
                        role,
                      } = item;
                      return (
                        <tr key={id} className="text-center">
                          <td>{idx + 1}</td>
                          <td>{username || "-"}</td>
                          <td>{email}</td>
                          <td>
                            <div className="d-flex align-items-center justify-content-center">
                              <input
                                type={
                                  visibleIndex === idx ? "text" : "password"
                                }
                                disabled
                                value={password}
                                className="form-control form-control-sm me-2"
                                style={{ maxWidth: "150px" }}
                              />
                              <span
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  setVisibleIndex(
                                    visibleIndex === idx ? null : idx
                                  )
                                }
                              >
                                {visibleIndex === idx ? (
                                  <FaEyeSlash />
                                ) : (
                                  <FaEye />
                                )}
                              </span>
                            </div>
                          </td>
                          <td>{mobile || "-"}</td>
                          <td>{role || "-"}</td>
                          <td>
                            <button
                              onClick={() => handleEdit(item)}
                              className="btn btn-sm btn-warning me-2"
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => dispatch(deleteUser(id))}
                              className="btn btn-sm btn-danger"
                            >
                              <RiDeleteBin6Line />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;

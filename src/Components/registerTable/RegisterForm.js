import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../JS/Actions/user";
import { Container } from "react-bootstrap";

const RegisterForm = () => {
  const [newUser, setNewUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleUser = (e) => {
    e.preventDefault();
    dispatch(register(newUser, navigate));
  };

  return (
    <Container>
      
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="name"
                            onChange={handleChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            {" "}
                            Name
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            name="email"
                            onChange={handleChange}
                          />
                          <label className="form-label" htmFor="form3Example3c">
                            {" "}
                            Email
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            name="password"
                            onChange={handleChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example4cd"
                            className="form-control"
                            name="date_birth "
                            onChange={handleChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4cd"
                          >
                            date of birth
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="adress "
                            onChange={handleChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            {" "}
                            Adress
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="diplom "
                            onChange={handleChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            {" "}
                            Diplom
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="date_of_entry "
                            onChange={handleChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            {" "}
                            Date of Entry
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name=" releaseDate"
                            onChange={handleChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            {" "}
                            Date of release
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name=" position"
                            onChange={handleChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            {" "}
                            position
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="Number"
                            id="form3Example1c"
                            className="form-control"
                            name=" phone"
                            onChange={handleChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            {" "}
                            Phone
                          </label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                          onClick={handleUser}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  
                    </Container>
  );
};

export default RegisterForm;

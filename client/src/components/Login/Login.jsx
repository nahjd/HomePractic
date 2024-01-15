import React from 'react'
import Navbar from "../Navbar/Navbar"
import {
    Formik,

    Form,
    Field,
    ErrorMessage,
} from "formik";
import axios from "axios";
import { Link } from 'react-router-dom';
import "../Login/Login.scss"



const Login = () => {

    return (<>
        <Navbar />
        <div className="container">
            <div className="left">
                <img
                    src="https://img.freepik.com/free-vector/flat-design-colorful-characters-welcoming_23-2148271988.jpg?w=1380&t=st=1703516674~exp=1703517274~hmac=82fc243eab5508c2e880645743d0de588745953f6c0eebf4bb376c5a2c0f74ad"
                    alt=""
                />
            </div>
            <div className="right">
                <div className="loginn">
                    <h2>Register</h2>
                    <b>
                        <p>Please login to continue</p>
                    </b>
                    <br />
                    <Formik


                    >
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email" placeholder="Email " />
                            <ErrorMessage name="email" component="div" />
                            <br />

                            <label htmlFor="password">Password</label>
                            <Field
                                style={{ marginRight: "28px" }}
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                            />
                            <br />
                            <button type="submit">Login</button>
                        </Form>
                    </Formik>

                    <p style={{ marginTop: "25px" }}>
                        Don't have an account yet?{" "}
                        <Link to="/register">

                            <span
                                style={{
                                    padding: "5px",
                                    textAlign: "center",
                                    color: "white",
                                    fontSize: "19px",
                                    backgroundColor: "#03045E",
                                    borderRadius: "8px",
                                    border: "none",
                                }}
                                className="sign-up"
                            >
                                Sign up
                            </span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>


    </>

    )
}

export default Login
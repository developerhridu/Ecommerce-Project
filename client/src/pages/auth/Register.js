import React from 'react';
import Jumbotron from "../../components/cards/Jumbotron";

const Register = () => {
    return (
        <div>
            <Jumbotron title="Register" />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form >
                            <input
                                type="text"
                                className="form-control mb-4 p-2"
                                placeholder="Enter your name"
                                value=""
                                autoFocus
                            />

                            <input
                                type="email"
                                className="form-control mb-4 p-2"
                                placeholder="Enter your email"
                                value=""
                            />

                            <input
                                type="password"
                                className="form-control mb-4 p-2"
                                placeholder="Enter your password"
                                value= ""
                            />

                            <button className="btn btn-primary" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
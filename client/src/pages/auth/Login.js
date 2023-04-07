import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Jumbotron from "../../components/cards/Jumbotron";
import { useAuth } from "../../context/auth";

const Login=()=> {
    // state
    const [email, setEmail] = useState("faisal@gmail.com");
    const [password, setPassword] = useState("MArt@msb2020");
    // hook
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`/login`, {
                email,
                password,
            });
            console.log(data);
            if (data?.error) {
                toast.error(data.error);
            } else {
                localStorage.setItem("auth", JSON.stringify(data));
                setAuth({ ...auth, token: data.token, user: data.user });
                toast.success("Login successful");
                navigate(
                    location.state ||
                    `/dashboard/${data?.user?.role === 1 ? "admin" : "user"}`
                );
            }
        } catch (err) {
            console.log(err);
            toast.error("Login failed. Try again.");
        }
    };

    return (
        <div>
            <Jumbotron title="Login"/>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;
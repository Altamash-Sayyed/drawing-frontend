import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://drawwhiteboard.herokuapp.com/api/user/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res);

            console.log(res)
			window.location='/'
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
        <div className="flex h-screen">
      
		<div className="bg-gray-800 w-full text-2xl  text-white">
			<center >
				<div >
					<form className="flex flex-col mt-40 w-80" onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
                            className="border w-80 rounded-lg py-3 px-3  m-3 bg-gray-700 border-gray-700 placeholder-gray-500"						/>
	
						
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
                            className="border w-80 rounded-lg py-3 px-3  m-3 bg-gray-700 border-gray-700 placeholder-gray-500"						/>

						
						{error && <div >{error}</div>}
						<button type="submit"className="border border-blue-500  m-3 bg-blue-500 w-80 hover:bg-blue-400 text-white rounded-lg py-3 font-semibold" >
							Sing In
						</button>
                       <Link to="/signup"> <h1 className="text-lg ml-48">new here?</h1></Link>
					</form>
				</div>
				
			</center>
		</div>
        </div>
	);
};

export default Login;

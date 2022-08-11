import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

 
const Signup = () => {
	const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://drawwhiteboard.herokuapp.com/api/user/register";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem(data.name)
			 navigate("/login");
			console.log(res.message);
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
		<div className='flex items-center justify-center h-screen bg-gray-800'>
			<div className='bg-gray-800 flex flex-col w-1/2  rounded-lg px-8 py-10'>
				<div className="text-white sm:mt-2">
					
                <h1 className="font-bold text-4xl">Welcome</h1>
        <p className="font-semibold">Let's create your account!</p>
				</div>
                <center className="space-y-8 mt-4">
					<form className='flex w-96 flex-col' onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Name"
							name="name"
							onChange={handleChange}
							value={data.name}
							required
                            className="border rounded-lg py-3 px-3  m-3 bg-gray-700 border-gray-700 placeholder-gray-500"						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
                            className="border rounded-lg py-3 px-3  m-3 bg-gray-700 border-gray-700 placeholder-gray-500"/>
						<input
							type="password"
							placeholder="Password should 1Upper 1lower 1symbol"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
                            className="border rounded-lg py-3 px-3  m-3 bg-gray-700 border-gray-700 placeholder-gray-500"/>
						{error && <div className=''>{error}</div>}
						<button type="submit" className="border border-blue-500  m-3 bg-blue-500 hover:bg-blue-400 text-white rounded-lg py-3 font-semibold">
							Sing Up
						</button>
					</form>
				</center>
			</div>
		</div>
	);
};

export default Signup;
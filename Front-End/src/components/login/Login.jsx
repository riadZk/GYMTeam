import React, { useContext, useState, useEffect } from 'react'
import { GymContext } from '../../context/context'
import axios from 'axios'
export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { handleAuth } = useContext(GymContext)
    const URL = process.env.REACT_APP_URL_BASE;
    
    const [token, setToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    
    async function login(e) {
        e.preventDefault();
        const data = {
            email: email,
            password: password
        };
        try {
            const response = await axios.post(`${URL}/login`, data)
            console.log(response);
            const authToken = response.data.data;

            setToken(authToken);
            localStorage.setItem('authToken', authToken);

        } catch (error) {
            console.error("Error sending message:");
        }
    }
    const token2 = localStorage.getItem('authToken');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${URL}/profile`, {
                    headers: {
                        Authorization: `Bearer ${token2}`,
                    },
                });
                const user = response.data.data.name;
                setUserInfo(user);
            } catch (error) {
                console.error("You are not Login:");
            }
        };
        fetchData();
    },[]);
    return (
        <div className='flex flex-col justify-center w-1/2 h-full items-center gap-10'>
            <div className='text-center'>
                <h1 className='text-link text-4xl font-bold mb-1'>Welcome back</h1>
                <p className='text-gray-400'>Welcome back! Please enter your details.</p>
            </div>
            <form
                className="md:w-2/3 w-full px-2 md:px-0"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="2500"
                onSubmit={login}
            >
                <div className="mb-5">
                    <label className='text-light font-bold'>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-3 rounded-lg text-black border-[.2px] border-black"
                        name="user_name"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-5">
                    <label className='text-light font-bold'>Password</label>
                    <input
                        type="Password"
                        placeholder="Enter your passwordl"
                        className="w-full p-3 rounded-lg text-black border-[.2px] border-black"
                        name="user_email"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className='mb-5 flex justify-between items-center text-[15px]'>
                    <div className='flex gap-2 '>
                        <input type="checkbox" value="" className='' />
                        <label className='text-light font-bold'>Remember me</label>
                    </div>
                    <div>
                        <a href='#/' className='text-light font-bold'>Forgot password</a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        type='submit'
                        className="w-full p-3 rounded-lg text-light bg-link font-bold"
                    >
                        Login
                    </button>
                </div>
            </form>
            <div className='flex items-center justify-center text-[15px] font-bold gap-1'>
                <p className='text-para'>Don’t have an account ? </p>
                <button onClick={handleAuth} className='text-link'> Sign up fo free!</button>
            </div>
            
        </div>

    )
}

import React, { useContext, useState } from 'react'
import { GymContext } from '../../context/context'
import { useNavigate } from 'react-router-dom'
import { ValidationRegister } from './ValidationRegister'
import axios from 'axios'
export const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { handleAuth } = useContext(GymContext)

    const URL = process.env.REACT_APP_URL_BASE;
    const navigate = useNavigate('');



    const handleSubmit = async (values) => {
        try {
            const response = await axios.post(`${URL}/register`, values);
            console.log(values)
            console.log(response.data.data)
            const authToken = response.data.data;
            localStorage.setItem('authToken', authToken);
            navigate('/');
            window.location.reload(true);
        } catch (error) {
            console.error('Error sending message');
        }
    }

    return (
        <div className='flex flex-col justify-center w-full md:w-1/2 h-full items-center gap-10'>
            <div className='text-center'>
                <h1 className='text-link text-4xl font-bold mb-1'>Register now</h1>
                <p className='text-gray-400'>Let's get connected</p>
            </div>
            <form
                className="w-2/3 max-[532px]:w-full px-2 md:px-0"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="2500"
                onSubmit={handleSubmit}
            >
                <div className="mb-3">
                    <label className='text-light font-bold'>Name</label>
                    <input
                        type="Name"
                        placeholder="Enter your Name"
                        className="w-full p-3 rounded-lg text-black border-[.2px] border-black"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className='text-light font-bold'>Email</label>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="w-full p-3 rounded-lg text-black border-[.2px] border-black"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}

                    />
                </div>
                <div className="mb-3">
                    <label className='text-light font-bold'>Password</label>
                    <input
                        type="Password"
                        placeholder="Enter your passwordl"
                        className="w-full p-3 rounded-lg text-black border-[.2px] border-black"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='flex gap-2 my-3 text-[15px]'>
                    <input type="checkbox" value="" className='' />
                    <label className='text-light font-bold'>I accept the Terms and Conditions</label>
                </div>
                <div className="flex justify-center ">
                    <button
                        type="submit"
                        className="w-full p-3 rounded-lg text-light bg-link font-bold"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
            <div className='flex items-center justify-center text-[15px] font-bold gap-1'>
                <p className='text-para'>Already have an account ? </p>
                <button onClick={handleAuth} className='text-link'> Sign in</button>
            </div>
        </div>
    )
}

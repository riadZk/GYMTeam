import React, { useContext } from 'react'
import { GymContext } from '../../context/context'
export const Register = () => {
    const {handleAuth} = useContext(GymContext)
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
                onSubmit
            >
                <div className="mb-3">
                    <label className='text-light font-bold'>Name</label>
                    <input
                        type="Name"
                        placeholder="Enter your Name"
                        className="w-full p-3 rounded-lg text-black border-[.2px] border-black"
                        name="user_name"
                        // onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className='text-light font-bold'>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-3 rounded-lg text-black border-[.2px] border-black"
                        name="user_name"
                        // onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className='text-light font-bold'>Password</label>
                    <input
                        type="Password"
                        placeholder="Enter your passwordl"
                        className="w-full p-3 rounded-lg text-black border-[.2px] border-black"
                        name="user_email"
                        // onChange={(e) => setEmail(e.target.value)}
                        required
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
                        Login
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

import React, { useContext, useState, useRef } from 'react'
import { GymContext } from '../../context/context'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useFormik, Field } from 'formik';
import * as Yup from 'yup';

export const Login = () => {

    const { handleAuth } = useContext(GymContext)
    const URL = process.env.REACT_APP_URL_BASE;
    const navigate = useNavigate('')

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const response = await axios.post(`${URL}/login`, values);
                const authToken = response.data.data;
                localStorage.setItem('authToken', authToken);
                navigate('/');
                window.location.reload(true);
            } catch (error) {
                console.error('Error sending message');
            } finally {
                setSubmitting(false);
            }
        },
    });
    return (
        <div className='flex flex-col justify-center w-full md:w-1/2 h-full items-center gap-10'>
            <div className='text-center'>
                <h1 className='text-link text-4xl font-bold mb-1'>Welcome back</h1>
                <p className='text-gray-400'>Welcome back! Please enter your details.</p>
            </div>
            <form
                className="w-2/3 max-[532px]:w-full px-2 md:px-0"
                onSubmit={formik.handleSubmit}
            >
                <div className="mb-5">
                    <label className='text-light font-bold'>Email</label>
                    <Field
                        type="text"
                        placeholder="Enter your email"
                        className="w-full p-3 rounded-lg text-black border-[.2px] border-black"
                        name="email"
                    />
                    {formik.errors.email && formik.touched.email && (
                        <div className="text-red-500">{formik.errors.email}</div>
                    )}
                </div>
                <div className="mb-5">
                    <label className='text-light font-bold'>Password</label>
                    <Field
                        type="password"
                        placeholder="Enter your passwordl"
                        className="w-full p-3 rounded-lg text-black border-[.2px] border-black"
                        name="password"
                    />
                    {formik.errors.password && formik.touched.password && (
                        <div className="text-red-500">{formik.errors.password}</div>
                    )}
                </div>
                <div className='mb-5 flex justify-between items-center max-[320px]:flex-col text-[15px]'>
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
            <div className='flex items-center flex-row justify-center text-[15px] max-[320px]:flex-col font-bold gap-1'>
                <p className='text-para'>Don’t have an account ? </p>
                <button onClick={handleAuth} className='text-link '> Sign up fo free!</button>
            </div>
        </div>
    )
}

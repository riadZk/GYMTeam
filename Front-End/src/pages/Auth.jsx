import React, { useContext, useEffect, useState } from 'react'
import { Login } from '../components/login/Login'
import { Register } from '../components/register/Register'
import { GymContext } from '../context/context'

export const Auth = () => {
    const { auth } = useContext(GymContext);
    
    return (
        <div className='h-screen w-full'>
            <div className='h-sceen w-full login'>
               { auth ? <Login />
                      : <Register />
            }
            </div>
        </div>
    )
}

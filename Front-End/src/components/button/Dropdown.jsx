import React, { useState, useEffect } from 'react'
import axios from "axios";
export const Dropdown = () => {

    const [userInfo, setUserInfo] = useState('');
    const token = localStorage.getItem('authToken');
    const [dropdown, setDropdown] = useState(false);

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };
    const URL = process.env.REACT_APP_URL_BASE;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${URL}/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const user = response.data.data.name;
                setUserInfo(user);
            } catch (error) {
                console.error("You are not Login:");
            }
        };
        fetchData();
    }, []);


    const logout = () => {
        // axios.post(`${}`)
        window.location.reload(true)
        localStorage.removeItem('authToken');
    }

    return (
        <div className="relative">
            <button
                type="button"
                className="inline-flex justify-center items-center p-2 border border-gray-300 shadow-sm rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                onMouseDown={toggleDropdown}
            >
                <i className="ri-user-6-fill"></i>
                <i className="ri-arrow-down-s-line text-xl" ></i>
            </button>
            {dropdown && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <a
                            href="/#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                        >
                            {userInfo}
                        </a>
                        <button
                            onClick={logout}
                            className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                        >
                            logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

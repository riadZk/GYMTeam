import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

export const Button = () => {
    const navigate = useNavigate()

    const RedirectLogin = () => {
        navigate('/auth');
        return window.location.reload();
    }
    return (
        <button onClick={RedirectLogin} className="py-2 px-5 rounded-lg font-[600] bg-link">
            Login
        </button>
    )
}

export const ButtonOpenNav = () => {
    let [open, setopen] = useState(false);

    return (
        <button
            className="md:hidden fixed right-5 cursor-pointer z-50 top-6"
            onClick={() => setopen(!open)}
        >
            {open ? <MdClose color="white" /> : <IoMdMenu color="white" />}
        </button>
    )
} 
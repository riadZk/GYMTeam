import React from 'react'

export const Page = (props) => {
    return (
        <div className="contactPage w-full h-[70vh]">
            <div className="flex justify-center h-full items-center">
                <h2 className="font-[400]  text-4xl">{props.title}</h2>
            </div>
        </div>
    )
}
import { Sling } from 'hamburger-react'
import React, { useState } from 'react';
import { ButtonHeader } from './Btns/Button';

interface NavbarProps {
    items: string[];
}

export function Navbar(props: NavbarProps) {

    const [isOpen, setOpen] = useState(false)

    return (
        <nav className="sm:flex items-center justify-center w-full h-full sm:w-[1200px]">
            <div className="flex justify-between items-center mb-[50px] mx-[48px] sm:mb-0 sm:mx-0 sm:mr-[48px]">
                <div className="w-[50px] h-[50px] bg-slate-50"> </div>
                <button
                    className="
                text-white text-xl leading-none mx-3 my-1 border border-solid border-transparent rounded bg-transparent 
                sm:hidden outline-none focus:outline-none"
                    onClick={isOpen ? () => setOpen(false) : () => setOpen(true)}
                >
                    <Sling size={50} />
                </button>
            </div>
            <div className={"h-full bg-transparent animate-fade-in-down duration-[1.5s] rounded-lg"} >
                <div
                    className={
                        "sm:flex flex justify-center items-center border-white border-[4px] rounded-[5px] sm:border-none" +
                        (isOpen ? " flex" : " hidden")}>
                    <ul className={"sm:space-x-20 space-y-[25px] sm:space-y-0 my-[25px] sm:flex text-white text-[24px] animate-fade-in-down font-bold list-none sm:ml-auto"}>
                        {props.items.map((item, index) => (
                            <li key={index}><a href="">{item}</a></li>
                        ))}

                    </ul>
                </div>
            </div>
            <button className="hidden sm:flex ml-[48px]">
                <ButtonHeader />
            </button>
        </nav >

    );
};


import { Sling } from 'hamburger-react'
import React, { useState } from 'react';
import { ButtonHeader } from './Btns/Button';

interface NavbarProps {
    items: string[];
}

export function Navbar(props: NavbarProps) {

    const [isOpen, setOpen] = useState(false)

    return (
        <nav className="lg:flex items-center justify-center h-full lg:w-full mt-[40px]">
            <div className="flex justify-between items-center lg:mr-[48px]">
                <div className="w-[50px] h-[50px] bg-slate-50"> </div>
                <button
                    className="
                text-white text-xl leading-none mx-3 my-1 border border-solid border-transparent rounded bg-transparent 
                lg:hidden outline-none focus:outline-none"
                    onClick={isOpen ? () => setOpen(false) : () => setOpen(true)}
                >
                    <Sling size={50} />
                </button>
            </div>
            <div className={"h-full bg-transparent animate-fade-in-down duration-[1.5s] rounded-lg my-[48px] lg:my-0"} >
                <div
                    className={
                        "lg:flex flex justify-center items-center border-white border-[4px] rounded-[5px] lg:border-none" +
                        (isOpen ? " flex" : " hidden")}>
                    <ul className={"lg:space-x-20 space-y-[25px] lg:space-y-0 lg:flex my-[30px] lg:my-0 text-white text-[24px] animate-fade-in-down font-bold list-none"}>
                        {props.items.map((item, index) => (
                            <li key={index}><a href="">{item}</a></li>
                        ))}

                    </ul>
                </div>
            </div>
            <button className="hidden lg:flex ml-[48px]">
                <ButtonHeader />
            </button>
        </nav >

    );
};


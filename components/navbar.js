import React from 'react'

export default function Navbar() {
    return (
        <nav className="container mx-auto px-8 xl:px-0 py-10">
            <div className="flex justify-between items-center">
                <a href="#" className="text-white text-2xl font-normal font-primary tracking-tight items-start ">RD</a>
                <ul className="items-end hidden md:block">
                    <li><a href="#"
                           className="text-white transition hover:text-primary text-lg font-medium font-secondary algin-middle">Contact
                        Me</a></li>
                </ul>
                <div onClick={
                    event => {
                        const element = document.getElementById("mobile-nav");

                        element.classList.toggle("hidden")
                    }
                } className="md:hidden">
                    <a href="#" className="relative top-1.5">
                        <svg className="text-white" viewBox="0 0 100 80" width="40" height="40">
                            <rect fill="currentColor" width="80" height="8"/>
                            <rect fill="currentColor" y="20" width="80" height="8"/>
                            <rect fill="currentColor" y="40" width="80" height="8"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div id='mobile-nav' className="text-center hidden">
                <ul className="py-8">
                    <li><a href="#"
                           className="mt-2 text-white transition text-xl font-medium font-secondary">Contact
                        Me</a></li>
                </ul>
            </div>
        </nav>
    )
}
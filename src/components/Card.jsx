import React, { useState } from 'react';
import logo from '../assets/contact-form-icon.svg'


const Card = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (

        <>

        <img src={logo} className="m-4"/>

        <div className="flex flex-col justify-center items-center h-screen">

            <div className="px-6 py-4 w-full sm:w-full md:w-1/2">
                <h2 className="font-bold mb-2 text-center">Interested in our business pricing?</h2>
                <p className="text-center">
                    Fill out the form to view details and we’ll contact you as soon as possible.
                </p>
            </div>


            <div className="flex justify-center items-center ">

                <div className="rounded-card overflow-hidden shadow-lg m-4 w-60vw">

                    <div className="p-8 bg-white bg-opacity-10">
                        <form>

                            <div className="mb-4 flex">
                                <div className="w-1/2 mr-2">
                                    <label className="label block" for="name">Name</label>
                                    <input className="appearance-none rounded-lg w-full py-4 px-3 leading-tight font-bold focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Ethan Johnson" />
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="label block" for="email">Company Email</label>
                                    <input className="appearance-none border rounded-lg w-full py-4 px-3 leading-tight focus:outline-none font-bold focus:shadow-outline" id="email" type="email" placeholder="ethan@johnson.com" />
                                </div>
                            </div>


                            <div className="mb-4 flex">
                                <div className="w-1/2 mr-2">
                                    <label
                                        className="label block"
                                        htmlFor="company-size"
                                    >
                                        Company Size
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="company-size"
                                            name="company-size"
                                            className="label block appearance-none w-full bg-white border-gray-400 font-bold hover:border-gray-500 px-4 py-4 pr-8 rounded-lg leading-tight focus:outline-none focus:shadow-outline"
                                        >
                                            <option>50-100 employees</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg
                                                className="fill-current h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >

                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label
                                        className="label block"
                                        htmlFor="subject"
                                    >
                                        Subject
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="subject"
                                            name="subject"
                                            className="label block appearance-none w-full bg-white hover:border-gray-500 px-4 py-4 pr-8 font-bold rounded-lg leading-tight focus:outline-none focus:shadow-outline"
                                        >
                                            <option>Building Landing pages</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                                            <svg
                                                className="fill-current h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="mb-4 flex flex-col">
                                <label className="label block" for="message">Message</label>
                                <textarea className="h-200 shadow appearance-none border rounded-lg w-full py-4 px-3 font-bold leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="50-100 employees"></textarea>
                            </div>


                            <div className="flex items-center justify-between">
                                <button className="w-full bg-white hover:bg-gray-100 font-bold py-4 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button">Contact Sales</button>
                            </div>
                        </form>
                    </div>
                </div></div></div>
                </>
    );
};

export default Card;
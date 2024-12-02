import { useState } from "react";
import { Link } from "react-router-dom";
export const Header = () => {
    const [userMenu, setUserMenu] = useState('hidden');

    const [bodyModal_01, setBodyModal_01] = useState('hidden');
    const [singIn, setSingIn] = useState('hidden');
    const [singUp, setSingUp] = useState('hidden');
    const closeNav = () => {
        setUserMenu('hidden');
    }
    return (
        <header>
            <nav className="bg-emerald-700 fixed w-full z-20 top-0 start-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={`/`} className="flex items-center space-x-3 rtl:space-x-reverse"
                     onClick={closeNav}
                    >
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Store House</span>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            type="button"
                            className="text-white bg-emerald-900 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-gray-50 font-medium rounded-lg text-sm px-4 py-2 text-center"
                            onClick={() => {
                                setBodyModal_01('block');
                                setSingIn('block')
                            }}
                        >Get started</button>
                        <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-50 rounded-lg md:hidden hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-gray-800"
                            onClick={() => {
                                (userMenu === 'hidden') ? setUserMenu('block') : setUserMenu('hidden')
                            }}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between ${userMenu} w-full md:flex md:w-auto md:order-1" id="navbar-sticky`}>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-emerald-700 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-emerald-700">
                            <li>
                                <Link 
                                to={`/`} 
                                className="block py-2 px-3 text-gray-50 rounded hover:bg-emerald-900 md:hover:bg-transparent md:hover:text-gray-800  md:p-0"
                                onClick={closeNav}
                                >Shoping</Link>
                            </li>
                            <li>
                                <button className="block py-2 px-3 text-gray-50 rounded hover:bg-emerald-900 md:hover:bg-transparent md:hover:text-gray-800 md:p-0">Search ...</button>
                            </li>
                            <li>
                                <Link 
                                to={`basket`} 
                                className="flex py-2  px-3 text-gray-50 rounded hover:bg-emerald-900 md:hover:bg-transparent md:p-0"
                                onClick={closeNav}
                                >
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                                    </svg>
                                    <span>Basket</span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                to={`/contact`} 
                                className="block py-2 px-3 text-gray-50 rounded hover:bg-emerald-900 md:hover:bg-transparent md:hover:text-gray-800  md:p-0"
                                onClick={closeNav}
                                >Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="authentication-modal" className={`${bodyModal_01} flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                {/* sing in */}
                <div className={`${singIn} relative p-4 w-full max-w-md max-h-full`}>
                    <div className="relative bg-emerald-700 rounded-lg shadow">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h3 className="text-xl font-semibold text-gray-50 ">
                                Sign in to our account
                            </h3>
                            <button
                                type="button"
                                className="end-2.5 text-gray-50 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                onClick={() => {
                                    setBodyModal_01('hidden');
                                    setSingIn('hidden')
                                }}
                            >
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 md:p-5">
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="login" className="block mb-2 text-sm font-medium text-gray-50 ">Your login</label>
                                    <input type="text" id="login" className="bg-emerald-700 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="login" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-50 ">Your password</label>
                                    <input type="password" id="password" placeholder="••••••••" className="bg-emerald-700 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
                                        </div>
                                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-50">Remember me</label>
                                    </div>
                                    <Link to={`/`} className="text-sm text-orange-800 hover:underline">Lost Password?</Link>
                                </div>
                                <button type="submit" className="w-full text-white bg-emerald-900 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                                <div className="text-sm font-medium text-gray-50">
                                    Not registered? <button type="button" className="text-orange-800 hover:underline"
                                        onClick={() => {
                                            setSingIn('hidden');
                                            setSingUp('block');
                                        }}
                                    >Create account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* -------- */}
                {/* sing up */}

                <div id="crud-modal" className={`${singUp} flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-emerald-700 rounded-lg shadow">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-50">
                                <h3 className="text-lg font-semibold text-white">
                                    Create New User
                                </h3>
                                <button type="button" className="text-gray-50 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                    onClick={() => {
                                        setBodyModal_01('hidden');
                                        setSingIn('hidden');
                                        setSingUp('hidden');
                                    }}
                                >
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <form className="p-4 md:p-5 bg-emerald-700">
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <label htmlFor="login_reg" className="block mb-2 text-sm font-medium text-gray-50">Login</label>
                                        <input type="text" id="login_reg" className="bg-emerald-700 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="You login" required />
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="name_reg" className="block mb-2 text-sm font-medium text-gray-50">Name</label>
                                        <input type="text" id="name_reg" className="bg-emerald-700 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="You name" required />
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="email_reg" className="block mb-2 text-sm font-medium text-gray-50">Email</label>
                                        <input type="email" id="email_reg" className="bg-emerald-700 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="user@mail.com" required />
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="password_reg" className="block mb-2 text-sm font-medium text-gray-50">Email</label>
                                        <input type="text" id="password_reg" className="bg-emerald-700 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder:text-2xl" placeholder=". . . . . . . . . ." required />
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="age_reg" className="block mb-2 text-sm font-medium text-gray-50">Age</label>
                                        <input type="text" id="age_reg" className="bg-emerald-700 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="You age" required />
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="country_reg" className="block mb-2 text-sm font-medium text-gray-50">Country</label>
                                        <input type="text" id="country_reg" className="bg-emerald-700 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="You country" required />
                                    </div>
                                </div>
                                <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                    Add new user
                                </button>
                                <div className="text-sm font-medium text-gray-50 my-5">
                                    Have an account? <button type="button" className="text-orange-800 hover:underline"
                                        onClick={() => {
                                            setSingIn('block');
                                            setSingUp('hidden');
                                        }}
                                    >Sing in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* --------- */}
            </div>

        </header>
    );
}
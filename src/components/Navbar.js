import React from 'react';
import {Link} from "react-router-dom";
import useModal from "./useModal";
import BtnLogin from "./BtnLogin";
import BtnSignup from "./BtnSignup";
import {connect} from 'react-redux'
import {logout} from '../store/user/userAction'
const Navbar = ({user,logout}) =>{
    return(
        <header>
            <nav className="flex items-center justify-between flex-wrap bg-green-900 p-6 sticky">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">Hetic Live</span>
                </div>
                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link to={"/"}
                           className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
                            Channels
                        </Link>
                    </div>

                    <div>
                        {user.isLogged ? (
                            <a href={'#'} className={"text-white hover:text-gray-200"} onClick={logout}>Deconnexion</a>
                        ) : (
                            <>
                                <BtnLogin />
                                <BtnSignup />
                            </>
                        )}

                    </div>
                </div>
            </nav>
        </header>

    )
}



export default connect(state => {return {user: state} } ,{logout})(Navbar)


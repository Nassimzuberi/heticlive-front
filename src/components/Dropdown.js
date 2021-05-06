import React, {useState} from 'react'
import {connect} from 'react-redux'
import {logout} from '../store/user/userAction'
import {Link} from "react-router-dom";


const Dropdown = ({user,logout}) => {
    const [isShow,toggle] = useState(false)
    const show = isShow ? "" : "hidden"
    return (
        <div className="dropdown inline-block relative" onBlur={() => isShow && toggle(!isShow)}>
            <button className=" text-white font-semibold py-2 px-4 rounded inline-flex items-center" onClick={() => toggle(!isShow)} >
                <span className="mr-1">{user.data.username}</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
            </button>
            <ul className={"dropdown-menu absolute text-gray-700 pt-1 "+ show} >
                <li className=""><Link to={"/"} onMouseDown={(e) => {e.preventDefault()}} onClick={() => toggle(!isShow)}
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#">Mon compte</Link></li>
                <li className="">
                    <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                    href="#">Mes channels</a></li>
                <li className="">
                    <a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#" onClick={logout} onMouseDown={(e) => e.preventDefault()}>Deconnexion</a>
                </li>
            </ul>
        </div>
    )
}

export default connect(state => {return {user: state} } ,{logout})(Dropdown)
import React from 'react'
import Modale from "./Modale";
import Signup from "./Signup";
import useModal from "./useModal";

const BtnSignup = () => {
    const { isShowing, toggle } = useModal();

    return (
        <>
            <a href="#" onClick={toggle}
               className="inline-block text-sm mx-3 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Inscription</a>
            <Modale isShowing={isShowing} hide={toggle} > <Signup /> </Modale>
        </>

    )
}

export default BtnSignup
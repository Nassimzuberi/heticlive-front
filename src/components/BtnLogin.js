import React from 'react'
import Modale from "./Modale";
import Login from "./Login";
import useModal from "./useModal";

const BtnLogin = () => {
    const { isShowing, toggle } = useModal();

    return (
        <>
            <a href="#" onClick={toggle}
               className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Connexion</a>
            <Modale isShowing={isShowing} hide={toggle} > <Login /> </Modale>
        </>

    )
}

export default BtnLogin
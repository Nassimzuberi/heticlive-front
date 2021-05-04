import React from 'react'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className={"px-10"}>
                <h2 className={"text-2xl text-center py-4"}>inscription</h2>
                <form action="" method={"post"}>
                    <input type="text" placeholder={"Pseudo"} className={"block w-full p-2 my-4 border-gray-300 border"}/>
                    <input type="text" placeholder={"Mot de passe"} className={"block w-full p-2 border-gray-300 border"}/>
                    <input type="text" placeholder={"Confirmez le mot de passe"} className={"block w-full p-2 border-gray-300 border"}/>
                    <button type={"submit"} className={"block mx-auto px-5 py-2 my-3 bg-white border-black border rounded-md hover:text-green-500"}> S'inscrire</button>
                </form>
            </div>

        )
    }
}
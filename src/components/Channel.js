import React from "react"

export default class Channel extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <section>
                <div className={"flex h-screen"}>
                    <div className="w-4/5 h-full">
                        <div className="h-3/4 bg-gray-300 w-full"></div>
                        <div className="p-5">
                            <h2 className={"text-2xl font-bold"}>Nom du channel</h2>
                            <p className={"text-red-500 flex items-center"}><span className={"block w-2 h-2 rounded bg-red-500 animate-ping mx-2"}></span> En direct</p>
                        </div>
                    </div>
                    <div className="w-1/5 h-4/5 border relative overscroll-contain">
                        <div className={"p-3"}>
                            <p className="font-bold">Natayoshi</p>
                            <p>Salut tu vas bien ?</p>
                        </div>
                        <div className={"text-right bg-gray-300 p-3"}>
                            <p className="text-xl font-bold">Natayoshi</p>
                            <p>Cava et toi ?</p>
                        </div>
                        <div className="absolute bottom-0 inset-x-0 p-3 text-center border-gray-400 border-t border-b flex">
                            <input type="text" className={"border-black border-b  py-1 w-full transition-all duration-200 focus:outline-none focus:border-green-500"} placeholder={"Entrez votre message"}/>
                            <button type={"submit"} className={"mx-3 border-black bg-green-500 py-1 px-3 rounded-md text-white  hover:text-gray-200 "}>Envoyer</button>
                        </div>
                    </div>
                </div>
            </section>

        )
}
}
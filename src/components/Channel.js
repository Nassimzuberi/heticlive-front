import React from "react"
import axios from "axios";
import socketIOClient from "socket.io-client"
import {connect} from "react-redux";

const ENDPOINT = "http://localhost:3001"

let socket
class Channel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channel : null,
            messages: [],
            newMessage: "",
            loading: true,
            error: false
        }
        socket = socketIOClient(ENDPOINT, {
            query: {roomId: this.props.match.params.id}
        })

    }
    componentDidMount() {
        const {id} = this.props.match.params
        axios.get("http://localhost:3001/channels/" + id )
            .then( res => {

                const {data} = res

                this.setState({channel: data,loading:false})
            })
        socket.on("message", message => {
            this.setState({messages: [...this.state.messages,message]})
        })
    }


    SendMessage(message) {
        const {user} = this.props
        if(user.isLogged){
            socket.emit("message",{
                username:this.props.user.data.username,
                body:message
            })
        }
        this.setState({newMessage: ""})
    }

    NewMessageChange(e){
        this.setState({newMessage: e.target.value})
    }
    render(){
        const {loading,channel} = this.state
        return (
            <>
                {loading ? "" : (
                    <section>
                        <div className={"flex h-screen"}>
                            <div className="w-4/5 h-full">
                                <div className={"h-3/4 bg-gray-300 w-full"}></div>
                                <div className="p-5">
                                    <h2 className={"text-2xl font-bold"}>{this.state.channel.name}</h2>

                                    {channel.state == true ? (
                                        <p className={"text-red-500 flex items-center"}>
                                            <span className={"block w-2 h-2 rounded bg-red-500 animate-ping mx-2"}></span>
                                            En direct</p>
                                    ): (
                                        <p className={"text-gray-500 flex items-center"}>
                                            <span className={"block w-2 h-2 rounded bg-gray-500 mx-2"}></span>
                                            Hors ligne</p>
                                    )}
                                </div>
                            </div>
                            <div className="w-1/5 h-4/5 border relative overscroll-contain">
                                {this.state.messages.map((t,i)=> (
                                    <div key={i} className={"p-3"}>
                                        <p className="font-bold">{t.username}</p>
                                        <p>{t.body}</p>
                                    </div>
                                ))}
                                <form className="absolute bottom-0 inset-x-0 p-3 text-center border-gray-400 border-t border-b flex" onSubmit={(e) => {
                                    this.SendMessage(this.state.newMessage);
                                    e.preventDefault();}}>
                                    <input type="text" className={"border-black border-b  py-1 w-full transition-all duration-200 focus:outline-none focus:border-green-500"} placeholder={"Entrez votre message"}
                                           value={this.state.newMessage} onChange={(e) => this.NewMessageChange(e)}
                                    />
                                    <button type={"submit"} className={"mx-3 border-black bg-green-500 py-1 px-3 rounded-md text-white  hover:text-gray-200 "}>Envoyer</button>
                                </form>
                            </div>
                        </div>
                    </section>
                )}
            </>
        )
}
}

export default connect(state => { return { user: state}})(Channel)
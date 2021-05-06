import React from "react"
import axios from "axios";
import socketIOClient from "socket.io-client"
import {connect} from "react-redux";
import VideoPlayer from "./VideoPlayer";

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

    isMyMessage(username){
        if(username === this.props.user.data.username){
            return true;
        }
        return false
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
                        <div className={"w-full h-screen"}>
                            <div className="flex h-4/5 items-center">
                                <div className="w-4/6 ">
                                    <VideoPlayer channel={channel} />
                                </div>
                                <div className="w-2/6 h-full relative overscroll-contain">
                                    <div className="bg-gray-700 p-3 ">
                                        <h4 className={"text-center font-medium text-lg py-2 uppercase text-white "}>Chat du stream</h4>
                                    </div>
                                    {this.state.messages.map((t,i)=> (
                                        <div key={i} className={"px-2 pt-2"}>
                                            <p ><span className={this.isMyMessage(t.username)? "text-red-500 font-bold" : "font-bold"}>{t.username}</span>: {t.body}</p>

                                        </div>
                                    ))}
                                    <form className="absolute bottom-0 inset-x-0 p-3 text-center bg-gray-700 border-t border-b flex" onSubmit={(e) => {
                                        this.SendMessage(this.state.newMessage);
                                        e.preventDefault();}}>
                                        <input type="text" className={"bg-gray-400 placeholder-white py-1 px-2 w-full rounded-md transition-all duration-200 focus:outline-none focus:border-green-500"} placeholder={"Entrez votre message"}
                                               value={this.state.newMessage} onChange={(e) => this.NewMessageChange(e)}
                                        />
                                    </form>
                                </div>
                            </div>

                        </div>
                    </section>
                )}
            </>
        )
}
}

export default connect(state => { return { user: state}})(Channel)
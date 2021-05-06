import React from 'react'
import {connect} from "react-redux";
import axios from "axios";

class CreateChannel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    handleName(e){
        this.setState({name: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        const data = {
            name: this.state.name,
            user: this.props.user.data._id
        }
        const config = {
            headers:{
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        }
        axios.post('http://localhost:3001/channels',data,config)
            .then(res => this.setState({name: ""}))
    }
    render() {
        return (
            <div>
                <p>Vous voulez créer un nouveau channel ?</p>
                <form action="" onSubmit={e => this.handleSubmit(e)}>
                    <input type="text" placeholder={"Nom de channel"} className={"border border-gray-300 p-2 "} value={this.state.name} onChange={e => this.handleName(e)}/>
                    <button type={"submit"} className={"bg-green-600 p-2 text-white"}>Créer</button>
                </form>
            </div>
        )
    }
}

export default connect(state => {return {user : state}})(CreateChannel)
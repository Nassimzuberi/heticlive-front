import React from 'react'
import axios from "axios";
import {connect} from "react-redux";
import {Link,Redirect} from "react-router-dom";
import CreateChannel from "./CreateChannel";


class MyChannels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [],
            loading: true,
            error : false
        }
    }

    componentDidMount() {
            axios.get('http://localhost:3001/users/' + this.props.user.data._id + "/channels")
                .then(res => this.setState({
                    loading:false,
                    channels: res.data
                }))
        }


    render() {
        return (
            <div className={"p-10"}>
                <ul>
                    {this.state.channels.map( t => (
                        <li className={"p-3 bg-gray-200 border-md"}>
                            <Link to={"/channels/" + t._id} className={"text-2xl hover:text-red-500"} >{t.name}</Link>
                            <div>Clé de stream : {t.stream_key}</div>
                        </li>
                        )
                    )}
                </ul>
                <CreateChannel />
            </div>
        )
    }

}

export default connect(state => { return { user : state}})(MyChannels)
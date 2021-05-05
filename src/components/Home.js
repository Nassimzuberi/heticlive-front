import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [1,2,3],
            loading: true
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3001/channels")
            .then(res => {
                const channels = res.data;
                this.setState({channels,loading:false})
            })
    }

    render() {
        return (
            <div className="grid grid-cols-6 gap-x-2">
                {this.state.loading ? (
                    <div  className={"animate-pulse p-5"}>
                        <div className="w-full h-52 bg-gray-400 mb-2"></div>
                        <p className={"w-full h-4 bg-gray-400"}></p>
                    </div>
                ) : ""}
                {this.state.channels.map( (c,i) => (
                        <Link key={i} to={"/channels/" + c._id} className={" p-5"}>
                            <div className="w-full h-52 bg-gray-400 relative">
                                {c.state ? <span className="absolute block w-3 h-3 bg-red-500 rounded top-2 right-2 animate-pulse"></span> : ""}
                            </div>
                            <p>{c.name}</p>
                        </Link>
                    )
                )}
            </div>
        )
    }
}
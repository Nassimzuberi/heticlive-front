import React from 'react'
import axios from "axios";
import {connect} from 'react-redux'
import {login} from '../store/user/userAction'
import {url} from '../config'

 class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loading: false,
            error: "",
        }
    }

    resetError(){
        this.setState({error : ""})
    }
    resetForm(){
        this.setState({
            username: "",
            password: "",
            error: ""
        })
    }
    resetPassword(){
        this.setState({
            password: "",
        })
    }
    handleUsername(e){
        this.setState({username: e.target.value})
    }
    handlePassword(e){
        this.setState({password: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();

        const config = {
            headers:{
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        }
        const data = {
            username: this.state.username,
            password: this.state.password,
        }
        axios.post(url + '/users/login',data,config)
            .then(res => {
                this.props.login(res.data.data, res.data.token)
                this.resetForm()
            })
            .catch(err => {
                const error = err.response.data.error
                this.setState({error})
                this.resetPassword()
            })
    }
    render(){
        return (
            <div className={"px-10"}>
                <h2 className={"text-2xl text-center py-4"}>Connexion</h2>
                <p className={"text-center text-red-500"}>{this.state.error}</p>
                <form action="" onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" name={"username"} placeholder={"Pseudo"} className={"block w-full p-2 my-2 border-gray-300 border"} value={this.state.username} onChange={(e) => this.handleUsername(e)}/>
                    <input type="password" name={"password"} placeholder={"Mot de passe"} className={"block w-full p-2 my-2 border-gray-300 border"} value={this.state.password} onChange={(e) => this.handlePassword(e)}/>
                    <button type={"submit"} className={"block mx-auto px-5 py-2 my-3 bg-white border-black border rounded-md hover:text-green-500"}> Se connecter</button>
                </form>
            </div>

        )
    }
}

export default connect(state => {return {user: state}},{login})(Login)
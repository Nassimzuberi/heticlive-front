import React from 'react'
import axios from "axios";
import {url} from '../config'


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
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
            confirmPassword: "",
            error: ""
        })
    }
    resetPassword(){
        this.setState({
            password: "",
            confirmPassword: ""
        })
    }
    handleUsername(e){
        this.setState({username: e.target.value})
    }
    handlePassword(e){
        this.setState({password: e.target.value})
    }
    handleConfirmPassword(e){
        this.setState({confirmPassword: e.target.value})
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
            confirmPassword: this.state.confirmPassword,
        }
        axios.post(url + '/users',data,config)
            .then(res => {
                this.resetForm()
                console.log(res)
            })
            .catch(err => {
                const error = err.response.data.error
                this.setState({error: error})
                this.resetPassword()
            })
    }
    render(){
        return (
            <div className={"px-10"}>
                <h2 className={"text-2xl text-center py-4"}>Inscription</h2>
                <p className={"text-center text-red-500"}>{this.state.error}</p>
                <form action="" onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" name={"username"} placeholder={"Pseudo"} className={"block w-full p-2 my-2 border-gray-300 border"} value={this.state.username} onChange={(e) => this.handleUsername(e)}/>
                    <input type="password" name={"password"} placeholder={"Mot de passe"} className={"block w-full p-2 my-2 border-gray-300 border"} value={this.state.password} onChange={(e) => this.handlePassword(e)}/>
                    <input type="password" placeholder={"Confirmez le mot de passe"} className={"block w-full my-2 p-2 border-gray-300 border"} value={this.state.confirmPassword} onChange={(e) => this.handleConfirmPassword(e)}/>
                    <button type={"submit"} className={"block mx-auto px-5 py-2 my-3 bg-white border-black border rounded-md hover:text-green-500"}> S'inscrire</button>
                </form>
            </div>

        )
    }
}
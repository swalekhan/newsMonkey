import { Component } from "react";
import Loading from './Loading.gif'


 class Spiner extends Component{
    render(){
        return (
            <div className="text-center">
                <img src={Loading} alt="loading"></img>
            </div>
        )
    }
}

export default Spiner;
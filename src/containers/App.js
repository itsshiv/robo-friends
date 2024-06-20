import React, { Component } from "react";
import Cardlist from "../componets/Cardlist";
// import { robots } from "./robots";
import Searchbox from "../componets/Searchbox";
import './App.css';
import Scroll from '../componets/Scroll'
//import error from '../componets/error';


class App extends Component{
    constructor()
    {
        super();
        this.state={
            robots: [],
            searchfield: ''

        }
    }
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json()})
        .then(users =>{
        this.setState({robots:users});
    })
    }

    onSearchChange = (event) =>{
       
        this.setState({searchfield: event.target.value})
        }
    

    render(){

        const filter=this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length===0){
            return <h1>loading</h1>
        }
        else{
        return(
            <div className="tc">
                <h1 className='f1'>ROBOFRIENDS</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                <error>   
                    <Cardlist robots={filter}/>
                </error>
                </Scroll>
            </div>
        );

            }
     }
}

export default App;
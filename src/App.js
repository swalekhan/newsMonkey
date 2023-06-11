
import './App.css';
import React, {Component} from 'react';
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component{
  pageSize = 9
  render(){
    return (
      <div>
        <Router>
        <Navbar/>
        {/* <News key= "gernal" page ={this.pageSize} country ="in" category="general"/> */}
        <Routes>
        <Route exact path="/" element={<News key= "gernal" page ={this.pageSize} country ="in" category="general"/>} />
        <Route exact path="/entertainment" element={<News key= "entertainment" page ={this.pageSize} country ="in" category="entertainment"/>} />
        <Route exact path="/Science" element={<News key= "Science" page ={this.pageSize} country ="in" category="Science"/>} />
        <Route exact path="/Sports" element={<News key= "sports"  page ={this.pageSize} country ="in" category="sports"/>} />
        <Route exact path="/bussiness" element={<News key= "bussiness" page ={this.pageSize} country ="us" category="bussiness"/>} />
        <Route exact path="/health" element={<News key= "health" page ={this.pageSize} country ="in" category="health"/>} />
        <Route exact path="/technology" element={<News key= "technology" page ={this.pageSize} country ="in" category="technology"/>} />
      </Routes>
        </Router>
      </div>
    )
  }
}



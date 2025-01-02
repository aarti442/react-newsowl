import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";;
export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API_KEY
  state = {
    progress: 0
  };
  setProgress = (progress) => {
    this.setState({ progress });
    console.log(process.env.REACT_APP_NEWS_API_KEY)
  };
  render() {
    return (
      <Router>
         <LoadingBar
        color="#f11946"
        progress={this.state.progress}
        onLoaderFinished={() => this.setState({ progress : 0 })}
        
      />
        <Navbar/>
        <Routes>
          <Route
            path="/"
            element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize= "12" category="business"/>}
          />
        <Route key="sports" path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize= "12" category="sports"/>} />
        <Route key="technology" path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize= "12" category="technology"/>} />
        <Route key="health" path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize= "12" category="health"/>} />
      </Routes>
 
    </Router>

    )
  }
}

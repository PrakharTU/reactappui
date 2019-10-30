import React from 'react';
import '../App.css';
import MLToolLogo from './img/mltoolicon.png';

class Homepage extends React.Component{
  render(){
    return (
        <div className="page" id="homepage">
            <div className="content">
                <img src={MLToolLogo} style={{width:"40vw",filter: "brightness(0) invert(1)"}}alt=""/>
            </div>  
        </div>
    );
  }
}

export default Homepage;

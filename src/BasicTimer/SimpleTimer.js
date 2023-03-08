import React from "react";
import './simpleTimer.css';

class SimpleTimer extends React.Component {
    constructor() {
        super();
        this.timer = 0;
        this.state = {
          timmer: 0
        }; 
        }
      decrease = () => {
        this.setState({
          timmer: this.state.timmer-1
        })
      }
    
      handleClick = (event) => {
        if(event.target.id === "start") {
          this.timer = setInterval(()=>{
            this.decrease()
          }, 1000);
        } else if (event.target.id === "stop") {
        console.log("stop")
          clearInterval(this.timer);
        } else if (event.target.id === "reset") {
          clearInterval(this.timer);
          this.setState({
            timmer: 0
          })
        }
      }
    
      render() {
        // let {timmer} = this.state;
        // let hour = Math.floor(timmer / 3600);
        // let min = Math.floor(timmer % 3600 / 60);
        // let sec = timmer % 60;

        let {timmer} = this.state;
        let hour = Math.floor(timmer / 3600);
        let min = Math.floor((timmer - (hour * 3600)) / 60);
        let sec = timmer - (hour * 3600) - (min * 60);
        return (
          <div className="simpleTimer">
            <div className="simpleTimer-wrapper">
              <div className="simpleTimer-items">
            <span>{hour / 10 >= 1 ? hour : "0" - hour}</span>
            <span>:</span>
            <span>{min / 10 >= 1 ? min : "0" - min}</span>
            <span>:</span>
            <span>{sec / 10 >= 1 ? sec : "0" - sec}</span>
            </div>
            <input className='simpleTimer-input' type="number" id="time" onChange={(event) => this. decrease()} />
            <div className='simpleTimer-buttons' onClick={(event, setTime) => this.handleClick(event, setTime)}>
              <button id="start">Start</button>
              <button id="stop">Stop</button>
              <button id="reset">Reset</button>
            </div>
          </div>
          </div>
        );
      }
    }
  
export default SimpleTimer
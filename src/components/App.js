import React, {Component} from 'react';
import './App.css';

import Title from './title/title'
import Countdown from './Countdown/countdown';

import Controller from './Controller/Controller'



class App  extends Component {


  constructor (props) {
    super (props) 
    this.state = {
      time: {
        min: 0,
        sec: 0,
        mili: 0
      }
    }

  }
  render () {
    return (
      <div className="App">
        <div className = "container py-5">
          <div className = "row">
            <div className = "col-sm-8 offset-sm-2">
              <Title />
              <Countdown time = { this.state.time }/>
              <Controller />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;

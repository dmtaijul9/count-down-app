import React, { Component } from 'react'


class Controller extends Component {
     constructor (props) {
         super (props)

         this.state = {
             start: true,
             pause: false,
             lap: false, 
             reset: false
         }
     }


     getController () {
         let output = null;

         if (this.state.start && !this.state.reset) {
             output = (
                 <div>
                     <button  className ="btn btn-success btn-lg px-5 ">Start</button>
                 </div>
             )
         }

         return output;
     }


     render () {
         return this.getController()
     }
}

export default Controller
import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'hello'

        }
        // this.clickHandler = this.clickHandler.bind(this)
    }
//    clickHandler() {
//          this.setState({
//             message: 'good Bye'
//         })
//         console.log(this)
//     }
      clickHandler = () =>{
          this.setState({
              message: 'Good Bye'
          })
      }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click me!</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click me!</button>  */}
                <button onClick={this.clickHandler}>Click me!</button>
            </div>
        )
    }
}

export default EventBind

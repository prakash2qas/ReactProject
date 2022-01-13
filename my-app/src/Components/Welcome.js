import React, { Component } from "react";

class Welcome extends Component {
    render() {
        const {name, age} = this.props
        return (
            <div>
        <h1>Welcome {name} aged
            {age} </h1>
         {this.props.children}
            </div>
        )
    }

}
export default Welcome;
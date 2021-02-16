import React from 'react'

class MyButton extends React.Component {
    render() {
        console.log(this.props)
        return <button onClick={this.props.addClick}>Klicka mig</button>
    }
}

export default MyButton;
import logo from './logo.svg';
import './App.css';
import React from 'react'
import MyButton from './components/MyButton';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {clicks: 0}
  }

  addClick = () => {
    this.setState({clicks: this.state.clicks + 1})
  }

  render() {
    console.log('Render')
    const pTags = []

    for(let i = 0; i < this.state.clicks; i++) {
      pTags.push(<p key={i}>Någon klickde!</p>)
    }
    return (
      <div className="App">
        <header className="App-header">
          <MyButton addClick={this.addClick} name="Linus"></MyButton>
          {pTags.map((tag) => { return tag })}
        </header>
      </div>
    );
  }
}

export default App;

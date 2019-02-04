import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      id: '',
      name: '',
      answers: {
        q1: '',
        q2: '',
        q3: ''
      },
      submitted: false
    }
  }

  handleNameSubmit = (e) => {
    let name = this.refs.name.value;
    this.setState({
      name: name
    })
    e.preventDefault();
  }
  handleQuestionSubmit = (e) => {

  }
  handleQuestionChange = (e) => {
    const {name, value} = e.target;
    let answers = this.state.answers;
    if(name ==='q1') {
      answers.q1 = value;
    } else if(name ==='q2') {
      answers.q2 = value;
    } else if(name ==='q3') {
      answers.q3 = value;
    }
    this.setState({
      answers: answers
    }, () => console.log(this.state))
  }

  render() {
    let user;
    let questions;
    if(this.state.name && this.state.submitted === false) {
      user = <h2>Welcome {this.state.name}</h2>
      questions = <span>
        <h3>Survey questions</h3>
        <form onSubmit={this.handleQuestionSubmit}>
          <div>
            <label>What is your favorite operating system?</label><br />
            <input type="radio" name="q1" value="Linux" onChange={this.handleQuestionChange} />Linux<br />
            <input type="radio" name="q2" value="Windows" onChange={this.handleQuestionChange} />Windows<br />
            <input type="radio" name="q3" value="OSX" onChange={this.handleQuestionChange} />OSX<br />
            
           
          </div>
        </form>
      </span>
    } else if(!this.state.name && this.state.submitted === false) {
      user = <span>
        <h2>Please enter your name to begin survey</h2>
        <form onSubmit={this.handleNameSubmit}>
          <input type="text" placeholder="enter name..." ref="name" />
        </form>
      </span>;
      questions = '';
    } else if(this.state.submitted === true) {

    }

    return (
      <div className="App ">
        <div className="App-header text-center">
          <h2>Survey app</h2>
        </div>
        <div className="text-center">
          {user}
        </div>
        <div className="container">
          {questions}
        </div>
      </div>
    );
  }
}

export default App;

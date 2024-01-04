// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    stringInput: '',
  }

  onChangeStringInput = event => {
    this.setState({
      stringInput: event.target.value,
    })
  }

  render() {
    const {stringInput} = this.state
    const stringLength = stringInput.length
    return (
      <div className="app-container">
        <div>
          <h1 className="title">Calculate the Letters you enter</h1>
          <label htmlFor="Inputstring" className="label-el">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            onChange={this.onChangeStringInput}
            value={stringInput}
            id="Inputstring"
            className="input-el"
            placeholder="Enter the phrase"
          />
          <p className="para">No.of letters: {stringLength}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator

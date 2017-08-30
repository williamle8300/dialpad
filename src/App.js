import PublicPath from './public-path'

import Key from './Key'


import React from 'react';
import createReactClass from 'create-react-class'
import styled, {keyframes} from 'styled-components'


module.exports = createReactClass({
  getInitialState: function () {
    return {
      input: [],
      isPasswordValid: null,
      isDisabled: false,
    }
  },
  render: function () {

    const App = styled.div `
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${this._computeBorderColor()};
      background-size: 400% 100%;
    `
    const MobileScreen = styled.div`
      position: relative;
      width: 375px;
      height: 667px;
      background-color: #252525;
      opacity: 0.9;
      border-radius: 10px;
      border: 18px solid #313b36;
    `
    const Main = styled.div`
      position: relative;
      height: ${(100 * (2/3)) - 5}%;
      color: white;
    `
    const Logo = styled.div`
      position: relative;
      top: 13%;
      margin: 0 auto;
      width: 50%;
      height: 50%;
      background: url(${PublicPath}/images/logo.png) no-repeat center center, radial-gradient(#4f6b5b, #224631, #252525, #252525);
      background-size: contain;
    `
    const Pass = styled.div`
      position: absolute;
      bottom: 5%;
      display: flex;
      padding: 0 15% 3%;
      width: 70%;
      height: 12%
    `
    const PassBox = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 7%;
      width: 21%;
      height: 100%;
      margin: 0 2%;
      text-align: center;
      line-height: 1rem;
      font-size: 3rem;
      color: #24ce6e;
      text-shadow: 0px 0px 15px #24ce6e;
      box-shadow: inset 0 0 13px #555;
      background-color: #28352f;
      box-shadow: inset 0 0 24px #2f483c;
    `
    const Dialpad = styled.div`
      position: absolute;
      bottom: 1.5%;
      display: flex;
      flex-wrap: wrap;
      padding: 5%;
      width: 90%;
      height: 30%;
    `

    return (
      <App>
        <audio id="keypress-audio" src={`${PublicPath}/sounds/keypress.mp3`}/>
        <audio id="correct-pass-audio" src={`${PublicPath}/sounds/correct-pass.mp3`}/>
        <audio id="wrong-pass-audio" src={`${PublicPath}/sounds/wrong-pass.mp3`}/>
        <audio id="delete-audio" src={`${PublicPath}/sounds/delete.mp3`}/>
        <audio id="clear-audio" src={`${PublicPath}/sounds/clear.mp3`}/>
        <MobileScreen>
          <Main>
            <Logo/>
            <Pass>
              <PassBox>{this.state.input[0] ? '•' : ''}</PassBox>
              <PassBox>{this.state.input[1] ? '•' : ''}</PassBox>
              <PassBox>{this.state.input[2] ? '•' : ''}</PassBox>
              <PassBox>{this.state.input[3] ? '•' : ''}</PassBox>
            </Pass>
          </Main>
          <Dialpad>
            <Key isDisabled={this.state.isDisabled} handleTap={this.handleInput.bind(null, '1')}>1</Key>
            <Key isDisabled={this.state.isDisabled} handleTap={this.handleInput.bind(null, '2')}>2</Key>
            <Key isDisabled={this.state.isDisabled} handleTap={this.handleInput.bind(null, '3')}>3</Key>
            <Key isDisabled={this.state.isDisabled} handleTap={this.handleInput.bind(null, '4')}>4</Key>
            <Key isDisabled={this.state.isDisabled} handleTap={this.handleInput.bind(null, '5')}>5</Key>
            <Key isDisabled={this.state.isDisabled} handleTap={this.handleInput.bind(null, '6')}>6</Key>
            <Key isDisabled={this.state.isDisabled} handleTap={this.handleInput.bind(null, '7')}>7</Key>
            <Key isDisabled={this.state.isDisabled} handleTap={this.handleInput.bind(null, '8')}>8</Key>
            <Key isDisabled={this.state.isDisabled} handleTap={this.handleInput.bind(null, '9')}>9</Key>
            <Key isDisabled={this.state.isDisabled} handleTap={this.deleteInput}><span className="fa fa-long-arrow-left"></span></Key>
            <Key isDisabled={this.state.isDisabled} handleTap={this.handleInput.bind(null, '0')}>0</Key>
            <Key isDisabled={this.state.isDisabled} handleTap={this.clearInput}>__</Key>
          </Dialpad>
        </MobileScreen>
      </App>
    )
  },
  componentDidMount: function () {
  },
  handleInput: function (value) {

    this.setState({
      input: this.state.input.length !== 4 ? this.state.input.concat(value) : [value]
    }, () => {

      document.getElementById('keypress-audio').play()

      if (this.state.input.length === 4) {

        this.setState({isDisabled: true}, () => {

          if (this._checkValidity(this.state.input)) {

            this.setState({isPasswordValid: true}, () => document.getElementById('correct-pass-audio').play())

            setTimeout(() => this.setState({isPasswordValid: null, isDisabled: false, input: []}), 2000)
          }

          if (!this._checkValidity(this.state.input)) {

            this.setState({isPasswordValid: false}, () => document.getElementById('wrong-pass-audio').play())

            setTimeout(() => this.setState({isPasswordValid: null, isDisabled: false, input: []}), 2000)
          }
        })
      }
    })
  },
  deleteInput: function () {

    this.setState({
      input: this.state.input.slice(0, -1)
    }, () => document.getElementById('delete-audio').play())
  },
  clearInput: function () {

    this.setState({input: []}, () => document.getElementById('clear-audio').play())
  },
  _validPassword: [1, 9, 7, 3],
  _checkValidity: function (input) {
    return input.join() === this._validPassword.join()
  },
  _computeBorderColor: function () {

    if (this.state.isPasswordValid === null) return '#7d7d7d'
    if (this.state.isPasswordValid === true) return '#31f59a'
    if (this.state.isPasswordValid === false) return '#b04659'
  }
})

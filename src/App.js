import Key from './Key'

// import Color from 'color'
import React from 'react';
import createReactClass from 'create-react-class'
import styled, {keyframes} from 'styled-components'
// import PropTypes from 'prop-types'


const animateBgColor = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`;
const App = styled.div `
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #aac1b4;
  ${''/* background: linear-gradient(270deg, #062920, #1a6555, #065040);
  background-size: 400% 100%;
  animation: ${animateBgColor} 80s ease infinite; */}
`


module.exports = createReactClass({
  getInitialState: function () {
    return {
      input: [],
    }
  },
  render: function () {

    const MobileScreen = styled.div`
      position: relative;
      width: 375px;
      height: 667px;
      background-color: #252525;
      opacity: 0.95;
      border-radius: 10px;
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
      background: url(./images/logo.png) no-repeat center center, radial-gradient(#4f6b5b, #224631, #252525, #252525);
      background-size: contain;
    `
    const Pass = styled.div`
      position: absolute;
      bottom: 5%;
      display: flex;
      padding: 0 15% 5%;
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
      ${''/* box-shadow: inset 0 0 13px #555; */}
      background-color: #404040;
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
            <Key handleTap={this.handleInput.bind(null, '1')}>1</Key>
            <Key handleTap={this.handleInput.bind(null, '2')}>2</Key>
            <Key handleTap={this.handleInput.bind(null, '3')}>3</Key>
            <Key handleTap={this.handleInput.bind(null, '4')}>4</Key>
            <Key handleTap={this.handleInput.bind(null, '5')}>5</Key>
            <Key handleTap={this.handleInput.bind(null, '6')}>6</Key>
            <Key handleTap={this.handleInput.bind(null, '7')}>7</Key>
            <Key handleTap={this.handleInput.bind(null, '8')}>8</Key>
            <Key handleTap={this.handleInput.bind(null, '9')}>9</Key>
            <Key handleTap={this.deleteInput}><span className="fa fa-chevron-circle-left"></span></Key>
            <Key handleTap={this.handleInput.bind(null, '0')}>0</Key>
            <Key handleTap={this.resetInput}><span className="fa fa-times-circle"></span></Key>
          </Dialpad>
        </MobileScreen>
      </App>
    )
  },
  handleInput: function (value) {

    this.setState({
      input: this.state.input.length !== 4 ? this.state.input.concat(value) : [value]
    })
  },
  deleteInput: function () {

    this.setState({
      input: this.state.input.slice(0, -1)
    })
  },
  resetInput: function () {

    this.setState({input: []})
  }
})

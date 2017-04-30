import Color from 'color'
import React from 'react';
import createReactClass from 'create-react-class'
import Styled from 'styled-components'
import PropTypes from 'prop-types'


const App = Styled.div `
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('https://images.unsplash.com/photo-1491227289289-742c2e7289a7?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=') no-repeat;
  background-size: cover;
  background-position: center center;
`


module.exports = createReactClass({
  propTypes: {
    // borderWidth: PropTypes.number,
    // onClick: PropTypes.func,
  },
  getDefaultProps: function () {
    return {
      // borderWidth: 3,
      children: 'Signup',
      onClick: function () {
        console.log('clicked.')
      }
    }
  },
  getInitialState: function () {
    return {
      input: [],
    }
  },
  render: function () {

    const MobileScreen = Styled.div`
      position: relative;
      width: 375px;
      height: 667px;
      background-color: #333;
      opacity: 0.95;
    `
    const Main = Styled.div`
      position: relative;
      height: ${(100 * (2/3)) - 5}%;
      color: white;
    `
    const Pass = Styled.div`
      position: absolute;
      bottom: 0;
      display: flex;
      padding: 0 15% 5%;
      width: 70%;
      height: 12%
    `
    const PassBox = Styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 7%;
      width: 21%
      height: 100%;
      margin: 0 2%;
      text-align: center;
      line-height: 1rem;
      font-size: 1rem;
      color: #ccc;
      text-shadow: 0px 0px 15px #aaa;
      background-color: #444;
    `
    const Dialpad = Styled.div`
      position: absolute;
      bottom: 0;
      display: flex;
      flex-wrap: wrap;
      padding: 5%;
      width: 90%;
      height: ${100/3}%;
    `
    const Key = Styled.button`
      margin: 1%;
      width: ${100/3 - 2}%;
      background-color: #555;
      color: #ccc;
      border: none
      border-radius: 2px;
      cursor: pointer;
      outline-style: none;
      &:active {
        color: white;
        background-color: rgb(68, 141, 155);
      }
    `

    return (
      <App>
        <MobileScreen>
          <Main>
            <Pass>
              <PassBox>{this.state.input[0] || ' '}</PassBox>
              <PassBox>{this.state.input[1] || ' '}</PassBox>
              <PassBox>{this.state.input[2] || ' '}</PassBox>
              <PassBox>{this.state.input[3] || ' '}</PassBox>
            </Pass>
          </Main>
          <Dialpad>
            <Key onClick={this.handleInput.bind(this, '1')}>1</Key>
            <Key onClick={this.handleInput.bind(this, '2')}>2</Key>
            <Key onClick={this.handleInput.bind(this, '3')}>3</Key>

            <Key onClick={this.handleInput.bind(this, '4')}>4</Key>
            <Key onClick={this.handleInput.bind(this, '5')}>5</Key>
            <Key onClick={this.handleInput.bind(this, '6')}>6</Key>

            <Key onClick={this.handleInput.bind(this, '7')}>7</Key>
            <Key onClick={this.handleInput.bind(this, '8')}>8</Key>
            <Key onClick={this.handleInput.bind(this, '9')}>9</Key>

            <Key onClick={this.deleteInput.bind(this)}>X</Key>
            <Key onClick={this.handleInput.bind(this, '0')}>0</Key>
            <Key onClick={this.resetInput.bind(this, '.')}>.</Key>

          </Dialpad>
        </MobileScreen>
      </App>
    )
  },
  handleInput: function (value) {

    console.log(1, value)

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

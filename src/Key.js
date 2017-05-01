import React from 'react';
import createReactClass from 'create-react-class'
import styled, {keyframes} from 'styled-components'


//Hack for non-standard HTML attributes (e.g., onTouchTap)
//Reference: https://github.com/styled-components/styled-components/issues/527#issuecomment-281931998
const Key = styled((props) => <button {...props}/>)`
  margin: 0.8%;
  width: ${100/3 - 2}%;
  font-size: 1.1em;
  font-family: "Open Sans", sans-serif;
  color: #999;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  background-color: #404040;
  outline-style: none;
  transition: all 100ms ease-out;
  &:active {
    color: #555;
    background-color: #24ce6e;
  }
`


module.exports = createReactClass({
  render: function () {
    return <Key onTouchTap={this.props.handleTap}>{this.props.children}</Key>
  },
  shouldComponentUpdate: function () {
    return false
  }
})

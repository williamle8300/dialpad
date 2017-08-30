import React from 'react';
import createReactClass from 'create-react-class'
import styled, {keyframes} from 'styled-components'




module.exports = createReactClass({
  render: function () {

    //Hack for non-standard HTML attributes (e.g., onTouchTap)
    //Reference: https://github.com/styled-components/styled-components/issues/527#issuecomment-281931998
    const Key = styled((props) => <button {...props}/>)`
      margin: 0.8%;
      width: ${100/3 - 2}%;
      font-size: 1.25em;
      font-family: "Open Sans", sans-serif;
      color: ${!this.props.isDisabled ? '#76a28a' : '#2c8454'};
      border: ${!this.props.isDisabled ? '1px solid #203c2c' : '1px solid #0d3c21'};
      border-radius: 2px;
      cursor: pointer;
      background-color: ${!this.props.isDisabled ? '#28332e' : '#1c211f'};
      outline-style: none;
      transition: all 100ms ease-out;
      text-shadow: 0px 1px 6px rgba(0, 253, 114, 0.25);
      &:active {
        color: #555;
        background-color: #24ce6e;
      }
    `


    return <Key disabled={this.props.isDisabled} onTouchTap={this.props.handleTap}>{this.props.children}</Key>
  },
})

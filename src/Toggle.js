import React from 'react';
import * as ToggleStyle from './ToggleStyle';

class ToggleBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    }
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    this.setState({
      toggle : !this.state.toggle
    })
  }

  render() {
    return (
      <div style={ToggleStyle.toggleBtnStyle}>
        <div>
          <p style={ToggleStyle.toggleText}>
            {this.state.toggle ? 'On' : 'Off'}
          </p>
        </div>
        <div 
          style={{...ToggleStyle.toggleBtnWrap, backgroundColor : this.state.toggle ? 'green' : '#ccc' }} 
          onClick={ this.onToggle }
        >
          <p style={{...ToggleStyle.toggleBtnPin, left : this.state.toggle ? '20px' : '0', backgroundColor : this.state.toggle ? '#fff' : '#666' }}></p>
        </div>
      </div>
    )
  }
}

export default ToggleBtn;
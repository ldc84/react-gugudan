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

  onToggle(e) {
    this.togglePin = !this.state.toggle;
  }

  set togglePin(value) {    
    this.setState({
      toggle: value
    });
  }

  get togglePin() {
    return { ...ToggleStyle.toggleBtnPin, left: this.state.toggle?48:'0' };
  }

  render() {
    return ( <div style = { ToggleStyle.toggleBtnStyle } onClick = { this.onToggle }>
      <div className={(['toggle-btn-wrap', this.state.toggle?'on':'off']).join(' ')} style={ToggleStyle.toggleBtnWrap}>
        <div className="toggle-btn-pin" style={this.togglePin}></div>
      </div>
    </div>);
  }
}

export default ToggleBtn;
import React, { Component } from 'react';
import history from './../history';
const divStyle = {
    alignItems: 'center',
    marginTop: -570,
    marginLeft: -600,
    top: '2px'
  };
class HomeForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
      event.preventDefault();
      history.push('/nav');
      window.location.reload();
    }
  
    render() {
      return (
          <div style={divStyle}>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }
  }

  export default HomeForm;
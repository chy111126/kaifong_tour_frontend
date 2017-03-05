import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

// To use fixed css naming schema:
// require('./style.css')
import style from './style.css';

class Kaifong extends React.Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    return (
        <div>
        <img src={this.props.image} />
            <br />
        {this.props.name}
            <br />
        {this.props.title}
            <br />
        {this.props.tagline}
            <br />
        {this.props.description}
            <br />
        </div>
    )
  }
    
}

export default Kaifong;
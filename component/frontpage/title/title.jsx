import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

// To use fixed css naming schema:
// require('./style.css')
import style from './style.css';

class Title extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
        <div className={style['banner']}>
            <div className={style['banner-title']}>
                <div className={style['banner-title-line']}>
                </div>
                {this.props.name}
                <div className={style['banner-title-line']}>
                </div>
            </div>
        </div>
    );
  }

}

export default Title;
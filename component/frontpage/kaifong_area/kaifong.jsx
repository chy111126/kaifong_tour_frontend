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
        <div className={style['kf-sub-container']}>
            <Grid>
                <Row>
                    <Col sm={12} md={6}>
                        <img src={this.props.image} />
                    </Col>
                    <Col sm={12} md={6}>
                        <div className={style['kf-name']}>
                            {this.props.name}
                        </div>
                        <div className={style['kf-title']}>
                            {this.props.title}
                        </div>
                        <div className={style['kf-tagline']}>
                            {this.props.tagline}
                        </div>
                        {this.props.description}
                            <br />
                    </Col>
                </Row>
            </Grid>
        </div>
    )
  }
    
}

export default Kaifong;
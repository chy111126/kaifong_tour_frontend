import React from 'react';

// To use fixed css naming schema:
// require('./style.css')
import style from './style.css';

class TourArea extends React.Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    return (
        <div className={style['tour-area-container']}>
            {this.props.name}
        </div>
    )
  }
    
}

export default TourArea;
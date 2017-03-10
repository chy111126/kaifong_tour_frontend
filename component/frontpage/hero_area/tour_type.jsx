import React from 'react';

// To use fixed css naming schema:
// require('./style.css')
import style from './style.css';

class TourType extends React.Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    return (
        <div className={style['tour-type-container']}>
            <div>
                <img src={this.props.image} />
            </div>
            {this.props.name}
        </div>
    )
  }
    
}

export default TourType;
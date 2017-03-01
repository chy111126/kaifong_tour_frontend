import React from 'react';

// To use fixed css naming schema:
// require('./style.css')
import style from './style.css';

class ConceptArea extends React.Component {

  constructor(props) {
    super(props);
      
    this.state = {};
    this.state.text = {};
      
    this.state.text.subtitle = "您的在地嚮導";
    this.state.text.title = "理念";
    this.state.text.search_header = "選擇行程";
    this.state.text.search_tour_category = "體驗：";
    this.state.text.or = "或";
    this.state.text.search_tour_district = "地區：";
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div className={style['cp-container']}>
            <div className={style['cp-banner']}>
                <div className={style['cp-banner-title']}>
                    <div className={style['cp-banner-title-line']}>
                    </div>
                    {this.state.text.title}
                    <div className={style['cp-banner-title-line']}>
                    </div>
                </div>                
            </div>
      </div>
    );
  }

}

export default ConceptArea;
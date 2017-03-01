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
    var imgUrl = this.props.pic ? this.props.pic : './images/placeholder.png';
    var divStyle = {
        backgroundImage: 'url(' + imgUrl + ')'
    }
        
    return (
        <div className={style['tc-container']}>
            <div className={style['tc-content']}>
                <div className={style['tc-hero-img']} style={divStyle}>
                    
                </div>
            </div>
            <div className={style['tc-footer']}>
                <div className={style['tc-tour-title']}>
                    {this.props.name}
                </div>
                <div className={style['tc-tour-type']}>
                    Type
                </div>
                <div className={style['tc-tour-district']}>
                    District
                </div>
                <div className={style['tc-tour-date']}>
                    Date
                </div>
            </div>
        </div>
    );
  }

}

export default ConceptArea;
import React from 'react';

// To use fixed css naming schema:
// require('./style.css')
import style from './style.css';

class HeroArea extends React.Component {

  constructor(props) {
    super(props);
      
    this.state = {};
    this.state.text = {};
      
    this.state.text.subtitle = "您的在地嚮導";
    this.state.text.title = "真.香港體驗";
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
      <div className={style['ha-container']}>
            <div className={style['ha-banner']}>
                <div className={style['ha-banner-subtitle']}>
                    {this.state.text.subtitle}
                </div>
                <div className={style['ha-banner-title']}>
                    {this.state.text.title}
                </div>                
            </div>
            <div className={style['ha-search-box']}>
                {this.state.text.search_header}
                <div className={style['ha-search-box-category']}>
                    {this.state.text.search_tour_category}
                </div>    
                <div className={style['ha-search-box-sep']}>
                    <div className={style['ha-search-box-sep-line']}>
                    </div>
                    {this.state.text.or}                    
                    <div className={style['ha-search-box-sep-line']}>
                    </div>
                </div>    
                <div className={style['ha-search-box-district']}>
                    {this.state.text.search_tour_district}
                </div>    
            </div>
      </div>
    );
  }

}

export default HeroArea;
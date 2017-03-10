import React from 'react';

// To use fixed css naming schema:
// require('./style.css')
import style from './style.css';

import Title from '../title/title.jsx';
import TourType from './tour_type.jsx';

class HeroArea extends React.Component {

  constructor(props) {
    super(props);
      
    this.state = {};
    this.state.text = {};
      
    this.state.text.subtitle = "您的在地嚮導";
    this.state.text.title = "真.香港體驗";
    this.state.text.search_header = "選擇行程";
    this.state.text.search_tour_category = "種類：";
    this.state.text.tour_cat_exp = "體驗";
    this.state.text.tour_cat_adv = "冒險";
    this.state.text.tour_cat_cul = "文化";
    this.state.text.or = "或";
    this.state.text.search_tour_district = "地區：";
      
      
    this.state.images = {};
    this.state.images.tour_cat_exp = require('./images/shoeprints.png');
    this.state.images.tour_cat_adv = require('./images/travelerbag.png');
    this.state.images.tour_cat_cul = require('./images/polaroids.png');
      
    // Area selection
    this.state.text.area_options = [
        {label: "九龍", value: "kowloon"},
        {label: "新界", value: "nt"},
        {label: "香港島", value: "hk_island"}
    ]
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
                <div>
                    <div>
                        {this.state.text.search_tour_category}
                    </div>
                    <div className={style['ha-search-box-category']}>
                        <TourType 
                            name={this.state.text.tour_cat_exp}
                            image={this.state.images.tour_cat_exp}
                        />
                        <TourType 
                            name={this.state.text.tour_cat_adv}
                            image={this.state.images.tour_cat_adv}
                        />
                        <TourType 
                            name={this.state.text.tour_cat_cul}
                            image={this.state.images.tour_cat_cul}
                        />
                    </div>
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
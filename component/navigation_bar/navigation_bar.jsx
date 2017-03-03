import React from 'react';
import $ from 'jquery';

// To use fixed css naming schema:
require('./style.css')
import style from './style.css';

class NavigationBar extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {is_shrinked : false};
    this.changeNavBarSize = this.changeNavBarSize.bind(this);
      
    this.state = {};
    this.state.text = {};
    this.state.text.recent_tours = "近期行程";
    this.state.text.concept = "理念";
      
  }
    
  changeNavBarSize() {
    var reactComp = this;
    if($(window).scrollTop() > 108) {
        $(reactComp.refs.nbContainer).removeClass(style['nb-container-full']);
        $(reactComp.refs.nbContainer).addClass(style['nb-container-shrink']);
    } else {
        $(reactComp.refs.nbContainer).removeClass(style['nb-container-shrink']);
        $(reactComp.refs.nbContainer).addClass(style['nb-container-full']);
    }
  }
    
  componentDidMount() {
    var reactComp = this;
    $(window)
    .on('scroll', function(){
        reactComp.changeNavBarSize();
    });
    reactComp.changeNavBarSize();
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div className={style['nb-container']} ref="nbContainer">
        <div className={style['nb-nav-left']}>
            <div className={style['nb-nav-btn']}>
                {this.state.text.recent_tours}
            </div>
            <div className={style['nb-nav-btn']}>
                {this.state.text.concept}
            </div>
        </div>
        <div className={style['nb-nav-center']}>
            <div className={style['nb-logo']}>

            </div>            
        </div>
        <div className={style['nb-nav-right']}>
            
        </div>
      </div>
    );
  }

}

export default NavigationBar;
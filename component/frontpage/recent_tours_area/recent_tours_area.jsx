import React from 'react';

// To use fixed css naming schema:
// require('./style.css')
import style from './style.css';

import Title from '../title/title.jsx';
import TourCard from 'component_path/tour_card/tour_card.jsx';

class RecentToursArea extends React.Component {

  constructor(props) {
    super(props);
      
    this.state = {};
    this.state.text = {};

    this.state.text.title = "近期行程";
      
    this.test_data = [
                          {
                            "link": "http://54.254.227.146/product/%e3%80%8c%e5%88%a8%e8%8a%b1%e6%b2%b9%e3%80%8d%e3%80%8c%e5%82%b3%e7%b5%b1%e5%ba%a6%e9%87%8f%e8%a1%a1-%e4%b8%ad%e5%9c%8b%e7%a7%a4%e3%80%8d%e8%a3%bd%e4%bd%9c%e9%ab%94%e9%a9%97/",
                            "name": "「刨花油」+「傳統度量衡-中國秤」製作體驗",
                            //"pic": "http://54.254.227.146/wp-content/plugins/woocommerce/assets/images/placeholder.png"
                          },
                          {
                            "link": "http://54.254.227.146/product/%e5%9f%8e%e5%b8%82%e7%87%88%e5%85%89%e5%b0%8e%e8%b3%9e%e5%9c%98/",
                            "name": "城市燈光導賞團",
                            //"pic": "http://54.254.227.146/wp-content/plugins/woocommerce/assets/images/placeholder.png"
                          },
                          {
                            "link": "http://54.254.227.146/product/%e3%80%8c%e6%b2%b9%e9%ba%bb%e5%9c%b0%e7%9a%84%e5%85%a9%e8%90%ac%e7%a8%ae%e6%ad%bb%e6%b3%95%e3%80%8d-%e5%9f%8e%e5%b8%82%e5%85%87%e6%a1%88%e5%b0%8e%e8%b3%9e%e5%9c%98/",
                            "name": "「油麻地的兩萬種死法」—— 城市兇案導賞團",
                            //"pic": "http://54.254.227.146/wp-content/plugins/woocommerce/assets/images/placeholder.png"
                          },
                          {
                            "link": "http://54.254.227.146/product/%e9%9b%a3%e6%b0%91%e7%94%9f%e6%b4%bb%e5%9c%a8%e4%bd%90%e6%95%a6/",
                            "name": "難民生活在佐敦",
                            //"pic": "http://54.254.227.146/wp-content/uploads/2017/02/refugee.jpg"
                          },
                          {
                            "link": "http://54.254.227.146/product/%e8%b7%9f%e4%bd%8f%e8%a1%97%e5%9d%8a%e5%8e%bb%e8%a6%93%e9%a3%9f/",
                            "name": "跟住街坊去覓食",
                            //"pic": "http://54.254.227.146/wp-content/uploads/2017/02/eat.jpg"
                          },
                          {
                            "link": "http://54.254.227.146/product/%e5%a4%aa%e5%ad%90%e7%9a%84%e5%89%8d%e4%b8%96%e4%bb%8a%e7%94%9f/",
                            "name": "太子的前世今生",
                            //"pic": "http://54.254.227.146/wp-content/uploads/2017/02/PrinceEdward.jpg"
                          }
                     ];
      
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
      
    var tours = [];
    for (var i = 0; i < this.test_data.length; i++) {
      tours.push(<TourCard key={i} 
                     name={this.test_data[i].name} 
                     pic={this.test_data[i].pic} 
                     link={this.test_data[i].link} 
                 />);
    }
    
    return (
      <div className={style['rt-container']}>
            <Title
                name={this.state.text.title}
            />    
            <div className={style['rt-content']}>
                { tours }
            </div>
      </div>
    );
  }

}

export default RecentToursArea;
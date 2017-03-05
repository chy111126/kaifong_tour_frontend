import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

// To use fixed css naming schema:
// require('./style.css')
import style from './style.css';

import Kaifong from './kaifong.jsx';

class KaifongArea extends React.Component {

  constructor(props) {
    super(props);
      
    this.state = {};
    this.state.text = {};
    
    this.state.text.title = "我們的街坊";
      
    this.state.images = {};
    this.state.images.tung = require('./images/tung.webp');
    this.state.images.sit = require('./images/sit.webp');
    this.state.images.munip = require('./images/munip.webp');
    this.state.images.maggie = require('./images/maggie.webp');
  }

  render() {
    return (
      <div className={style['kf-container']}>
            <div className={style['kf-banner']}>
                <div className={style['kf-banner-title']}>
                    <div className={style['kf-banner-title-line']}>
                    </div>
                    {this.state.text.title}
                    <div className={style['kf-banner-title-line']}>
                    </div>
                </div>
            </div>
            <div className={style['kf-content']}>
                <Kaifong
                    image={this.state.images.tung}
                    name="阿董"
                    title="太子地頭蟲"
                    tagline="家陣講古佬, 唔係坐向榕樹下架啦"
                    description="見証社區的變化, 一條街名、一間鋪仔, 甚至一顆樹, 都有它的生命和他/她的見證。帶你重遊花墟、雀仔街和大坑東條大坑渠, 講古佬的兒時趣事，讓我們在時光機看見一個城市的發展。"
                />
                <Kaifong
                    image={this.state.images.sit}
                    name="薛姐"
                    title="長沙灣阿姐"
                    tagline="點只係”今個夏天食平D”，春夏秋冬日日都要食平D。我日日在街市採購，要應用不少物流、營養學、交際技巧呢。"
                    description="家庭主婦的日常家務及照顧工作是一種無償工作。無償工作往往被「自願」或「偉大」等似是而非的理由，掩蓋了每個人發展自我的需要, 尤其是經濟屬中下層的家庭主婦。"
                />
                <Kaifong
                    image={this.state.images.munip}
                    name="Munip"
                    title="佐敦專家"
                    tagline="我係步行專家, 因為我有很多時間"
                    description="油尖旺一帶，有不少因為種種原因而來港的難民，他們與我們生活在同一個社會，但我們卻不認識他們面對怎樣的困境。步行團將走訪難民的衣食住行、體驗留港生活的困難和親身到訪難民家交流。"
                />
                <Kaifong
                    image={this.state.images.maggie}
                    name="Maggie"
                    title="道地小商人"
                    tagline="旅行可以係生意， 可以係生活態度， 仲可以係社區關懷的事啦。香港地，有大把野玩啦！"
                    description="本地民宿主理人，但相信 ”旅行不是關於目的地， 而是心境和小故事的發現” 所以只要一個在地嚮導， 街坊視景， 再熟識的地方都可以激發到那份遊子心。"
                />
            </div>
      </div>
    );
  }

}

export default KaifongArea;
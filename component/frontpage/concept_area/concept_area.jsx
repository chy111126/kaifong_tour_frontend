import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

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
    this.state.text.header_text = "「街坊帶路」致力透過深度步行團推廣社區旅遊，給全世界一個真香港在地體驗，同時為社會迎來正面效益，為共同構建更美好社區而出一分力。";
    
    // sub-content
    this.state.text.sub_content_h1 = "「難民生活在佐敦」步行團";
    this.state.text.sub_content_t1 = "油尖旺一帶，有不少因為種種原因而來港的難民，他們與我們生活在同一個社會，但我們卻不認識他們面對怎樣的困境。步行團將走訪難民的衣食住行、體驗留港生活的困難和親身到訪難民家交流。";
    this.state.text.sub_content_img1 = "http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,h_1440,w_720,f_auto,q_90/v1/1113989/jordan_bznpew.png";
    this.state.text.sub_content_h2 = "陪「太子漫遊」導賞團";
    this.state.text.sub_content_t2 = "「街坊帶路」將伙拍「金齡薈」導賞員阿董，帶給大家加強版路線：由百多年前的花墟行到滿載九龍歷史的界限街，細觀這城市花園的一樹一坑一樹根；亦可以回到旺角一帶當年水浸的日子，發現神秘儲水池的城市設計。";
    this.state.text.sub_content_img2 = "http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,h_1440,w_720,f_auto,q_90/v1/1113989/IMG_3764_tr5tll.jpg";
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
            <Grid className={style['cp-content']}>
                <Row className="show-grid">
                    <Col sm={12} md={6}>
                        <div className={style['cp-content-header-text']}>
                            {this.state.text.header_text}
                        </div>
                        <div className={style['cp-sub-content']}>
                            <div className={style['cp-sub-content-header']}>
                                {this.state.text.sub_content_h1}
                            </div>
                            <div className={style['cp-sub-content-text']}>
                                {this.state.text.sub_content_t1}
                            </div>
                        </div>   
                        <div className={style['cp-sub-content']}>
                            <div className={style['cp-sub-content-header']}>
                                {this.state.text.sub_content_h2}
                            </div>
                            <div className={style['cp-sub-content-text']}>
                                {this.state.text.sub_content_t2}
                            </div>
                        </div>                    
                    </Col>
                    <Col sm={12} md={6}>
                        <iframe id="player" frameBorder="0" allowfullscreen="1" title="YouTube video player" width="640" height="360" src="https://www.youtube.com/embed/GFHUwc7e-Q0?wmode=transparent&amp;widget_referrer=http%3A%2F%2Fwww.kaifongtour.hk%2F&amp;enablejsapi=1&amp;origin=http%3A%2F%2Fcdn.embedly.com&amp;widgetid=1"></iframe>
                    </Col>
                </Row>
            </Grid>
      </div>
    );
  }

}

export default ConceptArea;
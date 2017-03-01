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
    this.state.text.search_tour_category = "體驗：";
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
                    <Col sm={12} md={6}>{this.state.text.header_text}</Col>
                    <Col sm={12} md={6}>
                        <iframe id="player" frameborder="0" allowfullscreen="1" title="YouTube video player" width="640" height="360" src="https://www.youtube.com/embed/GFHUwc7e-Q0?wmode=transparent&amp;widget_referrer=http%3A%2F%2Fwww.kaifongtour.hk%2F&amp;enablejsapi=1&amp;origin=http%3A%2F%2Fcdn.embedly.com&amp;widgetid=1"></iframe>
                    </Col>
                </Row>
            </Grid>
      </div>
    );
  }

}

export default ConceptArea;
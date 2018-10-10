import React, { Component } from 'react';
import * as apiCalls from '../services/api';
import ComingSoon from './ComingSoon';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

class Newsfeed extends Component {
  constructor(props){
    super(props);
    this.state = {
      news: []
    };
  }
  
  componentDidMount() {
    this.loadNews();
  }
  
  async loadNews() {
    let news = await apiCalls.getNews();
    this.setState({news});
  }
  
  render () {
    
    const newsItems = this.state.news.map((n, index) => {
      // const numComments = n.comments.length;
      // const comment = numComments === 1 ? "comment" : "comments";
      const text = n.content.length < 300 ? n.content : n.content.substring(0, 300) + "...";
      const linkUrl = "/news/" + n._id;
      
      return (
        <div key={n._id} className="newsfeed-item">
          <div className="newsfeed-item-image">
            <img src={n.image} alt="Related" />
          </div>
          <div className="newsfeed-text">
            <h1 className="newsfeed-title"><Link to={linkUrl}>{n.title}</Link></h1>
            <p className="newsfeed-summary">{text}</p>
            <p className="newsfeed-dateline"><em><Moment format="MMM D, YYYY">{n.date}</Moment> | 0 Comments</em></p>
          </div>
        </div>
      );
    });
    
    return (
      <div>
        <div className="homepage">
          <div className="newsfeed">
            <h1 className="newsfeed-header">Latest News</h1>
            {newsItems}
          </div>
          <div className="right-aside">
            <ComingSoon />
          </div>
        </div>
      </div>
    );
  }
}

export default Newsfeed;
import React, { Component } from 'react';
import * as apiCalls from '../services/api';
import Moment from 'react-moment';
import Comments from './Comments';

class NewsArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: []
      // comments: [{}]
    };
  }
  
  componentDidMount(){
    const newsId = this.props.match.params.newsId;
    this.loadArticle(newsId);
    // this.loadComments(id);
  }
  
  async loadArticle(id){
    let article = await apiCalls.getArticle(id);
    this.setState({article});
  }
  
  // async loadComments(id){
  //   let comments = await apiCalls.getComments(id);
  //   this.setState({comments});
  // }
  
  render() {

    const { title, image, content, date } = this.state.article;
    
    const newsId = this.props.match.params.newsId;
    // const comments = this.state.comments.length < 1 ? "No Comments" : this.state.comments.map(c => (
    //   <p>{c.comment}</p>
    //   ));
  
    return(
      <div className="news-article-container">
        <div className="news-ariticle-headline">
          <h1 className="news-article-title">{title}</h1>
        </div>
        <div className="news-article-byline">
          <p><em><Moment format="MMM D, YYYY">{date}</Moment> | Michael Smith</em></p>
        </div>
        <div className="news-article-image">
          <img src={image} alt="Something related" />
        </div>
        <div className="news-article-content">
          <p>{content}</p>
        </div>
        <br/>
        <div className="news-article-comments">
          <Comments commentsId={ newsId }/>
        </div>
      </div>
      );       
  }
}

export default NewsArticle;
import React, { Component } from 'react';
import * as apiCalls from '../services/api';
import Moment from 'react-moment';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      newComment: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    componentDidMount() {
      const articleId = this.props.commentsId;
      this.loadComments(articleId);
    }
    
    async loadComments(id){
      let comments = await apiCalls.getComments(id);
      this.setState({comments});
    }
    
    async addComment(text, articleId){
      let newComment = await apiCalls.addNewComment(text, articleId);
      this.setState({comments: [...this.state.comments, newComment]});
    }
    
    handleChange(e){
      this.setState({
        newComment: e.target.value
      });
    }
    
    handleSubmit(e){
      const articleId = this.props.commentsId;
      this.addComment(this.state.newComment, articleId);
      e.preventDefault();
      this.setState({newComment: ""});
    }
    
    render() {
      
      const numComments = this.state.comments.length;
      
      const commentList = numComments < 1 ? <p>There are no comments yet.</p> : this.state.comments.map((c) => (
        <div key={c.id} className='news-article-comment'>
          <div className='news-article-comment-avatar'>
            <img src="http://www.ministryofpinball.com/media/catalog/category/Super_Paper_Mario_MoP_1.png" alt="user" />
          </div>
          <div className='news-article-comment-body'>
            <div className='news-article-comment-info'>
              <a className='user-name'>Michael</a>
              <em><Moment fromNow>{c.date}</Moment></em>
            </div>
            <p>{c.comment}</p>
          </div>
        </div>
        ));
        
        return(
          <div className='news-article-comment-container'>
            <h2 className='comments-header'>Comments</h2>
              <div>{commentList}</div>
            <div className='news-article-comment-form'>
              <form className='comment-form'
                    onSubmit={this.handleSubmit}
              >
                <div className='comment-form-header'>
                  <h2 className='comments-header'>Leave a comment.</h2>
                </div>
                <div className="comment-text-input">   
                  <textarea 
                    cols='45' 
                    rows='6'
                    value={this.state.newComment}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="comment-text-footer">
                  <input className="button" type="submit" value="REPLY" />
                </div>
              </form>
            </div>
          </div>
        );
    }
}  

export default Comments;

// this.state.comments.length < 1 ? <p>No Comments</p> :
/* global fetch */
const GAMEAPI = '/api/games/';
const NEWSAPI = '/api/news/';
const COMMENTAPI = '/api/comments/';

export async function getGames() {
 return fetch(GAMEAPI)
    .then(resp => {
      if(!resp.ok){
        if(resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = {errorMessage: data.message};
            throw err;
          });
        } else {
          let err = {errorMessage: 'Please try again later, server not responding.'};
          throw err;
        }
      }
      return resp.json();
    });
}

export async function getNews() {
  return fetch(NEWSAPI)
    .then(resp => {
      if(!resp.ok){
        if(resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = {errorMessage: data.message};
            throw err;
          });
        } else {
          let err = {errorMessage: 'Please try again later, server not responding.'};
          throw err;
        }
      }
      return resp.json();
    });
}

export async function getArticle(newsId){
  return fetch(NEWSAPI + newsId)
    .then(resp => {
      if(!resp.ok){
        if(resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = {errorMessage: data.message};
            throw err;
          });
        } else {
          let err = {errorMessage: 'Please try again later, server not responding.'};
          throw err;
        }
      }
      return resp.json();
    });
}

export async function getComments(newsId){
  return fetch(COMMENTAPI + newsId)
    .then(resp => {
      if(!resp.ok){
        if(resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = {errorMessage: data.message};
            throw err;
          });
        } else {
          let err = {errorMessage: 'Please try again later, server not responding.'};
          throw err;
        }
      }
      return resp.json();
    });
}

export async function addNewComment(comment, articleId) {
  return fetch(COMMENTAPI, {
    method: "post",
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      comment: comment,
      articleId: articleId
    })
  })
  .then(resp => {
  if(!resp.ok){
    if(resp.status >= 400 && resp.status < 500) {
      return resp.json().then(data => {
        let err = {errorMessage: data.message};
        throw err;
      });
    } else {
      let err = {errorMessage: 'Please try again later, server not responding.'};
      throw err;
    }
  }
  return resp.json();
    });
}
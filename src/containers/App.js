import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsfeed from './Newsfeed';
import NewsArticle from './NewsArticle';
import SignIn from './SignIn';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  

  render() {
    
  const NoMatch = ({ location }) => (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
  
    
    return (
      <Router>
        <div>
          <div>
            <Navbar />
          </div>
          <div>
            <Switch>
              <Route exact path='/' component={Newsfeed}/>
              <Route path='/news/:newsId' component={NewsArticle}/>
              <Route exact path='/signin' component={SignIn}/>
              <Route component={NoMatch}/>
            </Switch>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

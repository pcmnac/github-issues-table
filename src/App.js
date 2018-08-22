import React, { Component } from 'react';
import GithubIssuesTable from './lib';


class App extends Component {
  render() {
    return (
        <GithubIssuesTable user="facebook" repo="react" />
    );
  }
}

export default App;

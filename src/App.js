import React, { Component } from 'react';
import GithubIssuesTable from './lib/github-issues-table';


class App extends Component {
  render() {
    return (
        <GithubIssuesTable repo="react" />
    );
  }
}

export default App;

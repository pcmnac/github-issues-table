import React, { Component } from 'react';
import GithubIssuesTable from './lib';


class App extends Component {
    state = {
        user,
        repo,
    }
    render() {
        return (
            <GithubIssuesTable user="facebook" repo="react" />
        );
    }
}

export default App;

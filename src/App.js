import React, { Component } from 'react';
import GithubIssuesTable from './lib';
import { Button } from 'semantic-ui-react';


class App extends Component {
    state = {
        user: 'facebook',
        repo: 'react',
    }

    setRepo = repo => {
        this.setState({
            repo,
        });
    }

    render() {
        const { user, repo } = this.state;

        return (
            <div>
                <Button onClick={() => this.setRepo('react')}>React</Button>
                <Button onClick={() => this.setRepo('create-react-app')}>CRA</Button>
                <br/>
                {user} / {repo}
                <br/>
                <GithubIssuesTable user={user} repo={repo} />
            </div>
        );
    }
}

export default App;

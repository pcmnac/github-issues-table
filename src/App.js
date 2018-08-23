import React, { Component } from 'react';
import GithubIssuesTable from './lib';
import { Button, Form } from 'semantic-ui-react';


class App extends Component {
    state = {
        user: null,
        repo: null,
        userText: 'facebook',
        repoText: 'react',
    }

    componentDidMount() {
        this.loadIssues();
    }

    setRepo = repo => {
        this.setState({
            repo,
        });
    }

    loadIssues = () => {
        this.setState(({ userText, repoText }) => ({
            user: userText,
            repo: repoText,
        }));
    }

    handleFormChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        this.setState({
            [field]: value,
        });
    }

    render() {
        const { user, repo, userText, repoText } = this.state;

        return (
            <div>
                <Form>
                    <Form.Group widths='equal' inline>
                        <Form.Input
                            name="userText"
                            fluid
                            label='User'
                            placeholder='GitHub user'
                            onChange={this.handleFormChange}
                            value={userText}
                        />
                        <Form.Input
                            name="repoText"
                            fluid
                            label='Repo'
                            placeholder='Repository name'
                            onChange={this.handleFormChange}
                            value={repoText}
                        />
                    </Form.Group>
                    <Button onClick={this.loadIssues}>Load Issues</Button>
                </Form>
                
                <br/>
                { 
                    user && repo &&
                    <h1>Issues of <a href={`https://github.com/${user}/${repo}`}>{user}/{repo}</a></h1>
                }
                <br/>
                <GithubIssuesTable user={user} repo={repo} />
            </div>
        );
    }
}

export default App;

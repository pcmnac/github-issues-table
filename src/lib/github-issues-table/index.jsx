import React, { Component } from 'react';
import Presenter from './presenter'

class GithubIssuesTable extends Component {
    state = {
        data: [],
        loading: false,
        error: false,
        errorMessage: null,
    }

    componentDidMount() {
        this.loadContent();
    }

    loadContent = () => {
        const { user, repo, delay = 500 } = this.props;

        if (!user || !repo) {
            this.setState({
                error: true,
                errorMessage: 'no user/repo provided',
            })
            return;
        }

        this.setState({
            loading: true,
        }, () => {
            setTimeout(() => {
                fetch(`https://api.github.com/repos/${user}/${repo}/issues`)
                .then(res => {
                    return res.json().then(data => {
                        if (!res.ok) throw new Error(data.message);
                        return data;
                    });
                })
                .then(data => {
                    this.setState({
                        data,
                        error: false,
                        errorMessage: null,
                        loading: false,
                    })
                })
                .catch(({ message }) => {
                    this.setState({
                        error: true,
                        errorMessage: message,
                        loading: false,
                    })
                });
            }, delay)
        });
        
    }

    render() {
        return (
            <Presenter {...this.state} {...this.props} />
        );
    }
}

export default GithubIssuesTable;
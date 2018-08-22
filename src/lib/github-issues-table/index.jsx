import React, { Component } from 'react';
import Presenter from './presenter'
import { data } from './fake-data';

class GithubIssuesTable extends Component {
    render() {
        const { repo } = this.props;
        return (
            <Presenter repo={repo} data={data} />
        );
    }
}

export default GithubIssuesTable;
import React from "react";
import ReactDOM from 'react-dom';
import GithubIssuesTable from ".";

describe("GithubIssuesTable", () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GithubIssuesTable  user="facebook" placeholder="react"/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

});
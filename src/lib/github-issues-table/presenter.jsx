import React from 'react';
import { Label, Table } from 'semantic-ui-react'
import './github-issues-table.css';

// Custom label to show in IssuesTable
const IssueLabel = ({
    repo,
    id,
    color,
    name,
}) => (
    <span className="custom-label" style={{backgroundColor: `#${color}`}}>
        <Label key={id}>
            <a href={`https://github.com/facebook/${repo}/labels/${name}`}>{name}</a>
        </Label>
    </span>
);

// Simple presentational component to show a single row in IssuesTable
const IssueRow = ({
    repo,
    number,
    html_url,
    title,
    created_at,
    updated_at,
    labels = [],
    state
}) => (
    <Table.Row>
        <Table.Cell textAlign="center">
            <a href={html_url}>
                #{number}
            </a>
        </Table.Cell>
        
        <Table.Cell>
            {title}
        </Table.Cell>
        
        <Table.Cell width={1}>
            {new Date(created_at).toLocaleString()}
        </Table.Cell>
        
        <Table.Cell width={1}>
            {new Date(updated_at).toLocaleString()}
        </Table.Cell>
        
        <Table.Cell>
            {labels.map(label => <IssueLabel repo={repo} {...label} />)}
        </Table.Cell>
        
        <Table.Cell>
            <Label as='a' color={state === 'open' ? 'red' : 'teal'} tag>
                {state}
            </Label>
        </Table.Cell>
    </Table.Row>
);

// IssuesTable presenter component
const GithubIssuesTablePresenter = ({
    repo,
    data = []
}) => (
    <Table celled striped>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell textAlign="center">Issue	Number</Table.HeaderCell>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Created	At</Table.HeaderCell>
                <Table.HeaderCell>Updated	At</Table.HeaderCell>
                <Table.HeaderCell>Labels</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">State</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {
                data.map(issue => <IssueRow repo={repo} {...issue} />)
            }
        </Table.Body>
    </Table>
);

export default GithubIssuesTablePresenter;
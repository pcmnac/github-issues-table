import React from 'react';
import { Label, Table, Dimmer, Loader, Message, Form, Icon } from 'semantic-ui-react'
import './github-issues-table.css';

// Custom label to show in IssuesTable
const IssueLabel = ({
    user,
    repo,
    id,
    color,
    name,
}) => (
    <span className="custom-label" style={{backgroundColor: `#${color}`}}>
        <Label key={id}>
            <a href={`https://github.com/${user}/${repo}/labels/${name}`}>{name}</a>
        </Label>
    </span>
);

// Simple presentational component to show a single row in IssuesTable
const IssueRow = ({
    user,
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
        
        <Table.Cell>
            {new Date(created_at).toLocaleString()}
        </Table.Cell>
        
        <Table.Cell>
            {new Date(updated_at).toLocaleString()}
        </Table.Cell>
        
        <Table.Cell>
            {labels.map(label => <IssueLabel key={label.id} user={user} repo={repo} {...label} />)}
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
    user,
    repo,
    data = [],
    loading,
    error,
    errorMessage,
    filter,
    onFilterChange,
}) => {
    if (loading) {
        return (
            <Dimmer active inverted>
                <Loader>Loading</Loader>
            </Dimmer>
        )
    }

    if (error) {
        return (
            <Message negative>
                <Message.Header>Error :(</Message.Header>
                <p>{errorMessage}</p>
            </Message>
        )
    }

    if (data.length === 0) {
        return (
            <Message warning>
                <Message.Header>There are no issues on this project</Message.Header>
            </Message>
        )
    }

    let issues = data;
    if (filter) {
        issues = issues.filter(issue => issue.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }

    return (
        <div>
            <Form.Field inline textAlign="rigth" >
                <Form.Input
                    fluid
                    icon="search"
                    placeholder='search for issue text'
                    onChange={onFilterChange}
                    value={filter}
                />
            </Form.Field>
            <Table className="result-table" celled striped sortable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width={1} textAlign="center">Issue Number</Table.HeaderCell>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell width={1}>Created At</Table.HeaderCell>
                        <Table.HeaderCell width={1}>Updated At</Table.HeaderCell>
                        <Table.HeaderCell>Labels</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">State</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        issues.map(issue => <IssueRow key={issue.id} {...issue} user={user} repo={repo} />)
                    }
                </Table.Body>
            </Table>
        </div>
    );
}

export default GithubIssuesTablePresenter;
# Github Issues Table

This is a simple compenent that shows the issues of a particular GitHub project

# Setup

Install the dependency
```
npm i -S "@pcmnac/github-issues-table
```

You also have to install peer dependencies

```
npm i -S semantic-ui-css
npm i -S semantic-ui-react
```

Import CSS in your project
```jsx
import 'semantic-ui-css/semantic.min.css';
```

# Usage Example

```jsx
import React from 'react';
import GithubIssuesTable from '@pcmnac/github-issues-table';

const App = () => (
    <div>
        <h1>My App</h1>
        <GithubIssuesTable user="facebook" repo="react" />
    </div>
);

export default App;
```

## Local test
```
npm start
```

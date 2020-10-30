import React from 'react';

import styled from 'styled-components';

import {NxPublishable} from '@mikechabot/nx-publishable';

const StyledApp = styled.div`
  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 50px auto;

  .border {
    border: 1px solid green;
  }
`;

const buildable = "https://nx.dev/latest/angular/guides/ci/incremental-builds#buildable-libraries";
const publishable = "https://nx.dev/latest/angular/plugins/react/schematics/library#publishable";

export const App = () => {
  return (
    <StyledApp>
      <header className="flex">
        <h1>Welcome to test-app!</h1>
        <p>This is the main container application</p>
      </header>
      <p>Rendered below is a library that is both:
        <ul>
          <li><a href={buildable} target="_blank">buildable</a></li>
          <li><a href={publishable} target="_blank">publishable</a></li>
        </ul>
        The publishable library is imports a buildable library.
      </p>
      <div className="border">
        <NxPublishable />
      </div>
    </StyledApp>
  );
};

export default App;

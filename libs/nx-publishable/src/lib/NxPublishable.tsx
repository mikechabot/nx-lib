import React from 'react';

import styled from 'styled-components';

import {NxBuildable} from '@nx-lib/nx-buildable'

/* eslint-disable-next-line */
export interface NxPublishableProps {}

const StyledNxPublishable = styled.div`
  color: green;
  padding: 10px;

  .buildable-container {
     padding: 10px;
     margin: 10px;
     border: 1px solid gray;
  }
`;

export const NxPublishable = (props: NxPublishableProps) => {
  return (
    <StyledNxPublishable>
      <h1>Welcome to nx-publishable!</h1>
      <p>
        I would stitch together both common libraries (like buildable),
        but I would also house other parts of this publishable feature.
      </p>
      <div className="buildable-container">
        <NxBuildable />
      </div>
    </StyledNxPublishable>
  );
};

export default NxPublishable;

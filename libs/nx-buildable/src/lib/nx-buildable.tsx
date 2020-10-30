import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NxBuildableProps {}

const StyledNxBuildable = styled.div`
  color: blue;
`;

export const NxBuildable = (props: NxBuildableProps) => {
  return (
    <StyledNxBuildable>
      <h1>Welcome to nx-buildable!</h1>
      <p>I would contain common components like Button, Layout, etc</p>
    </StyledNxBuildable>
  );
};

export default NxBuildable;

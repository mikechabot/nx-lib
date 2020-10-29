import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NxBuildableProps {}

const StyledNxBuildable = styled.div`
  color: pink;
`;

export const NxBuildable = (props: NxBuildableProps) => {
  return (
    <StyledNxBuildable>
      <h1>Welcome to nx-buildable! and stuff!</h1>
    </StyledNxBuildable>
  );
};

export default NxBuildable;

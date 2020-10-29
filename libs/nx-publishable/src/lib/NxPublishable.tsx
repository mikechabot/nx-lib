import React from 'react';

import styled from 'styled-components';

import {NxBuildable} from '@nx-lib/nx-buildable'

/* eslint-disable-next-line */
export interface NxPublishableProps {}

const StyledNxPublishable = styled.div`
  color: pink;
`;

export const NxPublishable = (props: NxPublishableProps) => {
  return (
    <StyledNxPublishable>
      <h1>Welcome to nx-publishable!</h1>
      <NxBuildable />
    </StyledNxPublishable>
  );
};

export default NxPublishable;

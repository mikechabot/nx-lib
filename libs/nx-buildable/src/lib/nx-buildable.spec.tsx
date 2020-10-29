import React from 'react';
import { render } from '@testing-library/react';

import NxBuildable from './nx-buildable';

describe('NxBuildable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NxBuildable />);
    expect(baseElement).toBeTruthy();
  });
});

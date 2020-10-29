import React from 'react';
import { render } from '@testing-library/react';

import NxPublishable from './NxPublishable';

describe('NxPublishable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NxPublishable />);
    expect(baseElement).toBeTruthy();
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import PortfolioPage from '../index';

describe('<PortfolioPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<PortfolioPage />);
    expect(renderedComponent.contains(<h1>Portfolio</h1>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<PortfolioPage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});

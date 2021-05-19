import React from 'react';
import { render } from '@testing-library/react';
import GMap from '../GMap';

const API_KEY = '01wNJmwnZEabSeRBV4vQRV1JMUx1MvyMyA6edTN49PF/yf0aUjY2F4NZfIOq/Yh7x0d38+21sEP6Tck/jEmXdw==';

describe('<GMap />', () => {
  it('Should Match Snapshot', () => {
    const { container } = render(<GMap apiKey={API_KEY} />);
    expect(container).toMatchSnapshot();
  });

  it('Should Renders MNML Element', () => {
    const { container } = render(<GMap apiKey={API_KEY} />);
    const mnmlElement = container.querySelector('#mnml-gmap');
    expect(mnmlElement).toBeInTheDocument();
    expect(mnmlElement).toHaveStyle({ height: '100%' });
  });
});

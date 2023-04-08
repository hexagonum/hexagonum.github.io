import { render } from '@testing-library/react';
import { HomePage } from '../pages/index';

describe('HomePage', () => {
  it('to match snapshot', () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });
});

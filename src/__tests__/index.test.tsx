import { render } from '@testing-library/react';
import { HomePage } from '../pages/index';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({ query: { visible: 'true' } }),
}));

describe('HomePage', () => {
  it('to match snapshot', () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';
import { Hexagon } from '..';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({ query: { visible: 'true' } }),
}));

describe('Hexagon', () => {
  it('to match snapshot', () => {
    const { container } = render(<Hexagon />);
    expect(container).toMatchSnapshot();
  });
});

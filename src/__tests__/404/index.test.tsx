import { NotFoundPage } from '@hexagonum/pages/404';
import { render } from '@testing-library/react';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({ query: { visible: 'true' } }),
}));

describe('NotFoundPage', () => {
  it('to match snapshot', () => {
    const { container } = render(<NotFoundPage />);
    expect(container).toMatchSnapshot();
  });
});

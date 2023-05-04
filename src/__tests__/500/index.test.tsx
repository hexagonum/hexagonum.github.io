import { InternalServerErrorPage } from '@hexagonum/pages/500';
import { render } from '@testing-library/react';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({ query: { visible: 'true' } }),
}));

describe('InternalServerErrorPage', () => {
  it('to match snapshot', () => {
    const { container } = render(<InternalServerErrorPage />);
    expect(container).toMatchSnapshot();
  });
});

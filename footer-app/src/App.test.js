import { render, screen } from '@testing-library/react';
import FooterApp from './FooterApp';

test('renders learn react link', () => {
  render(<FooterApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

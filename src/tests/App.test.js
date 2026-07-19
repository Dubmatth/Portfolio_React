import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../components/App';

test('renders the portfolio with hero name', () => {
  render(<App />);
  expect(screen.getByText('Matthieu Dubois')).toBeInTheDocument();
});

test('renders all navigation items', () => {
  render(<App />);
  ['Home', 'About', 'Experiences', 'Projects', 'Skills', 'Contact'].forEach((item) => {
    expect(screen.getAllByText(item).length).toBeGreaterThan(0);
  });
});

test('renders contact form fields', () => {
  render(<App />);
  expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument();
});

test('shows error when submitting empty form', async () => {
  render(<App />);
  await userEvent.click(screen.getByText('Send Message'));
  expect(screen.getByText('Please fill in all fields.')).toBeInTheDocument();
});

test('shows error for invalid email format', async () => {
  render(<App />);
  await userEvent.type(screen.getByPlaceholderText('Your Name'), 'Test User');
  await userEvent.type(screen.getByPlaceholderText('Your Email'), 'not-an-email');
  await userEvent.type(screen.getByPlaceholderText('Your Message'), 'Hello world');
  await userEvent.click(screen.getByText('Send Message'));
  expect(
    screen.getByText('Please enter a valid email address.')
  ).toBeInTheDocument();
});

test('renders the Pomodeep project', () => {
  render(<App />);
  expect(screen.getByText('Pomodeep')).toBeInTheDocument();
  expect(screen.getByText('Closed Beta')).toBeInTheDocument();
  expect(screen.getByText('Visit pomodeep.app')).toBeInTheDocument();
});

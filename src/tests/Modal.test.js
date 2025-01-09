import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '../components/Modal';

afterEach(() => {
  cleanup();
});
describe('Modal Component', () => {
  it('shows brewery information when brewery data is available', () => {
    const mockBrewery = {
      name: 'Sample Brewery',
      brewery_type: 'Microbrewery',
      address_1: '123 Main St',
      address_2: 'Suite 101',
      address_3: 'Building A',
      city: 'Some City',
      state_province: 'Some State',
      postal_code: '12345',
      country: 'Some Country',
      latitude: '40.7128',
      longitude: '-74.0060',
      phone: '123-456-7890',
      website_url: 'https://samplebrewery.com',
    };
    const mockOnClose = jest.fn();

    render(<Modal brewery={mockBrewery} onClose={mockOnClose} />);

    expect(screen.getByTestId('modal-brewery-name')).toHaveTextContent('Sample Brewery');

    expect(screen.getByTestId('modal-brewery-type')).toHaveTextContent('Type: Microbrewery');

    expect(screen.getByTestId('modal-brewery-address')).toHaveTextContent('Address: 123 Main St, Suite 101, Building A');

    expect(screen.getByTestId('modal-brewery-location')).toHaveTextContent(
      'Location: Some City, Some State 12345, Some Country'
    );

    expect(screen.getByTestId('modal-brewery-coordinates')).toHaveTextContent('Coordinates: 40.7128, -74.0060');

    expect(screen.getByTestId('modal-brewery-phone')).toHaveTextContent('Phone: 123-456-7890');

    expect(screen.getByTestId('modal-brewery-website')).toHaveAttribute('href', 'https://samplebrewery.com');
  });

  it('shows "Error: Brewery data is not available." when brewery data is missing', () => {
    const mockOnClose = jest.fn();

    render(<Modal brewery={null} onClose={mockOnClose} />);

    expect(screen.getByTestId('modal-error-message')).toHaveTextContent('Error: Brewery data is not available.');

    expect(screen.getByTestId('modal-close-button')).toBeInTheDocument();
  });

  it('shows "No website available" when no website URL is provided', () => {
    const mockBrewery = {
      name: 'Sample Brewery',
      brewery_type: 'Microbrewery',
      address_1: '123 Main St',
      city: 'Some City',
      state_province: 'Some State',
      postal_code: '12345',
      country: 'Some Country',
      latitude: null,
      longitude: null,
      phone: null,
      website_url: null,
    };
    const mockOnClose = jest.fn();

    render(<Modal brewery={mockBrewery} onClose={mockOnClose} />);

    expect(screen.getByTestId('modal-no-website')).toHaveTextContent('No website available');
  });
});

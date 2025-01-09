import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For matchers like toBeInTheDocument
import BreweryCard from '../components/BreweryCard';

afterEach(() => {
  cleanup();
});

describe('BreweryCard Component', () => {
  it('renders all props correctly', () => {
    const mockProps = {
      name: 'Sample Brewery',
      city: 'Sample City',
      state: 'Sample State',
      postal_code: '12345',
      country: 'Sample Country',
      phone: '123-456-7890',
      website: 'https://samplebrewery.com',
    };

    render(<BreweryCard {...mockProps} />);

    expect(screen.getByTestId('brewery-name')).toHaveTextContent('Sample Brewery');
    expect(screen.getByTestId('brewery-location')).toHaveTextContent(
      'Located in Sample City, Sample State 12345, Sample Country'
    );
    expect(screen.getByTestId('brewery-phone')).toHaveTextContent('Phone: 123-456-7890');
    expect(screen.getByTestId('brewery-website')).toHaveAttribute(
      'href',
      'https://samplebrewery.com'
    );
  });

  it('handles missing optional fields', () => {
    const mockProps = {
      name: 'Sample Brewery',
      city: 'Sample City',
      state: 'Sample State',
      postal_code: '12345',
      country: 'Sample Country',
      phone: null,
      website: null,
    };

    render(<BreweryCard {...mockProps} />);

    expect(screen.getByTestId('brewery-name')).toHaveTextContent('Sample Brewery');
    expect(screen.getByTestId('brewery-location')).toHaveTextContent(
      'Located in Sample City, Sample State 12345, Sample Country'
    );
    expect(screen.getByTestId('brewery-phone')).toHaveTextContent('Phone: Not available');
    expect(screen.queryByTestId('brewery-website')).not.toBeInTheDocument();
    expect(screen.getByTestId('brewery-no-website')).toHaveTextContent('No website available');
  });
});

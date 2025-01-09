import { render, screen, fireEvent } from '@testing-library/react';
import BreweryList from '../components/BreweryList';
import { fetchBreweries } from '../services/api'; // Correct import

jest.mock('../services/api'); // Correct mock

describe('BreweryList Component', () => {
  beforeEach(() => {
    fetchBreweries.mockResolvedValue({
      breweries: [
        {
          id: 1,
          name: 'Sample Brewery 1',
          location: 'City 1, State 1, 12345, Country 1',
          phone: 'Not available',
          website: 'https://brewery1.com',
        },
        {
          id: 2,
          name: 'Sample Brewery 2',
          location: 'City 2, State 2, 67890, Country 2',
          phone: 'Not available',
          website: 'https://brewery2.com',
        },
      ],
      totalCount: 2,
    });
  });

  test('renders the list of breweries', async () => {
    render(<BreweryList />);

    const title = await screen.findByTestId('brewery-list-title');
    expect(title).toHaveTextContent('Brewery List');

    const breweryCards = await screen.findAllByTestId('brewery-card');
    expect(breweryCards).toHaveLength(2);
  });

  test('navigates to the next page when the Next button is clicked', async () => {
    render(<BreweryList />);

    const nextButton = await screen.findByTestId('next-page-button');
    fireEvent.click(nextButton);

    const paginationInfo = await screen.findByTestId('pagination-info');
    expect(paginationInfo).toHaveTextContent('Page 1 of 1');

    const breweryCards = await screen.findAllByTestId('brewery-card');
    expect(breweryCards).toHaveLength(2);
  });

  test('disables the "Previous" button on the first page', async () => {
    render(<BreweryList />);

    const previousButton = await screen.findByTestId('previous-page-button');
    expect(previousButton).toBeDisabled();
  });
});
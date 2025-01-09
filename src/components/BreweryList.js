import React, { useState, useEffect } from "react";
import { fetchBreweries } from "../services/api";
import BreweryCard from "../components/BreweryCard";
import Modal from "../components/Modal";

function BreweryList() {
  const [breweries, setBreweries] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedBrewery, setSelectedBrewery] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getBreweries = async () => {
      try {
        const data = await fetchBreweries(currentPage, perPage);
        setBreweries(data.breweries);
        setTotalPages(Math.ceil(data.totalCount / perPage));
      } catch (err) {
        setError(err.message);
      }
    };
    getBreweries();
  }, [currentPage, perPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCardClick = (brewery) => {
    setSelectedBrewery(brewery);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBrewery(null);
  };

  const hasNextPage = currentPage < totalPages;

  return (
    <div className="min-h-screen bg-white bg-cover bg-center bg-no-repeat p-6" data-testid="brewery-list-container">
      <h1 className="text-6xl font-bold text-center mb-10 text-[#4B5945]" data-testid="brewery-list-title">
        Brewery List
      </h1>
      {error && (
        <p className="text-red-500 text-center" data-testid="brewery-list-error">
          {error}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ml-12" data-testid="brewery-cards-container">
        {breweries.map((brewery) => (
          <BreweryCard
            key={brewery.id}
            name={brewery.name}
            city={brewery.city}
            state={brewery.state}
            postal_code={brewery.postal_code}
            country={brewery.country}
            phone={brewery.phone}
            website={brewery.website_url}
            onClick={() => handleCardClick(brewery)}
            data-testid={`brewery-card-${brewery.id}`}
          />
        ))}
      </div>

      <div className="flex justify-center items-center mt-8" data-testid="pagination-controls">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mr-4"
          data-testid="previous-page-button"
        >
          Previous
        </button>
        
        <span className="text-lg text-gray-700 mx-4" data-testid="pagination-info">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={!hasNextPage}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
          data-testid="next-page-button"
        >
          Next
        </button>
      </div>

      {isModalOpen && (
        <Modal brewery={selectedBrewery} onClose={handleCloseModal} data-testid="modal" />
      )}
    </div>
  );
}

export default BreweryList;

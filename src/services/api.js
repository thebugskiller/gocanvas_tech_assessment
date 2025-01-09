export const fetchBreweries = async (page = 1, perPage = 10) => {
  try {
    const response = await fetch(`https://api.openbrewerydb.org/breweries?page=${page}&per_page=${perPage}`);
    if (!response.ok) throw new Error("Failed to fetch breweries");

    const data = await response.json();
    return {
      breweries: data,
      totalCount: 100
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { breweries: [], totalCount: 0 };
  }
};


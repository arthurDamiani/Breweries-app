import api from './api';

export const getBreweries = async (filter: string, page: number) => {
  const endpoint = filter !== '' ? `breweries?by_type=${filter}&page=${page}` : `breweries?page=${page}`;

  try {
    const res = await api.get(endpoint);

    return {
      res,
      success: true,
    };
  } catch (err) {
    throw err;
  }
};

export const getBreweryDetails = async (id: number) => {
  const endpoint = `breweries/${id}`;

  try {
    const res = await api.get(endpoint);

    return {
      res,
      success: true,
    };
  } catch (err) {
    throw err;
  }
};

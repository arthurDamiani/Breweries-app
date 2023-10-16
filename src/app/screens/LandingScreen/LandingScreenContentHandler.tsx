import { useContext, useEffect, useState } from 'react';
import { FilterContext } from '@contexts/FilterContext';
import { getBreweries } from '@services/breweriesService';
import { BreweryItemData } from '@components/BreweryItem';
import { LandingScreenContent } from './LandingScreenContent';

export const LandingScreenContentHandler = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const [breweries, setBreweries] = useState<BreweryItemData[]>([]);
  const [page, setPage] = useState(1);
  const options = [
    'micro',
    'nano',
    'regional',
    'brewpub',
    'large',
    'planning',
    'bar',
    'contract',
    'proprietor',
    'closed',
  ];

  useEffect(() => {
    loadData();
  }, [page, filter]);

  const loadData = async () => {
    const { res, success } = await getBreweries(filter, page);

    if (res.data && success) {
      if (page === 1) {
        setBreweries(res.data);
      } else {
        setBreweries((prev) => [...prev, ...res.data]);
      }
    }
  };

  const handleSelectFilter = (option: string) => {
    setFilter(option);
    setPage(1);
  };

  const fetchMoreData = () => {
    if (page < 3) {
      setPage(page + 1);
    }
  };

  return (
    <LandingScreenContent
      breweries={breweries}
      filter={filter}
      options={options}
      fetchMoreData={fetchMoreData}
      handleSelectFilter={handleSelectFilter}
    />
  );
};

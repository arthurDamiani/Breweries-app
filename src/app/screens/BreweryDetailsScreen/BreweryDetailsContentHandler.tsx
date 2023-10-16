import { useState, useEffect } from 'react';
import { BreweryItemData } from '@components/BreweryItem';
import { useRoute } from '@react-navigation/native';
import { getBreweryDetails } from '@services/breweriesService';
import { BreweryDetailsContent } from './BreweryDetailsContent';

interface BreweryDetailsRouteParams {
  breweryId: number;
}

export const BreweryDetailsContentHandler = () => {
  const { breweryId } = useRoute().params as BreweryDetailsRouteParams;
  const [breweryDetails, setBreweryDetails] = useState<BreweryItemData>({} as BreweryItemData);

  useEffect(() => {
    loadDetails();
  }, []);

  const loadDetails = async () => {
    try {
      const { res, success } = await getBreweryDetails(breweryId);
      if (res.data && success) {
        setBreweryDetails(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return <BreweryDetailsContent breweryDetails={breweryDetails} />;
};

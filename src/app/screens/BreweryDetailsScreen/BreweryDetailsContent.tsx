import { BreweryDetails } from '@components/BreweryDetails';
import { BreweryItemData } from '@components/BreweryItem';
import { Header } from '@components/Header';

interface BreweryDetailsContentProps {
  breweryDetails: BreweryItemData;
}

export const BreweryDetailsContent = ({ breweryDetails }: BreweryDetailsContentProps) => {
  return (
    <>
      <Header />
      {breweryDetails && <BreweryDetails item={breweryDetails} />}
    </>
  );
};

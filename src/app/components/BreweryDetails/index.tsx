import { BreweryItemProps } from '@components/BreweryItem';
import { BreweryDetailsContainer, BreweryDetailsText, BreweryDetailsTitle } from './BreweryDetails.styles';

export const BreweryDetails = ({ item }: BreweryItemProps) => {
  const handleShowInfo = (info?: string) => (info ? info : 'Not provided');

  return (
    <BreweryDetailsContainer>
      <BreweryDetailsTitle>{item.name}</BreweryDetailsTitle>
      <BreweryDetailsText>
        {translate('breweryDetails.type')} {item.brewery_type}
      </BreweryDetailsText>
      <BreweryDetailsText>
        {translate('breweryDetails.street')} {handleShowInfo(item.street)}
      </BreweryDetailsText>
      <BreweryDetailsText>
        {translate('breweryDetails.city')} {handleShowInfo(item.city)}
      </BreweryDetailsText>
      <BreweryDetailsText>
        {translate('breweryDetails.state')} {handleShowInfo(item.state)}
      </BreweryDetailsText>
      <BreweryDetailsText>
        {translate('breweryDetails.postalCode')} {handleShowInfo(item.postal_code)}
      </BreweryDetailsText>
      <BreweryDetailsText>
        {translate('breweryDetails.country')} {handleShowInfo(item.country)}
      </BreweryDetailsText>
      <BreweryDetailsText>
        {translate('breweryDetails.phone')} {handleShowInfo(item.phone)}
      </BreweryDetailsText>
    </BreweryDetailsContainer>
  );
};

import { BreweryItemProps } from '@components/BreweryItem';
import { BreweryDetailsContainer, BreweryDetailsText, BreweryDetailsTitle } from './BreweryDetails.styles';

export const BreweryDetails = ({
  name,
  brewery_type,
  street,
  city,
  state,
  postal_code,
  country,
  phone,
}: BreweryItemProps) => {
  const handleShowInfo = (info?: string) => (info ? info : 'Not provided');

  return (
    <BreweryDetailsContainer>
      <BreweryDetailsTitle>{name}</BreweryDetailsTitle>
      <BreweryDetailsText>Type: {brewery_type}</BreweryDetailsText>
      <BreweryDetailsText>Street: {handleShowInfo(street)}</BreweryDetailsText>
      <BreweryDetailsText>City: {handleShowInfo(city)}</BreweryDetailsText>
      <BreweryDetailsText>State: {handleShowInfo(state)}</BreweryDetailsText>
      <BreweryDetailsText>Postal code: {handleShowInfo(postal_code)}</BreweryDetailsText>
      <BreweryDetailsText>Country: {handleShowInfo(country)}</BreweryDetailsText>
      <p>Phone: {handleShowInfo(phone)}</p>
    </BreweryDetailsContainer>
  );
};

import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BreweryTypesColors } from '@utils/handleBewerieTypes';
import { BreweryItemContainer, BreweryText, BreweryTitle, BreweryType, BreweryTypeText } from './BreweryItem.styles';

export interface BreweryItemProps {
  id?: number;
  name?: string;
  brewery_type: string;
  street?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country?: string;
  phone?: string;
}

export const BreweryItem = ({
  id,
  name,
  street,
  city,
  state,
  country,
  postal_code,
  brewery_type,
}: BreweryItemProps) => {
  const navigation = useNavigation();
  const typeColor = BreweryTypesColors[brewery_type] ?? 'gray';

  const handleGoToDetails = () => {
    console.log('fui');
  };
  return (
    <TouchableOpacity onPress={handleGoToDetails}>
      <BreweryItemContainer>
        <BreweryTitle>{name}</BreweryTitle>
        <View>
          <BreweryText>{street}</BreweryText>
          <BreweryText>
            {city} {state} - {postal_code}
          </BreweryText>
          <BreweryText>{country}</BreweryText>
        </View>
        <BreweryType breweryType={typeColor}>
          <BreweryTypeText>{brewery_type}</BreweryTypeText>
        </BreweryType>
      </BreweryItemContainer>
    </TouchableOpacity>
  );
};

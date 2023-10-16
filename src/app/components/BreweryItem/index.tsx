import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BreweryTypesColors } from '@utils/handleBewerieTypes';
import { BreweryItemContainer, BreweryText, BreweryTitle, BreweryType, BreweryTypeText } from './BreweryItem.styles';

export interface BreweryItemData {
  id: number;
  name?: string;
  brewery_type: string;
  street?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country?: string;
  phone?: string;
}

export interface BreweryItemProps {
  item: BreweryItemData;
}

export const BreweryItem = ({ item }: BreweryItemProps) => {
  const navigation = useNavigation();
  const typeColor = BreweryTypesColors[item.brewery_type] ?? 'gray';

  const handleGoToDetails = () => {
    navigation.navigate('BreweryDetails', { breweryId: item.id });
  };
  return (
    <TouchableOpacity onPress={handleGoToDetails}>
      <BreweryItemContainer>
        <BreweryTitle>{item.name}</BreweryTitle>
        <View>
          <BreweryText>{item.street}</BreweryText>
          <BreweryText>
            {item.city} {item.state} - {item.postal_code}
          </BreweryText>
          <BreweryText>{item.country}</BreweryText>
        </View>
        <BreweryType breweryType={typeColor}>
          <BreweryTypeText>{item.brewery_type}</BreweryTypeText>
        </BreweryType>
      </BreweryItemContainer>
    </TouchableOpacity>
  );
};

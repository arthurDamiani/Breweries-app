import { FlatList, Text } from 'react-native';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { BreweryItem, BreweryItemData } from '@components/BreweryItem';
import { LandingScreenContainerContainer, ListContainer } from './LandingScreen.styles';

interface LandingScreenContentProps {
  breweries: BreweryItemData[];
  filter: string;
  options: string[];
  fetchMoreData: () => void;
  handleSelectFilter: (option: string) => void;
}

export const LandingScreenContent = ({
  breweries,
  filter,
  options,
  fetchMoreData,
  handleSelectFilter,
}: LandingScreenContentProps) => {
  return (
    <LandingScreenContainerContainer>
      <Header />
      <Filter selected={filter} options={options} handleSelectItem={handleSelectFilter} />
      {breweries.length > 0 ? (
        <ListContainer>
          <FlatList
            style={{ width: '100%' }}
            data={breweries}
            onEndReachedThreshold={0.2}
            onEndReached={fetchMoreData}
            renderItem={({ item }: { item: BreweryItemData }) => <BreweryItem item={item} />}
          />
        </ListContainer>
      ) : (
        <Text>{translate('general.notFound')}</Text>
      )}
    </LandingScreenContainerContainer>
  );
};

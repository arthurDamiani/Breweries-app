import { Filter } from '@components/Filter';
import { Text } from 'react-native';

export const LandingScreen = () => {
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
  return <Filter selected='micro' options={options} />;
};

import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  FilterContainer,
  FilterLabel,
  FilterSelectContainer,
  FilterSelectOptionContainer,
  FilterSelectOptionsContainer,
  FilterSelectWithOptionsContainer,
} from './Filter.styles';
import { AntDesign } from '@expo/vector-icons';

export interface FilterProps {
  selected: string;
  options: string[];
  handleSelectItem: (option: string) => void;
}

export const Filter = ({ selected, options, handleSelectItem }: FilterProps) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const icon = showOptions ? 'up' : 'down';

  return (
    <FilterContainer>
      <FilterLabel>{translate('filter.label')}</FilterLabel>
      <FilterSelectWithOptionsContainer>
        <FilterSelectContainer>
          <FilterLabel>{selected !== '' ? selected : translate('filter.select')}</FilterLabel>
          <AntDesign onPress={() => setShowOptions(!showOptions)} name={icon} size={15} color='black' />
        </FilterSelectContainer>
        {showOptions && (
          <FilterSelectOptionsContainer>
            {options.map((option, index) => {
              if (option !== selected) {
                return (
                  <FilterSelectOptionContainer key={`${option}__${index}`}>
                    <TouchableOpacity onPress={() => handleSelectItem(option)}>
                      <FilterLabel>{option}</FilterLabel>
                    </TouchableOpacity>
                  </FilterSelectOptionContainer>
                );
              }
            })}
          </FilterSelectOptionsContainer>
        )}
      </FilterSelectWithOptionsContainer>
    </FilterContainer>
  );
};

import { useState } from 'react';
import {
  FilterContainer,
  FilterLabel,
  FilterSelectContainer,
  FilterSelectOptionContainer,
  FilterSelectOptionsContainer,
} from './Filter.styles';
import { AntDesign } from '@expo/vector-icons';

export interface FilterProps {
  selected: string;
  options: string[];
}

export const Filter = ({ selected, options }: FilterProps) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const icon = showOptions ? 'up' : 'down';
  return (
    <FilterContainer>
      <FilterLabel>Filter:</FilterLabel>
      <FilterSelectContainer>
        <FilterLabel>{selected}</FilterLabel>
        <AntDesign onPress={() => setShowOptions(!showOptions)} name={icon} size={24} color='black' />
      </FilterSelectContainer>
      {showOptions && (
        <FilterSelectOptionsContainer>
          {options.map((option, index) => {
            return (
              <FilterSelectOptionContainer key={`${option}__${index}`}>
                <FilterLabel>{option}</FilterLabel>
              </FilterSelectOptionContainer>
            );
          })}
        </FilterSelectOptionsContainer>
      )}
    </FilterContainer>
  );
};

import styled from 'styled-components/native';

export const FilterContainer = styled.View`
  align-self: flex-start;
  gap: 20px;
  display: flex;
  align-items: center;
`;

export const FilterLabel = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const FilterSelectContainer = styled.View`
  height: 8px;
  width: 30px;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
  flex-direction: row;
  gap: 5px;
`;

export const FilterSelectOptionsContainer = styled.View`
  width: 30px;
`;

export const FilterSelectOptionContainer = styled.View`
  width: 100%;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

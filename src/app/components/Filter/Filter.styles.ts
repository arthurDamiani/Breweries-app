import styled from 'styled-components/native';

export const FilterContainer = styled.View`
  align-self: flex-start;
  gap: 20px;
  display: flex;
  flex-direction: row;
`;

export const FilterLabel = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const FilterSelectWithOptionsContainer = styled.View`
  align-items: center;
`;

export const FilterSelectContainer = styled.View`
  height: 30px;
  width: 130px;
  padding: 0 5px;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FilterSelectOptionsContainer = styled.View`
  width: 130px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
  border-top-width: 0;
`;

export const FilterSelectOptionContainer = styled.View`
  width: 100%;
  justify-content: center;
  padding: 5px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

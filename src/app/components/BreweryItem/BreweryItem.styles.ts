import styled from 'styled-components/native';

export const BreweryItemContainer = styled.View`
  width: 18rem;
  height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
  box-shadow: 1px 1px 1px 1px ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const BreweryTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const BreweryText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const BreweryType = styled.View<{ breweryType: string }>`
  width: 100%;
  height: 15px;
  justify-self: flex-end;
  background-color: ${({ breweryType }) => breweryType};
  border-top: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const BreweryTypeText = styled.Text`
  width: 20px;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.SECONDARY};
  border-radius: 8px;
`;

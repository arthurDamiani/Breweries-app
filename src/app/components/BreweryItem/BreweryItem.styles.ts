import styled from 'styled-components/native';

export const BreweryItemContainer = styled.View`
  width: 200px;
  height: 200px;
  margin: 10px auto 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const BreweryTitle = styled.Text`
  height: 50px;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const BreweryText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const BreweryType = styled.View<{ breweryType: string }>`
  width: 100%;
  height: 30px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  background-color: ${({ breweryType }) => breweryType};
`;

export const BreweryTypeText = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
`;

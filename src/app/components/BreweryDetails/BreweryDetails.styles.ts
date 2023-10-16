import styled from 'styled-components/native';

export const BreweryDetailsContainer = styled.View`
  width: 80%;
  margin: 0 auto;
  padding-left: 10px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const BreweryDetailsTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`;

export const BreweryDetailsText = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

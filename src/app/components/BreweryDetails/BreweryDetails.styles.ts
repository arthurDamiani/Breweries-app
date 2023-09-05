import styled from 'styled-components/native';

export const BreweryDetailsContainer = styled.View`
  width: 80%;
  margin: 0 auto;
  padding-left: 1rem;
  border-radius: ${({ theme }) => theme.COLORS.PRIMARY};
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
  box-shadow: 1px 1px 1px 1px ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const BreweryDetailsTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`;

export const BreweryDetailsText = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

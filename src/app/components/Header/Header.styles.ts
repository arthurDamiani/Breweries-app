import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  color: ${({ theme }) => theme.COLORS.SECONDARY};
  padding: 0 20px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const HeaderText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

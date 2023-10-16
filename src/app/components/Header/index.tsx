import { HeaderContainer, HeaderText, HeaderTitle } from './Header.styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>{translate('general.headerText')}</HeaderTitle>
      <HeaderText>{translate('general.headerDescription')}</HeaderText>
    </HeaderContainer>
  );
};

import { Container } from './styles';


const Button = ({ isAuthenticated, isChatbutton, children, ...rest }) => (
  <Container type="button" isChatbutton {...rest}>
    {children}
  </Container>
);

export default Button;
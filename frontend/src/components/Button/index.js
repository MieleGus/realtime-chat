import { Container } from './styles';


const Button = ({ isChatbutton, children, ...rest }) => (
  <Container type="button" isChatbutton {...rest}>
    {children}
  </Container>
);

export default Button;
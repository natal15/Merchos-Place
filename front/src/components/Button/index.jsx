import Styled from './styles'

const Button = ({ children, ...rest }) => {
  return <Styled.Button {...rest}>{children}</Styled.Button>;
};

export default Button;
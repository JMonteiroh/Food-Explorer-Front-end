import { Container, InputBox } from './styles';

export function Input({icon: Icon, title, ...rest}) {
  return (
    <Container {...rest}>
      <h3>{title}</h3>
      <InputBox>
        {Icon && <Icon size={20} />}
        <input {...rest} />
      </InputBox>
    </Container>
  )
}
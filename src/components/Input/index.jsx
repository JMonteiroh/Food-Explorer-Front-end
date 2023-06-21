import { Container, InputBox } from './styles';

export function Input({hasATitle, icon: Icon, title, ...rest}) {
  return (
    <Container style={hasATitle ? {flexDirection: 'column'} : {flexDirection: 'row'}} {...rest}>
      <h3 style={hasATitle ? null : { position: 'absolute', visibility: 'hidden' }}>{hasATitle ? title : null}</h3>
      <InputBox>
        {Icon && <Icon size={20} />}
        <input {...rest} />
      </InputBox>
    </Container>
  )
}
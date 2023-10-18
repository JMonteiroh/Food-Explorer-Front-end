import { Container } from './styles';

export function ButtonIcon({ icon: Icon, title ,size , ...rest}) {
  return (
    <Container
      type='button'
      {...rest}
    >
      { Icon && <Icon size={size} /> }
      <span>{ title }</span>
    </Container>
  )
}
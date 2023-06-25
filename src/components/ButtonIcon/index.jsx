import { Container } from './styles';

export function ButtonIcon({ icon: Icon, size , ...rest}) {
  return (
    <Container
      type='button'
      {...rest}
    >
    { Icon && <Icon size={size} /> }
    </Container>
  )
}
import { Container } from './styles';

export function ButtonText({ title, isred = false, ...rest}) {
  return (
    <Container
      type='button'
      isred={isred}
      {...rest}
    >
      { title }
    </Container>
  )
}
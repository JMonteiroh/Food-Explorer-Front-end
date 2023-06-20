import { Container } from './styles';

export function ButtonIcon({ image, alt, ...rest}) {
  return (
    <Container
      type='button'
      {...rest}
    >
      <img src={image} alt={alt} />
    </Container>
  )
}
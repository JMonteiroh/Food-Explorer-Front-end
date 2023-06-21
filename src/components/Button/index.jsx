import { useState } from 'react';
import { Container } from './styles';

export function Button({ image, alt, title, loading = false, hasACounter = false, ...rest}) {
  const [ counter, setCounter ] = useState(0)

  return (
    <Container
      type='button'
      disabled={loading}
      {...rest}
    >
      <img src={image} alt={alt} />
      { loading ? 'Carregando...' : title }
      { hasACounter ? `(${counter})` : null }
    </Container>
  )
}
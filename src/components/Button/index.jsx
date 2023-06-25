import { useState } from 'react';
import { Container } from './styles';

export function Button({ icon: Icon, title, size, loading = false, hasACounter = false, ...rest}) {
  const [ counter, setCounter ] = useState(0)

  return (
    <Container
      type='button'
      disabled={loading}
      {...rest}
    >
      { Icon && <Icon size={size} /> }
      { loading ? 'Carregando...' : title }
      { hasACounter ? `(${counter})` : null }
    </Container>
  )
}
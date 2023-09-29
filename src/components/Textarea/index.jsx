import { Container } from './styles';

export function Textarea({ title, ...rest }) {
  return (
    <Container {...rest}>
      <h3>{ title }</h3>
      <textarea {...rest}>
      </textarea>
    </Container>
  )
}
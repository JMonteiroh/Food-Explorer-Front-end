import { AiOutlineUpload } from 'react-icons/ai';
import { Container, InputBox } from './styles';

export function Input({hasATitle, type, icon: Icon, title, ...rest}) {
  return (
    <Container style={hasATitle ? {flexDirection: 'column'} : {flexDirection: 'row'}} {...rest}>
      <h3 style={hasATitle ? null : { position: 'absolute', visibility: 'hidden' }}>{hasATitle ? title : null}</h3>
      <InputBox>
        {type === 'file' ? (
          <div className='inpt-file'>
            <label htmlFor="fileInput">
              <AiOutlineUpload size={24} />
              <span className='inpt-title' >Escolher arquivo</span>
            </label>
            <input id="fileInput" type="file" {...rest} />
          </div>
        ) : (
          <input type="text" {...rest} />
        )}
      </InputBox>
    </Container>
  )
}
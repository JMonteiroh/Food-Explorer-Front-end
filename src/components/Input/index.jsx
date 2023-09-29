import { AiOutlineUpload } from 'react-icons/ai';
import { Container, InputBox } from './styles';

export function Input({ icon: Icon, hasATitle, type, title, ...rest}) {
  return (
    <Container {...rest}>
      <h3>{hasATitle ? title : null}</h3>
      <InputBox className='bg-inpt'>
        {type === 'file' ? (
          <div className='inpt-file'>
            <label htmlFor="fileInput">
              {Icon && <Icon size={20} />} 
              <span className='inpt-title' >Selecionar imagem</span>
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
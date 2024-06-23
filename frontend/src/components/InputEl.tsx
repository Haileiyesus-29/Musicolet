import styled from '@emotion/styled'

const Input = styled.input`
   padding: 4px 1.5rem;
   height: 2.4rem;
   border: 1px solid #ccc;
   min-width: 400px;
   border-radius: 100px;
   &:focus {
      outline: none;
      border-color: #777;
   }
`

interface InputElProps {
   type: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url'
   placeholder?: string
   name: string
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function InputEl(props: InputElProps) {
   return (
      <Input
         type={props.type}
         placeholder={props.placeholder}
         name={props.name}
         onChange={props.onChange}
      />
   )
}
export default InputEl

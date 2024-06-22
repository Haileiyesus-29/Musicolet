import styled from '@emotion/styled'

const Button = styled.button`
   padding: 10px 20px;
   border: none;
   border-radius: 5px;
   background-color: #ff0040;
   color: white;
   cursor: pointer;
   &:hover {
      background-color: #ff0040d5;
   }
`

function ButtonEl({ children }: { children: React.ReactNode }) {
   return <Button>{children}</Button>
}
export default ButtonEl

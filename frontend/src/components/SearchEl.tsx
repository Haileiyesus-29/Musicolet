import styled from '@emotion/styled'

const Search = styled.div`
   margin: auto;
`

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

function SearchEl() {
   return (
      <Search>
         <Input type='search' placeholder='Search...' />
      </Search>
   )
}
export default SearchEl

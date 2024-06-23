import styled from '@emotion/styled'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Wrapper = styled.div`
   max-width: 1400px;
   margin: 0 auto;
   padding: 0 20px;
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
   min-height: 100svh;
   & > main {
      flex-grow: 1;
   }
`

function Layout(): JSX.Element {
   return (
      <Wrapper>
         <Navbar />
         <Outlet />
      </Wrapper>
   )
}

export default Layout

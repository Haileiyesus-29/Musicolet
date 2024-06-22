import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import ButtonEl from '../components/Button'

const Nav = styled.nav`
   padding: 1rem 10px;
   border-bottom: 1px solid #ccc;
   display: flex;
   align-items: center;
`

const NavItem = styled(NavLink)`
   margin-right: 10px;
   text-decoration: none;
   color: #333;
   &.active {
      color: #ff0040;
   }
`

function Navbar() {
   return (
      <Nav>
         <NavItem to='/'>Home</NavItem>
         <NavItem to='/account'>About</NavItem>
         <NavItem to='/musics'>My Musics</NavItem>
         <ButtonEl>Logout</ButtonEl>
      </Nav>
   )
}

export default Navbar

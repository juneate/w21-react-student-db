import React, {useContext} from 'react'
import {Link, useLocation} from 'react-router-dom'
import styled from 'styled-components'
import {UserContext} from 'contexts/user'

const Header = (props) => {

  //const {data} = useContext(UserContext)
  const {pathname} = useLocation()

  return (
    <HeaderSpace>
      <div className="container">
        {/* {
          (data)
            ? <Link to="/user">{data.username}</Link>
            : <Link to="/login">Log-In</Link>
        } */}
        <Sidebar>
          <Logo><span className="material-icons">done</span></Logo>
          <Menu>
            <Item className={(pathname === "/") && `active`} title="Dashboard">
              <LinkIcon to="/"><span className="material-icons">dashboard</span></LinkIcon>
            </Item>
            <Item className={(pathname === "/courses") && `active`} title="Courses">
              <LinkIcon to="/courses"><span className="material-icons">library_books</span></LinkIcon>
            </Item>
            <Item className={(pathname === "/students") && `active`} title="Students">
              <LinkIcon to="/students"><span className="material-icons">supervisor_account</span></LinkIcon>
            </Item>
          </Menu>
        </Sidebar>
      </div>
    </HeaderSpace>
  )
}

const HeaderSpace = styled.header`
  & ~ * {
    padding-left: 5em;
  }
`
const Sidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: 0.5em 0;
  background-color: #333;
  box-shadow: 0.5em 0 1em rgba(0,0,0,0.2);
`
const Logo = styled.div`
  display: grid;
  place-content: center;
  background-color: #b482d1;
  width: 2em;
  height: 2em;
  color: #fff;
  text-align: center;
  margin: 1em auto;
  border-radius: 1em;
  line-height: 1;
  // box-shadow: 0.25em 0.25em 0 #222;
  border: 0.2em solid #fff;
`
const Menu = styled.ul`
  display: grid;
  gap: 0.5em;
  margin: 0;
  padding: 0.5em 0;
  list-style: none;
`
const Item = styled.li`
  display: grid;
  place-content: center;
  width: 4em;
  height: 4em;

  &.active {
    background-image: linear-gradient(90deg, #b482d1, #9c67bc);
    * {
      color: #fff;
    }
  }

  &::after {
    content: attr(title);
    color: #fff;
    font: 0.6em var(--font-heading);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    line-height: 1;
    opacity: 0;
  }
  &.active::after {
    opacity: 1;
  }

  &:hover:not(.active) {
    /* box-shadow: inset 0.25em 0 0 #b482d1; */
    * {
      color: #b482d1
    }
  }
`
const LinkIcon = styled(Link)`
  display: block;
  text-align: center;
  color: #999;
  line-height: 1;
  * {
    font-size: 1.5em;
  }
`

export default Header

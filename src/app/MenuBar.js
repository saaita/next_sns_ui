"use client"
import React from 'react';
import styled from '@emotion/styled';
import { FiHome, FiSearch, FiPlusSquare, FiUser, FiMessageSquare} from 'react-icons/fi';
import { AiOutlineBell  } from "react-icons/ai";

const MenuBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.7);
  height: 60px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
    width:100%;
`;

const MenuIcon = styled.div`
  font-size: 24px;
  color: #555;
  &:hover{
   color: black;
  }
`;

const Iconarea =styled.div`
width:19%;
text-align:center;
position: relative;
&:hover{
    background-color: #eee;
    height:80%;
    line-height:48px;
}
`



const MenuBar = () => {
  return (

   <MenuBarContainer>

    <Iconarea>
        <a href="/home">
          <MenuIcon>
            <FiHome />
          </MenuIcon>
        </a>
    </Iconarea>

    <Iconarea>
    <a href="/search">
      <MenuIcon>
        <FiSearch />
      </MenuIcon>
    </a>
    </Iconarea>
    
    <Iconarea>
    <a href="/plusquare">
      <MenuIcon>
        <FiPlusSquare />
      </MenuIcon>
    </a>
    </Iconarea>

    <Iconarea>
    <a href="/heart">
      <MenuIcon>
      <AiOutlineBell />
      </MenuIcon>
      </a>
      </Iconarea>
      

      <Iconarea>
    <a href="/message">
      <MenuIcon>
      <FiMessageSquare />
      </MenuIcon>
      </a>
      </Iconarea>


    <Iconarea>
    <a href="/user">
      <MenuIcon>
        <FiUser />
      </MenuIcon>
      </a>
    </Iconarea>

    </MenuBarContainer>
  );
};

export default MenuBar;
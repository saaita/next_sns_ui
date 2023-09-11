"use client"
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FiAlignJustify } from 'react-icons/fi';

const HeaderContainer = styled.div`
  
  justify-content: space-around;
  align-items: center;
  position: fixed;
    top: 0;
  left: 0;
  right: 0;
  background-color: #dcc8fa;
  height: 60px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
    width:100%;
    height:80px;
    display:flex;
    justify-content: center;
    z-index:2;
`;
const Logoarea = styled.div`
text-align:center;
font-size:50px;
cursor:pointer;
font-weight:bold;
font-family: 'Roboto', sans-serif;
margin : 0 auto;
padding-left:50px;

    a{
        text-decoration:none;
        color:#ffffff;
        text-align:center;
    }
`
const Menuarea = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  padding-right: 50px;
  &:hover {
    color: #b3b6c4;
  }
`;

const Menu = styled.div`
  position: fixed;
  top: 30;
  right: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
  width: 300px;
  height: 100%;
  background-color: #ffffff;
  transition: right 0.3s ease-in-out;
  z-index:1;
`;

const ToggleButton = styled.div`
  font-size: 30px;
  cursor: pointer;
  padding-top: 23px;
  color:#ffffff;
  
  display:inline-block;
  &:hover{
    color:black;
  }
`;
const TLogoarea = styled.div`
float:right;
font-size: 30px;
margin-right:15px;
margin-top:10px;
font-weight:bold;
display:inline-block;
background-color:#dcc8fa;
width:90%;
text-align:center;
height:100px;
line-height:100px;
color:#929292;
  a{
    color:#ffffff;
    text-decoration:none;
        &:hover{
            color:#b3b6c4;
              }
  }
`

const Togglecontents = styled.div`
color:black;
text-align:right;
margin-top : 10px;
margin-right:80px;
font-size:20px;
font-weight:bold;
color:#a2a2a2;
cursor:pointer;
&:hover{
    color:black;
}
a{
    color:#a2a2a2;
    text-decoration:none;
        &:hover{
            color:black;
        }
}
`
const TogglecontentsArea = styled.div`
margin-top:100px;
`


const MainHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <>
        <HeaderContainer>
          <Logoarea>
            <a href='/home'>임시TestName</a>
          </Logoarea>
          <Menuarea onClick={toggleMenu}>
            <FiAlignJustify />
          </Menuarea>
        </HeaderContainer>

        <Menu isOpen={isMenuOpen}>
    
        

          <TLogoarea>
          <a href='/home'>임시TestName</a>
                </TLogoarea>
                      <TogglecontentsArea>
                     <Togglecontents>
                         <div><a href='/login'>로그인</a></div>
                    </Togglecontents>
                    <Togglecontents>
                    <a href='/search'><div>검색</div></a>
                    </Togglecontents>
                    <Togglecontents>
                         <div>고객센터</div>
                    </Togglecontents>
                    <Togglecontents>
                         <a href='/user'><div>내정보</div></a>
                    </Togglecontents>
                    </TogglecontentsArea>
        </Menu>
      </>
    );
  };
  
  export default MainHeader;
"use client"
import React from 'react';
import styled from '@emotion/styled';
import { FiHome, FiSearch, FiPlusSquare, FiHeart, FiUser } from 'react-icons/fi';
import { AiOutlineUser, AiFillLock } from "react-icons/ai";


const Container = styled.div`
  padding: 20px;
  max-width:800px;
  margin : 0 auto;
  margin-top:80px;
  margin-bottom:50px;
`;

const Loginboxarea = styled.div`
width:100%;
text-align:center;
border:2px solid #dcc8fa;
height:600px;
padding-top:50px;
padding-bottom:50px;
border-radius:10px;
`
const LoginLogoarea = styled.div`
width:100%;
height:150px;
`

const LoginInputarea = styled.div`
margin-top:20px;

    input{
        width:50%;
        height:40px;
        font-size:16px;
    }
    span {
        font-size: 24px;
        margin-right:10px;
        
      }
    button{
        cursor:pointer;
        width:20%;
        height:30px;
        border-radius:5px;
        background-color:white;
        border: 1px solid #a2a2a2;
            &:hover{
                font-weight:bold;
                background-color:#eee;
            }

    }
`
const PwdSearch = styled.div`
margin-top : 20px;
margin-bottom : 30px;
font-size:13px;
    a{
    text-decoration:none;
    color:#a2a2a2; 
        &:hover{
            border-bottom:1px solid #a2a2a2;
        }
    }
`

const SignUparea = styled.div`
padding-top : 20px;
width:50%;
margin : 0 auto;
border-top:1px solid #a2a2a2;

    button{
        cursor:pointer;
        border-radius:5px;
        background-color:#929292;
        border:none;
        width:40%;
        height:30px;
        color:white;
            &:hover{
                background-color:#444444;
            }
    }
`

const Loginarea = () => {
    return (
        <div>
          <Container>
            <Loginboxarea>
                      <LoginLogoarea>
                        <div>TestName</div>
                     </LoginLogoarea>
                           <LoginInputarea>
                                <div>
                                    <span>
                                    <AiOutlineUser />
                                    </span>
                                    <input type="text" placeholder="아이디" />
                                </div>
                            </LoginInputarea>
                            
                            <LoginInputarea>
                                <div>
                                    <span>
                                    <AiFillLock />
                                    </span>
                                    <input type="password" placeholder="비밀번호" />
                                </div>
                            </LoginInputarea>
                            

                            <LoginInputarea>
                                <div><button>로그인</button></div>
                            </LoginInputarea>
                                <PwdSearch>
                                    <div><a href=''>비밀번호를 잊으셨나요?</a></div>
                                </PwdSearch>
                               
                                <SignUparea>
                                <div><a href='/signup'><button>새 계정 만들기</button></a></div>
                                </SignUparea>
                                

            </Loginboxarea>
          </Container>
        </div>
      )
}
export default Loginarea;
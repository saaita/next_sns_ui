"use client"
import React from 'react';
import styled from '@emotion/styled';
import { FiHome, FiSearch, FiPlusSquare, FiHeart, FiUser } from 'react-icons/fi';

const Container = styled.div`
  padding: 20px;
  max-width:800px;
  margin : 0 auto;
  margin-top:80px;
  margin-bottom:50px;
`;

const SignupBoxArea = styled.div`
 text-align:center;
 width:100%;
 height:700px;
 padding-top:50px;
 border:2px solid #dcc8fa;
 border-radius:5px;

    h1{
        margin : 0 auto;
        width:80%;
        padding-bottom:50px;
        border-bottom : 1px solid #929292;
    }
`
const SignupContents = styled.div`
table{
  
   margin : 0 auto;

   padding-bottom : 50px;
        tr {
            color:#323232;
            text-align : left;
            display: block;
            float: left;
            }
}

th, td {
    width:100%;
    display: block;
    margin-top:30px;
}

th:{
margin-top:10px;
}

td{
    margin-left:30px;
    input{
        width:80%;
        font-size:18px;
        border-left-width:0;
        border-right-width:0;
        border-top-width:0;
        border-bottom-width:1;
        margin-left:30px;
        outline:0;
        height:20px;
        
    }
}
`
const ButtonArea = styled.div`
width:80%;
margin : 0 auto;
border-top : 1px solid #929292;
    button{
        cursor:pointer;
        width:30%;
        height:30px;
        margin-top:50px;
        margin-left:10px;
        margin-right:10px;
        background-color:white;
        border-radius:5px;
            &:hover{
                background-color:#eee;
            }
    }
`

const Loginarea = () => {
    return (
        <div>
          <Container>
                <SignupBoxArea>
                    <div><h1>회원가입</h1></div>
                    <SignupContents>
                    <table>
                        <tbody>
                        <tr style={{marginTop:'10px', paddingLeft:'30px'}}>
                            <th>아이디</th>
                            <th>비밀번호</th>
                            <th>비밀번호 확인</th>
                            <th style={{marginTop:'35px'}}>닉네임</th>
                            <th>휴대폰번호</th>
                            <th>이메일</th>
                        </tr>

                        <tr>
                            <td>: <input type='text' /></td>
                            <td>: <input type='password' /></td>
                            <td>: <input type='password' /></td>
                            <td>: <input type='text' /></td>
                            <td>: <input type='text' /></td>
                            <td>: <input type='text' /></td>
                        </tr>
                        </tbody>
                    </table>
                     <ButtonArea>
                        <a href='#'><button>회원가입</button></a>
                        <a href='/login'><button>돌아가기</button></a>
                     </ButtonArea>
                    </SignupContents>

                </SignupBoxArea>
                
               

          </Container>
        </div>
      )
}
export default Loginarea;
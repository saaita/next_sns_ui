"use client"
import "../globals.css";
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FiArrowLeftCircle, FiLogIn, FiPlusCircle, FiSend, FiAlignJustify } from "react-icons/fi";
import { BiMessageAlt } from "react-icons/bi";

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 50px;
`;

const MessageBoxArea = styled.div`
  border-radius:15px;
  border: 1px solid #dcc8fa;
  padding: 20px;
  margin: 0 auto;
  width: 600px;
  height: 700px;
  
`;

const BoxHeadArea = styled.div`
  border-bottom: 1px solid #eee;
  margin: 0 auto;
  width: 100%;
  height: 70px;

  img {
    margin-left: 10px;
    border-radius: 50%;
    border: 3px dotted #929292;
    height: 52px;
    float: left;
  }
`;

const LeftCircleIcon = styled(FiArrowLeftCircle)`
  cursor:pointer;
  font-size: 50px;
  color: #929292;
  background-color: rgba(255, 255, 255, 0.6);
  width: 15%;
  float: left;
    &:hover{
        color:black;
    }
`;

const RightBtnIcon1 = styled(FiLogIn)`
cursor:pointer;
  font-size: 50px;
  color: #929292;
  background-color: rgba(255, 255, 255, 0.6);
  width: 15%;
  float: right;
    &:hover{
        color:black;
    }
`;
const RightMoreBtnIcon = styled(FiAlignJustify)`
cursor:pointer;
  font-size: 50px;
  color: #929292;
  background-color: rgba(255, 255, 255, 0.6);
  width: 15%;
  float: right;
    &:hover{
        color:black;
    }
`;

const HeadText = styled.div`
  float: left;
  width: 41%;
  margin-left: 15px;
   a{
    text-decoration-line: none;
    color:black;
   }
`;

const BoxBodyArea = styled.div`
margin: 0 auto;
    height: 550px;
    overflow-y: auto;
    
`;

const BoxFootArea = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 70px;

  input {
    width: 65%;
    height: 50px;
    border-radius: 15px;
    padding-left: 20px;
    font-size: 18px;
  }
`;


const LeftFootIcon = styled(FiPlusCircle)`
  cursor:pointer;
  font-size: 50px;
  color: #dcc8fa;
  background-color: rgba(255, 255, 255, 0.6);
  width: 15%;
  float: left;
`;

const RightSendIcon = styled(FiSend)`
  cursor:pointer;
  font-size: 50px;
  color: #59bafe;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 1px;
  color: white;
  background-color: #59bafe;
  border: 1px solid #59bafe;
  border-radius: 20px;
  width: 15%;
  float: right;
  height: 50px;
`;
const MoreImgArea = styled.div`
background-color:white;
border-bottom: 1px solid #eee;
border-left:1px solid #eee;
width:25%;
height:100%;
float:left;

text-align:center;
  img{
    width:70%;
    height:100%;
    border-radius:50%;
  }
`
const MoreIconArea = styled.div`
background-color:white;
border-bottom: 1px solid #eee;
width:15%;
float:left;
height:100%;
padding-right:10px; 
`
const MoreMessageTextArea = styled.div`
background-color:white;
border-bottom: 1px solid #eee;
border-right: 1px solid #eee;
width:55%;
height:100%;
float:left;
font-size:18px;
text-align:center;
line-height:45px;
font-weight:bold;
color:#929292;

`

const MessageArea = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  
  const sendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        text: inputValue,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };
  const handleExitConfirmation = () => {
    const confirmExit = window.confirm('채팅방을 나가시겠습니까?');
    if (confirmExit) {
    }
  };
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };

    return (
      <div>
        <Container>
          <MessageBoxArea>
            <BoxHeadArea>
              <a href='./home'><LeftCircleIcon /></a>
              <a href='./user2'><img src="../hongmain.png" alt="Profile" /></a>
              <HeadText>
                <a href='./user2'><div><b>홍길동</b></div></a>
                <div style={{ color: '#929292' }}>LastMessage (time)</div>
              </HeadText>
              <RightMoreBtnIcon onClick={toggleDropdown} />
              <RightBtnIcon1 onClick={handleExitConfirmation} />
            </BoxHeadArea>
  
            <BoxBodyArea>
              {messages.map((message, index) => (
                <div className="message-container" key={index}>
                  <div className="message">
                    <p>{message.text}</p>
                    <small>{message.timestamp}</small>
                  </div>
                </div>
              ))}
              {isDropdownOpen && (
              <div className="dropdown-menu">
                
                  <MoreImgArea>
                    <img src='/homeuser2.png' />
                  </MoreImgArea>
                  <MoreIconArea>
                  <BiMessageAlt className="custom-message-icon" />
                  </MoreIconArea>
                  <MoreMessageTextArea>
                    <a href='./message2'><div>Send Message</div></a>
                  </MoreMessageTextArea>

                  <MoreImgArea>
                    <img src='/homeuser3.png' />
                  </MoreImgArea>
                  <MoreIconArea>
                  <BiMessageAlt className="custom-message-icon" />
                  </MoreIconArea>
                  <MoreMessageTextArea>
                  <a href='./message3'><div>Send Message</div></a>
                  </MoreMessageTextArea>

                  <MoreImgArea>
                    <img src='/homeuser4.png' />
                  </MoreImgArea>
                  <MoreIconArea>
                  <BiMessageAlt className="custom-message-icon" />
                  </MoreIconArea>
                  <MoreMessageTextArea>
                  <a href='./message4'><div>Send Message</div></a>
                  </MoreMessageTextArea>

              </div>
              
            )}
            </BoxBodyArea>
  
            
  
            <BoxFootArea>
              <LeftFootIcon />
              <input
                type='text'
                placeholder='Write a message'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') sendMessage();
                }}
              />
              <RightSendIcon onClick={sendMessage} />
            </BoxFootArea>
          </MessageBoxArea>
        </Container>
      </div>
    );
  };
  
  export default MessageArea;
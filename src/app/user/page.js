"use client"
import React, { useState } from 'react';
import styled from '@emotion/styled';
import MenuBar from '../MenuBar';
const Container = styled.div`
  padding: 20px;
  max-width:800px;
  margin : 0 auto;
  margin-top:80px;
  margin-bottom:50px;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  img{
    width:100%
    height:100%;
    display: flex;
    top: 345px;
    left: 47%;
    max-width: 100px;
    max-height: 100px;
    border-radius: 50%;
    border-style: dotted;
    border : 3px dotted #dcc8fa;
    object-fit: cover;
    position:absolute;
  }
`;


const UserInfo = styled.div`
width:100%;
`;

const Username = styled.h2`
  margin: 0 auto;
  text-align:center;
`;

const Bio = styled.p`
text-align:center;
  margin: 0;
`;

const Stats = styled.div`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StatItem = styled.li`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const StatValue = styled.strong`
  display: block;
`;

const StatLabel = styled.span``;

const EditProfileButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 4px;
  margin-right:10px;
`;

const MessageBtn = styled.button`
background-color: #929292;
border: none;
color: white;
padding: 10px 20px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 10px 0;
cursor: pointer;
border-radius: 4px;
margin-left:10px;
`

const PostTabs = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
`;

const Tab = styled.button`
  padding: 10px;
  font-size: 18px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${(props) => (props.active ? '#000' : '#ccc')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};

  &:hover {
    color: #000;
  }
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const Post = styled.img`
  width: 100%;
  height:100%;
  object-fit: cover;
`;

const UserBackimg = styled.div`
width:100%;
height:300px;
max-height:300px;
background-color:#FEE8FF;
position:relative;
 img{
  z-index: -1;
  width:100%;
  max-height:300px;
 }

`
const Followarea = styled.div`
width:100%;
`

const Followarealeft = styled.div`
width:49%;
float:left;
text-align:center;
font-size:25px;
`

const Followarearight = styled.div`
width:49%;
float:right;
text-align:center;
font-size:25px;
`

const ButtonsArea = styled.div`
width:100%;
text-align:center;
`
const MainPicArea = styled.div`
`
export default function User(){
  const [activeTab, setActiveTab] = useState('posts');

  const handleEditProfile = () => {
    // Implement edit profile logic here
  };
  return (
    <div>
      <Container>
        <UserBackimg>
        
        </UserBackimg>
        <ProfileHeader>
          <MainPicArea>
        <img src='../Thejoeun.png'></img>
        </MainPicArea>
          <UserInfo>

            <Stats>
                <Followarea>

                  <Followarealeft>
              <StatItem>
              <StatLabel>Followers</StatLabel>
                <StatValue>300</StatValue>
             
              </StatItem>
                  </Followarealeft>

                <Followarearight>
              <StatItem>
              <StatLabel>Following</StatLabel>
                <StatValue>200</StatValue>
               
              </StatItem>
              </Followarearight>
                  </Followarea>
              
            </Stats>

            <Username>NAME</Username>
            <Bio>hard cording good</Bio>
            <ButtonsArea>
            <EditProfileButton onClick={handleEditProfile}>
            Following
            </EditProfileButton>

            <MessageBtn>
            Message
            </MessageBtn>

            </ButtonsArea>

          </UserInfo>
        </ProfileHeader>
        <PostTabs>
      <Tab
        active={activeTab === 'posts'}
        onClick={() => setActiveTab('posts')}
      >
        Posts
      </Tab>
      <Tab
        active={activeTab === 'saved'}
        onClick={() => setActiveTab('saved')}
      >
        Saved
      </Tab>
    </PostTabs>
    {activeTab === 'posts' && (
      <Posts>
        {/* Replace the src attribute with the user's actual post image URLs */}
        <Post src="https://via.placeholder.com/300" />
        <Post src="https://via.placeholder.com/300" />
        <Post src="https://via.placeholder.com/300" />
        {/* Add more posts as needed */}
      </Posts>
    )}
    {activeTab === 'saved' && (
      <Posts>
        {/* Replace the src attribute with the user's actual saved post image URLs */}
        <Post src="https://via.placeholder.com/300" />
        <Post src="https://via.placeholder.com/300" />
        <Post src="https://via.placeholder.com/300" />
        {/* Add more saved posts as needed */}
      </Posts>
    )}
  </Container>
  <MenuBar />
</div>
  )
}
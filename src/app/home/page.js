"use client"
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import MenuBar from '../MenuBar';
import { AiOutlineMore, AiOutlineRightCircle, AiOutlineLeftCircle } from "react-icons/ai";


const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 50px;
  border-radius:
`;

const Feed = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 20px 0;
  margin-top: 80px;
  margin-bottom: 50px;
`;

const Post = styled.div`
  background-color: white;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  position: relative;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  border-bottom: 1px solid #efefef;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Username = styled.span`
  font-weight: 600;
    a{
      text-decoration-line: none;
      color:black;
    }
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
`;

const PostActions = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #efefef;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  margin-right: 15px;
  cursor: pointer;
`;



const MoreIconContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative; 
`;

const MoreIcon = styled.div`
  font-size: 25px;
  margin-right: 10px;
  cursor: pointer;
`;

const MoreOptions = styled.div`
  display: ${(props) => (props.showOptions ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #efefef;
  border-radius: 5px;
  margin-top: 10px;
  z-index: 1;
  width: 150px; 
  text-align: center;
    button{
      width:100%;
      height:30px;
      background-color:white;
      border:none;
      cursor:pointer;
        &:hover{
          background-color:#eee;

        }
    }
`;
const MainSlider = styled.div`
width:800px;
height:100px;
img {
  width: 80px;
  height:80px;
  border-radius:50%;
  border:3px dotted #dcc8fa;
}
  
`;


const UserSliderarea = styled.div`
  margin-right:auto;
  display: flex;

`;

const UserContainer = styled.div`
width:100%;
text-align:center;
  a{
    text-decoration-line: none;
    color:black;
  }
`;
const RightCircleIcon = styled(AiOutlineRightCircle)`
  font-size:35px;
  float: right;
  color:#929292;
  cursor:pointer;
    &:hover{
      color:#a77afe;
    }
`;
const LeftCircleIcon = styled(AiOutlineLeftCircle)`
  font-size:35px;
  float: left;
  color:#929292;
  cursor:pointer;
    &:hover{
      color:#a77afe;
    }
`;
const HomeinputArea = styled.div`
width:100%;
padding:5px;
    input{
      width:80%;
      height:30px;
      border-radius:15px;
      padding:3px;
    }
    button{
      cursor:pointer;
      margin-left:5px;
      width:15%;
      height:30px;
      border-radius:15px;
      background-color:white;
        &:hover{
          background-color:#eee;
        }
    }
`

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [showOptions, setShowOptions] = useState({});
  const [showCommentInput, setShowCommentInput] = useState({});

  useEffect(() => {

    const fetchPosts = async () => {
      const dummyPosts = [
        {
          id: 2,
          user: {
            username: '홍길동',
            avatar: '../hongmain.png',
          },
          imageUrl:"https://pbs.twimg.com/profile_images/1616843068073988097/zIJBW1zi_400x400.jpg",
        },
        {
          id: 1,
          user: {
            username: 'user1',
            avatar: '../homeuser1.png',
          },
          imageUrl: '../conimg1.png',
        },
        {
          id: 3,
          user: {
            username: 'user2',
            avatar: '../homeuser4.png',
          },
          imageUrl: 'https://health.chosun.com/site/data/img_dir/2023/04/04/2023040401590_0.jpg',
        },
        {
          id: 4,
          user: {
            username: 'user3',
            avatar: '../homeuser2.png',
          },
          imageUrl: 'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/32E9/image/BA2Qyx3O2oTyEOsXe2ZtE8cRqGk.JPG',
        },
        
      ];

      setPosts(dummyPosts);
    };

    fetchPosts();
  }, []);
  const handleMoreIconClick = (postId) => {
    setShowOptions({ ...showOptions, [postId]: !showOptions[postId] });
  };
  const handleCommentButtonClick = (postId) => {
    setShowCommentInput({ ...showCommentInput, [postId]: true });
  };

  const handleCommentSubmit = (postId) => {
    setShowCommentInput({ ...showCommentInput, [postId]: false });
  };
  return (
    <div>
      <Container>
        <MainSlider>
        
        <UserSliderarea>
            <UserContainer>
                  <div>
                    <img src="../homeuser1.png" alt="메인 슬라이더" />
                  </div>

                  <div>
                    username1
                  </div>
            </UserContainer>

            <UserContainer>
                  <div>
                    <a href='./user2'><img src="../hongmain.png" alt="메인 슬라이더" /></a>
                  </div>

                  <div>
                  <a href='./user2'> 홍길동</a>
                  </div>
            </UserContainer>

            <UserContainer>
                  <div>
                    <img src="../homeuser2.png" alt="메인 슬라이더" />
                  </div>

                  <div>
                    username3
                  </div>
            </UserContainer>

            <UserContainer>
                   <div>
                    <img src="../homeuser3.png" alt="메인 슬라이더" />
                  </div>

                  <div>
                    username4
                  </div>
            </UserContainer>

            <UserContainer>
                  <div>
                    <img src="../homeuser4.png" alt="메인 슬라이더" />
                  </div>

                  <div>
                    username5
                  </div>
                  
            </UserContainer>
          
          </UserSliderarea>
          <LeftCircleIcon />
          <RightCircleIcon />
        </MainSlider>
        <Feed>
          {posts.map((post) => (
            <Post key={post.id}>
              <PostHeader>
                <User>
                  <Avatar src={post.user.avatar} alt={post.user.username} />
                  <Username><a href='./user2'>{post.user.username}</a></Username>
                </User>
                <MoreIconContainer>
                  <MoreIcon onClick={() => handleMoreIconClick(post.id)}>
                    <AiOutlineMore />
                  </MoreIcon>
                  <MoreOptions showOptions={showOptions[post.id]}>
                    <a href='./message'><button>메세지 보내기</button></a>
                    <a href='./user2'><button>상세 정보</button></a>
                  </MoreOptions>
                </MoreIconContainer>
              </PostHeader>
              <PostImage src={post.imageUrl} alt="게시물" />
              <PostActions>
                <ActionButton>❤️</ActionButton>
                <ActionButton onClick={() => handleCommentButtonClick(post.id)}>💬</ActionButton>
                <ActionButton>🔗</ActionButton>
              </PostActions>
              <HomeinputArea>
              {showCommentInput[post.id] && (
                <div>
                  <input type="text" placeholder="댓글을 입력하세요" />
                  <button onClick={() => handleCommentSubmit(post.id)}>댓글쓰기</button>
                </div>
              )}
              </HomeinputArea>
            </Post>
          ))}
        </Feed>
        <MenuBar />
      </Container>
    </div>
  );
}
import React, { useState } from 'react';
import { NavLink as Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { logoutUser } from '../api/AuthAPI';
import { COLORS } from './Colors';
import { GrClose, GrFormDown } from 'react-icons/gr';

const SignMenu = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: end;
  gap: 1rem;
  max-width: 180px;
  min-width: 30%;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  @media screen and (max-width: 850px) {
    width: 20%;
  }
`;

const Avatar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 9px 14px;

  width: 40px;
  height: 40px;

  background: ${COLORS.cyanlight};
  border-radius: 100px;

  @media screen and (max-width: 850px) {
    width: 30px;
    height: 30px;
  }
`;

const SignoutBtn = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  cursor: pointer;
  color: ${COLORS.black};
  text-decoration: none;
  outline: none;
  border: none;
  background-color: transparent;
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

const SmallSignoutBtn = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  cursor: pointer;
  color: ${COLORS.black};
  text-decoration: none;
  outline: none;
  border: none;
  background-color: transparent;
  display: none;
  @media screen and (max-width: 850px) {
    display: flex;
  }
`;

const AvatarText = styled.p`
  color: ${COLORS.cyandark};
  font-weight: 900;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;
  width: 35%;
`;

const SmallLogout = styled.div`
  display: none;
  @media screen and (max-width: 850px) {
    display: flex;
  }
`;

const UsernameText = styled.p`
  color: ${COLORS.greydark};
  font-weight: 900;
  @media screen and (max-width: 400px) {
    display: none;
  }
`;

const SmallMenu = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
  display: none;
  @media screen and (max-width: 850px) {
    display: contents;
    position: absolute;
    hight: 100px;
  }
`;

const SignOutMenu = ({ username, setUsername }) => {
  const navigate = useNavigate();
  console.log('re');
  const handleLogout = () => {
    logoutUser();
    setUsername('');
    navigate('/');
  };

  const [isNavVisible, setNavVisibility] = useState(false);
  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <>
      <SignMenu>
        <UserInfo>
          <Avatar>
            <AvatarText>{username[0]}</AvatarText>
          </Avatar>
          <UsernameText>{username}</UsernameText>
        </UserInfo>
        <SignoutBtn onClick={handleLogout}>sign out →</SignoutBtn>
        <SmallLogout onClick={toggleNav}>
          {isNavVisible ? <GrClose></GrClose> : <GrFormDown></GrFormDown>}
        </SmallLogout>
        {isNavVisible && (
          <SmallMenu>
            <SmallSignoutBtn onClick={handleLogout}>sign out →</SmallSignoutBtn>
          </SmallMenu>
        )}
      </SignMenu>
    </>
  );
};

export default SignOutMenu;

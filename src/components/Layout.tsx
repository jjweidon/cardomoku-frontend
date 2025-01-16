import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './common/Header';

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};

export default Layout; 
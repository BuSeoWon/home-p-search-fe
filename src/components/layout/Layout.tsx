import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <LayoutWrapper>
      <Outlet />
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  min-width: 375px;
  max-width: 800px;
  height: 100vh;
  padding: 20px;
`;

export default Layout;

import styled from 'styled-components';
import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { breakpoint } from './utils/breakpoints';
import { GlobalStyle } from './styles/globalStyles';
import { Home } from './pages/Home';
import { SignIn, SignUp } from './pages/SignIn';
import { Video } from './pages/Video';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';

const Container = styled.div`
  display: flex;
`;
const MainContent = styled.main`
  flex: 7;
  background-color: var(--main-content-bg-color);
  min-height: calc(100vh - var(--navbar-height));
`;
const Wrapper = styled.div`
  max-width: var(--main-content-container-max-width);
  margin-inline: auto;
`;
const Backdrop = styled.div`
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  visibility: hidden;
  opacity: 0;
  z-index: var(--sidebar-backdrop-zindex);
  transition: var(--transition-duration);
  &[data-visible='true'] {
    visibility: visible;
    opacity: 1;
  }
`;
// TODO implement mobile version of NAV
// TODO implement mobile version of SIDEBAR
function App() {
  const location = useLocation();
  const [isDesktopScreen, setIsDesktopScreen] = useState(
    window.matchMedia(`${breakpoint.upXl}`).matches
  );
  const [isSidebarMinified, setIsSidebarMinified] = useState(!isDesktopScreen);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  useEffect(() => {
    let mq = window.matchMedia(`${breakpoint.upXl}`);
    const handleMqChange = e => {
      if (!e.matches) {
        setIsSidebarMinified(true);
      } else if (e.matches) {
        setIsSideBarOpen(false);
      }
      setIsDesktopScreen(e.matches);
    };
    mq.addEventListener('change', handleMqChange);

    return () => mq.removeEventListener('change', handleMqChange);
  }, []);

  return (
    <>
      <GlobalStyle />

      <Navbar
        isDesktopScreen={isDesktopScreen}
        isSidebarMinified={isSidebarMinified}
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
        setIsSidebarMinified={setIsSidebarMinified}
      />

      <Container>
        {location.pathname !== '/video' && (
          <Sidebar isSidebarMinified={isSidebarMinified} />
        )}

        {!isDesktopScreen && (
          <Sidebar
            type="slideIn"
            isSideBarOpen={isSideBarOpen}
            setIsSideBarOpen={setIsSideBarOpen}
          />
        )}
        <MainContent>
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="video" element={<Video />} />
              </Route>
            </Routes>
          </Wrapper>
        </MainContent>
      </Container>
      <Backdrop
        data-visible={isSideBarOpen ? true : false}
        onClick={() => setIsSideBarOpen(false)}
      />
    </>
  );
}

export default App;

import styled from 'styled-components';
import { Routes, Route, useMatch } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { breakpoint } from './utils/breakpoints';
import { GlobalStyle } from './styles/globalStyles';
import Home from './pages/Home';
import { MemoizedSignIn, MemoizedSignUp } from './pages/SignIn';
import Video from './pages/Video';
import { MemoizedNavbar } from './components/layout/Navbar';
import { MemoizedSidebar } from './components/layout/Sidebar';

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

function App() {
  console.log('app rendered');
  const isVideoPage = useMatch('/video');
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

      <MemoizedNavbar
        isDesktopScreen={isDesktopScreen}
        isSidebarMinified={isSidebarMinified}
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
        setIsSidebarMinified={setIsSidebarMinified}
      />

      <Container>
        {!isVideoPage && (
          <MemoizedSidebar isSidebarMinified={isSidebarMinified} />
        )}

        {!isDesktopScreen && (
          <MemoizedSidebar
            type="slideIn"
            isSideBarOpen={isSideBarOpen}
            setIsSideBarOpen={setIsSideBarOpen}
          />
        )}
        <MainContent>
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route index element={<Home type="random" />} />
                <Route path="trends" element={<Home type="trend" />} />
                <Route path="subscriptions" element={<Home type="sub" />} />
                <Route path="signin" element={<MemoizedSignIn />} />
                <Route path="signup" element={<MemoizedSignUp />} />
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

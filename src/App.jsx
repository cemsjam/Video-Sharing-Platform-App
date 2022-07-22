import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
// TODO implement mobile version of NAV
// TODO implement mobile version of SIDEBAR
function App() {
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
        document.body.removeAttribute('overlay');
        setIsSideBarOpen(false);
      }
      setIsDesktopScreen(e.matches);
    };
    mq.addEventListener('change', handleMqChange);

    return () => mq.removeEventListener('change', handleMqChange);
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />

      <Navbar
        isDesktopScreen={isDesktopScreen}
        isSidebarMinified={isSidebarMinified}
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
        setIsSidebarMinified={setIsSidebarMinified}
      />

      <Container>
        <Sidebar isSidebarMinified={isSidebarMinified} />
        {!isDesktopScreen && (
          <Sidebar
            type="slideIn"
            isSideBarOpen={isSideBarOpen}
            setIsSideBarOpen={setIsSideBarOpen}
          />
        )}
        <MainContent>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="video" element={<Video />} />
            </Route>
          </Routes>
        </MainContent>
      </Container>
    </BrowserRouter>
  );
}

export default App;

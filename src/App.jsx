import React from "react";

import styled from "styled-components";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyles";
import { Home } from "./pages/Home";
import { SignIn, SignUp } from "./pages/SignIn";
import { Video } from "./pages/Video";
import { Navbar } from "./components/layout/Navbar";
import { Sidebar } from "./components/layout/Sidebar";

const Container = styled.div`
  display: flex;
`;
const MainContent = styled.main`
  flex: 7;
  background-color: var(--main-content-bg-color);
`;
// TODO implement mobile version of NAV
// TODO implement mobile version of SIDEBAR
function App() {
  const [isSidebarMinified, setIsSidebarMinified] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar
        isSidebarMinified={isSidebarMinified}
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
        setIsSidebarMinified={setIsSidebarMinified}
      />

      <Container>
        <Sidebar isSidebarMinified={isSidebarMinified} />
        <Sidebar type="slideIn" isSideBarOpen={isSideBarOpen} />
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

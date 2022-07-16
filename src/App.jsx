import styled from "styled-components";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyles";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { Video } from "./pages/Video";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";

const Container = styled.div`
  display: flex;
`;
const MainContent = styled.main`
  flex: 7;
  background-color: var(--main-content-bg-color);
`;

function App() {
  const [isSidebarMinified, setIsSidebarMinified] = useState(false);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar
        isSidebarMinified={isSidebarMinified}
        setIsSidebarMinified={setIsSidebarMinified}
      />
      <Container>
        <Sidebar isSidebarMinified={isSidebarMinified} />

        <MainContent>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="video" element={<Video />} />
            </Route>
          </Routes>
        </MainContent>
      </Container>
    </BrowserRouter>
  );
}

export default App;

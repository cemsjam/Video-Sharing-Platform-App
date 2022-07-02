import styled from "styled-components";
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
  background-color: var(--dark-theme-main-content-background-color);
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Sidebar />
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

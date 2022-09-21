import "./App.css";
import { NavBar } from "./components";
import { Home } from "./pages";
import { LayoutContainer } from "./styled-components";

function App() {
  return (
    <>
      <NavBar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </>
  );
}

export default App;

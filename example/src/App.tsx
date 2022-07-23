import { Header } from "./components/header/Header";
import { Body } from "./styles/AppStyles";
import { Footer } from "./components/footer/Footer";
import { Showcase } from "./components/showcaseComponents/Showcase";
import { useWindowMediaQuery } from "./utils/hooks";

function App() {
  const isMobile = useWindowMediaQuery() < 400;

  return (
    <div className="App">
      <Header />

      <Body isMobile={isMobile}>
        <Showcase />
      </Body>
      <Footer />
    </div>
  );
}

export default App;

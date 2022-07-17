import { Header } from "./components/header/Header";
import { Body } from "./styles/AppStyles";
import { Footer } from "./components/footer/Footer";
import { Showcase } from "./components/showcaseComponents/Showcase";

function App() {
  return (
    <div className="App">
      <Header />

      <Body>
        <Showcase />
      </Body>
      <Footer />
    </div>
  );
}

export default App;

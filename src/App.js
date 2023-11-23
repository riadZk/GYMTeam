import  Header  from "./components/header/Header";
import Main from "./components/main/Main";
import About from "./components/main/About";
import Why from "./components/main/Why";
import { Pricing } from "./components/main/Pricing";
import Coaches from "./components/main/Coaches";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Why />
      <Pricing />
      <Coaches />
    </div>
  );
}

export default App;

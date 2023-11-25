import  {Header}  from "./components/header/Header";
import {Main} from "./components/pages/Main";
import {About} from "./components/pages/About";
import { Pricing } from "./components/pages/Pricing";
import {Coaches} from "./components/pages/Coaches";
import {Program} from "./components/program/Program";
import Contact from "./pages/Contact";
import { Route ,Routes} from "react-router-dom";

function App() {
  return (
      <Routes>
      <Header />
      <Main />
      <Program />
      <About />
      <Pricing />
      <Coaches />
          <Route path="/contact" element={Contact} />
      </Routes>
  );
}

export default App;

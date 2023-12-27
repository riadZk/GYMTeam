import React , {useEffect} from "react";
import Header from "./components/header/Header";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import Classes from "./pages/Classes";
// import { Login } from "./components/login/Login";
// import { Register } from "./components/register/Register";
import { Auth } from "./pages/Auth";
import { Context } from "./context/context";
import { Footer } from "./components/footer/Footer";
import Aos from "aos"
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    Aos.init();
  });
  return (
    <Context >
      <div className="App">
      
        {window.location.pathname !== "/auth" && <Header />}

        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>

      <Footer />
    </Context>
  );
}

export default App;
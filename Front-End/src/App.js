import Header from "./components/header/Header";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import Classes from "./pages/Classes";

function App() {
  return (
    <div className="App">
        <Header />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/classes" element={<Classes />} />
      </Routes>
    </div>
  );
}

export default App;

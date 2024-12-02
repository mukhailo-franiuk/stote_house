import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Home } from "./components/pages/home/Home";
import { Contact } from "./components/pages/contact/Contact";
import { Basket } from "./components/pages/basket/Basket";
function App() {
  return (
    <div className="w-full text-gray-800">
      <Router>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="basket" element={<Basket />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

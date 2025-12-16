import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReturnPolicy from "./pages/ReturnPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

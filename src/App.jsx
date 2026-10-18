import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import BoyfriendDetail from "./pages/BoyfriendDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/boys" element={<Home />} />
        <Route path="/boyfriend/:id" element={<BoyfriendDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

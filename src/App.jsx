import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div>
        <Header onSearch={handleSearch} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Home />} />
            <Route path="/video/:videoId" element={<VideoPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

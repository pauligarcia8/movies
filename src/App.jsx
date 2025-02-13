import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import MoviesProvider from "./store/movies-context";
import Gallery from "./components/Gallery";

function App() {
  return (
    <MoviesProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path="/" element={<Gallery category={"popular"} />} />
        <Route path="/top-rated" element={<Gallery category={"top_rated"} />} />
        <Route path="/upcoming" element={<Gallery category={"upcoming"} />} />
        <Route path="/" element={<Gallery category={"favorites"} />} />
        </Routes>
      </BrowserRouter>
    </MoviesProvider>
  );
}

export default App;

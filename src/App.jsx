import Gallery from "./components/Gallery";
import NavBar from "./components/NavBar";
import MoviesProvider from "./store/movies-context";

function App() {

  return (
    <MoviesProvider>
      <NavBar />
      <Gallery />
    </MoviesProvider>
  );
}

export default App;

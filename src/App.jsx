import Gallery from "./components/Gallery";
import MoviesProvider from "./store/movies-context";

function App() {

  return (
    <MoviesProvider>
      <Gallery />
    </MoviesProvider>
  );
}

export default App;

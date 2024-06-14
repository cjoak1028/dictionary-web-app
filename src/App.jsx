import Header from "./components/Header.jsx";
import SearchForm from "./components/SearchForm.jsx";

function App() {
  return (
    <div className="px-6">
      <Header />
      <main>
        <SearchForm />
        Search Output
      </main>
    </div>
  );
}

export default App;

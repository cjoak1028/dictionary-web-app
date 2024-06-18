import Header from "./components/Header.jsx";
import SearchForm from "./components/SearchForm.jsx";
import SearchOutput from "./components/SearchOutput.jsx";

function App() {
  return (
    <div className="px-6">
      <Header />
      <main>
        <SearchForm />
        <SearchOutput />
      </main>
    </div>
  );
}

export default App;

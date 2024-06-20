import Header from "./components/Header.jsx";
import SearchForm from "./components/SearchForm.jsx";
import SearchOutput from "./components/SearchOutput.jsx";

function App() {
  return (
    <div className="p-6 text-on-surface bg-surface">
      <Header />
      <main>
        <SearchForm />
        <SearchOutput />
      </main>
    </div>
  );
}

export default App;

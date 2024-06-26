import Header from "./components/Header.jsx";
import SearchInput from "./components/SearchInput.jsx";
import SearchOutput from "./components/SearchOutput.jsx";

function App() {
  return (
    <div className="p-6 text-on-surface dark:text-on-surface-dark">
      <Header />
      <main>
        <SearchInput />
        <SearchOutput />
      </main>
    </div>
  );
}

export default App;

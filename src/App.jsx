import { createContext, useState } from "react";

import Header from "./components/Header.jsx";
import SearchInput from "./components/SearchInput.jsx";
import SearchOutput from "./components/SearchOutput.jsx";

export const FontContext = createContext(null);

function App() {
  const [font, setFont] = useState("sans");

  return (
    <div
      className={`p-6 text-on-surface dark:text-on-surface-dark font-${font}`}
    >
      <FontContext.Provider value={setFont}>
        <Header />
      </FontContext.Provider>
      <main>
        <SearchInput />
        <SearchOutput />
      </main>
    </div>
  );
}

export default App;

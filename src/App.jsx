import { createContext, useState } from "react";

import Header from "./components/Header.jsx";
import SearchInput from "./components/SearchInput.jsx";
import SearchOutput from "./components/SearchOutput.jsx";

export const FontContext = createContext(null);

function App() {
  const [font, setFont] = useState("sans");

  return (
    <div
      className={`p-6 md:px-10 md:py-14 text-on-surface dark:text-on-surface-dark font-${font} max-w-3xl m-auto`}
    >
      <FontContext.Provider value={{ font, setFont }}>
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

import { useState } from 'react'
import "./App.css";

import Navbar from "./components/navbar/Navbar";

const App: React.FC = () => {

  const[input, setInput] = useState<string>("")
  const[loading, setLoading] = useState<boolean>(false)

  return (
    <>
      <Navbar
        input={input}
        setInput={setInput}
        loading={loading}
        setLoading={setLoading}
      />
    </>
  );
}

export default App;

import './App.css';
import List from "./components/List"
import {useState} from "react"

function App() {
  const [total, setTotal] = useState(0)
  const [languages, setLanguages] = useState(["javascript", "python", "php", "C++"])
  const [newLanguage, setNewLanguage] = useState("")

  const handleInput = (e) => {
    setNewLanguage(() => e.target.value)
  }

  const handleSubmit = () => {
    setLanguages(prev => [...prev, newLanguage])
  }
  return (
    <div className="App">
        <h1>Programming Languages</h1>
        <label for="language">language</label>
        <input name="language" onChange={handleInput} value={newLanguage}/>
        <button onClick={handleSubmit}>SUBMIT</button>
        <h2>TOTAL VOTES: {total}</h2>
        <List languages={languages} setTotal={setTotal}/>
    </div>
  );
}

export default App;

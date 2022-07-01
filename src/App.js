import './App.css';
import List from "./components/List";
import {useState} from "react"

function App() {
  const rawData = ["javascript", "python", "php", "C++"]

  const [languages, setLanguages] = useState(rawData)
  const [total, setTotal] = useState(0)
  const [newLanguage, setNewLanguage] = useState("")
  const [userInput, setUserInput] = useState("")

  const handleChange = (event) => {
    setUserInput(event.target.value)
  }
  const handleClick = () => {
    setLanguages((prev) => {
      return [...prev, userInput]
    })
  }
  
  return (
    <div className="App">
      <section className="center">
        <h1>Programming languages</h1>
        <p>Total votes: {total}</p>
        <h2>Add new language</h2>
        <label htmlFor="language">language</label>
        <input 
          id="language"
          type="text"
          onChange={handleChange}
          value={userInput}
        />
        <button onClick={handleClick}>submit</button>
      </section>
      <List languages={languages} setTotal={setTotal}/>
    </div>
  );
}

export default App;

// {languages: languages}

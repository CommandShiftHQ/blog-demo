import { useState, useContext } from "react"

const Card = ({language, setTotal, index}) => {
    const [votes, setVotes] = useState(0)

    const handleClick = (e) => {
        setVotes(prev => prev + 1)
        setTotal(prev => prev + 1)
    }
    return <div className="card" key={index}>
        <p>{language}</p>
        <p>{votes}</p>
        <button onClick={handleClick}>+</button>
    </div>
}

export default Card
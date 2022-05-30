import PropTypes from "prop-types"
import Card from "./Card"

const List = ({languages, setTotal}) => {
    return (
        <div className="container">
            {languages.map((language, index) => {
                console.log(language)
                return <Card language={language} setTotal={setTotal} index={index}/>
            })}
        </div>
    )
}

List.propTypes = {
    languages: PropTypes.arrayOf(PropTypes.string)
}

export default List
import "./index.css"

function Developer ({name, age, pais}){

    return (
        
        <div className="CardList">

            <div className="Card">
                <p> Dev: {name} </p>
                <p> Age: {age} </p>
                <p> Country: {pais} </p> 
            </div>

        </div>
    )
}

export default Developer;
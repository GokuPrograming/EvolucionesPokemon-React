import '../sass/Card.scss'
// eslint-disable-next-line react/prop-types
const Carta = ({name,img}) => {
    return (
        <div className="card" >
            <p className="card_name" >{name}</p>
            <div className="card_circle"></div>
            <img className="card_img" src={img} alt="pokemonImge" />
        </div>
    )
}

export { Carta }
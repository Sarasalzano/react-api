//creazione del componente. Props viene utilizzato per ricevere dati dall'esterno
export default function ActorsCard(props){
    //destrutturazione per estrapolare proprietà dall'oggetto
    const {actor} = props

    return (
        <div className="card">
            <div className="img-wrapper">
                <img src={actor.image} alt={actor.name} />                
            </div>
            <h4 className="bold">{actor.name}</h4>
            <h4 className="bold">{actor.birth_year}</h4>
            <h4 className="bold">{actor.nationality}</h4>
            <h4 className="bold">{actor.awards}</h4>
            <p>{actor.biography}</p>
        </div>
    );
}
//creazione del componente. Props viene utilizzato per ricevere dati dall'esterno
export default function ActorsCard(props){
    //destrutturazione per estrapolare proprietà dall'oggetto
    const {actor} = props

    return (
        <div className="card">
            <div className="img-wrapper">
                <img src={actor.image} alt={actor.name} />                
            </div>
            <span>{actor.name}</span>
            <span>{actor.birth_year}</span>
            <span>{actor.nationality}</span>
            <span>{actor.awards}</span>
            <span>{actor.biography}</span>
        </div>
    );
}
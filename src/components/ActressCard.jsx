//creazione del componente. Props viene utilizzato per ricevere dati dall'esterno
export default function ActressCard(props){
    //destrutturazione per estrapolare proprietà dall'oggetto
    const {actress} = props

    return (
        <div className="card">
            <div className="img-wrapper">
                <img src={actress.image} alt={actress.name} />                
            </div>
            <h4 className="bold">{actress.name}</h4>
            <h4 className="bold">{actress.birth_year}</h4>
            <h4 className="bold">{actress.nationality}</h4>
            <h4 className="bold">{actress.awards}</h4>
            <p>{actress.biography}</p>
        </div>
    );
}
import { useState, useEffect } from "react";

//creazione del componente
export default function ActorsList(){
//creazione stato degli attori con array vuoto poiché lista verrò aggiornata tramite api
const [Actors, setActors] = useState([]);
//funzione per richiamare dati
function fetchActors() {
    //axios fa richiesta ad api
    axios.get("https://lanciweb.github.io/demo/api/actors/")
    //quando la richiesta funziona allora verranno verranno estrapolati gli oggetti contenenti dati utili
    .then((res) => setActors(res.data))
    //gestione errori. In caso di errori, l'errore verrà stampato
    .catch(error => console.log(error))
    
}


    return(
        <div className="container">
            <div className="row">
                <div className="card"></div>
            </div>
        </div>
    );
}
import { useState, useEffect } from "react";
import ActorsCard from "./ActorsCard.jsx"

//creazione del componente
export default function ActorsList(){
//creazione stato degli attori con array vuoto poiché lista verrò aggiornata tramite api
const [Actors, setActors] = useState([]);

//funzione per richiamare dati
function fetchActors() {
    //axios fa richiesta ad api
    axios.get("https://lanciweb.github.io/demo/api/actors/")
    //quando la richiesta funziona allora verranno verranno estrapolati gli oggetti contenenti dati utili
    .then((res) => {
    setActors(res.data);
    //stampa in console della lista attori da API (milestone 1)
    console.log(res.data);
    })
    //gestione errori. In caso di errori, l'errore verrà stampato
    .catch(error => console.log(error));
};

//useEffect: esegue fetchActors una sola volta
useEffect(() => {
    fetchActors()
}, [])


    return(
        <div className="container">
            <div className="row">
               {/*ciclo l'array Actors e creo una card per ogni attore*/}
               {Actors.map(Actor =>
               <ActorsCard 
               key = {Actor.id}
               //passo tutto il singolo oggetto della variabile Actor al prop
               actor = {Actor} 
               />
                )}
            </div>
        </div>
    );
}
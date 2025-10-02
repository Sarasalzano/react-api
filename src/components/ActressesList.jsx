import { useState, useEffect } from "react";
import ActressCard from "./ActressCard";



//creazione del componente
export default function ActressesList(){
//creazione stato delle attrici con array vuoto poiché lista verrò aggiornata tramite api
const [actresses, setActresses] = useState([]);

//funzione per richiamare dati
function fetchActresses() {
    //axios fa richiesta ad api
    axios.get("https://lanciweb.github.io/demo/api/actresses/")
    //quando la richiesta funziona allora verranno verranno estrapolati gli oggetti contenenti dati utili
    .then((res) => {
    setActresses(res.data);
    //stampa in console della lista attrici da API (milestone 1)
    console.log(res.data);
    })
    //gestione errori. In caso di errori, l'errore verrà stampato
    .catch(error => console.log(error));
};

//useEffect: esegue fetchActors una sola volta
useEffect(() => {
    fetchActresses()
}, [])


    return(
        <div className="container">
            <div className="row">
               {/*ciclo l'array actresses e creo una card per ogni attrice*/}
               {actresses.map(actress =>
               <ActressCard 
               key = {actress.id}
               //passo tutto il singolo oggetto della variabile Actor al prop
               actress = {actress} 
               />
                )}
            </div>
        </div>
    );
}
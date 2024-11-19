/**
 * - Mit der Fetch Funktion senden wir Anfragen (Requests) zum Server
 * um Daten abzurufen (reutrns a Promise-Object)
 * - Sobald die Anfrage erfolgreich verarbeitet wurde (resolve),
 *  erhalten wir ein Response-Objekt
 * - response.json(): um die Daten aus dem Response-Objekt in JSON umzuwandeln
 * - catch(): um Fehler abzufangen, die während der Anfrage auftreten können (reject)
 */

// https://jsonplaceholder.typicode.com/


fetch("people.json")
    .then(response => response.json())
    .then(values => {
        values.forEach(value => console.log(value.name + ' ' + value.bio))
    })
    .catch(error => console.log(error))
    


// fetch("https://jsonplaceholder.typicode.com/comments")
// .then(response => response.json())
// .then(values => {
//     values.forEach(value => console.log(value.name + ' ' + value.email))
// })
// .catch(error => console.log(error))
    
    
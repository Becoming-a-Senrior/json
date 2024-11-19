// JSON ist ein globales Objekt, das Methoden (Funktionen) wie stringify (), parse() verfügt.
// JSON.stringify(): konvertiert Daten in ein JSON-String
// JSON.parse(): wandelt ein String in ein Objekt.

let crew = ["Monkey D. Luffy", "Zorro", "Nami", "Sanji"];

const crewString = JSON.stringify(crew);

//console.log(crew);
//console.log(crewString);

let person = {
    "name" : "Monkey D. Luffy",
    "bio" : null,
    "ist_privat": false,
};

const personString = JSON.stringify(person);

//console.log(person);
//console.log(personString);

const personObject = JSON.parse(personString);
console.log(personObject);
console.log(personString);
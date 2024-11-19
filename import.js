/**
 * - Mit import, können wir:
 * 1- Objekte und Funktionen einlesen, die aus einem anderen Modul exportiert werden.
 * 2- Das Laden von Nicht JS Modulen, wie z.B. JSON Module und CSS Module. 
 * 
 * - Wir müssen das Attribut des script Tags als Modul notieren
 * <script src="import.js" type="module"></script>
 * 
 * Der Pfad muss eine der folgenden drei Möglichkeiten sein:
 * 1- "/": Absoluter Pfad / vollständige Position. (C:\mMustermann\ oder /Users/test/Desktop/json/people.json)
 * 2- "./": Importiert wird vom relativen Pfad der aktuellen `import.js` Datei
 * 3- "../": Importiert wird vom übergeordneten Ordner der aktuellen `import.js` Datei
 * 
 */

import people from './people.json' with {type : 'json'};

console.log(people);
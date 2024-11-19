## 1. Einzelne Werte auslesen
- people[0].name    // Monkey D. Luffy
- people[1].hobbies[0] // trainieren
- people[3].anzahl_der_follower // 300


## 2. JSON Datei mit fetch abrufen

``` javascript
fetch("people.json")
    .then(response => response.json())
    .then(values => console.log(values))
    .catch(error => console.error(error));
```

## 3. JSON Datei mit import auslesen

```html
<script src="index.js" type="module"></script>
```

``` javascript
import people from './people.json' with { type: 'json' };

console.log(people[0].name);
```
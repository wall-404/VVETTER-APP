# Welcome
Die VVetter App ist eine Nativ react mobli app welche mithilfe der [http://www.7timer.info/] API daten darstellt. \
weitere informationen zur API unter [http://www.7timer.info/doc.php?lang=en]

## Installation
### Repository Clonen
`git clone git@github.com:wall-404/VVETTER-APP.git`

in das Verzeichniss Wechseln \
`cd VVETTER-APP/vvetter-app`

### Node expo und Native React Packages Installiren
```
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
npx expo install expo-crypto @react-native-async-storage/async-storag
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants react-native-gesture-handler expo-sensors
npm expo install react-native-vector-icons
```

### Node Package für async
`npx expo install expo-crypto @react-native-async-storage/async-storage`

### Node Package für radio buttons (legacy)
`npm i react-native-radio-buttons-group --save`

### Starten
`npm start`

## Verwendung
### HOME SCREEN
Auf der Home-Page sieht der Benutzer die ausgegebenen Daten von seinem Ort, den er auf der Settings-Page angewählt hat bzw. vorher selbst hinzugefügt hat. \
Man kann nun die Prognose für die nächsten Tage sehen, dies beinhaltet die Temperatur, die Windgeschwindigkeit und ein entsprechendes Icon.  

### LOCATION PAGE
Bei der Location Page, kann der Benutzer neue Orte hinzufügen bzw. Locations (English). Es gibt INPUT Fields. In der realisierten App kann der Benutzer anstatt Region und Kanton, den Breiten und Längengrad des Ortes eingeben. Nachdem er die Daten eingegeben hat, auf den Button gedrückt hat, kommt ein Pop Up das Ihn nochmals fragt, ob er den Ort wirklich hinzufügen will.

### SETTINGS PAGE
Auf dieser Page kann der Benutzer eine Übersicht aller Orte sehen, die einmal auf der Location-Page eingegeben hatte. Mithilfe eines Buttons kann er auswählen, welchen Ort er gerade auf der Home-Page angezeigt bekommen will. 
 
## TECHNISCHE REALISIERUNG und KOMPONENTEN
### HOMESCREEN
Der Startbildschirm der App, der Informationen über das Wetter beim Ort anzeigt und Navigation zu anderen Bildschirmen Locations und Settings ermöglicht.\
Funktionalitäten: \
•	Anzeige von Wetterdaten und Sensorinformationen.\
•	Navigation zu anderen Bildschirmen wie der Locations Page.

### LOCATIONSCREEN
Beschreibung: Ermöglicht dem Benutzer, neue Orte hinzuzufügen mithilfe Input Felder. Er kann direkt den Breitengrad und Längengrad eingeben. \
Funktionalitäten: \
•	Eingabefelder für Ort, Längengrad und Breitengrad. \
•	Ein Button zum Hinzufügen neuer Orte. \
•	Modale Dialoge zur Bestätigung der Aktionen.

### SETTINGSSCREEN
Beschreibung: Hier werden die hinzugefügten Orte verwaltet. Der angewählte Ort mittels Buttons, wird auf der Homepage angezeigt. \
Funktionalitäten:\
•	Anzeige der hinzugefügten Orte. Datenspeicherung.
 
### LOKALE SPEICHERUNG
o	AsyncStorage: Die App verwendet AsyncStorage zur lokalen Speicherung der Orte. Dies ermöglicht es, Daten auch nach dem Schliessen der App zu behalten.
DATENQUELLEN \
o	API-Anfragen: Für die Wetterdaten wird eine Wetter-API verwendet. \
    Wir verwenden die API von http://www.7timer.info/doc.php?lang=en 

### DATENSTRUKTUR
o	Ortsdaten: Die Datenstruktur für die Orte umfasst Felder wie Ort, Längengrad und Breitengrad. Diese werden als JSON-Objekte in AsyncStorage gespeichert.\
### MODALS
In unserer App wird ein Modal verwendet, um den Benutzer zu fragen, ob er einen neuen Ort wirklich hinzufügen möchte. Dies stellt sicher, dass Benutzer ihre Eingaben bestätigen können, bevor die Aktion tatsächlich ausgeführt wird.

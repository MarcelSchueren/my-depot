# my-depot

## Grundidee: 

Der Nutzer der "my-Depot"-App kann Portfolios (entweder als Abbild real existierender Wertpapierportfolios oder als fiktives Musterdepots) anlegen, 
in einer Datenbank persistieren und automatisch zu aktuellen Preisen bewerten lassen. 

Zusätzlich können weitere relevante Informationen (Gewinn / Verlust hinsichtlich der Portfolios / einzelner Positionen, Kennzahlen etc.) aus der App gewonnen werden.  

Ein "Spielmodus", bei dem der Nutzer mit einem festgelegten Betrag an Spielgeld ein Depot anlegen kann und beim Erreichen bestimmter 
Schwellenwerte Spielerfolge erzielt, ist angedacht.

### Backend:
- Spring Boot / Data / Security
- Mongo DB
- Yahoo Finance API
- JUNIT / Mockito / Hemcrest

### Frontend:
- React
- MUI
- Axios

### Deployment:
- Docker
- Heroku

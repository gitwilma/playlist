# Git dokumentation

I denna uppgift har jag använt mig av följande git kommandon:

- git init
- git status
- touch _filnamn_
- git add _filnamn_

* git branch _branchnamn_

* git add .
* git commit -m ”"
* git switch _branchnamn_
* git merge _nytt-branchnamn_

* git push origin _branchnamn_

## Applikationen har tre grenar på GitHub:

main – produktionsklar version

development – utvecklingsbranch

features – används för nya funktioner och testkod

## Hantera merge-konflikter

Om Git upptäcker att samma rader i samma fil ändrats i båda brancherna uppstår en konflikt.  
Det ser t.ex. ut så här i en fil:

```text
<<<<<<< HEAD
Detta är koden i din nuvarande branch
=======
Detta är koden från branchen du försöker merga in
>>>>>>> features

```

#### Så här löser du konflikten:

Gå in i filen där konflikten uppstått.

Redigera så att bara det du vill behålla finns kvar.

Spara filen.

Kör följande kommandon:

- git add /filnamn/
- git commit

Detta markerar konflikten som löst och avslutar mergningen.

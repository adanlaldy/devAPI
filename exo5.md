# Exercice 5

### Partie 1
Cette partie porte sur le fichiers `exo5/library.js`
- Lisez attentivement le contenu des fichiers dans le dossier `exo5`
- Faites un `npm install` puis `npm run test` > Pourquoi le test échoue ?

### Partie 2
Cette partie porte sur le fichier `library.js`

- Ecrivez une méthode qui retourne le livre ayant la meilleure note (`getBestBook`)
  - Essayez de modifier la variable `books` pour avoir 2 livres ayant la même meilleure note, observez le comportement
- Ecrivez une méthode qui permet de retourner la moyenne des notes (`getAverage`)
- Ecrire une nouvelle méthode `addBook_v2()` qui améliore celle déjà présente
  - En quoi celle présente aurait-elle besoin d'être améliorée ?

### Partie 3
- Essayez de rendre "testable" le code de library.js (peut être devriez vous passer à Ecmascript?).
Jest permet de créer des "fonctions simulées" (= mock) et d'espionner certains appels (spy), vous pouvez donc adapter le fichier `library.test.js` pour essayer de mocker certains exports et donc de corriger les tests.
- Quelle philosophie de tests peut-on en déduire ?
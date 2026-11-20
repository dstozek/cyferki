# Kod Koroków — projekt i plan publikacji

## Ustalenia

- Nazwa: **Kod Koroków**.
- Jednoekranowa, polskojęzyczna zagadka dla dzieci; kod `2016` odsłania `LATARNIA`.
- Błędny kod zachęca do kolejnej próby.
- Sukces ma krótką animację i cichy, generowany lokalnie dźwięk.
- Stan resetuje się przy każdym nowym uruchomieniu strony.
- Repozytorium i witryna GitHub Pages mogą być publiczne.

## Wdrożony zakres

- Statyczne `index.html`, `styles.css` i `app.js`, bez npm i procesu budowania.
- Responsywny, przygodowy motyw fantasy z oryginalnymi ilustracjami SVG/CSS.
- Manifest PWA, ikony PNG dla manifestu i iPada, service worker i cache offline.
- README z instrukcją instalacji na iPadzie.

## Publikacja

Publikuj pliki statyczne z katalogu głównego gałęzi `main` przez GitHub Pages. Oczekiwany adres: `https://dstozek.github.io/cyferki/`.

## Ważne ograniczenie

Kod i zdanie są zapisane w JavaScripcie po stronie przeglądarki, więc można je odczytać w źródłach. To rozwiązanie dla zagadki, nie dla ochrony prawdziwych sekretów.

# Kod Koroków

Mała zagadka, wielka przygoda. To statyczna, polskojęzyczna strona z czterocyfrowym kodem i lokalnie syntetyzowanym dźwiękiem odkrycia.

## Podgląd lokalny

Otwórz `index.html` w przeglądarce albo uruchom lokalny serwer statycznych plików z katalogu projektu. Service worker i instalacja PWA wymagają bezpiecznego kontekstu (HTTPS lub localhost).

## Instalacja na iPadzie

1. Otwórz opublikowaną stronę w Safari.
2. Wybierz **Udostępnij** → **Dodaj do ekranu początkowego**.
3. Uruchom aplikację z nowej ikony.

Po pierwszym załadowaniu strona może otworzyć się również bez sieci. Kod jest zapisany po stronie klienta w `app.js`; można go odczytać, więc nie należy używać go do ochrony prawdziwych sekretów.

## Publikacja

GitHub Pages publikuje pliki statyczne z katalogu głównego gałęzi `main`.

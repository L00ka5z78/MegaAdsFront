
dodajemy:
 npm i -D customize-cra react-app-rewire-alias

tworzymy plik tsconfig.paths.json
    i dodajemy ustawienia:

    {
      "compilerOptions": {
        "baseUrl": ".",     <== katalog glowny projektu
        "paths": {
            "types": [
        "../mega-ads-BE/types"  <== sciezka do backendu do katalogu types
      ]
        }
      }
    }


tworzymy
config-overrides.js ze stala zawartoscia:

const {override} = require('customize-cra');
const {aliasDangerous, configPaths} = require('react-app-rewire-alias/lib/aliasDangerous');

module.exports = {
    webpack: override(
        aliasDangerous(configPaths('./tsconfig.paths.json'))
    ),
};  <==== dodawanie sciezek z zewnatrz do naszej aplikacji (tutaj katalog types z BE)

zmieniamy scripts w package.json na:

  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },


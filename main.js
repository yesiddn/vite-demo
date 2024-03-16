import './style.css' // al estar dentro de main.js que a la vez es el punto de entrada de la aplicación, se importa el archivo de estilos globales
// importacion de css modules
import readDocsStyles from './read-docs.module.css'
import imageStyles from './image.module.css'

import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg' // importacion de imagenes
import { setupCounter } from './counter.js'

// importar json files. Uso: JSON.stringify(data) -> muestra todo el contenido del archivo data.json | JSON.stringify(data.user) -> muestra solo el contenido del objeto user
// import data from './data.json'
// de esta forma solo se importa el objeto user
import { user } from './data.json'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo vite" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs" id="read-docs">
      Click on the Vite logo to learn more
    </p>
    <p class="json-data">
      ${JSON.stringify(user)} 
    </p>
  </div>
`

document.querySelector('#read-docs').className = readDocsStyles['read-docs'] // tambien se puede acceder con readDocsStyles.readDocs
// otra forma es con classList: classList.add(readDocsStyles.readDocs)

document.querySelector('.vite').classList.add(imageStyles.img)
document.querySelector('.vanilla').classList.add(imageStyles.img)

setupCounter(document.querySelector('#counter'))
